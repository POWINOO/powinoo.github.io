import { useState, useContext, useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import MainPage from "./Page/MainPage/MainPage";
import HomePage from "./Page/HomePage/HomePage";
import RegisterPage from "./Page/RegisterPage/RegisterPage";
import LoginPage from "./Page/LoginPage/LoginPage";
import Page404 from "./Page/Page404/Page404";
import AdminPage from "./Page/AdminPage/AdminPage";

import TchatView from "./Views/TchatView/TchatView";
import CommunauteView from './Views/CommunauteView/CommunauteView'
import SingleCommunauteView from "./Views/SingleCommunauteView/SingleCommunauteView";
import CagnotteView from './Views/CagnotteView/CagnotteView'
import ProfilView from './Views/ProfilView/ProfilView'

import './App.css';
import ConnectionIcone from './assets/connection.svg'
import DeconnectionIcone from './assets/deconnection.svg'

import { auth } from "./firebase-config";
import { signOut } from 'firebase/auth'

import { DataContext } from "./Context/DataContext";


function App() {

  const { currentUser } = useContext(DataContext)

  const [openModal, setOpenModal] = useState(false)
  const [CurrentUrl, setCurrentUrl] = useState("")
  const [texteIndex, setTexteIndex] = useState(0)

  const toggleModal = (txtIndex) => {
    setTexteIndex(txtIndex)
    setOpenModal(!openModal)
  }

  useEffect(() => {
    // Fonction pour générer une nouvelle URL
    const generateNewUrl = () => {
      const newUrl = `/${Math.random().toString(36).substring(7)}`;
      setCurrentUrl(newUrl);
    };

    console.log(process.env);

    generateNewUrl()
    // Mettre à jour l'URL toutes les 10 minutes
    const intervalId = setInterval(generateNewUrl, 10 * 60 * 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header>
        <Link to='/' className="logo-header"></Link>

        <p className="header-slogan" onClick={() => toggleModal(1)}>Bienfaits pour vous !</p>
        {currentUser === null ? (
          <Link to='/login' className="connect-btn">
            <img src={ConnectionIcone} alt="Icone de connexion" />
          </Link>
        ) : (
          <Link to='/' className="connect-btn">
            <img onClick={() => signOut(auth)} src={DeconnectionIcone} alt="Icone de connexion" />
          </Link>
        )}
      </header>
      <main>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route exact path="/" element={<MainPage openModal={openModal} texteIndex={texteIndex} toggleModal={toggleModal} />} />
          <Route path={CurrentUrl} element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/home" element={<HomePage />}>
            <Route path="/home/cagnotte" element={<CagnotteView />} />
            <Route path="/home/profil" element={<ProfilView />} />
            <Route path="/home/tchat" element={<TchatView />} />
            <Route path="/home/communaute" element={<CommunauteView />} />
            <Route path="/home/communaute/:id" element={<SingleCommunauteView />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
