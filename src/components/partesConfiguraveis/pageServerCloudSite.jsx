import React, {useState} from 'react';
import {valuesBr, valuesUsa} from '../AllConfigCardsOther/index'

// Images
import Brasil from '../../images/svgsBg/brasil.svg'
import usa from '../../images/svgsBg/usa.svg'

// Icons
import { FcCheckmark } from 'react-icons/fc'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

import {GrDatabase} from 'react-icons/gr'
import {RiCpuLine} from 'react-icons/ri'
import {CgServer} from 'react-icons/cg'
import {HiShieldCheck} from 'react-icons/hi'


// Construção do card do Brasil, ao mexer, poderá estar modificando a estilização 
const Br = () => {
    return (
        <>
       
        {valuesBr.map((value, index) =>(
            <div className="card" key={index}>
                {value.classPopulate ? <div className={value.classPopulate}>Popular</div> : ''}
                <h3><img src={Brasil} alt=""/> Cloud <strong>{value.title}</strong></h3>
                <h1><sup>R$</sup>{value.price}<sub>/mês</sub></h1>
                <div className="info">
                    <p><GrDatabase /> 1GB de Memória RAM</p>
                    <p><RiCpuLine /> 1 núcleo de CPU</p>
                    <p><CgServer /> 20GB de disco SSD</p>
                    <p><HiShieldCheck /> Anti-DDOS Premium</p>
                </div>
                <div className="accept">
                    {value.accept.map((acceptValue, index)=> (
                        <p key={index}><FcCheckmark /> {acceptValue}</p>
                    ))}
                </div>
                <a className="buttonAccess" href={value.linkButton}>{value.buttonText} <HiOutlineArrowNarrowRight /></a>
            </div>
        ))}
        </>
    )
}

// Construção do card do Estado Unidos, ao mexer, poderá estar modificando a estilização 
const Usa = () => {
    return (
        <>
        {valuesUsa.map((value, index) =>(
            <div className="card" key={index}>
                {value.classPopulate ? <div className={value.classPopulate}>Popular</div> : ''}
                <h3><img src={usa} alt=""/> {value.title}</h3>
                <h1><sup>$</sup>{value.price}<sub>/mês</sub></h1>
                <div className="info">
                    <p><GrDatabase /> 1GB de Memória RAM</p>
                    <p><RiCpuLine /> 1 núcleo de CPU</p>
                    <p><CgServer /> 20GB de disco SSD</p>
                    <p><HiShieldCheck /> Anti-DDOS Premium</p>
                </div>
                <div className="accept">
                    {value.accept.map((acceptValue, index)=> (
                        <p key={index}><FcCheckmark /> {acceptValue}</p>
                    ))}
                </div>
                <a className="buttonAccess" href={value.linkButton}>{value.buttonText} <HiOutlineArrowNarrowRight /></a>
            </div>
        ))}
        </>
    )
}

export default function ComponentTexts() {
    const [render, setRender] = useState('');
    function MyShitchComponentLocation(render) {
        switch (render) {
            case 'br':
                return (
                <div className="txtCards">
                    <p>Nossos servidores no Brasil são hospedados em São Paulo, o centro de tecnologia da América Latina, e são uma ótima opção para os usuários da América Latina.</p>
                    <div className="bandeira">
                        <img src={Brasil} alt=""/>
                    </div>
                    <div className="cards">
                        <Br/>
                    </div>
                </div>
                )
            case 'usa':
                return (
                    <div className="txtCards">
                        <p>Nossos servidores nos Estados Unidos são hospedados na Carolina do Norte, uma ótima opção para maior parte da América, e uma opção mais barata para América Latina.</p>
                        <div className="bandeira">
                            <img src={usa} alt=""/>
                        </div>
                        <div className="cards">
                            <Usa/>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="txtCards">
                        <p>Nossos servidores no Brasil são hospedados em São Paulo, o centro de tecnologia da América Latina, e são uma boa opção para os usuários da América Latina.</p>
                        <div className="bandeira">
                            <img src={Brasil} alt=""/>
                        </div>
                        <div className="cards">
                            <Br/>
                        </div>
                    </div>
                )
        }
    }
    return (
        <div className="buttonsAndComponents">
            <div className="buttons">
                <button onClick={() => setRender('br')}>
                    <span>Hospedado em</span> <img src={Brasil} alt=""/> São Paulo, BR
                </button>
                <button onClick={() => (setRender('usa'))}>
                    <span>Hospedado no </span> <img src={usa} alt=""/> New York, EUA
                </button>
            </div>
            <div className="showComponent">
                {MyShitchComponentLocation(render)}
            </div>
        </div>
    )
}
