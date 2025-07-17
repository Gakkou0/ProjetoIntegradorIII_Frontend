import {
  Home,
  ShoppingCart,
  Bell,
  User,
  Truck,
  Star,
  Store,
  Settings,
  Heart,
  Megaphone,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';

export default function UsuarioVendedor() {
  const nomeUsuario = 'userteste';

  const acoes = [
    { label: 'Minha loja', icon: <Store size={18} className="text-pink-600" /> },
    { label: 'Feedback', icon: <Megaphone size={18} className="text-black" /> },
    { label: 'Configurações', icon: <Settings size={18} className="text-gray-700" /> },
    { label: 'Denunciar', icon: <AlertTriangle size={18} className="text-black" /> },
    { label: 'Favoritos', icon: <Heart size={18} className="text-purple-600" /> },
    { label: 'Ajuda', icon: <HelpCircle size={18} className="text-black" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="bg-orange-500 p-6 flex flex-col items-center text-white">
        <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 mb-2">
          <User size={32} />
        </div>
        <p className="font-semibold text-lg">{nomeUsuario}</p>
      </div>

      <div className="px-4 py-3 border-b">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-medium">Minhas compras</p>
          <span className="text-xs text-gray-500 cursor-pointer hover:underline">Histórico ›</span>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col items-center text-sm">
            <Store size={22} />
            <span className="mt-1">Preparando</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <Truck size={22} />
            <span className="mt-1">A caminho</span>
          </div>
          <div className="flex flex-col items-center text-sm">
            <Star size={22} />
            <span className="mt-1">Avaliar</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {acoes.map((acao, index) => (
          <button
            key={index}
            className="h-[60px] flex items-center justify-start gap-2 px-3 py-2 bg-white shadow rounded text-sm text-left hover:bg-gray-100"
          >
            {acao.icon}
            <span>{acao.label}</span>
          </button>
        ))}
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 pb-20">
        <button className="bg-red-600 hover:bg-red-700 w-full text-white py-2 rounded font-semibold">
          SAIR
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="max-w-4xl mx-auto w-full flex justify-around bg-orange-500 text-white py-3">
          <Home size={22} />
          <ShoppingCart size={22} />
          <Bell size={22} />
          <User size={22} />
        </div>
      </div>
    </div>
  );
}
