import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Devices from './views/Devices/Devices';
import Features from './views/Features/Features';
import Footer from './views/Footer/Footer';
import Hero from './views/Hero/Hero';
import Navigation from './views/Navigation/Navigation';


function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <Devices />
      <Footer />
    </div>
  )
}

export default App
