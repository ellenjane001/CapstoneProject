import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './views/Hero/Hero';
import Navigation from './views/Navigation/Navigation';
function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
    </div>
  )
}

export default App
