import React, {useState, useEffect, useContext} from 'react'
import './CagnotteItem.css'
import { DataContext } from '../../Context/DataContext';

import Billet from '../../assets/billet.png'

export default function CagnotteItem({cagnotte, toggleCagnotteModal}) {

  const { allAvantageData } = useContext(DataContext)
  
  const [infoCagnotte, setInfoCagnotte] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      setInfoCagnotte(allAvantageData.find(a => a.id === cagnotte.avantage_id))
    }

    fetchData()
  }, [])

  return (
    cagnotte.montant > 0 &&
      <div className='cagnotte-item'>
        {infoCagnotte && (
          <div className="cagnotte-billet" onClick={toggleCagnotteModal}>
              <p className='cagnotte-item-name'>{infoCagnotte.nom_avantage}</p>
              <img src={Billet} alt="Image de billet pour la cagnotte" />
              <p className="montant-cagnotte">{cagnotte.montant} €</p>
          </div>
        )}
      </div>
  )
}
