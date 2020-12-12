import React, {useState} from 'react';
import Brasil from '../../../images/svgsBg/brasil.svg'
import usa from '../../../images/svgsBg/usa.svg'

import { FcCheckmark } from 'react-icons/fc'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

import {GrDatabase} from 'react-icons/gr'
import {RiCpuLine} from 'react-icons/ri'
import {CgServer} from 'react-icons/cg'
import {HiShieldCheck} from 'react-icons/hi'

// Cards com o valor em moeda do BRASIL
const valuesBr = [
    // Card 1
    {
        title: '1GB',
        price: '15,50',
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        linkButton: "https://google.com",
        buttonText: 'Assinar agora',
    },
    // Card 2
    {
        title: '1GB',
        price: '45,90',
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        linkButton: "https://google.com",
        buttonText: 'Assinar agora',

    },
    // Card 3
    {
        title: '1GB',
        price: '120,90',
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        linkButton: "https://google.com",
        buttonText: 'Assinar agora '

    }
]

// Cards com o valor em moeda dos Estados Unidos
const valuesUsa = [
    // Card 1
    {
        title: 'Cloud 1GB',
        price: 39,
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        linkButton: "https://google.com",
        buttonText: 'Assinar agora '

    },
    // Card 2
    {
        title: 'Cloud 1GB',
        price: 39,
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        linkButton: "https://google.com",
        buttonText: 'Assinar agora '

    },
    // Card 3
    {
        title: 'Cloud 1GB',
        price: 39,
        accept: [
            'Painel de Controle',
            '1Gbps de Uplink',
            'Tráfego Ilimitado',
            'IP Dedicado',
        ],
        linkButton: "https://google.com",
        buttonText: 'Assinar agora '

    }
]

// Construção do card do Brasil, ao mexer, poderá estar modificando a estilização 
const Br = () => {
    return (
        <>
       
        {valuesBr.map((value, index) =>(
            <div className="card" key={index}>
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
                    <p>Nossos servidores no Brasil são hospedados em São Paulo, o centro de tecnologia da América Latina, e são uma boa opção para os usuários da América Latina.</p>
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
                        <p>Nossos servidores nos Estados Unidos são hospedados na Carolina do Norte, uma boa opção para maior parte da América, e uma opção mais barata para América Latina.</p>
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