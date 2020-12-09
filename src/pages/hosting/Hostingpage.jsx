import React from 'react';
import ondas from '../.././images/svgsBg/ondas.svg'
import segurity from '../.././images/svgsBg/segurity.svg'
import {Cards, ComponentTexts} from './ComponentsHostingpage'

import './hosting.css'

export default function Hostingpage() {
    return (
        <div key={0} className="home hosting">
            <main className="main">
                <div className="main-content">
                    <div className="container">
                        <img src={segurity} alt=""/>
                        <div className="main-content">
                            <h1>Seu site mais Rápido & Seguro. Totalmente Anti-DDOS.</h1>
                            <p>Proteja seu site contra os ataques hackers; além de deixar seu site mais rápido, garantimos a mitigação de qualquer ataque DDOS.</p>
                        </div>
                    </div>
                </div>
            </main>
            <section className="cardsPrice">
                <div className="bg"></div>
                <div className="cards">
                    <Cards />
                </div>
                <img src={ondas} alt="" className="toBottom " />
            </section>
            <section className="components">
                <ComponentTexts />
            </section>
        </div>
    )
}