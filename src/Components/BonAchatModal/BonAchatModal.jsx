import React, {useContext} from 'react'
import { DataContext } from '../../Context/DataContext'
import './BonAchatModal.css'

import BonAchatItem from '../BonAchatItem/BonAchatItem'

export default function BonAchatModal(props) {
  
  const { getBonAchatParUtilisateur, currentUserData } = useContext(DataContext)
  
  const bonAchatData = getBonAchatParUtilisateur(currentUserData.id)

  return (
    <div className='bon-achat-modal'>

        <div className="bon-achat-modal-bg"></div>

        <div className="bon-achat-modal-container">
            <div className="close-bon-achat-modal" onClick={props.toggleModal}></div>
            <h3>Mes Bons d'Achat en Cours</h3>

            <div className="list-bon-achat-container">
              {bonAchatData && bonAchatData.map((ba, index) => (
                <BonAchatItem key={index} ba={ba}/>
              ))}
              {/* <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/>
              <BonAchatItem/> */}
            </div>
        </div>
        
    </div>
  )
}
