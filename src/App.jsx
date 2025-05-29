import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import CadastroEndereco from './CadastroEndereco';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro/endereco" element={<CadastroEndereco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
