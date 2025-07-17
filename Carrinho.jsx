import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function Carrinho() {
  const [quantidade, setQuantidade] = useState(1);
  const [selecionado, setSelecionado] = useState(true);
  const [selecionarTudo, setSelecionarTudo] = useState(true);

  const produto = {
    id: 1,
    nome: 'Camisa sem estampa azul... P',
    preco: 34.99,
    imagem: '/camisa-azul.png',
    loja: 'NomeDaLoja',
  };

  const total = selecionado ? (produto.preco * quantidade).toFixed(2) : '0.00';
  const quantidadeSelecionada = selecionado ? 1 : 0;

  const handleSelecionarTudo = () => {
    const novoValor = !selecionarTudo;
    setSelecionarTudo(novoValor);
    setSelecionado(novoValor);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex items-center px-4 py-3 border-b border-orange-200">
        <ArrowLeft className="text-gray-700 mr-2" size={20} />
        <h2 className="text-lg font-semibold">Carrinho</h2>
      </div>

      <div className="max-w-4xl mx-auto w-full flex-1 overflow-y-auto px-4 py-2 space-y-4">
        <div className="bg-white rounded-lg shadow p-3 border">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2 accent-orange-500"
              checked={selecionado}
              onChange={(e) => setSelecionado(e.target.checked)}
            />
            <span className="font-medium text-sm">{produto.loja}</span>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-2 accent-orange-500"
              checked={selecionado}
              onChange={(e) => setSelecionado(e.target.checked)}
            />
            <img
              src={produto.imagem}
              alt="Produto"
              className="w-16 h-16 object-contain rounded"
            />
            <div className="flex-1">
              <p className="text-sm mb-1">{produto.nome}</p>
              <p className="text-orange-600 font-semibold text-sm mb-2">
                R${produto.preco.toFixed(2)}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                  className="w-6 h-6 rounded border flex items-center justify-center text-sm"
                >
                  <Minus size={12} />
                </button>
                <span>{quantidade}</span>
                <button
                  onClick={() => setQuantidade(quantidade + 1)}
                  className="w-6 h-6 rounded border flex items-center justify-center text-sm"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="max-w-4xl mx-auto w-full px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-orange-500"
              checked={selecionarTudo}
              onChange={handleSelecionarTudo}
            />
            <span className="text-sm">Tudo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-semibold text-sm">R${total}</span>
            <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded font-semibold">
              Continuar ({quantidadeSelecionada})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
