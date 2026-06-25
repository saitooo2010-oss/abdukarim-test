import React from 'react';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import About from './pages/about/about';
import Service from './pages/service/service';
import Stats from './components/stats/stats'
import "./App.css";

function App () {
  return(
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Service />
        </section>
        <section id="stats">
          <Stats />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App;