import Comp from './Comp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Hero';
import Want from './Want';
import Obr from './Obr';
import Obr2 from './Obr2';
import Primers from './Primers';

function App() {
  return (
    <div id="all">
      <Comp />
      <Hero />
      <Want />
      <Obr />
      <Obr2 />
      <Primers />
    </div>  
  );
}

export default App;
