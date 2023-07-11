import React, {useState} from 'react'

export default function RegisterFormEntreprise() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form className="register-body" >
        <input placeholder="Nom Entreprise" type="text" className="register-input"/>
        <input placeholder="Numero SIREN" maxLength={9} type="text" className="register-input"/>
        <input placeholder="Nom Administrateur" type="text" className="register-input"/>
        <input placeholder="Prenom Administrateur" type="text" className="register-input"/>

        <input 
        placeholder="Adresse Mail Entreprise" 
        type="mail" 
        className="register-input" 
        required
        onChange={(event) => setEmail(event.target.value)} />

        <input 
        placeholder="Mot de passe" 
        type="password" 
        className="register-input" 
        required
        onChange={(event) => setPassword(event.target.value)} />

        <button type="submit">Créer mon compte</button>
    </form>
  )
}
