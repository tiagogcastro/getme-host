import React from 'react';
import './footer.css';
import logo320px from '../../../images/logo320px.png'

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
    return (
    <section className="footer">
        <div className="endSiteFooter">
            <div className="container-text">
                <img src={logo320px} alt=""/>
                <h1>Tudo o que você precisa para revolucionar sua hospedagem</h1>
                <p>Fale com nossos especialistas e descubra a solução perfeita para atender as demandas do seu projeto.</p>
                <a href="#" className="contact">Fale Conosco</a>
            </div>
            <div className="pay">
                <img src="https://www.virtushost.net/images/payments.png" alt=""/>
            </div>
        </div>
        <footer className="footerEnd">
                <div className="container-footer">
                    <div className="footer-texts">
                        <h5>Reembolso Garantido</h5>
                        <p>7 dias de moneyback garantido.</p>
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
                        <h5>Serviços Pré-pagos</h5>
                        <p>Pague apenas quando quiser.</p>
                    </div>
                </div>
                <div className="legal">
                    <a href="">Informações Legais</a>
                    <a href="">Termos de Serviço</a>
                    <a href="">Política de Utilização Aceitável</a>
                </div>
                <div className="copyright">
                    <p>&copy; Copyright - {year} <strong>ProVision</strong></p> 
                </div>
            </footer>
        </section>
    )
}