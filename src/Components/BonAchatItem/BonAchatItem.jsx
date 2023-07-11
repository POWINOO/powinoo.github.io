import React, { useState, useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import { storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import './BonAchatItem.css'
import axios from 'axios'
import Swal from 'sweetalert2';

import IMG from '../../assets/Favicon.png'
import Croix from '../../assets/croix.svg'
import ImportIMG from '../../assets/import.svg'
import Bin from '../../assets/bin.svg'


import {url} from '../../Context/DataContext'


export default function BonAchatItem({ ba, admin }) {

    const [imageUpload, setImageUpload] = useState(null)
    const [previewUrl, setPreviewUrl] = useState('');

    const [commercant, setCommercant] = useState("")
    const [montant, setMontant] = useState(0)
    const [date, setDate] = useState(null)

    const [showUse, setShowUse] = useState(false)
    const [useActiveIndex, setUseActiveIndex] = useState(1)
    const [showEdit, setShowEdit] = useState(false)

    const { allCagnotteData, allAvantageData, allUserData, currentUserData } = useContext(DataContext)

    // Fonction pour avoir un bon affichage de la date
    function formatDate(dateString) {
        const months = [
            'jan', 'fév', 'mars', 'avril', 'mai', 'juin',
            'juil', 'août', 'sept', 'oct', 'nov', 'déc'
        ];

        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;

        return formattedDate;
    }

    const toggleUse = () => {
        if (showEdit) {
            toggleEdit()
        }
        setShowUse(!showUse)
    }

    const toggleEdit = () => {
        if (showUse) {
            toggleUse()
        }
        setShowEdit(!showEdit)
    }

    const deleteBonAchat = () => {
        if (ba.url_facture) {
            const fileRef = ref(storage, ba.url_facture)
            deleteObject(fileRef).then(() => {
                console.log('Le fichier a été supprimé avec succès.');
            })
        }
        axios.delete(url+'/api/bon_achat/' + ba.id)
            .then((response) => {
                console.log(response.data);
                window.location.reload()
            })
    }

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setImageUpload(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl('');
        }
    };

    const updateBonAchat = () => {

        if (!currentUserData.IBAN && !currentUserData.BIC) {
            Swal.fire(
                'ERREUR',
                "Vous n'avez pas renseigné votre IBAN et votre BIC. Modifiez votre compte. ",
                'warning'
            )
            return;
        }

        const imageRef = ref(storage, `bon_achat/${ba.id}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            getDownloadURL(imageRef).then(url => {
                const bonAchatUpdated = {
                    statue: 'en attente de validation',
                    nom_commercant_facture: commercant,
                    montant_facture: montant,
                    date_facture: date,
                    url_facture: url
                }

                axios.put(url+'/api/bon_achat/' + ba.id, bonAchatUpdated)
                    .then(response => {
                        console.log(response.data);
                        window.location.reload()
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
        })
    }

    const cagnotte = allCagnotteData.find(c => c.id === ba.cagnotte_id)
    const avantage = allAvantageData.find(a => a.id === cagnotte.avantage_id)
    const user = allUserData.find(u => u.id === ba.particulier_id)

    const finishBonAchat = (statue) => {
        const bonAchatUpdated = {
            statue: statue,
            nom_commercant_facture: ba.nom_commercant_facture,
            montant_facture: ba.montant_facture,
            date_facture: ba.date_facture,
            url_facture: ba.url_facture
        }
        axios.put(url+'/api/bon_achat/' + ba.id, bonAchatUpdated)
            .then(response => {
                console.log(response.data);
                window.location.reload()
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className={ba.statue === "en attente d'utilisation" ? 'bon-achat-item ba-statue-use-wait' :
            ba.statue === "en attente de validation" ? 'bon-achat-item ba-statue-validate-wait' :
                ba.statue === "validé" ? 'bon-achat-item ba-statue-validate' :
                    'bon-achat-item ba-statue-refuse'
        }>
            <div className='bon-achat-item-container'>
                <div className="bon-achat-item-text">
                    <p className="bon-achat-item-titre">Bon Achat n°{ba.id}</p>
                    <p className="bon-achat-item-titre">{ba.statue}</p>
                    <p className="bon-achat-item-montant">{ba.montant}€ depuis la Cagnotte {avantage.nom_avantage}</p>
                    <p className="bon-achat-item-commercant">Commercant : {ba.nom_commercant} à {ba.localisation}</p>
                    <p className="bon-achat-item-date">créé le {formatDate(ba.created_at)}</p>
                </div>

                <div className="bon-achat-item-btn-container">
                    {ba.statue === "en attente d'utilisation" &&
                        <div className="bon-achat-use-btn" onClick={toggleUse}>
                            {showUse ? <img src={Croix} width={40} height={40} alt="Icone de fermeture" /> : <img src={ImportIMG} alt="Icone de QR Code" />}
                        </div>
                    }
                    <div className="bon-achat-edit-btn" onClick={toggleEdit}>
                        {showEdit ? <img src={Croix} width={40} height={40} alt="Icone de fermeture" /> : <img src={Bin} alt="Icone de modification" />}
                    </div>
                </div>
            </div>

            {showUse && (
                <div className="use-container">
                    {useActiveIndex === 1 && (
                        <>
                            <div className="input-file">
                                <input type="file" name="file-5[]" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" onChange={(event) => handleFileInputChange(event)} />
                                <label htmlFor="file-5">
                                    {previewUrl ? (
                                        <>
                                            <img src={previewUrl} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                            <br />
                                        </>
                                    ) : (
                                        <>
                                            <figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" /></svg></figure>
                                        </>
                                    )}
                                    <span>Photo de la facture</span>
                                </label>
                            </div>
                            {imageUpload && <div onClick={() => setUseActiveIndex(2)} className='bon-achat-use-suivant'>Suivant</div>}
                        </>
                    )}
                    {useActiveIndex === 2 && (
                        <>
                            <input type="text" className="input-edit-bon-achat" placeholder='Nom du commercant'
                                onChange={(event) => { setCommercant(event.target.value) }} />

                            <input type="text" className="input-edit-bon-achat" placeholder='Montant du ticket'
                                onChange={(event) => { setMontant(event.target.value) }} />

                            <input type="date" className="input-edit-bon-achat" placeholder='Date'
                                onChange={(event) => { setDate(event.target.value) }} />

                            <div className="bon-achat-use-btn-container">
                                <div onClick={() => setUseActiveIndex(1)} className='bon-achat-use-suivant'>Précédent</div>
                                {(commercant && montant && date) &&
                                    <div onClick={() => updateBonAchat()} className='bon-achat-use-valider'>Valider</div>
                                }
                            </div>
                        </>
                    )}
                </div>
            )}

            {ba.statue !== "en attente d'utilisation" && (
                <>
                    <div className='bon-achat-item-info-renseigne'>
                        <img src={ba.url_facture} alt="Photo de la facture" />
                        <div style={{ marginLeft: "10px" }}>
                            {admin === true && (
                                <>
                                    <p style={{ fontSize: "14px" }}>IBAN : {user.IBAN}</p>
                                    <p>BIC : {user.BIC}</p>
                                </>
                            )}
                            <p>Nom du commercant : {ba.nom_commercant_facture}</p>
                            <p>Montant : {ba.montant_facture} €</p>
                            <p>Date : {formatDate(ba.date_facture)}</p>
                            {ba.statue === 'validé' && <p style={{ marginTop: "10px", color: "white" }}>Info : Votre bon d'achat a été validé. Un virement vient d'être effectué sur votre compte bancaire. Un délai de réception peut être occassioné par le traitement de votre banque.</p>}
                            {ba.statue === 'refusé' && <p style={{ marginTop: "10px", color: "white" }}>Info : Votre bon d'achat vient d'être refusé par le système. Son montant a été recréditer sur votre cagnotte. <br /> Les raisons de son refus peuvent être multiples. <br />Contactez-nous pour en savoir plus. <br /> Mail : <a style={{color: "white"}} href="mailto:ecrire@powinoo.org">ecrire@powinoo.org</a> <br /> Tel : 066 066 0416</p>}
                        </div>
                    </div>
                    {admin === true && (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className='bon-achat-item-btn-validate' onClick={() => finishBonAchat('validé')}>Valider</div>
                            <div className='bon-achat-item-btn-refuse' onClick={() => finishBonAchat('refusé')}>Refuser</div>
                        </div>
                    )}
                </>
            )}

            {showEdit && (
                <div className="bon-achat-delete-container">
                    <p >En supprimant ce bon d'achat, le montant sera automatiquement reversé sur votre cagnotte.</p>
                    <button onClick={() => deleteBonAchat()}>Supprimer</button>
                </div>
            )}

        </div>
    )
}
