import React, { useState, useEffect } from 'react'
import './DemandeAppartenirItem.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Sablier from '../../assets/sablier.svg'
import Check from '../../assets/check.svg'
import Croix from '../../assets/croix.svg'

import {url} from '../../Context/DataContext'


export default function DemandeAppartenirItem({ particulier, commuActive }) {

  const { id } = useParams()
  const [demande, setDemande] = useState({})

  useEffect(() => {
    async function fetchData() {
      await axios.get(url+`/api/demande_appartenir/both/${commuActive ? commuActive.id : id}/${particulier.id}`)
        .then(response => {
          setDemande(response.data[0])
        })
    }

    fetchData()
  }, [])

  const updateDemande = (avis) => {
    var updatedDemande = {
      id_par: demande.particulier_id,
      id_com: demande.communaute_id,
      statue: avis
    }
    axios.put(url+'/api/demande_appartenir/put', updatedDemande)
      .then((response) => {
        console.log(response.data);
        window.location.reload()
      })
  }

  // Fonction pour faire un bon affichage des dates
  function convertDate(dateString) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('fr', options).replace(/,/g, '');
  }

  return (
    <div className='demande-appartenir-item'>
      <img src={particulier.photo_url} alt="Photo de profil" className='da-item-img' />
      <div className="da-item-content">
        <div className="da-item-name">{particulier.prenom} {particulier.nom}</div>
        <div className="da-item-date-create">Demandée le {convertDate(demande.created_at)}</div>
        <div className="da-item-btn-container">
          {demande.statue === null ? (
            <>
              <div className="da-item-accept-btn" onClick={() => updateDemande(true)}>Accepter</div>
              <div className="da-item-reject-btn" onClick={() => updateDemande(false)}>Refuser</div>
            </>
          ) : demande.statue === 1 ? (
            <div className="da-item-date-validate">Validée le {convertDate(demande.updated_at)}</div>
          ) : (
            <div className="da-item-date-refuse">Refusée le {convertDate(demande.created_at)}</div>
          )
          }
        </div>
        <div className={
          demande.statue === 1 ? 'da-item-statue validate-statue' :
            demande.statue === 0 ? 'da-item-statue refuse-statue' :
              'da-item-statue'
        }>
          {demande.statue === null && (
            <img src={Sablier} width={28} height={28} alt="Icone de sablier" />
          )}
          {demande.statue === 1 && (
            <img src={Check} width={28} height={28} alt="Icone de sablier" />
          )}
          {demande.statue === 0 && (
            <img src={Croix} width={28} height={28} alt="Icone de sablier" />
          )}
        </div>
      </div>
    </div>
  )
}
