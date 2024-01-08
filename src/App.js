import './App.css';
import Testimonio from './componentes/Testimonio.jsx';
import data from './info.json'

function App() {
  return (
    <div className="App">
      {data.map( persona =>
      <Testimonio
        key={persona.nombre}
        nombre={persona.nombre}
        edad={persona.edad}
        foto={persona.foto}
        cargo={persona.cargo}
        bootcamp={persona.bootcamp}
        
/>
)}
    </div>
  );
}

export default App;
