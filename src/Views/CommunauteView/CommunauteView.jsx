import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './CommunauteView.css'

import CardCommunaute from '../../Components/CardCommunaute/CardCommunaute'
import { DataContext } from '../../Context/DataContext'
import CreationCommuModal from '../../Components/CreationCommuModal/CreationCommuModal'

export default function CommunauteView() {

  const { allCommunauteData, currentUserData } = useContext(DataContext)

  const [openCreationCommuModal, setOpenCreationCommuModal] = useState(false)

  const toggleCreationCommuModal = () => {
    setOpenCreationCommuModal(!openCreationCommuModal)
  }

  const [searchQuery, setSearchQuery] = useState("") // Ce que l'utilisateur recherche

  return (
    <>
      <div className='home-body'>
        <h3 className='communaute-titre'>Communautés</h3>

        <div className="commu-recherche">
          <input type="text" placeholder='Rechercher une communauté ...'
            onChange={(event) => setSearchQuery(event.target.value)} />
          {currentUserData.id_communaute ? (
            <Link className='commu-recherche-btn' to={'/home/communaute/' + currentUserData.id_communaute}>Ma Communauté</Link>
          ) : (
            <button className='commu-recherche-btn' onClick={toggleCreationCommuModal}>Créer ma Communauté</button>
          )}
        </div>

        <div className="card-commu-container">

          {allCommunauteData &&
            allCommunauteData.filter(commu =>
              commu.nom.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((commu, index) => (
              <CardCommunaute key={commu.id} commu={commu} />
            ))}
        </div>
      </div>
      {openCreationCommuModal && <CreationCommuModal toggleModal={toggleCreationCommuModal} />}
    </>
  )
}
