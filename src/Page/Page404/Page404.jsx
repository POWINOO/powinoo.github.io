import React from 'react'
import { Link } from 'react-router-dom'
import './Page404.css'

import Triste from '../../assets/powinoo-triste.png'

export default function Page404() {
  return (
    <div className='page-404'>

        <img src={Triste} alt="" className="logo-triste" />
        <h1>Cette page n'existe pas...</h1>
        <Link className='back-accueil' to='/'>Retourner à l'accueil</Link>
        
        <footer>
          <a href="#">Qui sommes-nous ?</a>
          <a href="#">Contact</a>
          <a href="#">Mentions légales</a>
          <a href="#">Informations</a>
        </footer>
    </div>
  )
}
