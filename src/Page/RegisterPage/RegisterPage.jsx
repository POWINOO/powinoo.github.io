import React, {useState} from 'react'
import RegisterFormParticulier from '../../Components/RegisterFormParticulier/RegisterFormParticulier'
import RegisterFormEntreprise from '../../Components/RegisterFormEntreprise/RegisterFormEntreprise'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterPage.css'

export default function RegisterPage() {

  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      <div className='register'>

        <h2>S'inscrire en tant que ...</h2>

        <div className="register-container">
          <div className="register-header">
            <div className={ activeTab === 1 ? "tab active-tab" : "tab"}
            onClick={() => {setActiveTab(1)}}
            >Particulier</div>
            <div className={ activeTab === 2 ? "tab active-tab" : "tab"}
            onClick={() => {setActiveTab(2)}}
            >Entreprise</div>
          </div>
          {/* <h3>Inscription</h3> */}

          {activeTab === 1 ? <RegisterFormParticulier /> : <RegisterFormEntreprise />}
        </div>

        <p className='redirect-account'>Vous avez déjà un compte ? <br /> <Link to='/login'>Connectez-vous !</Link></p>
      </div>
      <footer>
          <a href="#">Qui sommes-nous ?</a>
          <a href="#">Contact</a>
          <a href="#">Mentions légales</a>
          <a href="#">Informations</a>
        </footer>
    </>
    
  )
}
