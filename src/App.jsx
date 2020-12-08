import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import Routes from './Routes/Router'
import './styles/global.css'
import Header from './pages/components/Header/Header'
import Footer from './pages/components/footer/Footer'


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
    </BrowserRouter>
  );
}

export default App;
