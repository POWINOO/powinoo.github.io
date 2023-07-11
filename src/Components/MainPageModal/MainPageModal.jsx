import React from 'react'
import './MainPageModal.css'

import Badge1 from '../../assets/badge_Donateur.png'
import Badge2 from '../../assets/badge_Bénéficiaire.png'
import Badge3 from '../../assets/badge_Partenaire.png'
import Badge4 from '../../assets/badge_Bénévole.png'
import Badge5 from '../../assets/badge_Invité.png'
import Badge6 from '../../assets/badge_Adhérent.png'
import QRCode from '../../assets/qrcode.png'
import QRCodeAdhesion from '../../assets/qrcodeAdhésion.png'

export default function MainPageModal(props) {
  return (
    <div className='mainpagemodal'>
      <div className="mainpagemodal-bg"></div>
      <div className="mainpagemodal-content">
        <div className="mainpagemodal-close" onClick={props.toggle}></div>
        {props.texteIndex === 1 && (
          <div>
            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Slogan: "Bienfait pour vous ! "
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Notre slogan, au-delà du clin d’œil et de cette expression populaire présente dans la mémoire collective est
                pour l'association, un véritable engagement auprès des salariés du Précariat et des étudiants boursiers qui
                vivent en insécurité financière et alimentaire.

              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les Bienfaits de POWINOO...
                </span>
              </b>
            </p>

            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits de redonner le sourire
                </span>
              </b>
            </p>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                aux salariés du Précariat et aux étudiants boursiers
              </span>
            </p>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                pour développer leur estime de soi et leur confiance envers les autres
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits de valoriser les titres-restaurant périmés
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                des salariés en dons solidaires, éthiques et écologiques
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits du Pouvoir d'achat durable
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                pour mieux manger, se cultiver et faire du sport
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits de la reconnaissance et du sens
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                pour valoriser les salariés du Précariat
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits du bien-être au travail
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                pour valoriser la relation "employeur / employé"
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits pour les opérateurs
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                qui proposent à leurs clients et à leurs bénéficiaires
              </span>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                de valoriser leurs titres-restaurant périmés en bonne action
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits pour les salariés
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                qui font une bonne action en transformant
              </span>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                la part de leurs titres-restaurant périmés en dons
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits pour les entreprises
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                qui font une bonne action en transformant
              </span>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                la part de leurs titres-restaurant périmés en dons
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits pour les salariés
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                qui reçoivent une déduction fiscale de 66% de leurs dons
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits pour les entreprises
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                qui reçoivent une déduction fiscale de 60% de leurs dons
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits pour les salariés du Précariat
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                qui bénéficient de plus de Pouvoir d'achat <br />grâce à la bienveillance des donateurs
              </span>
            </p>
            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits pour les étudiants boursiers
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                qui bénéficient de plus de Pouvoir d'achat <br /> grâce à la bienveillance des donateurs
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits pour les commerçants et les artisans locaux
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                qui sont présents dans la boucle <br /> et chez qui les bons d'achat POWINOO sont valables
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Les bienfaits d'être badgés et identifiés
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                pour chaque membre de la communauté <br /> avec la possibilité d'obtenir jusqu'à 5 badges
              </span>
            </p>
            <br />
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous l'aurez compris, nous parlons des bienfaits de POWINOO pour tous les acteurs de la chaine de valeur, ou chacun est valorisé à chaque étape du processus créant une dynamique positive jusqu'aux bénéficiaires finaux qui se sentent valorisés,estimés, encouragés et qui retrouvent du Pouvoir d'achat pour mieux manger.
              </span>
            </p>
          </div>)}
        {props.texteIndex === 2 && (
          <div>

            <p className="Standard" style={{ textAlign: "left", marginTop: "20px" }}>
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Préambule...
                </span>
              </b>
            </p>
            <p className="Standard" style={{ textAlign: "left" }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                POWINOO est une association d'utilité sociale et solidaire d'intérêt Général. <br />
                Sa mission principale est de fournir gratuitement ses technologies et son logiciel Saas aux salariés du Précariat et aux étudiants boursiers, dans le but de redonner le sourire à chacun d'entre eux, en leur offrant de la reconnaissance, du sens et du nouveau pouvoir d'achat, sous forme de bons d'achat à la demande, valables chez les commerçants et artisans locaux de proximité sur le territoire des deux Savoie et plus largement sur la Région Auvergne-Rhône-Alpes.
              </span>
            </p>
            <br />
            <p className="Standard" style={{ textAlign: "left" }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                L'association à l'ambition de se développer sur ltout e territoire national Français, en s'organisant en un réseau associatif local pour ne laisser personne sur la touche.
              </span>
            </p>
            <br />
            <p className="Standard" style={{ textAlign: "left" }}>
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vos contributions volontaires sont notre unique sources de revenus pour faire vivre l'association et lui permettre de remplir ses missions et poursuivre ses objectifs.
                </span>
              </b>
            </p>

            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Pourquoi...
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                POWINOO est une association à but non lucratif de loi 1901, née de la volonté de ses deux cofondateurs Denis CHAUVINEAU & Christophe LUNATI, qui partagent la même vision d'une société meilleure depuis 25 ans et qui ont comme objectif avec POWINOO, de redonner le sourire aux salariés du Précariat et aux étudiants boursiers.
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Comment ?
                </span>
              </b>
            </p>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                En valorisant plus de 80 millions de titres-restaurant périmés chaque année, en nouveau Pouvoir d'achat durable, solidaire, responsable et écologique. Le but étant de permettre à ces populations de mieux manger, se cultiver et pratiquer une activité sportive en famille.
              </span>
            </p>

            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                C'est ce que l'association appelle
              </span>
            </p>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Le Coup de Pouce de POWINOO
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  À propos du Précariat...
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                C'est une nouvelle classe sociale qui se développe rapidement dans le monde entier et qui représente officiellement en France, une population de 2 millions de salariés qui vit dans l'insécurité financière et alimentaire et qui n'arrive pas à vivre dignement de son travail.
              </span>
            </p>

            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Malheureusement, certains experts tablent plutôt sur 3,7 millions de salariés issus de cette nouvelle classe sociale, sur 26 millions de salariés en France. Pire encore, 8% d'entre eux ont recours aux restos du coeur pour essayer de simplement "MANGER".
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  À propos des étudiants boursiers...
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                La France compte presque 3 millions d'étudiants en 2022 et les étudiants boursiers sur critères sociaux (BCS) en représentent 720 000.
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO est la première solution
                  <br />
                  de bons d'achat à la demande,
                  <br />
                  mais aussi de bon temps
                  <br />
                  et de bon sens...
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO
                  <br />
                  est accessible gratuitement depuis tous les écrans,
                  <br />
                  sans téléchargement, ni mise à jour
                  <br />
                  et sans publicité
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO
                  <br />
                  et tous ses partenaires sont basés en France,
                  <br />
                  respectent votre vie privée, vos données personnelles
                  <br />
                  et la RGPD
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vous l'avez rêvé ?
                  <br />
                  POWINOO l'a fait !
                </span>
              </b>
            </p>
          </div>)}
        {props.texteIndex === 3 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Comment ça marche...
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Le but premier de POWINOO c'est de redonner le sourire aux salariés du Précariat et aux étudiants boursiers en offrant à chacun d'entre eux une aide spécifique ponctuelle, sous conditions de critères, pour mieux se nourrir, se cultiver et pratiquer une activité sportive.
              </span>
            </p>

            <br />
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Bien se nourrir est d'une importance capitale sur le bien-être et les défenses immunitaires.  POWINOO accompagne ces populations pour sortir de cette insécurité alimentaire.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Le critère numéro 1 pour bénéficier du " <b>Coup de Pouce de POWINOO</b> ", c'est d'être un salarié issu du Précariat, cette nouvelle classe sociale qui regroupe des personnes qui sont en insécurité financière et alimentaire et n'arrivent pas à vivre dignement de leur travail.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Concernant les étudiants boursiers, les conditions d'éligibilité peuvent reposer sur différents critères à prendre en compte. Le niveau d'études, l'âge, les diplômes obtenus, le mérite individuel, la situation familiale et ses ressources.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Avec ses partenaires sociaux préscripteurs, présents sur tout le territoire, permettant un travail de proximité et de qualité, POWINOO identifie les bénéficiaires, pour leur offrir plus de Pouvoir d'achat en bons d'achat à la demande, valables chez tous les commerçants et les artisans locaux de proximité.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  La finalité de tout ça,
                  <br />
                  c'est de mieux manger, se cultiver
                  <br />
                  et pratiquer une activité sportive
                </span>
              </b>
            </p>

            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Le montant du <b>Coup de Pouce de POWINOO</b> dépend de la situation familiale et du nombre de personnes à charge de chaque bénéficiaire.
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Avec ses partenaires sociaux prescripteurs, POWINOO fait du sur-mesure pour mieux accompagner ses bénéficiaires.
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO s'adresse également aux étudiants boursiers sur critères sociaux !
                  <br />
                  Etudier et mal manger, ce n'est pas du meilleur effet !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Dans un premier temps, POWINOO s'occupe de cette population sur le territoire des deux Savoie, puis continue son déploiement sur les 12 départements en Auvergne-Rhône-Alpes, pour couvrir tout le territoire national, dans le but que personne ne reste sur la touche.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO, c'est vous... c'est nous !
                  <br />
                  On est tous POWINOO !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                La solution que propose POWINOO sur sa plateforme, repose sur une innovation technologique de bons d'achat à la demande, valables chez les commerçants et artisans locaux.

                Le système permet à chaque bénéficiaire, depuis son compte utilisateur de gérer ses cagnottes, pour créer à la demande, des bons d'achat durables et éthiques, valables chez les commerçants et artisans locaux de son choix.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vous ne le savez pas, mais vous l'avez déjà !
                  <br />
                  <br />
                  Oui, vous avez bien compris !!!
                  <br />
                  <br />
                  POWINOO est déjà dans votre poche
                  <br />
                  <br />
                  Comment ça ?
                  <br />
                  <br />
                  Vous avez une Carte Bleue ?
                  <br />
                  Vous avez un chéquier ?
                  <br />
                  Vous avez de la monnaie ?
                  <br />
                  <br />
                  Alors vous utilisez déjà POWINOO sans le savoir
                  <br />
                  <br />
                  Avec POWINOO, on peut tout acheter partout !
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                POWINOO vous permet de payer avec votre carte bleue, par chèque, en espèce, ou avec des cartes ou des chèques cadeaux.
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  C'est vous qui choisissez !
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Bref, la seule limite à POWINOO, ce sont les moyens de paiement acceptés par les commerçants et les artisans.
              </span>
            </p>

            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  -1-
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous créez votre bon d'achat à la demande <br />
                en indiquant chez qui vous souhaitez l'utiliser
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  -2-
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous vous rendez chez votre commerçant
                <br />
                ou artisan préféréen bas de chez vous
                <br />
                vous effectuez vos achats et vous payez votre facture
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  -3-
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                De retour chez vous
                <br />
                ou juste en sortant de chez le commerçant ou l'artisan
                <br />
                vous validez votre achat sur POWINOO
                <br />
                en suivant les instructions à l'écran et c'est parti !
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  -4-
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Votre achat et validé par POWINOO
                <br />
                et votre bon d'achat est confirmé
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  -5-
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous allez recevoir le remboursement
                <br />
                de votre bon d'achat directement sur votre compte bancaire
                <br />
                par un virement instantané
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  C'est validé, en 10 secondes c'est fait !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                POWINOO utilise l'Open Banking et la reconnaissance de facture pour vérifier que  vos achats correspondent bien aux cagnottes utilisées pour créer votre bon d'achat, puis valide votre achat et votre bon d'achat de manière automatique.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous pouvez supprimer un bon d'achat déjà créé
                <br />
                ou en attente de remboursement
                <br />
                en cliquant directement dessus
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Votre cagnotte est instantanément recréditée
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous pouvez créer un nouveau bon d'achat
                <br />
                avec les bonnes informations
                <br />
                pour qu'il fonctionne chez le bon commerçant ou artisan
              </span>
            </p>
            <br />


            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vous pouvez augmenter son montant
                  <br></br>
                  dans la limite de la cagnotte utilisée
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vous pouvez créer autant de bons d'achat
                  <br />
                  chez les commerçants et artisans de votre choix
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Par exemple, le vendredi vous préparez vos bons d'achat, pour faire vos courses le samedi chez vos commerçants et artisans préférés et profitez de votre nouveau pouvoir d'achat en famille.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Lorsque vous supprimez un bon d'achat en attente sur votre compte, la cagnotte correspondante et recrédité immédiatement et vous pouvez utiliser le nouveau solde de votre cagnotte pour créer un nouveau bon d'achat valable chez le commerçant et artisan de votre choix.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                S'offrir un resto, une journée à vélo, ou se détendre en famille dans un parc d'attraction, devient enfin possible avec:
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  "Le Coup de Pouce de POWINOO "
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Avec POWINOO vous avez la liberté de choisir et la seule limite,
                  <br />
                  c'est vous et les choix que vous allez devoir faire !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Le système POWINOO accompagne les bénéficiaires pour leur permettre de varier les plaisirs, les activités et vivre une vie plus enrichissante et valorisante au quotidien.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Pour chaque cagnotte utilisée, le bénéficiaire crée à la demande un bon d'achat durable et valable chez le commerçant ou artisan de son choix.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                POWINOO propose le plus grand réseau de commerçants et artisans de proximité.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Si par exemples...
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous voulez aller chez le coiffeur en bas de chez vous ?
                <br />
                pas de problème
                <br />
                créez votre bon d'achat en trois clics
                <br />
                voilà, il ne vous reste plus qu'à prendre rendez-vous
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous voulez faire vos courses dans un magasin BIO ?
                <br />
                Pas de problème
                <br />
                créez votre bon d'achat en trois clics et c'est parti !
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous souhaitez vous faire un ciné ce soir ?
                <br />
                Pas de problème là encore
                <br />
                créez votre bon d'achat en trois clics
                <br />
                rendez-vous dans votre cinéma préféré
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Bref, vous l'aurez compris, <b>POWINOO c'est vraiment bienfaits pour vous !</b>
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO vous accompagne partout
                  <br />
                  et surtout
                  <br />
                  ou c'est important pour vous !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Les différentes cagnottes disponibles sur POWINOO sont dédiées à différents univers.
                <br />
                Choisissez celui de votre choix et créez votre bon d'achat !
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Toutes les cagnottes POWINOO ont été créées pour redonner le sourir, favoriser l'inclusion sociale et booster l'emploi local !
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Découvrez toutes les cagnottes disponibles sur POWINOO
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Cagnotte Resto
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Pour enfin sortir en famille et se faire un resto,
                <br />
                mais aussi faire ses courses pour mieux manger
                <br />
                chez des commerçants et artisans locaux
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Cagnotte Cadeau
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Pour tout acheter partout,
                <br />
                faire ses courses,
                <br />
                s'offrir une journée dans un parc d'attraction
                <br />
                etc.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  La seule limite à cette cagnotte:
                  <br />
                  c'est son montant disponible !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  La seule difficulté à cette gagnotte:
                  <br />
                  c'est que vous allez devoir faire des choix !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Cagnotte Sport
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Pour pratiquer une activité sportive en famille et se détendre
                <br />
                La pratique d'une activité sportive développe son bien-être,
                <br />
                favorise la cohésion sociale,
                <br />
                facilite l'inclusion sociale,
                <br />
                permet de tisser des liens,
                <br />
                et booste l'emploi local
              </span>
            </p>

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Cagnotte Culture
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                La culture est indispensable au développement de chacun d'entre nous
                <br />
                Elle peut prendre différentes formes
                <br />
                Chacun doit trouver la manière de se cultiver qui lui correspond
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Avec la cagnotte Culture de POWINOO,
                <br />
                vous pouvez assister à un match de foot,
                <br />
                ou bien aller à l'Opéra...
                <br />
                c'est à vous de faire les bons choix !
                <br />
                <br />
                Avec la cagnotte Culture de POWINOO,
                <br />
                vous pouvez aussi vous offrir une séance de ciné,
                <br />
                acheter un livre,
                <br />
                visiter un musée,
                <br />
                assister à un concert,
                <br />
                ou encore une pièce de théâtre
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vous avez envie de quoi ?
                  <br />
                  POWINOO est là pour ça...
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontSize: "16.0px", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vous permettre de faire les bons choix !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                C'est vous qui décidez de la manière dont vous souhaitez consommer de la culture au quotidien et POWINOO vous accompagne dans vos choix.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Cagnotte Vacances
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Parce qu'il est important de changer d'horizon au moin une fois par an,
                <br />
                la cagnotte Vacances de POWINOO est faite pour vous !
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Et si vous partiez vous détendre en famille au bord de la mer par exemple....
                <br />
                Quelque soit vos choix, POWINOO est là pour ça !
              </span>
            </p>
            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Cagnotte Transport
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                La cagnotte Transport vous permet de vous déplacer ou vous voulez,
                <br />
                en toute sécurité et en respectant la biodiversité !
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Pour vous déplacer de manière durable en utilisant les transports en commun,
                <br />
                le vélo à assistance électrique ou pas, ou encore le covoiturage,
                <br />
                POWINOO vous transporte !
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Cagnotte Anniversaire
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                C'est un jour important pour vous et vos proches...
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontSize: "16.0px", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO fête votre Anniversaire !
                </span>
              </b>
            </p>
            <br />


            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>

                Le jour de votre anniversaire,
                <br />
                regardez sur POWINOO,
                <br />
                vous avez sûrement reçu un cadeau !
                <br />
                <br />
                Alors "Joyeux Anniversaire" à vous !
                <br />
                <br />
                POWINOO fête les anniversaires de ses bénéficiaires, qui peuvent à leur tour, fêter les anniversaires des autres membres de la communauté !
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Le jour Anniversaire de POWINOO c'est le 27 février !
                </span>
              </b>
            </p>
            <br />
            <p className="Standard">
              <b>
                <span style={{ fontSize: "16.0px", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vous pouvez lui souhaiter
                </span>
              </b>
            </p>
            <br />


            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Être membre de la communauté POWINOO
                <br />
                c'est déjà un priviliège
                <br />
                et c'est faire partie d'une grande famille
                <br />
                <br />
                Chaque membre de la communauté
                <br />
                peut échanger avec tous les autres membres
                <br />
                via le réseau social présent sur la plateforme
                <br />
                <br />
                Chaque membre de la communauté POWINOO
                <br />
                est identifié par un badge
                <br />
                <br />
                Ainsi, un bénéficiaire peut remercier un donateur et inversement, un donateur peut échanger avec un bénéficiaire et se rendre compte concrètement que son don sert vraiment à améliorer la vie d'un salarié pauvre, ou d'un étudiant boursier
                <br />
                POWINOO garantit la totale transparence pour tous ses membres et chacun peut se rendre compte de l'utilité sociale de sa démarche, pour une société meilleure
                <br />
                Chaque membre peut créer sa propre communauté, il en devient alors l'administrateur et peut inviter directement de nouveaux membres (amis, famille, collègues, etc.) à la rejoindre
                <br />
                Tous ensemble, ils peuvent échanger via le tchat en temps réel et les bénéficiaires de la solution POWINOO peuvent même offrir des cadeaux à leurs membres depuis leurs cagnottes et ainsi de suite...
                <br />
                Tous les membres de toutes les communautés présents sur POWINOO, peuvent également discuter en message privé
                <br />
                Si vous n'avez pas rejoint une communauté
                <br />
                vous ne pouvez pas discuter et échanger avec ses membres.
                <br />
                <br />
                Vous pouvez alors demander à la rejoindre
                <br />
                En ayant un compte membre actif, vous faites partie de la grande communauté POWINOO, mais vous pouvez en rejoindre d'autres. Il vous suffit de regarder toutes les communautés présentes sur la plateforme et de faire une demande de "rejoindre" auprès de celles que vous voulez. Une fois que votre demande est acceptée par son administrateur, vous devenez un nouveau membre de cette communauté et ainsi de suite...
                <br />
                Les 6 badges de la collection POWINOO permettent d'identifier les différents membres présents sur la communauté POWINOO
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontSize: "20.0px", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  ATTENTION
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontSize: "20.0px", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Si vous présentez des factures ne correspondant pas à votre bon d'achat, il sera refusé par le système
                  <br />
                  <br />
                  Si vous essayez de présenter de fausses factures, elles seront détectées par notre IA et refusées par le système
                  <br />
                  <br />
                  POWINOO ne pourra rien faire pour vous !
                  <br />
                  <br />
                  Les sanctions pour non respect envers POWINOO
                  <br />
                  peuvent être très grave pour vous
                  <br />
                  <br />
                  Vous pourriez recevoir un avertissement
                  <br />
                  <br />
                  Votre compte pourrait être suspendu
                  <br />
                  pendant plusieurs jours
                  <br />
                  <br />
                  Les sanctions vont jusqu'à la radiation définitive
                  <br />
                  La suppression de votre compte
                  <br />
                  La perte totale du montant de vos cagnottes
                  <br />
                  encore disponibles...
                  <br />
                  <br />
                  Tout cela serait vraiement dommage,
                  <br />
                  alors que POWINOO est fait pour vous !
                </span>
              </b>
            </p>
            <br />
            <br />
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontSize: "16.0px", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  La collection des badges POWINOO
                </span>
              </b>
            </p>
            <br />

            <div>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge1} alt="Badge 1" /> Donateur</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge2} alt="Badge 1" /> Bénéficiaire</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge3} alt="Badge 1" /> Partenaire</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge4} alt="Badge 1" /> Bénévole</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge5} alt="Badge 1" /> Bienfaiteur</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge6} alt="Badge 1" /> Adhérent</span></b>
              </p>
            </div>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Un même membre peut bénéficier de plusieurs badges !
                <br />
                <br />
                Si vous êtes bénévole et adhérent, vous avez deux badges
                <br />
                <br />
                Si vous êtes donateur, bénévole et adhérent, vous avez trois badges
                <br />
                <br />
                Si vous êtes partenaire, donateur, bénévole et adhérent, vous avez quatre badges
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Et vous, vous avez envie de combien de Badges ?
                  <br />
                  C'est à vous de jouer et de participer !
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Les membres invités
                <br />
                directement par des communautés privées
                <br />
                ne bénéficient pas de badge
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                En conclusion...
              </span>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Avec POWINOO, toute la chaine de valeur et tous les acteurs des avantages sociaux sont valorisés.
                <br />
                <br />

                Avec ses partenaires qui opèrent dans le secteur des avantages sociaux, POWINOO permet de valoriser les titres-restaurant périmés des salariés, ce qui représentent en 2022 plus de 80 millions de titres-restaurant perdus par les entreprises et leurs salariés.
                <br />
                <br />

                Les acteurs qui opèrent les avatanges sociaux pour le compte de leurs clients et de leurs bénéficiaires permettent à ces derniers, de transformer leurs titres-restaurant périmés en dons, pour faire une bonne action.
                <br />
                <br />

                Ces dons sont ensuite versés à l'association qui les transforme en Pouvoir d'achat supplémentaire auprès de la population de salariés de cette nouvelle classe sociale "Le Précariat".
                <br />
                <br />

                Les donateurs (entreprises, associations, collectivités et les salariés)
                <br />
                En faisant ce don à l'association, le salarié qui valorise ses titres-restaurant périmés, fait une bonne action et récupère 66% de son montant sous la forme d'une déduction fiscale.
                <br />
                <br />

                En faisant ce don à l'association, l'entreprise, l'association, ou encore la collectivité valorise sa part de ces titres-restaurant périmés, fait une bonne action et récupère 60% de son montant sous la forme d'une déduction fiscale.
                <br />
                <br />

                L'association transmet à chaque donnateur un reçu fiscal. Ce document permet de bénéficier d'une réduction d'impôt. Le but est d'encourager la générosité des donateurs.
                <br />
                <br />

                Les organismes d'intérêts générals ou d'utilité publique peuvent proposer aux donateurs de bénéficier d'une réduction fiscale.
                <br />
                <br />

                Les bénéficiaires...
                <br />
                Enfin, les bénéficiaires et leur famille de cette belle chaine de solidarité, bénéficient de plus de pouvoir d'achat, pour mieux manger, se cultiver et pratiquer une activité sportive.
                <br />
                <br />

                Tous ensemble, nous redonnons le sourire à cette population de salariés et à leur famille et nous leur offront plus de reconnaissance et de sens, pour les encourager à continuer de travailler et à ne surtout pas se démotiver, se décourager, ou encore à tout lâcher.
              </span>
            </p>














          </div>)}
        {props.texteIndex === 4 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Raison d'être...
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Bonjour les amis,
                <br />
                <br />
                Je m'appelle POWINOO est ma raison d'être est de redonner le sourire aux salariés du Précariat et à leur famille, mais aussi aux étudiants boursiers, en offrant à chacun d'entre eux plus de pouvoir d'achat, de reconnaissance et de sens.
                <br />
                <br />
                L'association est à but non lucratif de loi 1901, d'utilité et d'innovation sociale, solidaire et durable et vise un but social d'Intérêt Général.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Comment ?
                </span>
              </b>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                En valorisant plus de 80 millions de titres-restaurant périmés chaque année, sous forme de dons, dans le but de faire bénéficier les salariés du Précariat et les étudiants boursiers de plus de Pouvoir d'achat durable, solidaire et écologique, pour mieux manger, se cultiver et pratiquer une activité sportive en famille.
                <br />
                <br />
                C'est une aide spécifique et ponctuelle, allouée aux bénéficiaires sur critères sociaux. Cette aide peut-être renouvelée une fois au cours de la même année.
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  C'est ce que l'association appelle
                </span>
              </b>
            </p>
            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  "Le Coup de Pouce POWINOO"
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  À propos des salariés du Précariat...
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                La France compte 26 millions de salariés et le précariat, cette nouvelle classe sociale qui se développe dans le monde entier, représente 2 millions de salariés qui sont en insécurité financière et alimentaire et qui n'arrivent pas à vivre dignement de leur travail.
                <br />
                <br />
                Malheureusement, certains experts tablent plutôt sur 3,7 millions de salariés issus de cette nouvelle classe sociale, sur 26 millions de salariés en France. Pire encore, 8% d'entre eux ont recours aux restos du coeur pour essayer de joindre péniblement les deux bouts.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  À propos des étudiants boursiers..
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                La France compte presque 3 millions d'étudiants en 2022 et les étudiants boursiers sur critères sociaux (BCS) en représentent 720 000.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Le mot du Président
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <i>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Dans un contexte actuel difficile à vivre, nous souhaitons participer à une vie meilleure pour chacun d'entre nous. Notre souhait avec POWINOO, c'est d'offrir du pouvoir d'achat supplémentaire aux salariés du Précariat, cette nouvelle classe sociale qui regroupe des salariés qui vivent en insécurité financière et alimentaire et qui n'arrivent pas à vivre dignement de leur travail.
                  <br />
                  <br />
                  Cette idée là est juste insupportable à entendre!
                  <br />
                  <br />
                  Dans un pays moderne comme le notre, ne pas arriver à vivre de son travail n'est juste pas acceptable.
                  <br />
                  <br />
                  L'association veut encourager les salariés du Précariat, pour leur offrir du Pouvoir d'achat solidaire et éthique, mais aussi de la reconnaissance et du sens !
                </span>
              </i>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Le mot de POWINOO
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <i>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Coucou les amis, c'est POWINOO !
                  <br />
                  <br />
                  Ensemble, je veux qu'on redonne le sourire aux étudiants boursiers et aux salariés pauvres.
                  <br />
                  <br />
                  Sourire, c'est déjà montrer qu'on va mieux et qu'on veut partager !
                  <br />
                  <br />
                  Bien manger pour mieux étudier
                  <br />
                  Bien manger pour mieux travailler
                  <br />
                  <br />
                  Travailler et ne pas arriver à vivre dignement...
                  <br />
                  Etudier dans de mauvaises conditions...
                </span>
              </i>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Faut pas exagère quand même !
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous l'avez compris les amis...c'est la merde !
                <br />
                <br />
                Alors rejoins-moi vite, qu'on redonne ensemble le sourir à tous ces étudiants et ces salariés et à leur famille !
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO...c'est Bienfait pour vous !
                </span>
              </b>
            </p>
          </div>)}
        {props.texteIndex === 5 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOO Collecte...
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Le programme "POWINOO COLLECT" a été créé pour valoriser tous les acteurs du secteur des avantages sociaux en France.
                <br />
                <br />
                Les opérateurs des avantages sociaux peuvent proposer à leurs clients et à leurs salariés bénéficiaires, de transformer leurs titres-restaurant périmés en dons pour POWINOO.
                <br />
                <br />
                Les entreprises et leurs salairés peuvent faire une bonne action et récupérer 60% de leur don en déduction fiscale pour les entreprises et 66% pour les salariés.
                <br />
                <br />
                Les opérateurs transforment tous ces titres-restaurant périmés offerts en euros, que POWINOO distribuent aux bénéficiaires qui ont été identifiés avec ses partenaires sociaux prescripteurs sur le territoire des deux Savoie dans un premier temps, sur la Région Auvergne-Rhône-Alpes dans un second temps, pour se dépoyer sur l'ensemble du territoire français dans un troisième temps. Le but est que personne ne reste au bord du chemin.
                <br />
                <br />
                Les bénéficiaires reçoivent un mail de validation et peuvent créer leur compte sur la plateforme POWINOO.
                <br />
                <br />
                POWINOO leur verse le montant de l'aide "Coup de Pouce" attribué et réparti dans une ou plusieurs cagnottes.
                <br />
                <br />
                Chaque bénéficiaire peut depuis son compte créer à la demande des bons d'achat durables, depuis une ou plusieurs cagnottes disponibles depuis leur compte, pour les consommer chez les commerçants et artisans locaux de leurs choix.
                <br />
                <br />
                POWINOO offre plus de pouvoir d'achat, mais aussi plus de reconnaissance et de sens.
                <br />
                <br />
                Depuis son compte membre de la communauté POWINOO, chaque bénéficiaire peut accéder au réseau social et discuter avec tous les autres membres.
                <br />
                <br />
                Chacun peut envoyer un message et discuter en privé avec un membre en particulier.
                <br />
                <br />
                Les donateurs particuliers ou entreprises ont la possibilité de créer également leur compte et de rejoindre les membres de la communauté POWINOO.
                <br />
                <br />
                Chacun peut échanger avec tout les autres membres, ou avec un ou plusieurs membres en particulier.
                <br />
                <br />
                POWINOO est aussi un réseau social qui permet aux bénéficiaires de remercier en direct les donateurs et aux donateurs de pouvoir échanger avec un bénéficiaire.
                <br />
                <br />
                Depuis son compte membre, chacun peut faire un cadeau à un autre membre de la communauté POWINOO, pour remercier, encourager, féliciter, ou encore fêter un anniversiare. Toutes les cagnottes sont utilisables pour faire un cadeau et en plus, vous pouvez rajouter un petit message personnalisé.
                <br />
                <br />
                Enfin, chaque membre de la communauté POWINOO peut créer sa propre communauté, l'administrer librement, pour y inviter, des amis, des collègues, ou encore de la famille et leurs offrir des cadeaux en utilisant les cagnottes présentes sur son tableau de bord.
                <br />
                <br />
                Vous l'aurez compris, POWINOO c'est vraiement Bienfaits pour vous !
              </span>
            </p>
          </div>)}
        {props.texteIndex === 6 && (
          <div>
            <p className="Standard">
              <b>
                <span style={{ fontSize: "16pt", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  POWINOODON
                </span>
              </b>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                En faisant un don à l'association, vous vous inscrivez dans une démarche positive pour faire évoluer la société. Vous devenez un acteur du changement et vous rejoignez la communauté POWINOO.
                <br />
                <br />
                Vous devenez "Membre donateur" et êtes identifié grâce à votre badge par tous les autres membres, avec qui vous pouvez discuter via notre réseau social.
                <br />
                <br />
                En cliquant sur ce bouton, vous pouvez soutenir l'action de POWINOO en faisant un Don à l'association pour la soutenir et l'accompagner dans ses missions.
                <br />
                <br />
                C'est très simple: cliquez ici et c'est parti !
                <br />
                Avec notre partenaire HelloAsso qui utilise les meilleures pratiques, vous allez pouvoir faire votre don et payer en ligne en toute sécurité.
              </span>
            </p>
            <br />
            <iframe id="haWidget" allowtransparency="true" src="https://www.helloasso.com/associations/association-powinoo/formulaires/1/widget-bouton" style={{ width: "100%", height: "70px", border: "none" }}></iframe>
            <br />
            <img src={QRCode} alt="QR Code pour faire un don" style={{ width: "60%", height: "auto" }} />
          </div>)}
        {props.texteIndex === 7 && (
          <div>
            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Rejoindre le mouvement...
                </span>
              </b>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Vous souhaitez rejoindre cette belle aventure sous différentes formes:
                <br />
                <br />
                L'association POWINOO est ouverte à tous et pas seulement aux « initiés » ou aux porteurs de solutions.
                <br />
                <br />
                Nous souhaitons tous une société meilleure qui fait de l'inclusion, sa raison d'être. On a tous autour de nous un proche, une connaissance qui vit dans l'insécurité financière et alimentaire tout en travaillant, l'empéchant de vivre dignement de son travail.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Vous n'en connaissez pas ?
                  <br />
                  Vous en êtes certains...
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Les salariés du Précariat, cette nouvelle classe sociale, en dit long sur notre société qui doit encore faire beaucoup d'efforts pour faire de l'inclusion sa raison d'être.
                <br />
                <br />
                Ces personnes sont des salariés qui n'arrivent pas à vivre dignement de leur travail et qui ne le font pas savoir, mais ils sont autour de nous. Pire encore, 8% d'entre eux ont recours aux restos du coeur pour joindre les deux bouts.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Alors, vous êtes toujours sûr de vous ?
                  <br />
                  Vous ne connaissez toujours personne de cette classe sociale ?
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                En France, sur 26 millions de salariés, officiellement 2 millions d'entre eux font partis de cette nouvelle classe sociale, mais certains experts tablent plutôt sur 3,7 millions de salariés.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Et on parle des étudiants qui n'arrivent pas à se nourrir correctement ?
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Ils étaient 720 000 en 2022 et on a tous découvert cette situation au moment de la COVID.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  C'est normal ça ?
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <i>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Un étudiant doit bien manger, se divertir et partiquuer une activité sportive pour bien étudier !
                  <br />
                  <br />
                  Rejoignez POWINOO pour porter ensemble nos missions à l'attention de cette population !
                </span>
              </i>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  TARIFS ET CONDITIONS D'ADHÉSION
                </span>
              </b>
            </p>
            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Particuliers, entreprises, Institutionnels, acteurs économiques du territoire, quel que soit votre vision sur ces problématiques, passez à l’action en adhérant à l’association.
                <br />
                <br />
                <b>Pour les particuliers</b>, les versements (adhésion ou dons) ouvrent droit à une réduction d’impôt sur le revenu égal à 66 % des sommes versées, dans la limite de 20 % du revenu imposable. Par exemple, pour un versement de 100 € votre adhésion ne vous coûtera que 44 € après déduction fiscale.
                <br />
                <br />
                <b>Pour les entreprises</b>, les versements ouvrent droit à une réduction d’impôt de 60 % de leur montant, dans la limite de 5‰ du chiffre d’affaires. Ils doivent être comptabilisés au compte comptable 6238 « dons aux œuvres ». Pour un versement de 1000 € votre adhésion ne vous coûtera que 400 € après déduction fiscale.
              </span>
            </p>
            <br />
            <iframe id="haWidget" allowtransparency="true" src="https://www.helloasso.com/associations/association-powinoo/adhesions/devenir-membre/widget-bouton" style={{ width: "100%", height: "70px", border: "none" }}></iframe>
            <br />
            <img src={QRCodeAdhesion} alt="QR Code pour faire un don" style={{ width: "60%", height: "auto" }} />

          </div>)}
        {props.texteIndex === 8 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Missions de POWINOO...
                </span>
              </b>
            </p>

            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Je m'appelle POWINOO, je suis une association de loi 1901, d'utilité et d'innovation sociale et durable sur le territoire des deux Savoie et plus largement en Auvergne-Rhône-Alpes. L'objectif à terme est de déployer les actions de l'association sur tout le territoire français, pour ne laisser personne sur la touche.
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Nos trois missions principales...
                </span>
              </b>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  1 - Éduquer      2 - Collecter       3 - Accompagner
                </span>
              </b>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>- 1 -</b>
                <br />
                Nous souhaitons <b>éduquer</b>, informer et sensibiliser les salariés du Précariat et les étudiants boursiers, sur les sujets de l'alimentation, de la pratique d'une activité sportive et de l'importance de la culture.
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Bien manger,
                  <br />
                  pour cultiver sa force morale et sa force physique,
                  <br />
                  pour être bien dans vie
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Des conseils pour bien manger et mieux consommer. L'importance de l'équilibre alimentaire pour être mieux dans son corps et dans sa tête. Proposer des recettes de grands Chefs et des conseils nutritionnels. Proposer des cours et des conseils de coach sportif, pour être bien dans son corps. Dans ce triptyque du bien-être, la culture n'est pas en reste. Les bénéficiaires pourront accéder à la culture avec un grand "C", pour assister à un match de foot, ou à un Opéra, en passant par la possibilité de s'offrir une place pour un bon film, une pièce de théâtre, acheter un livre, bref, la culture accessible à tous et sous toutes les formes.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>- 2 -</b>
                <br />
                Avec le programme "<b>POWINOO COLLECT</b>", nous souhaitons collecter les Titres-Restaurant périmés auprès des salariés qui en bénéficient, les transformer sous forme de dons avec nos partenaires, pour les valoriser et les partager avec les salariés du "Précariat", cette nouvelle classe sociale qui vit en insécurité financière et alimentaire et n'arrive pas à vivre dignement de son travail.
                <br />
                <br />
                Les étudiants boursiers bénéficient également de cette aide ponctuelle spécifique, pour permettre à chacun de mieux manger, pour mieux étudier.
                <br />
                <br />
                Sur l'année 2022, ce sont plus de 80 millions de titres-restaurant périmés qui ne peuvent plus être utilisés par les salariés.
                <br />
                <br />
                En effet, les Titres-restaurant ont une validité de n+1, soit un an et 1 mois pour les
                <br />
                chèques-restaurant en version papier et n+2, soit un an et 2 mois pour les titres-restaurant dématérialisés.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>- 3 -</b>
                <br />
                Nous souhaitons <b>accompagner</b> ces populations fragiles qui travaillent, pour offrir à chacun plus de pouvoir d'achat, pour mieux se nourrir, se divertir et faire du sport.
                <br />
                <br />
                POWINOO propose une solution technologique d'innovation sociale, ou chacun devient un membre à part entière de la communauté, pour plus de reconnaissance et de sens.
                <br />
                <br />
                POWINOO propose la première solution de bons d'achat à la demande durables, valables chez les commerçants et artisans locaux de proximité. Depuis son compte utilisateur, chaque bénéficiaire peut créer à la demande un bon d'achat durable pour mieux manger, mais aussi se divertir et pratiquer une activité sportive en famille.
                <br />
                <br />
                Vous l'aurez compris, notre but est de valoriser toute la chaine de valeur de cet avantage social préféré des salariés, en offrant de la reconnaissance, du sens et plus de pouvoir d'achat aux salariés issus de cette nouvelle classe sociale "le Précariat".
                <br />
                <br />
                Dans la triste conjoncture actuelle, une nouvelle classe sociale est née, le “Précariat” !
                <br />
                <br />
                Cette nouvelle classe sociale représente officiellement 2 millions de salariés qui vivent dans l'insécurité financière, mais certains spécialistes tablent plutôt sur le chiffre de 3,7 millions de salariés.
                <br />
                <br />

                Cette population n'arrive pas à vivre dignement de leur travail et 8% d'entre eux ont même recours aux restos du cœur.
              </span>
            </p>
          </div>)}
        {props.texteIndex === 9 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Particulier...
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                La plateforme POWINOO est accessible gratuitement depuis tous les écrans, sans téléchargement, ni mise à jour et sans publicité.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>Vous êtes un particulier...</b>
                <br />
                <br />
                <b>Vous pouvez rejoindre l'association en tant que membre actif</b>
                <br />
                et participer à cette belle aventure humaine
                <br />
                <br />
                <b>Vous pouvez soutenir l'association en faisant un don à POWINOO</b>
                <br />
                pour l'accompagner dans ses missions et ses objectifs
                <br />
                <br />
                <b>Vous pouvez participer au programme "POWINOO COLLECT"</b>
                <br />
                qui permet de valoriser les titres-restaurants périmés
                <br />
                sous forme de dons à l'association
                <br />
                qui les transforme ensuite en nouveau pouvoir d'achat
                <br />
                au bénéfice de chaque salarié issu du Précariat
                <br />
                et de chaque étudiant boursier
                <br />
                <br />
                Le but étant d'offrir plus de reconnaissance, de sens et de pouvoir d'achat, aux salariés du précariat et aux étudiants boursiers.
                <br />
                <br />
                Permettre à ces populations de mieux manger, se divertir et pratiquer une activité sportive en famille.
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>Vous pouvez rejoindre l'association en tant que bénévole</b>
                <br />
                et partager avec POWINOO ses missions et ses objectifs
                <br />
                pour rendre la société meilleure et faire de l'inclusion, un mode de vie
                <br />
                <br />
                <b>Quelque soit votre choix</b>
                <br />
                il y a toujours une manière d'accompagner POWINOO !
                <br />
                <br />
                <b>Pour vous remercier</b>
                <br />
                POWINOO vous invite à rejoindre sa communauté
                <br />
                <br />
                <b>Comment ?</b>
                <br />
                <br />
                En vous créant un compte utilisateur
                <br />
                qui vous permet de discuter avec tous les autres membres
                <br />
                (les bénéficiaires, les donateurs, les bénévoles, les partenaires,
                <br />
                les adhérents et POWINOO).
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>La solution POWINOO est faite pour vous !</b>
                <br />
                <br />
                Vous pouvez discuter en privé avec un autre membre, par exemple un bénéficiaire de la solution POWINOO et lui poser vos questions.
                <br />
                <br />
                POWINOO est 100% transparent, de sorte que si vous avez fait un don directement à l'association, ou en participant au programme "POWINOO COLLECT", vous pouvez vérifier en direct auprès d'un bénéficiaire salarié ou d'un étudiant boursier, qu'il en est bien le destinataire et que votre don lui fait du bien au quotidien.
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>Avec votre compte membre</b>
                <br />
                <br />
                Vous pouvez également créer votre propre communauté
                <br />
                et l'administrer comme vous voulez
                <br />
                <br />
                Vous pouvez envoyer vos invitations
                <br />
                pour que de nouveaux membres vous rejoignent.
                <br />
                <br />
                Vous pouvez inviter des membres présents sur POWINOO
                <br />
                ou en inviter d'autres, de l'extérieur, à rejoindre votre communauté privée
                <br />
                <br />
                Vous pouvez également rejoindre
                <br />
                d'autres communautés présentes sur la plateforme.
                <br />
                <br />
                Chaque communauté possède son propre tchat pour disctuer entre les membres d'une même communauté, avec toujours la possibilité de discuter avec un membre en privé.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontSize: "16.0pt", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Collection des badges POWINOO
              </span>
            </p>
            <br />

            <div>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge1} alt="Badge 1" /> Donateur</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge2} alt="Badge 1" /> bénéficiaire</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge3} alt="Badge 1" /> Partenaire</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge4} alt="Badge 1" /> Bénévole</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge5} alt="Badge 1" /> Bienfaiteur</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge6} alt="Badge 1" /> Adhérent</span></b>
              </p>
            </div>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Un même membre peut bénéficier de plusieurs badges !
                <br />
                <br />
                Si vous êtes bénévole et adhérent, vous avez deux badges
                <br />
                <br />
                Si vous êtes donateur, bénévole et adhérent, vous avez trois badges
                <br />
                <br />
                Si vous êtes partenaire, donateur, bénévole et adhérent, vous avez quatre badges
                <br />
                <br />
                <b>
                  Et vous, vous avez envie de combien de Badges ?
                  <br />
                  C'est à vous de jouer et de participer !
                </b>
                <br />
                <br />
                Les membres invités
                <br />
                directement par des communautés privées
                <br />
                ne bénéficient pas de badge
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>En conclusion...</b>
                <br />
                Avec POWINOO, toute la chaine de valeur et tous les acteurs des avantages sociaux sont valorisés.
                <br />
                <br />
                Avec ses partenaires qui opèrent dans le secteur des avantages sociaux, POWINOO permet de valoriser les titres-restaurant périmés des salariés, ce qui représentent en 2022 plus de 80 millions de titres-restaurant perdus par les entreprises et leurs salariés.
                <br />
                <br />
                Les acteurs qui opèrent les avatanges sociaux pour le compte de leurs clients et de leurs bénéficiaires permettent à ces derniers, de transformer leurs titres-restaurant périmés en dons, pour faire une bonne action.
                <br />
                <br />
                Ces dons sont ensuite versés à l'association qui les transforme en Pouvoir d'achat supplémentaire auprès de la population de salariés de cette nouvelle classe sociale "Le Précariat".
                <br />
                <br />
                Les donateurs (entreprises, associations, collectivités et les salariés)
                <br />
                En faisant ce don à l'association, le salarié qui valorise ses titres-restaurant périmés, fait une bonne action et récupère 66% de son montant sous la forme d'une déduction fiscale.
                <br />
                <br />
                En faisant ce don à l'association, l'entreprise, l'association, ou encore la collectivité valorise sa part de ces titres-restaurant périmés, fait une bonne action et récupère 60% de son montant sous la forme d'une déduction fiscale.
                <br />
                <br />
                L'association transmet à chaque donnateur un reçu fiscal. Ce document permet de bénéficier d'une réduction d'impôt. Le but est d'encourager la générosité des donateurs.
                <br />
                <br />
                Les organismes d'intérêts générals ou d'utilité publique peuvent proposer aux donateurs de bénéficier d'une réduction fiscale.
                <br />
                <br />
                Les bénéficiaires...
                <br />
                Enfin, les bénéficiaires et leur famille de cette belle chaine de solidarité, bénéficient de plus de pouvoir d'achat, pour mieux manger, se cultiver et pratiquer une activité sportive.
                <br />
                <br />
                Tous ensemble, nous redonnons le sourire à cette population de salariés et à leur famille et nous leur offront plus de reconnaissance et de sens, pour les encourager à continuer de travailler et à ne surtout pas se démotiver, se décourager, ou encore à tout lâcher.
              </span>
            </p>
          </div>)}
        {props.texteIndex === 10 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Entreprise...
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                La plateforme POWINOO est accessible gratuitement depuis tous les écrans, sans téléchargement, ni mise à jour et sans publicité.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>Vous êtes une entreprise
                  <br />
                  une association, ou une collectivité</b>
                <br />
                <br />
                <b>Vous pouvez rejoindre l'association en tant que membre actif</b>
                <br />
                et participer à cette belle aventure humaine
                <br />
                <br />
                <b>Vous pouvez soutenir l'association en faisant un don à POWINOO</b>
                <br />
                pour l'accompagner dans ses missions et ses objectifs
                <br />
                <br />
                <b>Vous pouvez participer au programme "POWINOO COLLECT"</b>
                <br />
                qui permet de valoriser les titres-restaurants périmés
                <br />
                sous forme de dons à l'association
                <br />
                qui les transforme ensuite en nouveau pouvoir d'achat
                <br />
                au bénéfice de chaque salarié issu du Précariat
                <br />
                et de chaque étudiant boursier
                <br />
                <br />
                <b>
                  Vous pouvez soutenir l'association
                  <br />
                  en tant que partenaire privilégié de POWINOO
                </b>
                <br />
                pour vous associer à une très belle cause qui a du sens
                <br />
                l'accompagner et la porter dans ses missions et ses objectifs
                <br />
                <br />
                Le but étant d'offrir plus de reconnaissance, de sens et de pouvoir d'achat, aux salariés du précariat et aux étudiants boursiers.
                <br />
                <br />
                Permettre à ces populations de mieux manger, se divertir et pratiquer une activité sportive en famille.
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>Vous pouvez rejoindre l'association en tant que bénévole</b>
                <br />
                et partager avec POWINOO ses missions et ses objectifs
                <br />
                pour rendre la société meilleure et faire de l'inclusion, un mode de vie
                <br />
                <br />
                <b>Quelque soit votre choix</b>
                <br />
                il y a toujours une manière d'accompagner POWINOO !
                <br />
                <br />
                <b>Pour vous remercier</b>
                <br />
                POWINOO vous invite à rejoindre sa communauté
                <br />
                <br />
                <b>Comment ?</b>
                <br />
                <br />
                En vous créant un compte utilisateur
                <br />
                qui vous permet de discuter avec tous les autres membres
                <br />
                (les bénéficiaires, les donateurs, les bénévoles, les partenaires,
                <br />
                les adhérents et POWINOO).
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>La solution POWINOO est faite pour vous !</b>
                <br />
                <br />
                Vous pouvez discuter en privé avec un autre membre, par exemple un bénéficiaire de la solution POWINOO et lui poser vos questions.
                <br />
                <br />
                POWINOO est 100% transparent, de sorte que si vous avez fait un don directement à l'association, ou en participant au programme "POWINOO COLLECT", vous pouvez vérifier en direct auprès d'un bénéficiaire salarié ou d'un étudiant boursier, qu'il en est bien le destinataire et que votre don lui fait du bien au quotidien.
              </span>
            </p>
            <br />

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>Avec votre compte membre</b>
                <br />
                <br />
                Vous pouvez également créer votre propre communauté
                <br />
                et l'administrer comme vous voulez
                <br />
                <br />
                Vous pouvez envoyer vos invitations
                <br />
                pour que de nouveaux membres vous rejoignent.
                <br />
                <br />
                Vous pouvez inviter des membres présents sur POWINOO
                <br />
                ou en inviter d'autres, de l'extérieur, à rejoindre votre communauté privée
                <br />
                <br />
                Vous pouvez également rejoindre
                <br />
                d'autres communautés présentes sur la plateforme.
                <br />
                <br />
                Chaque communauté possède son propre tchat pour disctuer entre les membres d'une même communauté, avec toujours la possibilité de discuter avec un membre en privé.
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontSize: "16.0pt", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Collection des badges POWINOO
              </span>
            </p>
            <br />

            <div>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge1} alt="Badge 1" /> Donateur</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge2} alt="Badge 1" /> bénéficiaire</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge3} alt="Badge 1" /> Partenaire</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge4} alt="Badge 1" /> Bénévole</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge5} alt="Badge 1" /> Bienfaiteur</span></b>
              </p>
              <p className="Standard" style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "5px" }}>
                <b><span style={{ display: "flex", alignItems: "center" }}><img style={{ width: "50px", height: "50px", marginRight: "10px" }} src={Badge6} alt="Badge 1" /> Adhérent</span></b>
              </p>
            </div>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Un même membre peut bénéficier de plusieurs badges !
                <br />
                <br />
                Si vous êtes bénévole et adhérent, vous avez deux badges
                <br />
                <br />
                Si vous êtes donateur, bénévole et adhérent, vous avez trois badges
                <br />
                <br />
                Si vous êtes partenaire, donateur, bénévole et adhérent, vous avez quatre badges
                <br />
                <br />
                <b>
                  Et vous, vous avez envie de combien de Badges ?
                  <br />
                  C'est à vous de jouer et de participer !
                </b>
                <br />
                <br />
                Les membres invités
                <br />
                directement par des communautés privées
                <br />
                ne bénéficient pas de badge
              </span>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                <b>En conclusion...</b>
                <br />
                Avec POWINOO, toute la chaine de valeur et tous les acteurs des avantages sociaux sont valorisés.
                <br />
                <br />
                Avec ses partenaires qui opèrent dans le secteur des avantages sociaux, POWINOO permet de valoriser les titres-restaurant périmés des salariés, ce qui représentent en 2022 plus de 80 millions de titres-restaurant perdus par les entreprises et leurs salariés.
                <br />
                <br />
                Les acteurs qui opèrent les avatanges sociaux pour le compte de leurs clients et de leurs bénéficiaires permettent à ces derniers, de transformer leurs titres-restaurant périmés en dons, pour faire une bonne action.
                <br />
                <br />
                Ces dons sont ensuite versés à l'association qui les transforme en Pouvoir d'achat supplémentaire auprès de la population de salariés de cette nouvelle classe sociale "Le Précariat".
                <br />
                <br />
                Les donateurs (entreprises, associations, collectivités et les salariés)
                <br />
                En faisant ce don à l'association, le salarié qui valorise ses titres-restaurant périmés, fait une bonne action et récupère 66% de son montant sous la forme d'une déduction fiscale.
                <br />
                <br />
                En faisant ce don à l'association, l'entreprise, l'association, ou encore la collectivité valorise sa part de ces titres-restaurant périmés, fait une bonne action et récupère 60% de son montant sous la forme d'une déduction fiscale.
                <br />
                <br />
                L'association transmet à chaque donnateur un reçu fiscal. Ce document permet de bénéficier d'une réduction d'impôt. Le but est d'encourager la générosité des donateurs.
                <br />
                <br />
                Les organismes d'intérêts générals ou d'utilité publique peuvent proposer aux donateurs de bénéficier d'une réduction fiscale.
                <br />
                <br />
                Les bénéficiaires...
                <br />
                Enfin, les bénéficiaires et leur famille de cette belle chaine de solidarité, bénéficient de plus de pouvoir d'achat, pour mieux manger, se cultiver et pratiquer une activité sportive.
                <br />
                <br />
                Tous ensemble, nous redonnons le sourire à cette population de salariés et à leur famille et nous leur offront plus de reconnaissance et de sens, pour les encourager à continuer de travailler et à ne surtout pas se démotiver, se décourager, ou encore à tout lâcher.
              </span>
            </p>
          </div>)}
        {props.texteIndex === 11 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Bons Plans
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Retrouver dans cette rubrique des conseils, des articles, des infos et des promos.
                <br />
                L'idée de la rubrique "Bons Plans" est de fournir des informations sur les sujets de l'alimentation, de la culture et du sport. Des chefs proposerons des conseils et des recettes équilibrées faciles à réaliser, pour mieux manger. Les différents ingrédients à acheter chez des commerçants et artisans locaux, pour modifier sa manière de consommer. Des coachs sportifs proposeront des conseils et des cours pour être en forme physique et pratiquer une activité sportive en famille. Pour que ce triptique du bien-être soit complet, la culture n'est pas en reste. Dans cette rubrique, retrouver toutes les infos sur les évènements culturels, les expos, l'actualité du cinéma et les sorties de films.
                <br />
                Retrouver dans cette rubriques des bons plans de commerçants et artisans locaux, des réductions et des promotions.
                <br />
                <br />
                Cette rubrique est votre allié pour mieux consommer, vous divertir et partiquer une activité culturelle et sportive en famille.
                <br />
                <br />
                Vous allez pouvoir faire aujourd'hui, ce que vous n'avez jamais osé faire hier !
                <br />
                <br />
                Dans cette rubrique, retrouvez également l'actualité de POWINOO pour ne rien rater !
              </span>
            </p>
            <br />

            <p className="Standard">
              <b>
                <span style={{ fontSize: "16pt", fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Bientôt disponible...
                </span>
              </b>
            </p>
          </div>)}
        {props.texteIndex === 12 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Mentions légales
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Le site <a href="https//:www.powinoo.ovh">https//:www.powinoo.ovh</a> est la propriété de l'association POWINOO à but non lucratif (Loi 1901) reconnue d'intérêt Général et dont le siège social est situé au 102 rue de la Combe de l'Adret, 73350 Montagny (Savoie).
                <br />
                <br />

                L'association POWINOO a été créée le 27 février 2023
                <br />
                <br />

                L'identifiant dans le Répertoire National des Associations (RNA) : W731006690
                <br />
                <br />

                Le numéro RNA identifie l'association dans le répertoire waldec et dans le Répertoire National des Associations (RNA), ce répertoire recense les associations en remplacement du waldec depuis 2010 et ce numéro permet d'effectuer les différentes démarches administratives de l'association.
                <br />
                <br />

                Numéro de SIREN: 923 200 943
                <br />
                Numéro de SIRET: 923 200 943 00010
                <br />
                Code APE/NAF: Portail Internet (63 12 Z)
                <br />
                Numéro de TVA Intracommunautaire: FR 599 232 00943
                <br />
                <br />

                Code du site gestionnaire de l'association (Préfecture ou Sous-préfecture) : 731S
                <br />
                <br />

                Téléphone de POWINOO: 066 066 0416
                <br />
                Courriel: ecrire@powinoo.org
                <br />
                <br />

                Directeur de la Publication: Denis CHAUVINEAU, Président de l'association
                <br />
                <br />

                La banque de l'association POWINOO
                <br />
                <br />

                Crédit Mutuel des 4 vallées
                <br />
                102, rue de la République
                <br />
                73200 Albertville
                <br />
                Tèl : 04 79 31 56 88
                <br />
                Fax : 04 79 37 76 774
                <br />
                <br />

                Directeur :  Daniel VINCENT
                <br />
                <br />

                Fédération Crédit Mutuel de SAVOIE MONT-BLANC
                <br />
                99, avenue de Genève
                BP 564
                74054 Annecy Cedex
                Tél : 04 50 46 02 12
                Fax : 04 50 57 91 69
                <br />
                <br />

                Président : Jean-Louis MAÎTRE
                <br />
                Directrice Générale :  Estelle MALET
                <br />
                <br />

                L'assureur de l'association POWINOO
                <br />
                <br />

                MAIF FRANCE
                <br />
                Numéro de Sociétaire : 46 139 72 R
                <br />
                Numéro de contrat d'assurance : M 320 2 RACA
                <br />
                <br />

                Société d'assurance mutuelle à cotisations variables
                <br />
                200 avenue Salvador Allende
                <br />
                CS 90000 - 79038 Niort cedex 9
                <br />
                Entreprise régie par le Code des assurances
                <br />
                <br />

                Directeur Général : Pascal DEMURGER
                <br />
                <br />

                Tèl : 05 49 73 74 75
                <br />
                <br />

                Numéro individuel d'identification à la TVA : FR 81 775 709 702
                <br />
                La MAIF est contrôlée dans l’exercice de son activité par l’ACPR : Autorité de contrôle prudentiel et de résolution - 4 place de Budapest - 75436 Paris.
                <br />
                <br />

                MAIF Solutions Financières
                Société par actions simplifiée au capital de 6 659 016 € - RCS Niort 350 218 467 - 100 Avenue Salvador Allende - 79038 NIORT Cedex 9.
                <br />

                Intermédiaire en opérations d'assurance, intermédiaire en opérations de banque et en services de paiement, conseiller en investissements financiers enregistré auprès de la CNCEF et inscrit au registre unique sous le n° 07031206 (www.orias.fr).
                <br />

                Titulaire de la carte T n° CPI 7901 2016 000 005 310 délivrée par la CCI des Deux-Sèvres et exerçant sous le contrôle de l'ACPR - 4 place de Budapest - CS 92459 - 75436 PARIS Cedex 9.
                <br />
                <br />

                MAIF PAIEMENTS SAS
                MAIF Paiements - SAS au capital de 1 265 000 € - 200 avenue Salvador Allende - 79000 Niort.
                <br />

                RCS Niort 833 817 034. Établissement de paiement (code établissement 17098) agréé par l’Autorité de Contrôle Prudentiel et de Résolution (ACPR).
                <br />

                MAIF Paiements est inscrite sur la liste des établissements habilités à exercer leurs activités en France, telle que publiée sur le site Internet dédié de l’ACPR : www.regafi.fr
                <br />
                <br />

                Hébergeur: OVH
                <br />
                SAS au capital de 10 174 560 €
                <br />
                RCS Lille Métropole 424 761 419 00045
                Code APE 2620Z
                N° TVA : FR 22 424 761 419
                Siège social : 2 rue Kellermann - 59100 Roubaix - France
                <br />
                <br />

                Président : Michel Paulin
                <br />
                OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix.
              </span>
            </p>
          </div>)}
        {props.texteIndex === 13 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  CGU
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Les GCU sont en cours de rédaction et prochainement disponibles.
              </span>
            </p>
          </div>)}
        {props.texteIndex === 14 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Partenaires...
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                IUT (Université Annecy)
                <br />
                Crédit Mutuel (Banque)
                <br />
                MAIF (Assurances)
                <br />
                HelloAsso (Solution Française de Paiements en ligne pour les associations)
                <br />
                Pôle Emploi (Agence de Moutiers)
                <br />
                ADIE (agence de Chambéry)
                <br />
                INNOVALES
                <br />
                Le Département de la Savoie
                <br />
                Le Département de la haute Savoie
                <br />
                La Région Auvergne-Rhône-Alpes
              </span>
            </p>
          </div>)}
        {props.texteIndex === 15 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  Contributeurs...
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Denis CHAUVINEAU a été élu à l'unanimité, Président de l'association POWINOO lors  de l'assemblée générale constitutive
                <br />
                <br />
                Christophe LUNATI - le papa de POWINOO qui a créé, imaginé et développé la première la solution de bons d'achat à la demande
                <br />
                <br />
                Fabien JODELET est "Membre Actif" de l'association depuis sa création et le 17 mars 2023 a été voté à l'unanimité en assemblée générale sa nomination au rang de "Membre Bienfaiteur"
                <br />
                <br />
                Maximilien CHAREUN - étudiant BUT 2ème année, parcours D (Chef de projet), stage du 11 avril au 30 juin 2023)
                <br />
                <br />
                Mathéo GARERI - étudiant BUT 2ème année, parcours A (développeur web), stage du 11 avril au 30 juin 2023)
                <br />
                <br />
                Maximilien CHAREUN est bénévole de l'association depuis le 01 juillet 2023
                <br />
                Mathéo GARERI est bénévole de l'association depuis le 01 juillet 2023
              </span>
            </p>
          </div>)}
        {props.texteIndex === 16 && (
          <div>

            <p className="Standard" align="center" style={{ textAlign: 'center' }}>
              <b>
                <span style={{ fontSize: '16.0pt', fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                  RGPD
                </span>
              </b>
            </p>
            <br />

            <p className="Standard">
              <span style={{ fontFamily: 'Arial, sans-serif', msoBidiFontFamily: 'Tahoma' }}>
                Le respect de la vie privée est une priorité pour POWINOO et ses partenaires. Cette politique de confidentialité vise à vous informer en toute transparence sur les traitements de données personnelles réalisés dans le cadre de nos services et des droits dont vous disposez quant à ces traitements. A travers cette politique, nous espérons vous fournir toutes les informations nécessaires et nous nous engageons à répondre dans les plus brefs délais à vos demandes relatives aux données personnelles.
                <br />
                POWINOO s’engage à ce que l’ensemble des vos données personnelles soient traitées conformément à la Réglementation relative à la protection des données personnelles (Loi Informatique et Libertés du 6 janvier 1978 et Règlement Général sur la Protection des Données).
                <br />
                POWINOO s’engage par ailleurs à exiger de ses partenaires un même niveau de conformité à la Règlementation.
                <br />
                POWINOO et l'ensemble de ses partenaires, respectent votre vie privéee, vos données et la RGPD.
                <br />
                Pour répondre à toutes vos questions, vous pouvez écrire à notre dpo à l'adresse mail suivante: dpo@powinoo.ovh
                <br />
                <br />
                Ou par courrier: Association POWINOO DPO 102, rue de la Combe de l'Adret 73350 Montagny
                <br />
                <br />
                <b>COOKIES...</b>
                <br />
                Nous utilisons que des cookies indispensables au bon fonctionnement de notre site, pour vous garantir la meilleure expérience utilisateur.
                <br />

                POWINOO crée votre compte utilisateur...
                <br />
                POWINOO crée votre compte utilisateur et vous envoie un courriel avec différentes informations et un lien pour vous connecter et utiliser les services gratuits sur la plateforme POWINOO, accessible depuis l'URL : https://www.powinoo.ovh
                <br />
                <br />

                Dans le premier courriel de création de votre compte utilisateur, vous pouvez cliquer sur le lien vers nos CGU (Conditions Générales d'Utilisation). Lorsque vous cliquez sur le lien pour vous connecter, vous êtes redirigé vers le formulaire de personnalisation de votre mot de passe. Une fois votre mot de passe personnalisé et que vous accédez pour la première fois à votre compte utilisateur, vous êtes réputé avoir pris connaissance et accepter les conditions générales et la politique de confidentialité sur la plateforme POWINOO.
                <br />
                <br />

                Règlement Intérieur...
                <br />
                Pour recevoir le Règlement Intérieur de l'association écrivez à POWINOO
                <br />
                ecrire@powinoo.org
                <br />
                Statuts de l'association POWINOO...
                <br />
                Pour recevoir les Statuts de l'association écrivez à POWINOO
                <br />
                ecrire@powinoo.org
                <br />
                Charte de l'association...
                <br />
                Pour recevoir la Charte e l'association écrivez à POWINOO
                <br />
                ecrire@powinoo.org
              </span>
            </p>
          </div>)}
      </div>
    </div>
  )
}
