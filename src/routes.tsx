import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroEndereco from './pages/CadastroEndereco';
import TelaInicial from './pages/TelaInicial';
import Produto from './pages/Produto';
import CadastroProduto from './pages/CadastroProduto';
import Notificacoes from './pages/Notificacoes';
import Carrinho from './pages/Carrinho';
import Usuario from './pages/Usuario';
import UsuarioVendedor from './pages/UsuarioVendedor';
import UsuarioEdit from './pages/UsuarioEdit';
import LojaEdit from './pages/LojaEdit';
import CadastroLoja from './pages/CadastroLoja';
import RedefinirSenha from './pages/RedefinirSenha';
import Configuracoes from './pages/Configuracoes';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastro/endereco" element={<CadastroEndereco />} />
            <Route path="/telainicial" element={<TelaInicial />} />
            <Route path="/produto/:productId" element={<Produto />} />
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
            <Route path="*" element={<div>404 - Página não encontrada</div>} />
        </Routes>
    );
}