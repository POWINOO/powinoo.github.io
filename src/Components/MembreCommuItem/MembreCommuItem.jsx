import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './MembreCommuItem.css'

import Crown from '../../assets/crown.svg'

import Badge1 from '../../assets/badge_Donateur.png'
import Badge2 from '../../assets/badge_Bénéficiaire.png'
import Badge3 from '../../assets/badge_Partenaire.png'
import Badge4 from '../../assets/badge_Bénévole.png'
import Badge5 from '../../assets/badge_Invité.png'
import Badge6 from '../../assets/badge_Adhérent.png'

import { DataContext } from '../../Context/DataContext'

import {urlAPI} from '../../Context/DataContext'


export default function MembreCommuItem(props) {

  const { usersConnected, currentUserData, updateMembreCadeauActive, updateTchatActive, getBadgeParUtilisateur } = useContext(DataContext)

  const { id } = useParams()

  const [openFaireCadeauModal, setOpenFaireCadeauModal] = useState(false)

  var BadgeArray = [Badge1, Badge2, Badge3, Badge4, Badge5, Badge6]

  const toggleFaireCadeauModal = () => {
    setOpenFaireCadeauModal(!openFaireCadeauModal)
  }

  const isConnected = usersConnected.find(user => user.id === props.particulier.id)

  const exclureMembre = () => {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Voulez-vous vraiment exclure ce membre ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0040E2',
      cancelButtonColor: '#DE0009',
      cancelButtonText: 'Non',
      confirmButtonText: "Oui, je l'exclus"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(urlAPI+`/api/deleteAppartient/${parseInt(id)}/${props.particulier.id}`)
          .then(response => {
            console.log(response.data);
            Swal.fire(
              'Membre exclue !',
              'Vous avez bien exclue ce membre',
              'success'
            )
            window.location.reload()
          })
          .catch(error => {
            console.error(error);
          });
      }
    })
  }

  const giftBtnClick = () => {
    updateMembreCadeauActive(props.particulier.id)
    props.toggle()
  }

  return (
    <>
      <div className='membre-commu-item'>
        <img src={props.particulier.photo_url} alt="Photo de profil" className="membre-img" />
        <div>
          <p className="membre-name"> <Link onClick={() => updateTchatActive(props.particulier.id)} to={'/home/tchat'}>{props.particulier.prenom} {props.particulier.nom}</Link></p>
          <div className="membre-badge-container">
            {(props.particulier.id_communaute === parseInt(id) || (props.commuActive && props.particulier.id_communaute === props.commuActive.id)) && <img src={Crown} alt="Icone de couronne" />}
            {getBadgeParUtilisateur(props.particulier.id).map((badge, index) => (
              <div className='membre-badge-item'>
                <img src={BadgeArray[badge.id - 1]} alt="Photo du badge" />
                <p>{badge.nom_badge}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="membre-ml"></div>
        {!props.gestion ? (
          <>
            {props.particulier.id !== currentUserData.id && (
              <div className="membre-gift-btn" onClick={giftBtnClick}></div>
            )}
            <div className={isConnected ? 'membre-is-online online' : 'membre-is-online'}>
            </div>
          </>
        ) : (
          <>
            {props.particulier.id !== currentUserData.id && (
              <div className="membre-exclure" onClick={exclureMembre}></div>
            )}
          </>
        )}
      </div>

    </>
  )
}
