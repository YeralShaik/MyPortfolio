import React from "react"
import { SiWhatsapp } from "react-icons/si";
import './style.css'
const WhatsApp = () => {
     // Función que abre un enlace de WhatsApp al hacer clic en el botón de contacto
     function sendwhatsapp() {
        const whatsappLink = 'https://wa.link/crqqlt';
        window.open(whatsappLink, '_blank');
      }

return (
    
        <button 
            onClick={sendwhatsapp} className="whatsapp-Container active">       
            <SiWhatsapp className="whatsapp-Icon"  />
        </button>
       
       
    )
}


export {WhatsApp}