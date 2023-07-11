import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { DataContext } from '../../Context/DataContext'
import EditProfilModal from '../../Components/EditProfilModal/EditProfilModal'
import CreateUserModal from '../../Components/CreateUserModal/CreateUserModal'
import './AdminPage.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import { storage } from '../../firebase-config'
import { ref, deleteObject } from 'firebase/storage'
import CagnotteItem from '../../Components/CagnotteItem/CagnotteItem'
import CadeauItem from '../../Components/CadeauItem/CadeauItem'
import BonAchatItem from '../../Components/BonAchatItem/BonAchatItem'
import MembreCommuItem from '../../Components/MembreCommuItem/MembreCommuItem'
import CagnotteModal from '../../Components/CagnotteModal/CagnotteModal'
import DemandeAppartenirItem from '../../Components/DemandeAppartenirItem/DemandeAppartenirItem'
import EditCommuModal from '../../Components/EditCommuModal/EditCommuModal'
import MessageItem from '../../Components/MessageItem/MessageItem'
import ModifBadgeModal from '../../Components/ModifBadgeModal/ModifBadgeModal'
import FaireCadeauModal from '../../Components/FaireCadeauModal/FaireCadeauModal'

import Badge1 from '../../assets/badge_Donateur.png'
import Badge2 from '../../assets/badge_Bénéficiaire.png'
import Badge3 from '../../assets/badge_Partenaire.png'
import Badge4 from '../../assets/badge_Bénévole.png'
import Badge5 from '../../assets/badge_Invité.png'
import Badge6 from '../../assets/badge_Adhérent.png'

import {url} from '../../Context/DataContext'

export default function AdminPage() {

    const navigate = useNavigate()

    const { currentUserData,
        allUserData,
        allCommunauteData,
        allBonAchatData,
        getCommunautesParUtilisateur,
        getCagnotteParUtilisateur,
        getCadeauParUtilisateur,
        getBonAchatParUtilisateur,
        getUtilisateursParCommunaute,
        getUtilisateursParDemandeNonRepondue,
        getTchatParUtilisateur,
        getBadgeParUtilisateur,
        updateMembreCadeauActive } = useContext(DataContext)

    var BadgeArray = [Badge1, Badge2, Badge3, Badge4, Badge5, Badge6]

    const [userActive, setUserActive] = useState(allUserData[0])
    const [commuActive, setcommuActive] = useState(null)
    const [cagnotteActive, setCagnotteActive] = useState(null)
    const [allDataOnglet, setAllDataOnglet] = useState(1)
    const [moreDataOnglet, setMoreDataOnglet] = useState(1)
    const [rightInfoOnglet, setRightInfoOnglet] = useState(1)

    const [openEditModal, setOpenEditModal] = useState(false)
    const [openEditCommuModal, setOpenEditCommuModal] = useState(false)
    const [openCreateUserModal, setOpenCreateUserModal] = useState(false)
    const [openCagnotteModal, setOpenCagnotteModal] = useState(false)
    const [openModifBadgeModal, setOpenModifBadgeModal] = useState(false)
    const [openFaireCadeauModal, setOpenFaireCadeauModal] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        if (currentUserData.email !== process.env.REACT_APP_ADMIN_EMAIL) {
            navigate('/')
        }
    }, [])

    //#region Fonction
    const toggleEditModal = () => {
        setOpenEditModal(!openEditModal)
    }
    const toggleEditCommuModal = () => {
        setOpenEditCommuModal(!openEditCommuModal)
    }
    const toggleCreateUserModal = () => {
        setOpenCreateUserModal(!openCreateUserModal)
    }
    const toggleModifBadgeModal = () => {
        setOpenModifBadgeModal(!openModifBadgeModal)
    }
    const toggleFaireCadeauModal = () => {
        setOpenFaireCadeauModal(!openFaireCadeauModal)
        updateMembreCadeauActive(userActive.id)
    }

    const toggleActive = (user, commu) => {
        if (user) {
            if (commuActive) {
                setcommuActive(null)
            }
            setUserActive(user)
        }
        if (commu) {
            if (userActive) {
                setUserActive(null)
            }
            setcommuActive(commu)
        }
    }

    const toggleCagnotteModal = (cagnotte) => {
        if (cagnotte) {
            setCagnotteActive(cagnotte)
        }
        setOpenCagnotteModal(!openCagnotteModal)
    }

    // Fonction pour avoir un bon affichage de la date
    function formatDate(dateString) {
        const months = [
            'jan', 'fév', 'mars', 'avril', 'mai', 'juin',
            'juil', 'août', 'sept', 'oct', 'nov', 'déc'
        ];

        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;

        return formattedDate;
    }

    const supprimerProfil = () => {
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Voulez-vous vraiment supprimer ce compte ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0040E2',
            cancelButtonColor: '#DE0009',
            cancelButtonText: 'Non',
            confirmButtonText: 'Oui, je le supprime'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(url+'/api/particulier/' + userActive.id)
                    .then(response => {
                        console.log(response.data);
                        if (userActive.photo_url !== 'https://firebasestorage.googleapis.com/v0/b/stage-powinoo.appspot.com/o/images%2FVisage-POWINOO-detoure.png?alt=media&token=547cd9f6-c626-49be-83e5-cd75cf23842e') {
                            const fileRef = ref(storage, userActive.photo_url)
                            deleteObject(fileRef).then(() => {
                                console.log('Le fichier a été supprimé avec succès.');
                            })
                        }

                        Swal.fire(
                            'Compte supprimé !',
                            'Vous avez bien supprimé ce compte !',
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
    const supprimerCommu = () => {
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Voulez-vous vraiment supprimer cette commuanuté ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0040E2',
            cancelButtonColor: '#DE0009',
            cancelButtonText: 'Non',
            confirmButtonText: 'Oui, je la supprime'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(url+'/api/communaute/delete/' + commuActive.id)
                    .then(response => {
                        console.log(response.data);
                        if (commuActive.photo_url !== 'https://firebasestorage.googleapis.com/v0/b/stage-powinoo.appspot.com/o/images%2FVisage-POWINOO-detoure.png?alt=media&token=547cd9f6-c626-49be-83e5-cd75cf23842e') {
                            const fileRef = ref(storage, commuActive.photo_url)
                            deleteObject(fileRef).then(() => {
                                console.log('Le fichier a été supprimé avec succès.');
                            })
                        }

                        Swal.fire(
                            'Communauté supprimée !',
                            'Vous avez bien supprimé cette communauté !',
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
    //#endregion


    return (
        <>
            <div className='admin'>
                <div className="all-data-container">
                    <div className="all-data-container-header">
                        <p onClick={() => setAllDataOnglet(1)}
                            className={allDataOnglet === 1 ? 'all-data-onglet' : ''}>Particuliers</p>
                        <p onClick={() => setAllDataOnglet(2)}
                            className={allDataOnglet === 2 ? 'all-data-onglet' : ''}>Communautés</p>
                    </div>
                    <input type="text" className='all-data-input' placeholder='Recherche...' onChange={(event) => setSearchQuery(event.target.value)} />
                    <div className="admin-create-user-btn" onClick={toggleCreateUserModal}>Créer un compte</div>
                    <div className='all-data-container-content'>
                        {allDataOnglet === 1 ?
                            allUserData.filter(commu =>
                                commu.nom.toLowerCase().includes(searchQuery.toLowerCase())
                            ).map((user, index) => (
                                <div key={index} className="admin-user-item" onClick={() => toggleActive(user, null)}><img src={user.photo_url} alt="photo de profil" /> {user.nom} {user.prenom}
                                    {allBonAchatData
                                        .filter(ba => ba.statue === "en attente de validation")
                                        .filter(ba => ba.particulier_id === user.id).length !== 0 && (

                                            <div className="admin-user-item-nb-ba">{allBonAchatData
                                                .filter(ba => ba.statue === "en attente de validation")
                                                .filter(ba => ba.particulier_id === user.id).length}</div>
                                        )}
                                </div>
                            )) :
                            allCommunauteData.filter(commu =>
                                commu.nom.toLowerCase().includes(searchQuery.toLowerCase())
                            ).map((commu, index) => (
                                <div key={index} className="admin-commu-item" onClick={() => toggleActive(null, commu)}><img src={commu.photo_url} alt="photo de profil" /> {commu.nom}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="admin-main-info">
                    <div>
                        <div className="admin-user-commu-info">
                            {userActive && (
                                <>
                                    <img className='admin-user-commu-info-img' src={userActive.photo_url} alt="Photo de profil" />
                                    <div className='admin-user-commu-info-text'>
                                        <p>Nom : {userActive.nom}</p>
                                        <p>Prenom : {userActive.prenom}</p>
                                        <p>Adresse Mail : {userActive.email}</p>
                                        <p>Date de naissance : {formatDate(userActive.date_naissance)}</p>
                                        <p>Num Téléphone : {userActive.telephone}</p>
                                        <div style={{ display: "flex" }}>
                                            <div className="admin-edit-user" onClick={toggleEditModal}>Editer</div>
                                            <div className="admin-suppr-user" onClick={supprimerProfil}>Supprimer</div>
                                            <div className="admin-faire-cadeau" onClick={toggleFaireCadeauModal}>Faire un cadeau</div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {commuActive && (
                                <>
                                    <img className='admin-user-commu-info-img' src={commuActive.photo_url} alt="Photo de profil" />
                                    <div className='admin-user-commu-info-text'>
                                        <p>Nom : {commuActive.nom}</p>
                                        <p>Nombre membres : {commuActive.nb_membre}</p>
                                        <p>Description : {commuActive.description}</p>
                                        <div style={{ display: "flex" }}>
                                            <div className="admin-edit-user" onClick={toggleEditCommuModal}>Editer</div>
                                            <div className="admin-suppr-user" onClick={supprimerCommu}>Supprimer</div>
                                            <Link to='/home/tchat' className='admin-tchat-link'>Tchat</Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="admin-user-commu-more-info">
                            <div className="admin-user-commu-more-info-header">
                                {userActive && (
                                    <>
                                        <div
                                            className={moreDataOnglet === 1 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(1)}>Communauté</div>
                                        <div
                                            className={moreDataOnglet === 2 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(2)}>Cagnottes</div>
                                        <div
                                            className={moreDataOnglet === 3 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(3)}>Cadeaux</div>
                                        <div
                                            className={moreDataOnglet === 4 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(4)}>Bon d'Achat</div>
                                        <div
                                            className={moreDataOnglet === 5 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(5)}>Badges</div>
                                    </>
                                )}
                                {commuActive && (
                                    <>
                                        <div
                                            className={moreDataOnglet === 1 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(1)}>Membres</div>
                                        <div
                                            className={moreDataOnglet === 2 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(2)}>Demandes</div>
                                        <div
                                            className={moreDataOnglet === 3 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(3)}>Cagnottes</div>
                                        <div
                                            className={moreDataOnglet === 4 ? 'admin-user-commu-more-info-header-item aucihi-active' : 'admin-user-commu-more-info-header-item'}
                                            onClick={() => setMoreDataOnglet(4)}>...</div>
                                    </>
                                )}
                            </div>
                            <div className="admin-user-commu-more-info-content">
                                {userActive && (
                                    <>
                                        {moreDataOnglet === 1 && (
                                            <>{getCommunautesParUtilisateur(userActive.id).map((commu, index) => (
                                                <div key={index} className="admin-commu-item" onClick={() => toggleActive(null, commu)}>
                                                    <img src={commu.photo_url} alt="Photo de profil" />
                                                    {commu.nom}
                                                </div>
                                            ))}</>
                                        )}
                                        {moreDataOnglet === 2 && (
                                            <div className='admin-user-commu-more-info-content-cagnotte'>
                                                {getCagnotteParUtilisateur(userActive.id).map((cagnotte, index) => (
                                                    <CagnotteItem key={index} cagnotte={cagnotte} toggleCagnotteModal={() => toggleCagnotteModal(cagnotte)} />
                                                ))}
                                            </div>
                                        )}
                                        {moreDataOnglet === 3 && (
                                            <div>
                                                {getCadeauParUtilisateur(userActive.id).map((cadeau, index) => (
                                                    <CadeauItem key={index} cadeau={cadeau} />
                                                ))}
                                            </div>
                                        )}
                                        {moreDataOnglet === 4 && (
                                            <div>
                                                {getBonAchatParUtilisateur(userActive.id).map((ba, index) => (
                                                    <BonAchatItem key={index} ba={ba} />
                                                ))}
                                            </div>
                                        )}
                                        {moreDataOnglet === 5 && (
                                            <>
                                            <button className='admin-badge-btn-add' onClick={toggleModifBadgeModal}>Ajouter des badges</button>
                                                {getBadgeParUtilisateur(userActive.id).map((badge, index) => (
                                                    <div key={index} className="admin-badge-item">
                                                        <img src={BadgeArray[badge.id - 1]} alt="Photo du badge" />
                                                        <p>{badge.nom_badge}</p>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </>
                                )}
                                {commuActive && (
                                    <>
                                        {moreDataOnglet === 1 && (
                                            <>{getUtilisateursParCommunaute(commuActive.id).map((particulier, index) => (
                                                <MembreCommuItem key={particulier.id} gestion={true} commuActive={commuActive} particulier={particulier} toggle={() => { }} />
                                            ))}</>
                                        )}
                                        {moreDataOnglet === 2 && (
                                            <>{getUtilisateursParDemandeNonRepondue(commuActive.id).map((particulier, index) => (
                                                <DemandeAppartenirItem commuActive={commuActive} key={particulier.id} particulier={particulier} />
                                            ))}</>
                                        )}
                                        {moreDataOnglet === 3 && (
                                            <></>
                                        )}
                                        {moreDataOnglet === 4 && (
                                            <></>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="admin-right-info">
                        <div className="admin-right-info-header">
                            <p onClick={() => setRightInfoOnglet(1)}
                                className={rightInfoOnglet === 1 ? 'all-data-onglet' : ''}>Tchat</p>
                            <p onClick={() => setRightInfoOnglet(2)}
                                className={rightInfoOnglet === 2 ? 'all-data-onglet' : ''}>Bon d'Achat</p>
                        </div>
                        <div className="admin-right-info-content">
                            {rightInfoOnglet === 1 && (
                                <>
                                    {userActive && (
                                        <>
                                            {getTchatParUtilisateur(userActive.id).filter(msg => msg.sender_id === userActive.id).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((msg, index) => (
                                                <MessageItem admin={true} key={index} msg={msg} />
                                            ))}
                                        </>
                                    )}
                                </>
                            )}

                            {rightInfoOnglet === 2 && (
                                <>
                                    {userActive && allBonAchatData
                                        .filter(ba => ba.statue === "en attente de validation")
                                        .filter(ba => ba.particulier_id === userActive.id)
                                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                                        .map((ba, index) => (
                                            <BonAchatItem key={index} ba={ba} admin={true} />
                                        ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {openEditModal && <EditProfilModal user={userActive} toggle={toggleEditModal} />}
            {openEditCommuModal && <EditCommuModal commu={commuActive} toggle={toggleEditCommuModal} />}
            {openCreateUserModal && <CreateUserModal toggle={toggleCreateUserModal} />}
            {(openCagnotteModal && cagnotteActive) && <CagnotteModal toggleModal={toggleCagnotteModal} cagnotte={cagnotteActive} />}
            {openModifBadgeModal && <ModifBadgeModal badges={getBadgeParUtilisateur(userActive.id)} user={userActive} toggle={toggleModifBadgeModal} />}
            {openFaireCadeauModal && <FaireCadeauModal admin={true} toggle={toggleFaireCadeauModal}/>}
        </>
    )
}
