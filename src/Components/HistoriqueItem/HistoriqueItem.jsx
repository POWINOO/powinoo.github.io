import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext';
import './HistoriqueItem.css'

import Gift from '../../assets/gift.svg'
import Ticket from '../../assets/ticket.svg'

export default function HistoriqueItem({ histo }) {

  const { allUserData } = useContext(DataContext)

  // Fonction pour avoir un bon affichage de la date
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

  const particulier = allUserData.find(p => p.id === histo.particulier_id)

  return (
    <div className={histo.montant > 0 ? 'historique-item positif' : 'historique-item'}>
      <div className="historique-main-info">
        <p> 
          {histo.type === 'cadeau' ? <img src={Gift} alt="Icone Cadeau" /> : <img src={Ticket} alt="Icone Ticket" />}
          Transaction du {formatDate(histo.date_historique)}</p>
        <p>{histo.montant > 0 && '+'}{histo.montant}€</p>
      </div>
      <div className="historique-plus-info">
        {histo.type === 'cadeau' &&
          <>
            <p>Cadeau {histo.montant > 0 ? 'de' : 'à'} {particulier.prenom} {particulier.nom}</p>
            {histo.date_info && <p>Fait le {formatDate(histo.date_info)}</p>}
          </>
        }
        {histo.type === 'bon_achat' &&
          <>
            <p>Bon d'achat utilisée chez {histo.nom_commercant} à {histo.localisation}</p>
          </>
        }
      </div>
    </div>
  )
}
