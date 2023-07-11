import React, { useState, useEffect, useContext } from 'react'
import './CagnotteView.css'

import Billet from '../../assets/billet.png'
import Gift from '../../assets/gift.svg'
import Ticket from '../../assets/ticket.svg'

import CagnotteItem from '../../Components/CagnotteItem/CagnotteItem'

import CadeauModal from '../../Components/CadeauModal/CadeauModal'
import BonAchatModal from '../../Components/BonAchatModal/BonAchatModal'
import CagnotteModal from '../../Components/CagnotteModal/CagnotteModal'

import { DataContext } from '../../Context/DataContext'

export default function CagnotteView() {

  const [openCadeauModal, setOpenCadeauModal] = useState(false)
  const [openCagnotteModal, setOpenCagnotteModal] = useState(false)
  const [openBonAchatModal, setOpenBonAchatModal] = useState(false)
  const [cagnotteTotal, setCagnotteTotal] = useState(0)
  const [cagnottes, setCagnottes] = useState([])
  const [cagnotteActive, setCagnotteActive] = useState({})

  const { getCagnotteParUtilisateur, getCadeauParUtilisateur, currentUserData, getBonAchatParUtilisateur } = useContext(DataContext)

  const toggleBonAchatModal = () => {
    setOpenBonAchatModal(!openBonAchatModal)
  }

  const toggleCadeauModal = () => {
    setOpenCadeauModal(!openCadeauModal)
  }

  const toggleCagnotteModal = (cagnotte) => {
    if (cagnotte) {
      setCagnotteActive(cagnotte)
    }
    setOpenCagnotteModal(!openCagnotteModal)
  }

  useEffect(() => {
    const updateCagnottes = () => {
      setCagnottes(getCagnotteParUtilisateur(currentUserData.id))
      var count = 0
      getCagnotteParUtilisateur(currentUserData.id).forEach(c => {
        count += c.montant
      })
      setCagnotteTotal(count)
    }
  
    updateCagnottes()
  
    // Ajouter getCagnotteParUtilisateur comme dépendance
    const interval = setInterval(updateCagnottes, 1000)
  
    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval)
  }, [getCagnotteParUtilisateur, currentUserData.id])


  return (
    <>
      <div className='home-body'>
        <div className="cagnotte-total">
          <p className="cagnotte-total-libelle">Ma Cagnotte Totale</p>
          <img src={Billet} alt="billet pour la cagnotte totale" />
          <p className="montant-total">{cagnotteTotal} €</p>
        </div>

        <div className="cadeau-btn" onClick={toggleCadeauModal}>
          Voir mes cadeaux
          <img src={Gift} alt="Icone de cadeau" />
          {getCadeauParUtilisateur(currentUserData.id).length > 0 && (
            <div className="cadeau-nb">{getCadeauParUtilisateur(currentUserData.id).length > 9 ? '9+' : `${getCadeauParUtilisateur(currentUserData.id).length}`}</div>
          )}
        </div>

        <div className="bon-achat-btn" onClick={toggleBonAchatModal}>
          Mes Bons d'Achat
          <img src={Ticket} alt="Icone de cadeau" />
          {getBonAchatParUtilisateur(currentUserData.id).length > 0 && (
            <div className="bon-achat-nb">{getBonAchatParUtilisateur(currentUserData.id).length > 9 ? '9+' : `${getBonAchatParUtilisateur(currentUserData.id).length}`}</div>
          )}
        </div>

        <h3 className='autre-cagnotte'>Mes Autres Cagnottes :</h3>

        <div className="cagnotte-container">

          {cagnottes && cagnottes.map((cagnotte, index) => (
              <CagnotteItem key={index} cagnotte={cagnotte} toggleCagnotteModal={() => toggleCagnotteModal(cagnotte)} />
          ))}

        </div>


      </div>
      {openCadeauModal && <CadeauModal toggleModal={toggleCadeauModal} />}
      {(openCagnotteModal && cagnotteActive) && <CagnotteModal toggleModal={toggleCagnotteModal} cagnotte={cagnotteActive} />}
      {openBonAchatModal && <BonAchatModal toggleModal={toggleBonAchatModal} />}

    </>
  )
}
