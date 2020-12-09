import React from 'react';
// Icones
import {TiArrowForward} from 'react-icons/ti'
import {AiFillPhone, AiOutlineDoubleRight} from 'react-icons/ai'
import { FcCheckmark } from 'react-icons/fc'
// Images
import Pay from '../.././images/svgsBg/pay.svg'
// Css
import './servers.css'
// Components
import Location from '../components/partesConfiguraveis/pageServerCloudSite'

export default function Serverspage() {
    return (
        <div className="home servers">
            <main className="main">
                <div className="main-content">
                    <div className="container">
                        <img src="https://www.virtushost.net/pt/images/hero-illustration-2.png" alt=""/> 
                        <div className="infos">
                            <h1>Servidor Cloud totalmente escalável</h1>
                            <p className="lead">Servidores Cloud com ótimo custo/benefício e recursos totalmente escaláveis para quem precisa de flexibilidade. </p>
                            <div className="txtConfere">
                                <div className="texts">
                                    <p><TiArrowForward/> Proteção Anti-DDOS</p>
                                    <p><TiArrowForward/> Tráfego Ilimitado</p>
                                    <p><TiArrowForward/> Links de 1Gbps Uplink</p>
                                    <p><TiArrowForward/> Espaço em Disco SSD</p>
                                    <p><TiArrowForward/> Suporta Linux</p>
                                </div>
                                <div className="confere">
                                    <FcCheckmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg"></div>
            </main>
            <div className="atencion">
                <div className="vpsMarketing">
                    <div className="texts">
                        <h1>Aqui na <strong>ProVision</strong> é você que sai ganhando !!</h1>
                        <h2>Nossa empresa tem o sistema de ativação automático após efetuar o pagamento. <br/> <strong> <AiOutlineDoubleRight /> Venha com a gente.</strong></h2>
                    </div>
                    <img src={Pay} alt=""/>
                </div>
            </div>
            <div className="location">
                <div className="maxWdLocation">
                    <h3>Escolha a localidade do seu servidor</h3>
                    <div className="buttonsLocation">
                        <Location />
                    </div>
                </div>
                <div className="bg"></div>
            </div>

        </div>
    )
}