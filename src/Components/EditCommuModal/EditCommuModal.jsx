import React, { useState } from 'react'
import './EditCommuModal.css'
import axios from 'axios'
import { storage } from '../../firebase-config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import Loader from '../../assets/loader.gif'

import {urlAPI} from '../../Context/DataContext'


export default function EditCommuModal(props) {

    const [imageUpload, setImageUpload] = useState(null)
    const [previewUrl, setPreviewUrl] = useState('');

    const [newNameCommu, setNewNameCommu] = useState("")
    const [newDescriptionCommu, setNewDescriptionCommu] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const updateCommu = () => {
        setIsLoading(true)
        if (!imageUpload) {
            const commuUpdated = {
                nom: newNameCommu,
                description: newDescriptionCommu,
                url: null
            }

            axios.put(urlAPI+'/api/communaute/put/' + props.commu.id, commuUpdated)
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

    return (
        <div className='edit-commu-modal'>

            <div className="edit-commu-modal-bg"></div>
            <div className="edit-commu-modal-content">
                <div className="edit-commu-modal-close" onClick={props.toggle}></div>
                <h2 className="edit-commu-modal-title">Editer la Communauté</h2>

                {isLoading ? (
                    <img className='loader' src={Loader} alt="Animation loader en attente" />
                )
                    : (
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
                                    <span>Photo de commu</span>
                                </label>
                            </div>

                            <input className='gestion-commu-input' type="text" placeholder='Nom de la communaute'
                                onChange={(event) => setNewNameCommu(event.target.value)} /> <br />
                            <textarea className='gestion-commu-input' placeholder='Description'
                                onChange={(event) => setNewDescriptionCommu(event.target.value)}></textarea>


                            <button className='edit-commu-btn' onClick={updateCommu}>Modifier</button>
                        </>
                    )}
            </div>

        </div>
    )
}
