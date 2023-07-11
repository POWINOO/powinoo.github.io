import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import MainPageModal from '../../Components/MainPageModal/MainPageModal'
import './MainPage.css'
import Swal from 'sweetalert2'

import { DataContext } from '../../Context/DataContext'

export default function MainPage(props) {

  const { currentUser, currentUserData } = useContext(DataContext)

  const getRandomColor = () => {
    return Math.floor(Math.random() * 4) + 1;
  }

  const showSA = () => {
    Swal.fire({
      icon: 'error',
      title: "Visiblement tu n'es pas connecté",
      text: 'Veuillez vous connecter ou créer un compte.'
    })
  }

  return (
    <>
      <div className='main-accueil'>
        <div className="accueil-btn-container">
          <div onClick={() => props.toggleModal(2)} className={"btn-accueil color-" + getRandomColor()}>Pourquoi ?</div>
          <div onClick={() => props.toggleModal(3)} className={"btn-accueil color-" + getRandomColor()}>Comment ça marche</div>
          <div onClick={() => props.toggleModal(4)} className={"btn-accueil color-" + getRandomColor()}>Raison d'être</div>
          <div onClick={() => props.toggleModal(5)} className={"btn-accueil color-" + getRandomColor()}>POWINOO Collecte</div>
        </div>
        <div className="accueil-btn-container">
          <div onClick={() => props.toggleModal(10)} className={"btn-accueil color-" + getRandomColor()}>Entreprises</div>
          
          {currentUser ? (
            <Link to={currentUserData.email !== process.env.REACT_APP_ADMIN_EMAIL ? '/home/cagnotte': '/admin'} className="logo-accueil">
              <div className="logo-img"></div>
              <div className="wave-logo"></div>
            </Link>
          ) : (
            <div onClick={showSA} className="logo-accueil">
              <div className="logo-img"></div>
              <div className="wave-logo"></div>
            </div>
          )}
          <div onClick={() => props.toggleModal(11)} className={"btn-accueil color-" + getRandomColor()}>Bons Plans</div>
        </div>


        <div className="accueil-btn-container">
          <div onClick={() => props.toggleModal(8)} className={"btn-accueil color-" + getRandomColor()}>Mission</div>
          <div onClick={() => props.toggleModal(6)} className={"btn-accueil color-" + getRandomColor()}>POWINOODON</div>
          <div onClick={() => props.toggleModal(7)} className={"btn-accueil color-" + getRandomColor()}>Rejoindre le mouvement</div>
          <div onClick={() => props.toggleModal(9)} className={"btn-accueil color-" + getRandomColor()}>Particuliers</div>
        </div>

        {props.openModal && <MainPageModal texteIndex={props.texteIndex} toggle={props.toggleModal} />}
      </div>
      <footer>
        <p onClick={() => props.toggleModal(12)}>Mentions légales</p>
        <p onClick={() => props.toggleModal(13)}>CGU</p>
        <p>&copy; Copyright 2023 - POWINOO</p>
        <p onClick={() => props.toggleModal(14)}>Partenaire</p>
        <p onClick={() => props.toggleModal(15)}>Contributeur</p>
        <p onClick={() => props.toggleModal(16)}>RGPD</p>
      </footer>
    </>

  )
}
