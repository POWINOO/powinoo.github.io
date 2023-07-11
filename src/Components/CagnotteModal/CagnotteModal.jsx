import React, { useState, useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import axios from 'axios'
import './CagnotteModal.css'

import HistoriqueItem from '../HistoriqueItem/HistoriqueItem'

import {url} from '../../Context/DataContext'


export default function CagnotteModal(props) {

    const { allAvantageData, currentUserData, getHistoriqueParCagnotte } = useContext(DataContext)
    const [ongletActive, setOngletActive] = useState(1)
    const [montant, setMontant] = useState(0)
    const [commercant, setCommercant] = useState("")
    const [localisation, setLocalisation] = useState("")

    const handleChangeMontant = (event) => {
        if (parseInt(event.target.value) > props.cagnotte.montant) {
            setMontant(props.cagnotte.montant)
        } else if (parseInt(event.target.value) < 0.01) {
            console.log('test');
            setMontant(0.01)
        } else {
            setMontant(event.target.value)
        }
    }

    const createBonAchat = () => {
        if (!montant) return;
        if (!commercant) return;
        if (!localisation) return;

        const newBonAchat = {
            montant: montant,
            cagnotte_id: props.cagnotte.id,
            nom_commercant: commercant,
            localisation: localisation,
            particulier_id: currentUserData.id
        }

        axios.post(url+'/api/bon_achat', newBonAchat)
            .then((response) => {
                console.log(response.data);
                window.location.reload()
            })
    }

    const avantage = allAvantageData.find(a => a.id === props.cagnotte.avantage_id)

    const historique = getHistoriqueParCagnotte(props.cagnotte.id)

    return (
        <div className='cagnotte-modal'>

            <div className="cagnotte-modal-bg"></div>

            <div className="cagnotte-modal-container">
                <div className="close-cagnotte-modal" onClick={props.toggleModal}></div>

                <div className="cagnotte-modal-header">
                    <div className={ongletActive === 1 ? "modal-onglet mo-active" : "modal-onglet"}
                        onClick={() => setOngletActive(1)}
                    >Informations</div>
                    <div className={ongletActive === 2 ? "modal-onglet mo-active" : "modal-onglet"}
                        onClick={() => setOngletActive(2)}
                    >Historique</div>
                    <div className={ongletActive === 3 ? "modal-onglet mo-active" : "modal-onglet"}
                        onClick={() => setOngletActive(3)}
                    >Créer bon achat</div>
                </div>

                <div className="cagnotte-modal-content">

                    {ongletActive === 1 && (
                        <div className="cagnotte-modal-block">
                            <p className="cagnotte-modal-titre">Informations {avantage.nom_avantage}</p>
                            <p className="cagnotte-modal-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis recusandae unde quis, ullam porro nobis sit enim aliquam rem tempora est beatae totam omnis error consequatur perferendis. Ea tempore non ex vitae libero iusto blanditiis similique incidunt maxime, quibusdam sit error voluptas veniam vel temporibus consectetur pariatur nam fugit dolores id, eum officiis! Deserunt rem inventore laborum quae optio veniam sint iure, saepe enim rerum iusto cumque vitae aperiam unde, aut mollitia amet consectetur, nam doloribus? Cumque unde itaque magni excepturi ipsum recusandae, voluptatem eum eveniet aperiam adipisci sequi omnis ex blanditiis, molestiae atque. Fugiat sapiente reiciendis odit veritatis perferendis.
                            </p>
                        </div>
                    )}
                    {ongletActive === 2 && (
                        <div className="cagnotte-modal-block">
                            <p className="cagnotte-modal-titre">Historiques des Transactions</p>
                            {historique && 
                            historique.sort((a, b) => new Date(b.date_historique) - new Date(a.date_historique)).map((histo, index) => (
                                histo.cagnotte_id === props.cagnotte.id && <HistoriqueItem key={index} histo={histo}/>
                            ))}
                        </div>
                    )}

                    {ongletActive === 3 && (
                        <div className="cagnotte-modal-block">
                            <p className="cagnotte-modal-titre">Créer mon bon d'achat</p>
                            <label htmlFor="montant">Montant</label>
                            <p>Montant Disponibles : {props.cagnotte.montant - montant}€</p>
                            <input type="number"
                            required
                                id='montant'
                                min={0.01}
                                max={props.cagnotte.montant}
                                placeholder={`${props.cagnotte.montant}€ disponibles`}
                                onChange={(event) => handleChangeMontant(event)}
                                value={montant} />
                            <label htmlFor="commercant">Commercant</label>
                            <input type="text" required id='commercant' placeholder='Ex : Fnac'
                            onChange={(event) => setCommercant(event.target.value)} />

                            <label htmlFor="localisation">Localisation</label>
                            <input type="text" id='localisation' placeholder='Ex : Annecy'
                            onChange={(event) => setLocalisation(event.target.value)} />

                            <a className='redirect-maps' href={`https://www.google.com/maps/search/${commercant}+${localisation}/`}
                            target="_blank">Etablissements les plus proche</a>

                            <div className="create-bon" onClick={() => createBonAchat()}>Créer mon bon d'achat</div>
                        </div>
                    )}

                </div>

            </div>

        </div>
    )
}
