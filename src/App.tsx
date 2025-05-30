import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.tsx';
import Cadastro from './Cadastro.tsx';
import CadastroEndereco from './CadastroEndereco.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/cadastro" Component={Cadastro} />
        <Route path="/cadastro/endereco" Component={CadastroEndereco} />
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
