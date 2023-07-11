import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import './CardCommunaute.css'
import { DataContext } from '../../Context/DataContext';

import Check from '../../assets/check.svg'

export default function CardCommunaute(props) {

  const { getUtilisateursParCommunaute, currentUserData } = useContext(DataContext)

  const hasJoinedCommu = getUtilisateursParCommunaute(props.commu.id).find(user => user.id === currentUserData.id)

  return (
    <Link to={'/home/communaute/' + props.commu.id} className='card-communaute'>
      <img className='img-card' src={props.commu.photo_url} alt={'Photo de la communauté' + props.commu.nom}></img>
        <div className="card-content">
            <p>{props.commu.nom}</p>
            <p>Membre(s) : {props.commu.nb_membre}</p>
        </div>
        {hasJoinedCommu ? (
          <div className="card-join joined"><img src={Check} alt="Icone de validation" /></div>
        ) : (
          <div className='card-join'>Rejoindre</div>
        )}
    </Link>
  )
}
