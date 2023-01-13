import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Features from './views/Features/Features';
import Hero from './views/Hero/Hero';
import Navigation from './views/Navigation/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
    </div>
  )
}

export default App
