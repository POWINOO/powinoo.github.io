import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import axios from 'axios'
import './SingleCommunauteView.css'

import {url} from '../../Context/DataContext'

import Cadenas from '../../assets/cadenas.svg'

import MembreCommuItem from '../../Components/MembreCommuItem/MembreCommuItem'
import FaireCadeauModal from '../../Components/FaireCadeauModal/FaireCadeauModal'
import GestionCommuModal from '../../Components/GestionCommuModal/GestionCommuModal'

import { DataContext } from '../../Context/DataContext'

export default function SingleCommunauteView() {

  const navigate = useNavigate()

  const { getUtilisateursParCommunaute, getUtilisateursParDemandeNonRepondue, getUtilisateursParDemande, currentUserData, alldemandeAppartenirData, isEntreprise } = useContext(DataContext)
  const { id } = useParams()

  const [communaute, setCommunaute] = useState({})

  useEffect(() => {
    async function fetchData() {
      const communauteResponse = await axios.get(url + '/api/communaute/' + id)
      setCommunaute(communauteResponse.data[0])
      if(!communauteResponse.data[0]){
        navigate('/home/communaute')
      }
    }

    fetchData()

  }, [id])


  const [openFaireCadeauModal, setOpenFaireCadeauModal] = useState(false)
  const [openGestionModal, setOpenGestionModal] = useState(false)

  const toggleFaireCadeauModal = (particulierId) => {
    setOpenFaireCadeauModal(!openFaireCadeauModal)
  }
  const toggleGestionModal = () => {
    setOpenGestionModal(!openGestionModal)
  }

  const quitterCommu = () => {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Voulez-vous vraiment quitter cette communauté ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0040E2',
      cancelButtonColor: '#DE0009',
      cancelButtonText: 'Non',
      confirmButtonText: 'Oui, je la quitte'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(url+`/api/deleteAppartient/${parseInt(id)}/${currentUserData.id}`)
          .then(response => {
            console.log(response.data);
            Swal.fire(
              'Communauté quittée !',
              'Vous avez bien quitté la communauté',
              'success'
            )
            window.location.reload()
          })
          .catch(error => {
            console.error(error);
          });
      }
    })
  }

  const joinCommu = () => {
    const newJoin = {
      communaute_id: parseInt(id),
      particulier_id: currentUserData.id
    }

    axios.post(url+'/api/demande_appartenir/post', newJoin)
      .then((response) => {
        console.log(response.data);
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const isCurrentUserInCommunity = currentUserData.id_communaute === parseInt(id);
  const isCurrentUserInCommunityAndMember = getUtilisateursParCommunaute(parseInt(id)).find(particulier => particulier.id === currentUserData.id);
  const isCurrentUserInCommunityAndRequested = getUtilisateursParDemandeNonRepondue(parseInt(id)).find(particulier => particulier.id === currentUserData.id);

  const demandeEnvoye = alldemandeAppartenirData.find(d => (d.communaute_id === parseInt(id) && d.particulier_id === currentUserData.id && d.statue === null))

  return (
    <>
      <div className="home-body">
        <Link to='/home/communaute' className="return-all-commu">Retour</Link>

        <div className="single-commu-info">
          <img src={communaute.photo_url} className="single-commu-img" />
          <div className="single-commu-text">
            <p>{communaute.nom}</p>
            <p>Membre(s) : {communaute.nb_membre}</p>
            <p className='single-communaute-description'>{communaute.description}</p>
            <p>{communaute.matricule}</p>

            {isCurrentUserInCommunity && (
              <div onClick={toggleGestionModal} className="single-commu-btn">Gérer</div>
            )}

            {!isCurrentUserInCommunity && isCurrentUserInCommunityAndMember && (
              <div className="single-commu-btn quitter-commu" onClick={quitterCommu}>Quitter</div>
            )}

            {(!isCurrentUserInCommunity && !isCurrentUserInCommunityAndRequested && !isCurrentUserInCommunityAndMember) && (
              <div className="single-commu-btn" onClick={joinCommu}>Rejoindre</div>
            )}

            {(demandeEnvoye && (!isCurrentUserInCommunity && isCurrentUserInCommunityAndRequested && demandeEnvoye.statue === null)) && (
              <div className="single-commu-btn demande-envoye">Demande envoyée</div>
            )}

          </div>
        </div>

        <h3 style={{ marginLeft: '10px' }}>Liste des membres :</h3>
        <div className="membres-container">

          {isCurrentUserInCommunityAndMember || isEntreprise ? getUtilisateursParCommunaute(parseInt(id)).map((particulier) => (
            <MembreCommuItem key={particulier.id} gestion={false} particulier={particulier} toggle={toggleFaireCadeauModal} />
          )) : (
            <div className="membre-blocked-view">
              <img src={Cadenas} alt="Icone de cadenas" />
              <p>Rejoignez cette communauté pour voir ses membres</p>
            </div>
          )}

        </div>

      </div>
      {openFaireCadeauModal && <FaireCadeauModal toggle={toggleFaireCadeauModal} />}
      {openGestionModal && <GestionCommuModal demandes={getUtilisateursParDemande(parseInt(id))} membres={getUtilisateursParCommunaute(parseInt(id))} id={parseInt(id)} toggle={toggleGestionModal} />}
    </>
  )
}
