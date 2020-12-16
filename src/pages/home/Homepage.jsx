import React from 'react';
import './homepage.css'
import cloudHome from '../.././images/svgsBg/cloudHome.svg'
import rocket from '../.././images/svgsBg/rocket.svg'

import ondas from '../.././images/svgsBg/ondas.svg'

export default function HomePage() {
    return (
        <div className="home">
            <main className="main">
                <div className="main-content">
                    <div className="container"> 
                        <div className="main-content">
                            <h1>Hospede seu projeto com qualidade.<br/> Venha com a <strong className="strongProvision">ProVision.</strong></h1>
                            <p>
                            Serviços de alta qualidade que cabem no seu bolso.
                            </p>
                        </div>
                        <img src={cloudHome} alt=""/>
                    </div>
                </div>
            </main>
            
            <section id="features">
                <div className="container">
                    <div className="contFeat">
                        <div
                        className="features-container-content">
                            <h1>Serviços completos para todas as suas necessidades.</h1>
                            <p className="lead">
                                De projetos pequenos que necessitam de melhor custo/benefício, à projetos grandes que necessitam de maior performance e confiabilidade, nós temos a solução ideal para o seu projeto!
                            </p>
                        </div>
                    </div>
                </div>
                <img src={ondas} alt="" className="toBottom " />
            </section>
            <section className="quality">
                <div className="allQualitys">
                    <div className="divQuality">
                        <h1>Por que você deve escolher a <strong className="strongProvision">ProVision</strong> para hospedagem?</h1>
                        <img src={rocket} alt=""/>
                    </div>
                    <div className="myTextsQuality">
                        <div className="texts">
                            <h1>Custo Benefício</h1>
                            <strong>Os melhores preços do mercado</strong>
                            <p>Nós da <strong className="strongProvision">ProVision</strong> temos os preços mais baixos do mercado, oferecendo aos nossos clientes serviços de extrema qualidade.</p>
                        </div>
                        <div className="texts">
                            <h1>Segurança</h1>
                            <strong>Proteção 24h para seus projetos</strong>
                            <p>A segurança do seu projeto está em primeiro lugar! Monitoramos nossos servidores 24h para garantir máxima estabilidade. Todos os seus dados estão em segurança conosco.</p>
                        </div>
                        <div className="texts">
                            <h1>Facilidade</h1>
                            <strong>Compre e receba na mesma hora</strong>
                            <p>Nós da <strong className="strongProvision">ProVision</strong> possuímos nossas mercadorias a ponta-entrega. Após a confirmação do pagamento, seu produto será gerado automaticamente e já será encaminhado para você.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newFeature">
                <div className="features-content">
                    <div className="myFeatures">
                    <div className="content">
                        <img src="https://www.virtushost.net/pt/images/tour-3.png" alt=""/>
                        <h1>Soluções para Projetos Menores</h1>
                        <p>Serviços na nuvem com recursos totalmente dedicados e isolados, <strong>excelente performance e garantia de estabilidade!</strong>Ideal para aplicações mais pesadas.
                        </p>
                        <div className="features-links">
                            <a href="#">&gt; Hospedagem de Sites</a>
                            <a href="#">&gt; Servidor Cloud de Alta Perfomace</a>
                            <a href="#">&gt; Datacenter Virtual</a>
                        </div>
                    </div>
                    <div className="content">
                        <img src="https://www.virtushost.net/pt/images/tour-4.png" alt=""/>
                        <h1>Soluções para Projetos Menores</h1>
                        <p>Serviços na nuvem com recursos garantidos, totalmente escaláveis, que <strong>permitem a expansão conforme o seu projeto cresce</strong>, e que possuem um ótimo custo/benefício.</p>
                        <div className="features-links">
                            <a href="#">&gt; Hospedagem de Sites</a>
                            <a href="#">&gt; Servidor Cloud Escalável</a>
                            <a href="#">&gt; Hospedagens de Jogos</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>

    )
}