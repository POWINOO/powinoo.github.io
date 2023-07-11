import React, { useState, useEffect, useContext } from 'react'
import './FaireCadeauModal.css'
import axios from 'axios'

import {urlAPI} from '../../Context/DataContext'


import { DataContext } from '../../Context/DataContext'

export default function FaireCadeauModal(props) {


  const { getCagnotteParUtilisateur, currentUser, currentUserData, allUserData, allAvantageData, MembreCadeauActive } = useContext(DataContext)

  const user = allUserData.find(u => u.id === MembreCadeauActive)

  const cagnottes = getCagnotteParUtilisateur(currentUserData.id)
  const [newMontant, SetNewMontant] = useState(0)
  const [newCagnotte, setNewCagnotte] = useState(cagnottes[0].id)
  const [newMessage, setNewMessage] = useState('')
  const [montantMax, setMontantMax] = useState(cagnottes[0].montant)

  const updateMontant = (event) => {
    if (event.target.value > montantMax) {
      SetNewMontant(montantMax)
    } else {
      SetNewMontant(event.target.value)
    }
  }

  useEffect(() => {
    setMontantMax(cagnottes.find(c => c.id === parseInt(newCagnotte)).montant)
  }, [newCagnotte, cagnottes])

  const sendCadeau = () => {
    const newCadeau = {
      sender_id: currentUserData.id,
      receiver_id: MembreCadeauActive,
      cagnotte_id: newCagnotte,
      montant: newMontant > montantMax ? montantMax : newMontant,
      message: newMessage
    }

    console.log(newCadeau);

    axios.post(urlAPI+'/api/cadeau', newCadeau)
    .then((response) => {
      console.log(response.data);
      window.location.reload()
    })
  }

  return (
    <div className='faire-cadeau-modal'>

      <div className="faire-cadeau-modal-bg"></div>

      <div className="faire-cadeau-modal-container">
        <div className="close-faire-cadeau-modal" onClick={props.toggle}></div>
        <h3>Faire un Cadeau</h3>
        <h4>à {user.prenom} {user.nom}</h4>
        <p>Cagnotte</p>
        <select onChange={(event) => setNewCagnotte(event.target.value)}>
          {cagnottes.map((cagnotte, index) => (
            <option key={index} value={cagnotte.id}>{allAvantageData.find(a => a.id === cagnotte.avantage_id).nom_avantage}</option>
          ))}
        </select>
        <p>Montant</p>
        <input type="number" placeholder={`${montantMax}€ disponibles`} max={montantMax} onChange={(event) => updateMontant(event)} />
        <textarea type="text" placeholder='Message...' maxLength={200} onChange={(event) => setNewMessage(event.target.value)} />
        <div className='send-cadeau-btn' onClick={sendCadeau}>Envoyer le Cadeau</div>
      </div>

    </div>
  )
}
