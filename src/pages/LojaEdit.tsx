import {
  Home,
  ShoppingCart,
  Bell,
  User,
  Pencil,
  Mail,
  Smartphone,
  MapPin,
  Store,
  X,
  Text,
} from 'lucide-react';
import { useState } from 'react';

export default function LojaEdit() {
  const [lojaData, setLojaData] = useState({
    nome: 'nomeLoja',
    descricao: 'Não definido',
    email: 'emailDaLoja@Loja.com',
    celular: '(**) *****-**83',
  });

  const [modal, setModal] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const abrirModal = (campo) => {
    setModal(campo);
    setInputValue(lojaData[campo]);
  };

  const salvarAlteracao = () => {
    setLojaData((prev) => ({
      ...prev,
      [modal]: inputValue,
    }));
    setModal(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-orange-500 p-6 flex flex-col items-center text-white">
        <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 mb-2">
          <Store size={32} />
        </div>
        <p className="font-semibold text-lg">{lojaData.nome}</p>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 flex-1">
        <div className="divide-y py-4 text-sm">
          <Item texto="Nome da Loja" valor={lojaData.nome} icon={<Pencil size={18} />} onClick={() => abrirModal('nome')} />
          <Item texto="Descrição da loja" valor={lojaData.descricao} icon={<Text size={18} />} onClick={() => abrirModal('descricao')} />
          <Item texto="E-mail" valor={lojaData.email} icon={<Mail size={18} />} onClick={() => abrirModal('email')} />
          <Item texto="Celular" valor={lojaData.celular} icon={<Smartphone size={18} />} onClick={() => abrirModal('celular')} />
          <Item texto="Configurações de endereço" valor="" icon={<MapPin size={18} />} onClick={() => alert('Abrir configurações de endereço')} />
        </div>

        <div className="pb-24">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded">
            APAGAR LOJA
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="max-w-4xl mx-auto w-full flex justify-around bg-orange-500 text-white py-3">
          <Home size={22} />
          <ShoppingCart size={22} />
          <Bell size={22} />
          <User size={22} />
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-5 relative">
            <button onClick={() => setModal(null)} className="absolute top-2 right-2 text-gray-500">
              <X size={20} />
            </button>
            <h2 className="font-bold text-lg mb-3">Editar {modal}</h2>

            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full border rounded p-2 text-sm mb-4"
            />

            <button
              onClick={salvarAlteracao}
              className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded font-semibold"
            >
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Item({ texto, valor, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between py-4 w-full text-left"
    >
      <div className="flex items-center gap-2 text-gray-800">
        {icon}
        <span>{texto}</span>
      </div>
      <span className="text-gray-500 text-sm truncate max-w-[180px]">
        {valor ? `${valor} ›` : '›'}
      </span>
    </button>
  );
}
