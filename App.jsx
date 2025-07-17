import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import CadastroEndereco from './CadastroEndereco';
import TelaInicial from './TelaInicial';
import Produto from './Produto';
import CadastroProduto from './CadastroProduto';
import Notificacoes from './Notificacoes';
import Carrinho from './Carrinho';
import Usuario from './Usuario';
import UsuarioVendedor from './UsuarioVendedor';
import UsuarioEdit from './UsuarioEdit';
import LojaEdit from './LojaEdit';
import CadastroLoja from './CadastroLoja';
import RedefinirSenha from './RedefinirSenha';
import Configuracoes from './Configuracoes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro/endereco" element={<CadastroEndereco />} />
        <Route path="/telainicial" element={<TelaInicial />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/cadastroproduto" element={<CadastroProduto />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuariovendedor" element={<UsuarioVendedor />} />
        <Route path="/usuarioedit" element={<UsuarioEdit />} />
        <Route path="/lojaedit" element={<LojaEdit />} />
        <Route path="/cadastroloja" element={<CadastroLoja />} />
        <Route path="/redefinirsenha" element={<RedefinirSenha />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
