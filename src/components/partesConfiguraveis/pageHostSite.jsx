import React, { useState } from 'react';
import {} from 'react-icons'
import { FcCheckmark } from 'react-icons/fc'
import {allCards} from '../AllConfigCardsOther/index'

// images
import apache from '../../images/apache.png'
import nginx from '../../images/nginx.png'
import globe from '../../images/globe.png'
import icloud_backup_icon from '../../images/icloud-backup-icon.png'
import letsencrypt from '../../images/letsencrypt.png'

// Component - texts
const One = () => (
    <div className="component">
        <h1>Reduzimos o tempo de resposta do seu site em até 10 vezes!</h1>
        <div className="texts">
            <h2>Seu site ficará muito mais rápido com uma hospedagem em nginx nativo!</h2>
            <p>Nossas hospedagens permitem a opção entre nginx ou Apache nativos, ou Apache + nginx em Proxy Reverso. O nginx como webserver é muito superior ao Apache, com uma capacidade de processar um fluxo de tráfego muito superior, e com uma resposta até dez vezes mais rápida que as hospedagens normais!
            Além disto, o nginx é muito eficaz no auxílio contra ataques ddos layer 7!
            </p>
        </div>
    </div>
)

const Two = () => (
    <div className="component">
        <h1>Reduzimos o tempo de resposta dos DNS em até 10 vezes!</h1>
        <div className="texts">
            <h2>Resolução de nomes DNS geolocalizada que responde pelo servidor mais próximo da sua casa, garantindo sempre o menor tempo de respota nos DNS.   </h2>
            <p>Nossos servidores DNS ficam espalhados entre nossos datacenters, para garantir sempre a menor latência na resolução dos domínios. Se você estiver nas Américas, o tempo médio de resposta dos DNS será de cerca de 20ms na maioria dos países. (versus 200ms se não tivesse GeoDNS)
            </p>
        </div>
    </div>
)

const Three = () => (
    <div className="component">
        <h1>Certificados SSL para todos seus domínios hospedados conosco. De graça.</h1>
        <div className="texts">
            <h2>Ofecerecemos ilimitados certificados SSL gratuitamente, para todos seus domínios e subdomínios hospedados conosco, que renovarão automaticamente enquanto sua hospedagem permanecer ativa, sem custos.</h2>
            <p>Direto pelo painel Plesk da sua hospedagem de sites conosco, você poderá acessar o menu Let's Encrypt e gerar quantos certificados SSL você quiser, para todos os seus domínios e subdomínios hospedados conosco. Os certificados serão renovados automaticamente enquanto sua hospedagem permanecer ativa conosco.
            </p>
        </div>
    </div>
)

const Four = () => (
    <div className="component">
        <h1>Backups diários, feitos em off-site, e que garantem os seus dados!</h1>
        <div className="texts">
            <h2>Toda madrugada fazemos backups automatizados das hospedagens de sites em um storage remoto, que ficam disponíveis no seu painel de controle para restaurar quando quiser!</h2>

            <p>Garanta que seus dados estão a salvo com as hospedagens da VirtusHost, que possuem backups automáticos feitos toda madrugada; no seu painel de controle da hospedagem, basta ir no menu de Backups para poder baixar ou restaurar um backup de seu site.
            </p>
        </div>
    </div>
)

// Cards da pagina de hospedagem de sites
export const Cards = () => (
    <>
     {allCards.map((value, index) => (
         <div key={index} className={value.classname}>
            {value.classPopulate ? <div className={value.classPopulate}>Popular</div> : ''}
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