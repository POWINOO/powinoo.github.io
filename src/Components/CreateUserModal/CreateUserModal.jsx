import React, { useState } from 'react'
import './CreateUserModal.css'
import { auth } from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios'

import {url} from '../../Context/DataContext'


export default function CreateUserModal(props) {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [dateNaissance, setDateNaissance] = useState("")
    const [telephone, setTelephone] = useState("")

    const createUser = () => {

        const newUser = {
            nom: nom,
            prenom: prenom,
            mail: email,
            date_naissance: dateNaissance,
            telephone: telephone
        }


        // createUserWithEmailAndPassword(auth, email, password)
        axios.post(url+'/api/particulier', newUser)
        .then((response) => {
            console.log(response.data);
        })

    }

    return (
        <div className='create-user-modal'>
            <div className="create-user-modal-bg"></div>
            <form onSubmit={() => createUser} className="create-user-modal-content">
                <div className="create-user-modal-close" onClick={props.toggle}></div>
                <h2 className="create-user-modal-title">Editer mon Profil</h2>

                <input
                    type="text"
                    
                    placeholder='Nom'
                    className='input-create-user'
                    onChange={(event) => setNom(event.target.value)} />
                <input
                    type="text"
                    
                    placeholder='Prenom'
                    className='input-create-user'
                    onChange={(event) => setPrenom(event.target.value)} />
                <input
                    type="mail"
                    
                    placeholder='Adresse Mail'
                    className='input-create-user'
                    onChange={(event) => setEmail(event.target.value)} />
                <input
                    type="text" 
                    placeholder='Mot de passe'
                    className='input-create-user'
                    onChange={(event) => setPassword(event.target.value)} />
                <input
                    type="date"
                    
                    placeholder='Date de naissance'
                    className='input-create-user'
                    onChange={(event) => setDateNaissance(event.target.value)} />
                <input
                    type="text"
                    
                    maxLength={10} placeholder='Telephone'
                    className='input-create-user'
                    onChange={(event) => setTelephone(event.target.value)} />

                <button type='submit' className="create-user-btn">Créer</button>
            </form>
        </div>
    )
}
