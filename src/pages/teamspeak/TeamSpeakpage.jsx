import React from 'react';

import contact from '../.././images/svgsBg/contact.svg'
import Table from '../../components/partesConfiguraveis/pageTeamSpeak'

import './teamspeak.css'

export default function TeamSpeak() {
    return (
        <div className="home teamspeak">
            <main className="main">
                <div className="main-content">
                    <div className="container"> 
                        <div className="main-content">
                            <h1>Suporte excelente e ativo 24h, você só encontra aqui na <strong className="strongProvision">ProVision.</strong></h1>
                        </div>
                    </div>
                </div>
            </main>
            <section className="myTeamSpeak">
                <div className="tmSpeak">
                    <div className="container">
                        <img src={contact} alt=""/>
                        <div className="texts">
                            <h1>Bem vindo ao TeamSpeak</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi expedita quo. Cupiditate consectetur quod fugit.</p>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <Table/>
                </div>
            </section>
        </div>
    )
}