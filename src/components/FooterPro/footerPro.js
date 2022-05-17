import React from 'react'
import  './footerPro.css'
import Logo from '../pic/logow.png'

const footerPro = () => {
  return (
    <div className="footerContainer" >
      <div className="wrapperFooter">
        <div className="FooterLinksContainer">
          <div className="FooterLinkWrapper">
            <div className="FooterLinkItems">
                <div className="FooterLinkTitle"> Menu</div>  
                  <a className="FooterLink" href='#home'>Inicio</a>
                  <a className="FooterLink" href="#features">Skills</a>
                  <a className="FooterLink" href="#portfolio">Portafolio</a>
                  <a className="FooterLink" href="#resume">Resume</a>
                  <a className="FooterLink" href="#clients">Clientes</a>
                  <a className="FooterLink" href="#blog">Blog</a>
                  <a className="FooterLink" href="#contact">Contacto</a>
            </div>
            <div className="FooterLinkItems">
                <div className="FooterLinkTitle"> Redes Sociales</div>  
                  <a className="FooterLink" href='#home'>Facebook</a>
                  <a className="FooterLink" href="#features">Instagram</a>
                  <a className="FooterLink" href="#portfolio">TikTok</a>
            </div>
            <div className="FooterLinkItems">
                <div className="FooterLinkTitle"> Contacto</div>  
                  <a className="FooterLink" href="#contact">Contacto</a>
            </div>
          </div>
        </div>
        <div className="SocialMedia">
          <div className="SocialMediaWrap">
            <div className="SocialLogo" href='#home'>
              <img style={{height:'40px'}} src={Logo} alt='' />
            </div>
            <small className="WebsiteRights">developed by Dkongstudio.com 	©    {new Date().getFullYear()}</small>

          </div>
        </div>
      </div>
    </div>
  )
}

export default footerPro
