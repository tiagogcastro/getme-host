import React, { useState } from 'react';
import {} from 'react-icons'
import { FcCheckmark } from 'react-icons/fc'
import {allCards, One, Two, Three, Four} from '../components/partesConfiguraveis/pageHostSite'

// images
import apache from '../../images/apache.png'
import nginx from '../../images/nginx.png'
import globe from '../../images/globe.png'
import icloud_backup_icon from '../../images/icloud-backup-icon.png'
import letsencrypt from '../../images/letsencrypt.png'


// Cards da pagina de hospedagem de sites
export const Cards = () => (
    <>
     {allCards.map((value, index) => (
         <div key={index} className={value.classname}>
                 <i>{value.icon}</i>
                 <h3>{value.title}</h3>
                 <h1><sup>R$</sup>{value.price} <sub>/mês</sub></h1>
                 <p>{value.recommended}</p>
             <div key={index} className="info">
                {value.accept.map(all => <p key={index}><FcCheckmark /> {all}</p>)}
                {value.noAccept.length >= 1 ? value.noAccept.map(all => <p key={index}>❌ {all}</p>) : <span></span>}
             </div>
             <a className="buttonAccess" href={value.button.href} target="_blank">Assinar agora</a>
         </div>)
       )}
   </>
 )

// Aquela parte onde muda quando clica no botão
export function ComponentTexts() {
    const [render, setRender] = useState('');
    function MyShitchComponent(render) {
        switch (render) {
            case 'one':
                return <One/>
            case 'two':
                return <Two />
            case 'three':
                return <Three />
            case 'four':
                return <Four />
            default:
                return <One />
        }
    }
    return (
        <div className="buttonsAndComponents">
            <div className="buttons">
                <button onClick={() => setRender('one')}>
                    <p>
                        <img src={nginx} alt="Ngnix"/>
                        +
                        <img src={apache} alt="Apache" />
                    </p>
                </button>

                <button onClick={() => setRender('two')}>
                    <p>
                        <img src={globe} alt="Menos Tempo da DNS" />
                        GeoDNS
                    </p>
                </button>

                <button onClick={() => setRender('three')}>
                    <p>
                        SSL
                        <img src={letsencrypt} alt="Backups diários" />
                    </p>
                </button>
                
                <button onClick={() => setRender('four')}>
                    <p>
                        <img src={icloud_backup_icon} alt="Certificados SSL" />
                        Backups Diários
                    </p>
                </button>
            </div>
            <div className="showComponent">
                {MyShitchComponent(render)}
            </div>
        </div>
    )
}