import {
  ArrowLeft,
  Home,
  ShoppingCart,
  Bell,
  User,
  Truck,
  Star,
  Store,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export default function Notificacoes() {
  const notificacoesMock = [
    {
      id: 1,
      titulo: 'Preparando',
      descricao: 'Sua encomenda está sendo preparada',
      icone: <Store size={20} className="text-orange-500" />,
    },
    {
      id: 2,
      titulo: 'A caminho',
      descricao: 'Seu pedido está a caminho',
      icone: <Truck size={20} className="text-green-500" />,
    },
    {
      id: 3,
      titulo: 'Avalie seu último pedido',
      descricao: 'Nos diga o que achou da sua compra',
      icone: <Star size={20} className="text-yellow-500" />,
    },
  ];
    const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="max-w-4xl mx-auto w-full px-4 py-3 border-b border-orange-200 flex items-center">
        <ArrowLeft className="text-gray-700 mr-2" size={20} />
        <h2 className="text-lg font-semibold">Notificações</h2>
      </div>

      <div className="max-w-4xl w-full mx-auto flex-1 overflow-y-auto px-4 py-2 divide-y">
        {notificacoesMock.map((item) => (
          <div key={item.id} className="flex items-center gap-3 py-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full border">
              {item.icone}
            </div>
            <div>
              <p className="text-sm font-medium">{item.titulo}</p>
              <p className="text-xs text-gray-500">{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-orange-500 p-3 flex justify-around text-white fixed bottom-0 w-full md:relative z-50">
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
