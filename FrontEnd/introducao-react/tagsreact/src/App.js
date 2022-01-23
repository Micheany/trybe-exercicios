import './App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer';
import Logos from './logos.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={Logos} />
        <Content />
        
      </header>
      <Footer />
    </div>
  );
}

export default App;
