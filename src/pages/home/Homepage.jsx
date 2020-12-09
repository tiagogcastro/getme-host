import React, {useEffect} from 'react';
import './homepage.css'
import retoLeft from '../.././images/svgsBg/retoLeft.svg'
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
                            <h1>Tudo que precisa para hospedar seu projeto!</h1>
                            <p>Mais de 145.000 servidores já foram instanciados na VirtusHost. </p>
                            <a href="#" className="contact"><AiFillPhone /> Fale conosco</a>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="fluid">
                            <img src="https://www.virtushost.net/pt/images/hero-illustration-5.png" alt=""/>
                        </div>
                    </div>
                    <img src={retoLeft} alt="" className="svgPosition svgLeft"/>
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
                        <img src={ondas} alt="" className="toBottom " />
                    </div>
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