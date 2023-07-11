import React, { useState } from 'react'
import { auth } from "../../firebase-config";
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import axios from "axios"

import {urlAPI} from '../../Context/DataContext'


export default function RegisterFormParticulier() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [dateNaissance, setDateNaissance] = useState(null)
  const [telephone, setTelephone] = useState("")

  const signUp = (e) => {
    e.preventDefault()

    const newUser = {
      nom: nom,
      prenom: prenom,
      mail: email,
      date_naissance: dateNaissance,
      telephone: telephone
    }

    axios.post(urlAPI+'/api/particulier', newUser)
    .then((response) => {
      console.log(response.data);
      createUserWithEmailAndPassword(auth, email, password)
      navigate('/home/profil')
    })
  }

  return (
    <form className="register-body" onSubmit={(e) => signUp(e)}>
      <input placeholder="Nom" required type="text" className="register-input" 
      onChange={(event) => setNom(event.target.value)}/>
      <input placeholder="Prenom" required type="text" className="register-input" 
      onChange={(event) => setPrenom(event.target.value)}/>

      <input placeholder="Adresse Mail"
        type="mail"
        className="register-input"
        required
        onChange={(event) => setEmail(event.target.value)} />

      <input placeholder="Mot de passe"
        type="password"
        className="register-input"
        required
        minLength={8}
        onChange={(event) => setPassword(event.target.value)} />

      <input placeholder="Date de naissance" required type="date" className="register-input" 
      onChange={(event) => setDateNaissance(event.target.value)}/>

      <input placeholder="Numéro de Téléphone" type="tel" required className="register-input" maxLength={10} 
      onChange={(event) => setTelephone(event.target.value)}/>

      <p className="info-create-account">
        En cliquant sur ce bouton, vous acceptez les <Link to="#">GCU</Link> et les <Link to="#">CGV</Link>
      </p>
      <button type="submit">Créer mon compte</button>
    </form>
  )
}
