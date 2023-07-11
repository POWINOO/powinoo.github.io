import React, { useContext } from 'react'
import './MessageItem.css' // Importation du css

// Importation du Context "DataContext"
import { DataContext } from '../../Context/DataContext'

// Récupéraion des données mis en paramètres (props) du composant
export default function MessageItem({ msg, admin }) {

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
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${day} ${month} ${year} - ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return formattedDate;
  }

  // Récupération des données du Context
  const { allUserData, allCommunauteData, currentUserData } = useContext(DataContext)
  // Utilisation de ces mêmes données
  const sender = allUserData.find(user => user.id === msg.sender_id)
  var receiver;
  var communaute;
  if (msg.receiver_id) {
    receiver = allUserData.find(user => user.id === msg.receiver_id)
  }
  if (msg.communaute_id) {
    communaute = allCommunauteData.find(user => user.id === msg.communaute_id)
  }

  return (
    <>
      {admin === true && (
        <>
          {msg.receiver_id ? <p className='message-item-admin-info'>Message Privé : {receiver.prenom} {receiver.nom}</p> : <p className='message-item-admin-info'>Message Communauté : {communaute.nom}</p>}
        </>
      )}
      {sender && (
        <div style={(admin && {width: "100%", maxWidth: "calc(100% - 20px)"}) || (sender.email === process.env.REACT_APP_ADMIN_EMAIL && {backgroundColor: "#FFB300"})} className={msg.sender_id === currentUserData.id ? 'message-item mine-message' : 'message-item'}>
          <img src={sender.photo_url} alt="Photo de profil" className="message-photo" />
          <div className="message-content">
            <div className="message-content-infos">
              <div className="message-name-user">{sender.prenom} {sender.nom}</div>
              <div className="message-date">{formatDate(msg.timestamp)}</div>
            </div>
            <div className="message-content-text">{msg.message}</div>
          </div>
        </div>
      )}
    </>
  )
}