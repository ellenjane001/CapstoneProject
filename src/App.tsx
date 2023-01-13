import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Container from './views/Container/Container';
import Footer from './views/Footer/Footer';
import Navigation from './views/Navigation/Navigation';


function App() {
  const [component, setComponent] = React.useState('home')
  return (
    <div className="App">
      <Navigation handleComponent={(component: string) => { setComponent(component) }} />
      <Container component={component} />
      <Footer />
    </div>
  )
}

export default App
