import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import Routes from './Routes/Router'
import './styles/global.css'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
        <section className="myFooter">
          <Footer />
        </section>
      </div>
      {chat()}
    </BrowserRouter>
  );
}

export default App;
