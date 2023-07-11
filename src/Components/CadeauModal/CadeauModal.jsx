import React, { useContext } from 'react'
import './CadeauModal.css'
import { DataContext } from '../../Context/DataContext'


import CadeauItem from '../CadeauItem/CadeauItem'

import Triste from '../../assets/powinoo-triste.png'

export default function CadeauModal(props) {

  const { getCadeauParUtilisateur, currentUserData } = useContext(DataContext)

  const cadeaux = getCadeauParUtilisateur(currentUserData.id)

  return (
    <div className='cadeau-modal'>

      <div className="cadeau-modal-bg"></div>

      <div className="cadeau-modal-container">
        <div className="close-cadeau-modal" onClick={props.toggleModal}></div>
        <h3>Mes cadeaux</h3>

        <div className="list-cadeau-container">
          {cadeaux ? cadeaux.map((cadeau, index) => (
            <CadeauItem key={index} cadeau={cadeau} />
          )) : (
            <div className='no-cadeau'>
              <img src={Triste} alt='logo POWINOO triste' />
              <p>Vous n'avez pas de cadeaux...</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
