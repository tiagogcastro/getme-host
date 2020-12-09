import React, {useEffect} from 'react';
import './homepage.css'
import cloudHome from '../.././images/svgsBg/cloudHome.svg'
import rocket from '../.././images/svgsBg/rocket.svg'

import ondas from '../.././images/svgsBg/ondas.svg'
import {AiFillPhone} from 'react-icons/ai'
import {BsArrowReturnRight} from 'react-icons/bs'

function chat() {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (
        function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5fcfd47aa1d54c18d8f1b449/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
    })();
}


export default function HomePage() {
    useEffect(() => {
        let Faqbutton = document.getElementsByClassName("faqButton");
        let i;
        for (i = 0; i < Faqbutton.length; i++) {
            Faqbutton[i].addEventListener("click", function() {
            this.classList.toggle("panelActive");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
        }
    }, [])
    
    return (
        <div className="home">
            <main className="main">
                <div className="main-content">
                    <div className="container"> 
                        <div className="main-content">
                            <h1>Hospede seu site com qualidade.<br/> Venha com a <strong className="strongProvision">ProVision.</strong></h1>
                            <p>
                            Já somos mais de 100.000 servidores vendidos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <a href="https://financeiro.provision.gg/contact.php" className="contact"><AiFillPhone/> Contato</a>
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
                            <h1>Serviços completos para todas indústrias.</h1>
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
                            <h1>Facilidade</h1>
                            <strong>Depois poem algum texto top aqui</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates beatae eligendi id perspiciatis a voluptatum optio? Debitis maxime accusamus facilis aut, obcaecati laudantium numquam quaerat dolor harum mollitia. Ab.</p>
                        </div>
                        <div className="texts">
                            <h1>Segurança</h1>
                            <strong>Proteção 24h para sua hospedagem</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates beatae eligendi id perspiciatis a voluptatum optio? Debitis maxime accusamus facilis aut, obcaecati laudantium numquam quaerat dolor harum mollitia. Ab.</p>
                        </div>
                        <div className="texts">
                            <h1>Velocidade</h1>
                            <strong>Processadores da melhor qualidade no mercado</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates beatae eligendi id perspiciatis a voluptatum optio? Debitis maxime accusamus facilis aut, obcaecati laudantium numquam quaerat dolor harum mollitia. Ab.</p>
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
            {chat()}
            <section className="myFaq">
                <div className="faq">
                    <h1>Hospedagem - Perguntas mais frequentes(FAQ)</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur molestias, ipsam ea aliquam libero enim.</p>
                    <div className="faqDiv">
                        <button className="faqButton"><BsArrowReturnRight/> O que sei la oque tem que preencher espaço para testar aqui</button>
                        <div className="panel">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>

                    <div className="faqDiv">
                        <button className="faqButton"><BsArrowReturnRight/> Faqqq</button>
                        <div className="panel">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                    
                    <div className="faqDiv">
                        <button className="faqButton"><BsArrowReturnRight/> O que sei la oque tem que preencher espaço para testar aqui</button>
                        <div className="panel">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem odit ratione deleniti, repellendus accusantium non iure reprehenderit atque delectus, inventore corporis perferendis dolorum magni quos tempora eum sequi rerum.     </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}