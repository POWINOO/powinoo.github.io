import React, { useState, useContext } from 'react'
import './GestionCommuModal.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import { storage } from '../../firebase-config'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { DataContext } from '../../Context/DataContext'

import MembreCommuItem from '../MembreCommuItem/MembreCommuItem'
import DemandeAppartenirItem from '../DemandeAppartenirItem/DemandeAppartenirItem'

import {urlAPI} from '../../Context/DataContext'


import Loader from '../../assets/loader.gif'

export default function GestionCommuModal(props) {

  const { currentUserCommu } = useContext(DataContext)

  const [ongletActive, setOngletActive] = useState(1)
  const [imageUpload, setImageUpload] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('');

  const [newNameCommu, setNewNameCommu] = useState("")
  const [newDescriptionCommu, setNewDescriptionCommu] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl('');
    }
  };

  const supprimerCommu = () => {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Voulez-vous vraiment supprimer votre communauté ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0040E2',
      cancelButtonColor: '#DE0009',
      cancelButtonText: 'Non',
      confirmButtonText: 'Oui, je la supprime'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(urlAPI+'/api/communaute/delete/' + props.id)
          .then(response => {
            console.log(response.data);
            if (currentUserCommu.photo_url !== 'https://firebasestorage.googleapis.com/v0/b/stage-powinoo.appspot.com/o/images%2Flogo-rond.png?alt=media&token=b24ab389-91a5-4bf0-80ad-3cbcd71186f4') {
              const fileRef = ref(storage, currentUserCommu.photo_url)
              deleteObject(fileRef).then(() => {
                console.log('Le fichier a été supprimé avec succès.');
              })
            }

            Swal.fire(
              'Communauté supprimée !',
              'Vous avez bien supprimé la communauté',
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

  const updateCommu = () => {
    setIsLoading(true)
    if (!imageUpload) {
      const commuUpdated = {
        nom: newNameCommu,
        description: newDescriptionCommu,
        url: null
      }

      axios.put(urlAPI+'/api/communaute/put/' + props.id, commuUpdated)
        .then(response => {
          console.log(response.data);
          window.location.reload()
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      const imageRef = ref(storage, `communaute/${props.id}`);
      uploadBytes(imageRef, imageUpload).then(() => {
        getDownloadURL(imageRef).then(url => {
          const commuUpdated = {
            nom: newNameCommu,
            description: newDescriptionCommu,
            url: url
          }

          axios.put(urlAPI+'/api/communaute/put/' + props.id, commuUpdated)
            .then(response => {
              console.log(response.data);
              window.location.reload()
            })
            .catch(error => {
              console.error(error);
            });
        })
      })
    }
  }

  return (
    <div className='gestion-commu-modal'>
      <div className='gestion-commu-modal-bg'></div>

      <div className="gestion-commu-modal-container">
        <div className="close-gestion-commu-modal" onClick={props.toggle}></div>

        <div className="gestion-commu-modal-header">
          <div className={ongletActive === 1 ? "modal-onglet mo-active" : "modal-onglet"}
            onClick={() => setOngletActive(1)}
          >Gérer les membres</div>
          <div className={ongletActive === 2 ? "modal-onglet mo-active" : "modal-onglet"}
            onClick={() => setOngletActive(2)}
          >Gérer les demandes </div>
          <div className={ongletActive === 3 ? "modal-onglet mo-active" : "modal-onglet"}
            onClick={() => setOngletActive(3)}
          >Editer communauté</div>
        </div>

        {ongletActive === 1 && (
          <div className="gestion-commu-modal-block">
            <p className="gestion-commu-modal-titre">Gérer les membres</p>
            {props.membres.map((particulier) => (
              <MembreCommuItem key={particulier.id} gestion={true} particulier={particulier} />
            ))}
          </div>
        )}
        {ongletActive === 2 && (
          <div className="gestion-commu-modal-block">
            <p className="gestion-commu-modal-titre">Gérer les demandes</p>
            <div className="gestion-commu-demande-container">
              {props.demandes.map((particulier) => (
                <DemandeAppartenirItem key={particulier.id} particulier={particulier} />
              ))}
            </div>
          </div>
        )}
        {ongletActive === 3 && (
          <div className="gestion-commu-modal-block">
            <p className="gestion-commu-modal-titre">Editer ma Communauté</p>
            {isLoading ? (
              <img className='loader' src={Loader} alt="Animation loader en attente" />
            ) : (
              <>
                <div className="input-file">
                  <input type="file" name="file-5[]" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" onChange={(event) => handleFileInputChange(event)} />
                  <label htmlFor="file-5">
                    {previewUrl ? (
                      <>
                        <img src={previewUrl} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                        <br />
                      </>
                    ) : (
                      <>
                        <figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" /></svg></figure>
                      </>
                    )}
                    <span>Photo de Communauté</span>
                  </label>
                </div>
                <input className='gestion-commu-input' type="text" placeholder='Nom de la communaute'
                  onChange={(event) => setNewNameCommu(event.target.value)} /> <br />
                <textarea className='gestion-commu-input' placeholder='Description'
                  onChange={(event) => setNewDescriptionCommu(event.target.value)}></textarea>
                <button className='gestion-commu-edit-validate' onClick={updateCommu}>Valider</button>
                <button className='gestion-commu-edit-delete' onClick={supprimerCommu}>Supprimer</button>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
