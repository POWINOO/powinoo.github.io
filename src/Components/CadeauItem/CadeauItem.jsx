import React, { useContext } from 'react'
import './CadeauItem.css'
import { DataContext } from '../../Context/DataContext'
import axios from 'axios'

import {url} from '../../Context/DataContext'


export default function CadeauItem({ cadeau }) {

  const { allUserData, allCagnotteData, allAvantageData } = useContext(DataContext)

  const user = allUserData.find(u => u.id === cadeau.sender_id)
  const receiver = allUserData.find(u => u.id === cadeau.receiver_id)
  const cagnotte = allCagnotteData.find(c => c.id === cadeau.cagnotte_id)
  const avantage = allAvantageData.find(a => a.id === cagnotte.avantage_id)

  function formatDate(dateString) {
    const months = [
      'jan', 'fév', 'mars', 'avril', 'mai', 'juin',
      'juil', 'août', 'sept', 'oct', 'nov', 'déc'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  }

  const acceptCadeau = () => {
    axios.put(url+'/api/cadeau', {
      cadeau: cadeau,
      receiver: receiver,
      avantage: avantage
    })
      .then((response) => {
        console.log(response.data);
        window.location.reload()
      })
  }

  return (
    <div className='cadeau-item'>
      <p className="cadeau-name">Cadeau de {user.prenom} {user.nom}</p>
      <p className="cadeau-montant">{cadeau.montant}€ Cagnotte {avantage.nom_avantage}</p>
      <p className="cadeau-date">Envoyé le : {formatDate(cadeau.timestamp)}</p>
      <p className="cadeau-message">Message : {cadeau.message}</p>
      <div className="cadeau-accept" onClick={acceptCadeau} >Recevoir le cadeau</div>
    </div>
  )
}
