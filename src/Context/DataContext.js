import { createContext, useState, useEffect } from "react";
import axios from 'axios'

import { onAuthStateChanged } from 'firebase/auth'

import { auth } from "../firebase-config";
import { io } from 'socket.io-client';
const socket = io.connect('')

export const url = "https://api.powinoo.ovh"
export const urlAPI = "https://api.powinoo.ovh"



export const DataContext = createContext();

export function DataContextProvider(props) {

    const [currentUser, setCurrentUser] = useState()
    const [currentUserData, setCurrentUserData] = useState({})
    const [currentUserCommu, setCurrentUserCommu] = useState({})
    const [loadingData, setLoadingData] = useState(true)
    const [tchatActive, setTchatActive] = useState(null)
    const [MembreCadeauActive, setMembreCadeauActive] = useState(0)

    const [allUserData, setAllUserData] = useState([])
    const [allCommunauteData, setAllCommunauteData] = useState([])
    const [allAppartientData, setAllAppartientData] = useState([])
    const [alldemandeAppartenirData, setAllDemandeAppartenirData] = useState([])
    const [allTchatData, setAllTchatData] = useState([])
    const [allAvantageData, setAllAvantageData] = useState([])
    const [allCagnotteData, setAllCagnotteData] = useState([])
    const [allCadeauData, setAllCadeauData] = useState([])
    const [allBonAchatData, setAllBonAchatData] = useState([])
    const [allHistoriqueData, setAllHistoriqueData] = useState([])
    const [allBadgeData, setAllBadgeData] = useState([])
    const [allPossedeData, setAllPossedeData] = useState([])

    const [seeCommunaute, setSeeCommunaute] = useState(false)

    const toggleSeeCommunaute = () => {
        setSeeCommunaute(!seeCommunaute)
    }
    // Fonction pour obtenir les utilisateurs par communauté
    const getUtilisateursParCommunaute = (communauteId) => {
        const utilisateursCommunaute = allAppartientData.filter(
            (liaison) => liaison.communaute_id === communauteId
        );

        const utilisateursIds = utilisateursCommunaute.map(
            (liaison) => liaison.particulier_id
        );

        const utilisateursParCommunaute = allUserData.filter((utilisateur) =>
            utilisateursIds.includes(utilisateur.id)
        );

        return utilisateursParCommunaute;
    };
    // Fonction pour obtenir les utilisateurs par communauté
    const getCommunautesParUtilisateur = (particulierId) => {
        const utilisateursCommunaute = allAppartientData.filter(
            (liaison) => liaison.particulier_id === particulierId
        );

        const communautesIds = utilisateursCommunaute.map(
            (liaison) => liaison.communaute_id
        );

        const CommunauteParUtilisateur = allCommunauteData.filter((commu) =>
            communautesIds.includes(commu.id)
        );

        return CommunauteParUtilisateur;
    };
    // Fonction pour obtenir les utilisateurs par demande à appartenir
    const getUtilisateursParDemande = (communauteId) => {
        const utilisateursCommunaute = alldemandeAppartenirData.filter(
            (liaison) => (liaison.communaute_id === communauteId)
        );

        const utilisateursIds = utilisateursCommunaute.map(
            (liaison) => liaison.particulier_id
        );

        const utilisateursParCommunaute = allUserData.filter((utilisateur) =>
            utilisateursIds.includes(utilisateur.id)
        );

        return utilisateursParCommunaute;
    };
    // Fonction pour obtenir les utilisateurs par demande à appartenir non répondue
    const getUtilisateursParDemandeNonRepondue = (communauteId) => {
        const utilisateursCommunaute = alldemandeAppartenirData.filter(
            (liaison) => (liaison.communaute_id === communauteId && liaison.statue === null)
        );

        const utilisateursIds = utilisateursCommunaute.map(
            (liaison) => liaison.particulier_id
        );

        const utilisateursParCommunaute = allUserData.filter((utilisateur) =>
            utilisateursIds.includes(utilisateur.id)
        );

        return utilisateursParCommunaute;
    };
    // Fonction pour obtenir les tchat d'un utilisateur
    const getTchatParUtilisateur = (particulierId) => {
        const utilisateursTchat = allTchatData.filter(
            (tchat) => (tchat.sender_id === particulierId || tchat.receiver_id === particulierId ||
                getCommunautesParUtilisateur(currentUserData.id).map(c => c.id).includes(tchat.communaute_id))
        );

        return utilisateursTchat;
    };
    // Fonction pour obtenir les utilisateurs par communauté
    const getTchatParTchatActive = (tchatActive) => {
        const Tchat_TchatActive = getTchatParUtilisateur(currentUserData.id).filter(tchat => ((tchat.sender_id === tchatActive && tchat.receiver_id === currentUserData.id) || (tchat.sender_id === currentUserData.id && tchat.receiver_id === tchatActive) || (tchat.communaute_id === tchatActive && (tchat.sender_id === null || tchat.receiver_id) === null)))

        return Tchat_TchatActive;
    };
    // Fonction pour obtenir les gagnottes d'un utilisateur
    const getCagnotteParUtilisateur = (particulierId) => {
        const utilisateurCagnottes = allCagnotteData.filter(g => g.particulier_id === particulierId);
        return utilisateurCagnottes;
    }
    // Fonction pour obtenir les cadeaux d'un utilisateur
    const getCadeauParUtilisateur = (particulierId) => {
        const utilisateurCadeaux = allCadeauData.filter(c => c.receiver_id === particulierId);

        return utilisateurCadeaux;
    }
    const getBonAchatParUtilisateur = (particulierId) => {
        const utilisateurBonAchat = allBonAchatData.filter(ba => ba.particulier_id === particulierId)

        return utilisateurBonAchat;
    }
    const getHistoriqueParUtilisateur = (particulierId) => {
        const utilisateurHistorique = allHistoriqueData.filter(h => h.particulier_id === particulierId)

        return utilisateurHistorique;
    }
    const getHistoriqueParCagnotte = (cagnotteId) => {
        const cagnotteHistorique = allHistoriqueData.filter(h => h.cagnotte_id === cagnotteId)

        return cagnotteHistorique;
    }
    const getBadgeParUtilisateur = (particulierId) => {
        const utilisateursBadges = allPossedeData.filter(
            (liaison) => liaison.particulier_id === particulierId
        );

        const badgesIds = utilisateursBadges.map(
            (liaison) => liaison.badge_id
        );

        const BadgesParUtilisateur = allBadgeData.filter((badge) =>
            badgesIds.includes(badge.id)
        );

        return BadgesParUtilisateur;
    }

    // Fonction pour modifier la tchat active
    const updateTchatActive = (newValue) => {
        setTchatActive(newValue)
    }

    const updateMembreCadeauActive = (newValue) => {
        setMembreCadeauActive(newValue)
    }

    // Fonction qui récupère toutes les données
    const getData = async (currentUser) => {

        await axios.get(url + '/api/particulier')
            .then(response => {
                setAllUserData(response.data)
                if (currentUser) {

                    var UserData = response.data.find(user => user.email === currentUser.email)

                    if (UserData === undefined) {
                        // axios.get('/api/entreprise')
                        //     .then((response) => {
                        //         setIsEntreprise(true)
                        //         UserData = response.data.find(user => user.email === currentUser.email)
                        //         setCurrentUserData(UserData)
                        //     })
                    } else {
                        setCurrentUserData(UserData)
                        socket.emit('sendConnection', response.data.find(user => user.email === currentUser.email).id)
                    }

                    var appartientData = []

                    axios.get(url+ '/api/communaute') // Appel à l'Api
                        .then(res => { // dès qu'on a les résultat
                            setAllCommunauteData(res.data) // On le définit à une variable
                            setCurrentUserCommu(res.data.find(commu => commu.id === UserData.id_communaute))
                        })
                        .catch(console.error()) // En cas d'erreur, afficher l'erreur

                    axios.get(url+ '/api/appartient')
                        .then(response => {
                            setAllAppartientData(response.data)
                            appartientData = response.data
                        })
                        .catch(console.error())

                    axios.get(url+ '/api/tchat')
                        .then(response => {
                            setAllTchatData(response.data)
                            var ta = response.data.filter((tchat) => (
                                (appartientData.filter((liaison) => liaison.particulier_id === UserData.id).map(l => l.communaute_id).includes(tchat.communaute_id)) ||
                                (tchat.sender_id === UserData.id) ||
                                (tchat.receiver_id === UserData.id)
                            )
                            )[0]

                            if (ta.communaute_id && !ta.receiver_id) {
                                setTchatActive(ta.communaute_id) // Definie le tchatActive
                            }
                            if (ta.sender_id && ta.sender_id !== UserData.id && ta.receiver_id === UserData.id) {
                                setTchatActive(ta.sender_id) // Definie le tchatActive
                            }
                            if (ta.receiver_id && ta.receiver_id !== UserData.id && ta.sender_id === UserData.id) {
                                setTchatActive(ta.receiver_id) // Definie le tchatActive
                            }
                        })
                        .catch(console.error())
                }
            })
            .catch(console.error())

        await axios.get(url+'/api/demande_appartenir')
            .then(response => {
                setAllDemandeAppartenirData(response.data)
            })
            .catch(console.error())

        await axios.get(url+ '/api/avantage')
            .then(response => {
                setAllAvantageData(response.data)
            })
            .catch(console.error())

        await axios.get(url+ '/api/cagnotte')
            .then(response => {
                setAllCagnotteData(response.data)
            })
            .catch(console.error())

        await axios.get(url+ '/api/cadeau')
            .then(response => {
                setAllCadeauData(response.data)
            })
            .catch(console.error())

        await axios.get(url+'/api/bon_achat')
            .then(response => {
                setAllBonAchatData(response.data)
            })
            .catch(console.error())

        await axios.get(url+ '/api/historique')
            .then(response => {
                setAllHistoriqueData(response.data)
            })
            .catch(console.error())

        await axios.get(url+ '/api/badge')
            .then(response => {
                setAllBadgeData(response.data)
            })
            .catch(console.error())

        await axios.get(url+ '/api/possede')
            .then(response => {
                setAllPossedeData(response.data)
            })
            .catch(console.error())
    }

    const sendMessage = (newMsg) => {
        socket.emit('sendMessage', newMsg)

        const msg = {
            sender_id: newMsg.sender_id,
            receiver_id: newMsg.receiver_id,
            communaute_id: newMsg.communaute_id,
            message: newMsg.message
        }

        axios.post(url+ '/api/tchat', msg)
            .then((response) => {
                console.log(response.data);
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
            getData(currentUser)
        })

        return unsubscribe;
    }, [])

    const [usersConnected, setUsersConnected] = useState([])

    useEffect(() => {
        socket.on('userConnected', (usersConnected) => {
            setUsersConnected(usersConnected)
        })

        return () => {
            socket.disconnect()
        }
    }, [socket])

    useEffect(() => {
        socket.on('sendMessage', (newMsg) => {
            let newArr = [...allTchatData]
            newArr.push(newMsg)
            // console.log(newArr);
            setAllTchatData(newArr)
        })
    }, [socket, allTchatData])

    return (
        <DataContext.Provider value={{
            socket,
            usersConnected,
            currentUser,
            currentUserData,
            currentUserCommu,

            allUserData,
            allCommunauteData,
            allAppartientData,
            alldemandeAppartenirData,
            allTchatData,
            allAvantageData,
            allCagnotteData,
            allCadeauData,
            allBonAchatData,
            allHistoriqueData,
            allBadgeData,
            allPossedeData,

            getCommunautesParUtilisateur,
            getUtilisateursParCommunaute,
            getUtilisateursParDemande,
            getUtilisateursParDemandeNonRepondue,
            getTchatParUtilisateur,
            getTchatParTchatActive,
            getCagnotteParUtilisateur,
            getCadeauParUtilisateur,
            getBonAchatParUtilisateur,
            getHistoriqueParUtilisateur,
            getHistoriqueParCagnotte,
            getBadgeParUtilisateur,

            updateTchatActive,
            tchatActive,

            updateMembreCadeauActive,
            MembreCadeauActive,

            sendMessage,

            seeCommunaute,
            toggleSeeCommunaute
        }}>
            {!loadingData && props.children}
        </DataContext.Provider>
    )
}