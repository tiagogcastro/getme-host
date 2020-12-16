import React from 'react';
import './footer.css';
import cloudFooter2 from '../../images/svgsBg/cloudFooter2.svg';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
    return (
    <section className="footer">
        <div className="endSiteFooter">
            <img src={cloudFooter2} alt=""/> 
            <div className="container-text">
                <h1>Tudo o que você precisa para revolucionar sua hospedagem</h1>
                <p>Fale com nossos especialistas e descubra a solução perfeita para atender as demandas do seu projeto.</p>
            </div>   
        </div>
        <footer className="footerEnd">
            <div className="legal">
                {/* Usar <a href="https://..."> Nome </a> Tira a class buttonLock para deixar o cursor: pointer !!*/}
                <a className="buttonLock">Informações Legais</a>
                <a className="buttonLock">Termos de Serviço</a>
                <a className="buttonLock">Política de Utilização Aceitável</a>
            </div>
            
            <div className="container-footer">
                <div className="footer-texts">
                    <h5>Reembolso Garantido</h5>
                    <p>Tenha seu dinheiro de volta.</p>
                </div>
                <div className="footer-texts">
                    <h5>Suporte 5 Estrelas</h5>
                    <p>Converse conosco via Livechat.</p>
                </div>
                <div className="footer-texts">
                    <h5>Sem fidelidade</h5>
                    <p>Cancele quando quiser.</p>
                </div>
                <div className="footer-texts">
                    <h5>Segurança</h5>
                    <p>Seus dados estarão seguros.</p>
                </div>
            </div>
            
            <div className="copyright">
                <p>&copy; Copyright - {year} <strong>❤️ ProVision</strong></p> 
                <div className="pay">
                    <img src="https://www.virtushost.net/images/payments.png" alt=""/>
                </div>
            </div>
        </footer>
    </section>
    )
}