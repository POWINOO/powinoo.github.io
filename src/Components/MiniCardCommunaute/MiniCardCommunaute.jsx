import React, {useContext} from 'react'
import './MiniCardCommunaute.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/DataContext';


export default function MiniCardCommunaute({commu}) {

  const { updateTchatActive } = useContext(DataContext)

  return (
    <Link to={'/home/communaute/' + commu.id} onClick={() => updateTchatActive(commu.id)} className='mini-card' >
        <img className='mini-card-img' src={commu.photo_url} alt=""></img>
        <p className="mini-card-name">{commu.nom}</p>
    </Link>
  )
}
