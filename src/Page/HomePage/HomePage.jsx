import React, { useState, useEffect, useContext } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import './HomePage.css'
import { DataContext } from '../../Context/DataContext'

import MiniCardCommunaute from '../../Components/MiniCardCommunaute/MiniCardCommunaute'
import MiniCardTchat from '../../Components/MiniCardTchat/MiniCardTchat'

import User from '../../assets/user.svg'
import Chat from '../../assets/chat.svg'
import Money from '../../assets/money.svg'
import Community from '../../assets/community.svg'

export default function HomePage() {

  const [activeTab, setActiveTab] = useState(1)

  const navigate = useNavigate()
  const location = useLocation()
  const { currentUser, currentUserData, getCommunautesParUtilisateur, getTchatParUtilisateur, seeCommunaute, isEntreprise, allCommunauteData } = useContext(DataContext)

  useEffect(() => {
    if (location.pathname.includes('/home/cagnotte')) {
      setActiveTab(1)
    }
    if (location.pathname.includes('/home/profil')) {
      setActiveTab(2)
    }
    if (location.pathname.includes('/home/tchat')) {
      setActiveTab(3)
    }
    if (location.pathname.includes('/home/communaute')) {
      setActiveTab(4)
    }
  }, [location])

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
    // if (currentUserData.mail !== process.env.REACT_APP_ADMIN_EMAIL) {
    //   navigate('/')
    // }
  }, [])

  useEffect(() => {
    if (location.pathname === '/home' || location.pathname === '/home/') {
      navigate('/home/cagnotte')
    }
  }, [navigate])

  const tchatPrive = []
  getTchatParUtilisateur(currentUserData.id).filter(tchat => tchat.communaute_id === null).forEach(t => {
    if (t.sender_id === currentUserData.id) {
      if (!tchatPrive.includes(t.receiver_id)) {
        tchatPrive.push(t.receiver_id)
      }
    } else {
      if (!tchatPrive.includes(t.sender_id)) {
        tchatPrive.push(t.sender_id)
      }
    }
  });

  return (
    <div className='home'>
      {!seeCommunaute ? (
        <div className="commu-container">
          <h4>Mes Communautés</h4>

          {isEntreprise ? 
          <MiniCardCommunaute commu={allCommunauteData.find(c => c.id === currentUserData.id_communaute)} />  
          : getCommunautesParUtilisateur(currentUserData.id).map((commu, index) => (
            <MiniCardCommunaute key={commu.id} commu={commu} />
          ))}
        </div>
      ) : (
        <div className="tchat-container">
          <h4>Mes Tchats Privés</h4>

          {tchatPrive.map((particulier, index) => (
            <MiniCardTchat key={index} particulier_id={particulier} />
          ))}
        </div>
      )}

      <div className={
        activeTab === 1 ? "home-container hc-yellow" :
          activeTab === 2 ? "home-container hc-red" :
            activeTab === 3 ? "home-container hc-blue" :
              "home-container hc-green"
      }>
        <div className="home-header">

          <Link to='/home/cagnotte' className="home-tab tab ht-yellow"
            onClick={() => { setActiveTab(1) }}>
            <p>Cagnottes</p>
            <img src={Money} alt="Icone Profil" />
          </Link>

          <Link to='/home/profil' className="home-tab tab ht-red"
            onClick={() => { setActiveTab(2) }}>
            <p>Profil</p>
            <img src={User} alt="Icone Profil" />
          </Link>

          <Link to='/home/tchat' className="home-tab tab ht-blue"
            onClick={() => { setActiveTab(3) }}>
            <p>Tchat</p>
            <img src={Chat} alt="Icone Profil" />
          </Link>

          <Link to='/home/communaute' className="home-tab tab ht-green"
            onClick={() => { setActiveTab(4) }}>
            <p>Communautés</p>
            <img src={Community} alt="Icone Profil" />
          </Link>
        </div>

        <Outlet />

      </div>
    </div>
  )
}
