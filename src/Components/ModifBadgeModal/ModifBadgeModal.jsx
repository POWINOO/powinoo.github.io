import React, { useState, useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import './ModifBadgeModal.css'
import axios from 'axios'

import Badge1 from '../../assets/badge_Donateur.png'
import Badge2 from '../../assets/badge_Bénéficiaire.png'
import Badge3 from '../../assets/badge_Partenaire.png'
import Badge4 from '../../assets/badge_Bénévole.png'
import Badge5 from '../../assets/badge_Invité.png'
import Badge6 from '../../assets/badge_Adhérent.png'

import {urlAPI} from '../../Context/DataContext'


export default function ModifBadgeModal(props) {

  const { allBadgeData } = useContext(DataContext)

  var BadgeArray = [Badge1, Badge2, Badge3, Badge4, Badge5, Badge6]

  const [badges, setBadges] = useState({
    '1': props.badges.map(b => b.id).includes(1),
    '2': props.badges.map(b => b.id).includes(2),
    '3': props.badges.map(b => b.id).includes(3),
    '4': props.badges.map(b => b.id).includes(4),
    '5': props.badges.map(b => b.id).includes(5),
    '6': props.badges.map(b => b.id).includes(6),
  });

  const handleBadgeChange = (badgeName) => {
    setBadges((prevBadges) => ({
      ...prevBadges,
      [badgeName]: !prevBadges[badgeName],
    }));
  };

  const validateBadge = () => {
    const newBadges = [
      badges['1'],
      badges['2'],
      badges['3'],
      badges['4'],
      badges['5'],
      badges['6'],
    ]

    const newInfo = {
      user: props.user,
      badges: newBadges
    }

    axios.put(urlAPI+'/api/possede', newInfo)
    .then((response) => {
      console.log(response.data);
    })
  }

  return (
    <div className='modif-badge-modal'>
      <div className="modif-badge-modal-bg"></div>
      <form onSubmit={() => validateBadge()} className="modif-badge-modal-content badge-container">
        <div className="modif-badge-modal-close" onClick={props.toggle}></div>
        <h2 className="modif-badge-modal-title">Modifier les Badges</h2>
        {allBadgeData.map((b, index) => (
          <div key={index} className='input-badge'>
            <input type="checkbox" checked={badges[`${b.id}`]} onChange={() => handleBadgeChange(`${b.id}`)}/>
            <img src={BadgeArray[b.id - 1]} alt="" />
            <span>{b.nom_badge}</span>
          </div>
        ))}
        <button className='modif-badge-validate-btn' type="submit">Valider</button>
      </form>
    </div>
  )
}