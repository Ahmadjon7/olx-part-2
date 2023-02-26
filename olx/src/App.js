import './App.scss';
import Header from './components/Header/Header';
import Routes from './routes/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
