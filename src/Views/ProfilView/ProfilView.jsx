import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { storage } from '../../firebase-config'
import { ref, deleteObject } from 'firebase/storage'
import './ProfilView.css'
import EditProfilModal from '../../Components/EditProfilModal/EditProfilModal';
import CreationCommuModal from '../../Components/CreationCommuModal/CreationCommuModal';

import IMG from '../../assets/plus.svg'

import {url} from '../../Context/DataContext'


import { DataContext } from '../../Context/DataContext'

export default function ProfilView() {

    const [openEditModal, setOpenEditModal] = useState(false)
    const [openCreationCommuModal, setOpenCreationCommuModal] = useState(false)

    const { currentUserData, currentUserCommu } = useContext(DataContext)

    const toggleEditModal = () => {
        setOpenEditModal(!openEditModal)
    }
    const toggleCreationCommuModal = () => {
        setOpenCreationCommuModal(!openCreationCommuModal)
    }

    // Fonction pour faire un bon affichage des dates
    function convertDate(dateString) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('fr', options).replace(/,/g, '');
    }

    const supprimerProfil = () => {
        Swal.fire({
          title: 'Êtes-vous sûr?',
          text: "Voulez-vous vraiment supprimer votre compte ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0040E2',
          cancelButtonColor: '#DE0009',
          cancelButtonText: 'Non',
          confirmButtonText: 'Oui, je le supprime'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(url+'/api/particulier/' + currentUserData.id)
              .then(response => {
                console.log(response.data);
                if (currentUserData.photo_url !== 'https://firebasestorage.googleapis.com/v0/b/stage-powinoo.appspot.com/o/images%2FVisage-POWINOO-detoure.png?alt=media&token=547cd9f6-c626-49be-83e5-cd75cf23842e') {
                  const fileRef = ref(storage, currentUserData.photo_url)
                  deleteObject(fileRef).then(() => {
                    console.log('Le fichier a été supprimé avec succès.');
                  })
                }
    
                Swal.fire(
                  'Compte supprimée !',
                  'Vous avez bien supprimé votre compte!',
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

    return (
        <>
            <div className='home-body profil'>
                <div className="profil-infos-container">
                    <div className="profil-photo"><img src={currentUserData.photo_url} alt="Photo de profil" /></div>
                    {/* <div className="profil-infos">
                        <div className="profil-infos-row">
                            <div className="profil-infos-item">Gareri</div>
                            <div className="profil-infos-item">Matheo</div>
                            <div className="profil-infos-item">#1000000000</div>
                        </div>
                        <div className="profil-infos-row">
                            <div className="profil-infos-item">garerimath73660@gmail.com</div>
                            <div className="profil-infos-item">13 nov. 2003</div>
                        </div>
                        <div className="profil-infos-row">
                            <div className="profil-infos-item">0669336354</div>
                            <div className="profil-infos-item">15 rue de la république, Annecy 74000</div>
                        </div>
                    </div> */}
                    <div className="profil-infos">
                        <div className="profil-infos-row">
                            <div className="profil-infos-item">{currentUserData.nom}</div>
                            <div className="profil-infos-item">{currentUserData.prenom}</div>
                            <div className="profil-infos-item">#{currentUserData.id}</div>
                        </div>
                        <div className="profil-infos-row">
                            <div className="profil-infos-item">{currentUserData.email}</div>
                            <div className="profil-infos-item">{convertDate(currentUserData.date_naissance)}</div>
                        </div>
                        <div className="profil-infos-row">
                            <div className="profil-infos-item">{currentUserData.telephone}</div>
                            <div className="profil-infos-item">{currentUserData.adresse}, {currentUserData.ville} {currentUserData.code_postal}</div>
                        </div>
                    </div>
                </div>
                {currentUserCommu ? (
                    <Link to={'/home/communaute/' + currentUserCommu.id} className="profil-commu">
                        <img src={currentUserCommu.photo_url} alt="Photo de la communauté" className="profil-commu-img" />
                        <div className="profil-commu-name">Ma Communauté <br /> {currentUserCommu.nom}</div>
                    </Link>
                ) : (
                    <div className="profil-commu" onClick={toggleCreationCommuModal}>
                        <img src={IMG} alt="Photo de la communauté" className="profil-commu-img" />
                        <div className="profil-commu-name">Ma Communauté <br /> Créer ma communauté</div>
                    </div>
                )}

                <div className="profil-btn-container">
                    <div className="profil-edit-btn" onClick={toggleEditModal}>Editer mon Profil</div>
                    <div className="profil-delete-btn" onClick={supprimerProfil}>Supprimer mon Profil</div>
                </div>
            </div>
            {openEditModal && <EditProfilModal toggle={toggleEditModal} />}
            {openCreationCommuModal && <CreationCommuModal toggleModal={toggleCreationCommuModal} />}
        </>
    )
}