import React, {useState, useContext} from 'react'
import { DataContext } from '../../Context/DataContext'
import axios from 'axios'

import './CreationCommuModal.css'

import {url} from '../../Context/DataContext'


export default function CreationCommuModal(props) {

    const { currentUserData } = useContext(DataContext)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const createCommu = () => {
        const newCommu = {
            name: name,
            description: description,
            matricule: generateFrenchLicensePlate(),
            idUser: currentUserData.id
        }
        axios.post(url+'/api/communaute/post', newCommu)
        .then((response) => {
            console.log(response.data);
            window.location.reload()
        })
    }

    function generateFrenchLicensePlate() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
    
        // Générer une lettre aléatoire
        const letter1 = letters.charAt(Math.floor(Math.random() * letters.length));
    
        // Générer une deuxième lettre aléatoire
        const letter2 = letters.charAt(Math.floor(Math.random() * letters.length));
    
        // Générer une troisième lettre aléatoire
        const letter3 = letters.charAt(Math.floor(Math.random() * letters.length));
        const letter4 = letters.charAt(Math.floor(Math.random() * letters.length));
    
        // Générer un nombre aléatoire à 2 chiffres
        const number1 = numbers.charAt(Math.floor(Math.random() * numbers.length));
        const number2 = numbers.charAt(Math.floor(Math.random() * numbers.length));
    
        // Générer un deuxième nombre aléatoire à 2 chiffres
        const number3 = numbers.charAt(Math.floor(Math.random() * numbers.length));
    
        // Créer la plaque d'immatriculation
        const licensePlate = `${letter1}${letter2}-${number1}${number2}${number3}-${letter3}${letter4}`;
    
        // Retourner la plaque d'immatriculation générée
        return licensePlate;
    }

  return (
    <div className='creation-commu-modal'>

        <div className="creation-commu-modal-bg"></div>

        <div className="creation-commu-modal-container">
            <div className="close-creation-commu-modal" onClick={props.toggleModal}></div>
            <h3>Créer ma communauté</h3>
            <input className='creation-commu-input' type="text" placeholder='Nom de la communaute'
                onChange={(event) => setName(event.target.value)} /> <br />
            <textarea className='creation-commu-input' placeholder='Description'
                onChange={(event) => setDescription(event.target.value)}></textarea>
            <button className='creation-commu-edit-validate' onClick={createCommu}>Créer</button>
        </div>
    </div>
        
  )
}
