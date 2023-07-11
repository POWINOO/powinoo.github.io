import React, { useState, useContext, useEffect, useRef } from 'react'
import './TchatView.css'
import { DataContext } from '../../Context/DataContext'

import SendMessage from '../../assets/send-message.svg'
import MessageItem from '../../Components/MessageItem/MessageItem'

export default function TchatView() {

  const { currentUserData, tchatActive, getTchatParTchatActive, allTchatData, sendMessage, seeCommunaute,
    toggleSeeCommunaute, allUserData, allCommunauteData } = useContext(DataContext)

  const [message, setMessage] = useState("")
  const [infoMessage, setInfoMessage] = useState({})

  var tchatParTchatActive = getTchatParTchatActive(tchatActive)
  const messageContainerRef = useRef(null)

  useEffect(() => {
    tchatParTchatActive = getTchatParTchatActive(tchatActive)
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [allTchatData])

  useEffect(() => {
    const fetchData = async () => {
      if (tchatActive) {
        if (String(tchatActive).length > 9) {
          setInfoMessage(allUserData.find(u => u.id === tchatActive))
        } else {
          setInfoMessage(allCommunauteData.find(c => c.id === tchatActive))
        }
      }
    }

    fetchData()
  }, [tchatActive])



  const postTchat = (e) => {
    e.preventDefault()

    if (!message) return
    let receiver = null
    let communaute = null

    if (String(tchatActive).length > 9) {
      receiver = tchatActive
    } else {
      communaute = tchatActive
    }

    const newMessage = {
      sender_id: currentUserData.id,
      receiver_id: receiver,
      communaute_id: communaute,
      message: message,
      timestamp: Date.now()
    }

    sendMessage(newMessage)
    setMessage('')

  }

  return (
    <div className='home-body'>
      {seeCommunaute === false ? (
        <button className="message-prive-btn"
          onClick={() => toggleSeeCommunaute()}>Messages Privés</button>
      ) : (
        <button className="mes-communaute-btn"
          onClick={() => toggleSeeCommunaute()}>Mes communautés</button>
      )}
      {infoMessage &&
        <h3 className='tchat-titre'>{
            String(tchatActive).length > 9 ? (
              `Message Privé : ${infoMessage.prenom} ${infoMessage.nom}`
            ) : (
              `Message Communaute : ${infoMessage.nom}`
            )
          }</h3>}

      <form className='form-tchat' onSubmit={(e) => postTchat(e)}>
        <input onChange={(event) => setMessage(event.target.value)} value={message} type="text" placeholder='Message...' />
        <button type="submit">
          <img src={SendMessage} alt="Icone envoie de message" />
        </button>
      </form>

      <div className="message-container" ref={messageContainerRef}>
        {tchatParTchatActive.map((msg, index) => (
          <MessageItem key={index} msg={msg} />
        ))}
      </div>
    </div>
  )
}
