import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Header2 from './Components/Header2/Header2';
import Header3 from './Components/Header3/Header3';

function App() {
  return (
    <div className="App">
      <Header3></Header3>
      <Header2></Header2>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
