import {
  ChevronLeft,
  Search,
  Home,
  ShoppingCart,
  Heart,
  User,
  Star,
  Phone,
  Bell,
} from 'lucide-react';

export default function TelaProduto() {
  const produto = {
    nome: 'Camisa sem estampa azul, vários tamanhos',
    preco: 'R$34,99',
    estoque: 9,
    tamanhos: ['P', 'M', 'G'],
    avaliacao: 4.9,
    qtdAvaliacoes: 25,
    descricao:
      'Camisa 100% algodão, disponível nos tamanhos P, M e G. Ideal para o dia a dia.',
    imagem: '/camisa-azul.png',
  };

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

      <div className="relative max-w-4xl w-full mx-auto px-4 pt-4">
        <button className="absolute left-6 top-4 text-gray-600">
          <ChevronLeft size={20} />
        </button>
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-60 object-contain"
        />
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 pb-40">
        <p className="font-medium mt-4">{produto.nome}</p>
        <p className="text-orange-600 font-bold text-lg">{produto.preco}</p>
        <p className="text-gray-500 text-sm">
          {produto.estoque} unidades disponíveis
        </p>

        <div className="mt-4">
          <p className="font-semibold text-sm mb-1">Tamanhos</p>
          <div className="flex gap-2">
            {produto.tamanhos.map((tamanho) => (
              <button
                key={tamanho}
                className="border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-100"
              >
                {tamanho}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center text-sm text-gray-700">
          <span className="flex items-center font-semibold mr-1">
            {produto.avaliacao}
            <Star className="text-yellow-500 ml-1" size={16} />
          </span>
          <span>Avaliações do produto ({produto.qtdAvaliacoes})</span>
          <span className="ml-auto text-blue-600 text-xs cursor-pointer hover:underline">
            Ver mais
          </span>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-sm mb-1">Descrição</p>
          <p className="text-sm text-gray-700">{produto.descricao}</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="max-w-4xl mx-auto flex">
          {/* Botão Contato */}
          <button className="flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-100 text-orange-600">
            <Phone size={20} />
            <span className="text-xs">Contato</span>
          </button>

          <button className="flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-100 text-orange-600">
            <ShoppingCart size={20} />
            <span className="text-xs">Adicionar</span>
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 text-sm w-[50%]">
            Comprar agora
          </button>
        </div>

        <div className="bg-orange-500 flex justify-around py-2 text-white">
          <Home size={22} />
          <ShoppingCart size={22} />
          <Bell size={22} />
          <User size={22} />
        </div>
      </div>
    </div>
  );
}
