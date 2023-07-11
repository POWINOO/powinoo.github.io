import React, { useState, useContext } from 'react'
import './EditProfilModal.css'
import { storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { DataContext } from '../../Context/DataContext'
import axios from 'axios';

import Loader from '../../assets/loader.gif'

import {urlAPI} from '../../Context/DataContext'


export default function EditProfilModal(props) {

    const { currentUserData } = useContext(DataContext)

    const [imageUpload, setImageUpload] = useState(null)
    const [previewUrl, setPreviewUrl] = useState('');

    const [isLoading, setIsLoading] = useState(false)

    const [newNom, setNewNom] = useState("")
    const [newPrenom, setNewPrenom] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newDateNaissance, setNewDateNaissance] = useState("")
    const [newTelephone, setNewTelephone] = useState("")
    const [newIBAN, setNewIBAN] = useState("")
    const [newBIC, setNewBIC] = useState("")

    const updateProfil = () => {
        setIsLoading(true)
        console.log("ici");
        if (!imageUpload) {
            const profilUpdated = {
                nom: newNom,
                prenom: newPrenom,
                email: newEmail,
                date: newDateNaissance,
                tel: newTelephone,
                url: null,
                iban : newIBAN,
                bic: newBIC
            }

            axios.put(urlAPI+`/api/particulier/put/${props.user ? props.user.id : currentUserData.id}`, profilUpdated)
                .then(response => {
                    console.log(response.data);
                    window.location.reload()
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            const imageRef = ref(storage, `particulier/${props.user ? props.user.id : currentUserData.id}`);
            uploadBytes(imageRef, imageUpload).then(() => {
                getDownloadURL(imageRef).then(url => {
                    const profilUpdated = {
                        nom: newNom,
                        prenom: newPrenom,
                        email: newEmail,
                        date: newDateNaissance,
                        tel: newTelephone,
                        url: url
                    }

                    axios.put(urlAPI+`/api/particulier/put/${props.user ? props.user.id : currentUserData.id}`, profilUpdated)
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

    return (
        <div className='edit-profil-modal'>

            <div className="edit-profil-modal-bg"></div>
            <div className="edit-profil-modal-content">
                <div className="edit-profil-modal-close" onClick={props.toggle}></div>
                <h2 className="edit-profil-modal-title">Editer mon Profil</h2>

                {isLoading ? (
                    <img className='loader' src={Loader} alt="Animation loader en attente" />
                )
                    : (
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
                                    <span>Photo de profil</span>
                                </label>
                            </div>

                            <input type="text" className="input-edit-profil" placeholder='Nom'
                                onChange={(event) => setNewNom(event.target.value)} />

                            <input type="text" className="input-edit-profil" placeholder='Prenom'
                                onChange={(event) => setNewPrenom(event.target.value)} />

                            <input type="text" className="input-edit-profil" placeholder='Adresse Mail'
                                onChange={(event) => setNewEmail(event.target.value)} />

                            <input type="date" className="input-edit-profil" placeholder='Date de naissance'
                                onChange={(event) => setNewDateNaissance(event.target.value)} />

                            <input type="text" maxLength={10} className="input-edit-profil" placeholder='Num Telephone'
                                onChange={(event) => setNewTelephone(event.target.value)} />

                            <input type="text" maxLength={27} className="input-edit-profil" placeholder='IBAN'
                                onChange={(event) => setNewIBAN(event.target.value)} />

                            <input type="text" maxLength={11} className="input-edit-profil" placeholder='BIC'
                                onChange={(event) => setNewBIC(event.target.value)} />

                            <button className='edit-profil-btn' onClick={updateProfil}>Modifier</button>
                        </>
                    )}
            </div>

        </div>
    )
}
