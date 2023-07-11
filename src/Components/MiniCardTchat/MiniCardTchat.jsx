import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import {Link} from 'react-router-dom'

export default function MiniCardTchat({particulier_id}) {

    const {allUserData, updateTchatActive} = useContext(DataContext)

    const particulier = allUserData.find(p => p.id === particulier_id)

  return (
    <Link to='/home/tchat' onClick={() => updateTchatActive(particulier_id)} className='mini-card'>
        <img className='mini-card-img' src={particulier.photo_url} alt=""></img>
        <p className="mini-card-name">{particulier.nom}</p>
    </Link>
  )
}
