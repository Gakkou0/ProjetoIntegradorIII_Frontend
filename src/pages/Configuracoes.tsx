import {
  ArrowLeft,
  Store,
  Truck,
  CreditCard,
  Bell,
  Smartphone,
  Settings,
  Globe,
  Home,
  ShoppingCart,
  User,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ConfiguracoesLoja() {
  const navigate = useNavigate();

  const opcoes = [
    { label: 'Perfil da loja', icon: <Store size={20} />, rota: '/perfil-loja' },
    { label: 'Opções de frete', icon: <Truck size={20} />, rota: '/frete' },
    { label: 'Configurações de Pagamentos', icon: <CreditCard size={20} />, rota: '/pagamentos' },
    { label: 'Configurações de notificação', icon: <Bell size={20} />, rota: '/notificacoes-loja' },
    { label: 'Configurações de contato', icon: <Smartphone size={20} />, rota: '/contato' },
    { label: 'Configurações da conta', icon: <Settings size={20} />, rota: '/conta-loja' },
    { label: 'Idioma', icon: <Globe size={20} />, rota: '/idioma' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div className="bg-orange-500 text-white p-4 flex items-center w-full">
        <button onClick={() => navigate(-1)} className="mr-3">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold">Configurações da loja</h1>
      </div>

      <div className="divide-y px-4 py-2 flex-1 max-w-md mx-auto w-full">
        {opcoes.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.rota)}
            className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-100"
          >
            <div className="flex items-center gap-3 text-sm text-gray-800">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        ))}
      </div>

      <div className="bg-orange-500 p-3 flex justify-around text-white fixed bottom-0 w-full z-50">
        <button onClick={() => navigate('/telainicial')}>
          <Home size={24} />
        </button>
        <button onClick={() => navigate('/carrinho')}>
          <ShoppingCart size={24} />
        </button>
        <button onClick={() => navigate('/notificacoes')}>
          <Bell size={24} />
        </button>
        <button onClick={() => navigate('/usuario')}>
          <User size={24} />
        </button>
      </div>
    </div>
  );
}
