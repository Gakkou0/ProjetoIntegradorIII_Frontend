import { Search, Home, ShoppingCart, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const produtosMock = [
  {
    id: 1,
    nome: 'Camisa sem estampa azul, vários tamanhos',
    preco: 'R$34,99',
    imagem: '/camisa-azul.png',
    loja: '@lojaTal',
  },
  {
    id: 2,
    nome: 'Teclado com fio para computador/notebook',
    preco: 'R$55,00',
    imagem: '/teclado.png',
    loja: '@lojaTal',
  },
  {
    id: 3,
    nome: 'Caderno espiral de 10 matérias',
    preco: 'R$22,90',
    imagem: '/caderno.png',
    loja: '@lojaTal',
  },
  {
    id: 4,
    nome: 'Vestido vermelho curto',
    preco: 'R$39,90',
    imagem: '/vestido.png',
    loja: '@lojaTal',
  },
  {
    id: 5,
    nome: 'Camisa sem estampa branca, vários tamanhos',
    preco: 'R$34,99',
    imagem: '/camisa-branca.png',
    loja: '@lojaTal',
  },
];

export default function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="bg-orange-500 p-4 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center bg-white rounded-md px-3 py-2">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="flex-1 outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex-1 px-4 py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {produtosMock.map((produto) => (
          <div key={produto.id} className="text-sm">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-32 object-contain mb-2"
            />
            <p className="line-clamp-2 leading-tight">{produto.nome}</p>
            <p className="text-orange-600 font-bold">{produto.preco}</p>
            <p className="text-gray-500">{produto.loja}</p>
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
