import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi'
import Footer from './layouts/Footer'
import Dashboard from './layouts/Dashboard';
import { Table,Container } from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <Navi />
      <Container>
        <Dashboard />

      </Container>
      <Footer />
    </div>
  );
}

export default App;
