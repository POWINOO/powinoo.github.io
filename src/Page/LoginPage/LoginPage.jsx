import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { auth } from '../../firebase-config'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'

export default function LoginPage() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    navigate('/')
  }

  const passwordForgot = () => {
    Swal.fire({
      title: 'Quel est votre email ?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Envoyer',
      showLoaderOnConfirm: true,
      preConfirm: (mail) => {
        sendPasswordResetEmail(auth, mail)
          .then(() => {
            console.log("Email de réinitialision de mot de passe envoyé");
            return true
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Email envoyé',
          text: 'Email de réinitialision de mot de passe envoyé'
        })
      }
    })
  }

  return (
    <>
      <div className='login'>

        <h2>Se Connecter</h2>

        <div className="login-container">
          <form className='login-body' onSubmit={(e) => signIn(e)}>

            <input placeholder="Adresse Mail" type="mail" className="register-input" required onChange={(event) => setEmail(event.target.value)} />
            <input placeholder="Mot de passe" type="password" className="register-input" required onChange={(event) => setPassword(event.target.value)} />

            <button type="submit">Se Connecter</button>
            <p className="password-forgot" onClick={passwordForgot}>Mot de passe oublié ?</p>
          </form>
        </div>

        {/* <p className='redirect-account'>Vous n'avez pas de compte ? <br /> <Link to='/register'>Créez-en un !</Link></p> */}
      </div>
      <footer>
        <a href="#">Qui sommes-nous ?</a>
        <a href="#">Contact</a>
        <a href="#">Mentions légales</a>
        <a href="#">Informations</a>
      </footer>
    </>
  )
}
