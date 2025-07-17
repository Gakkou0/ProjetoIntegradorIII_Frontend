import { useState } from 'react';
import { ArrowLeft, ImagePlus, Tag, Boxes, List } from 'lucide-react';

export default function CadastroProduto() {
  const [showModal, setShowModal] = useState(null);
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [categoria, setCategoria] = useState('');

  const categoriasDisponiveis = [
    'Roupas Masculinas', 'Roupas Femininas', 'Roupas Infantis', 'Calçados',
    'Bolsas e Mochilas', 'Bijuterias e Relógios', 'Beleza & Cuidados'
  ];

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md lg:max-w-2xl bg-white rounded-lg shadow-lg flex flex-col px-6 py-6">

        <div className="flex items-center mb-6">
          <ArrowLeft className="text-gray-700 mr-2" size={20} />
          <h2 className="text-lg md:text-xl font-semibold">Adicionar produto</h2>
        </div>

        <div className="border-2 border-dashed border-orange-500 rounded-md p-4 text-center text-orange-500 text-sm cursor-pointer mb-6">
          <ImagePlus className="mx-auto mb-1" size={24} />
          Adicionar fotos
        </div>

        <div className="mb-5">
          <label className="text-sm font-medium">Nome do produto *</label>
          <input
            type="text"
            maxLength={255}
            placeholder="Digite o nome do produto..."
            className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
          />
          <p className="text-xs text-right text-gray-400">0/255</p>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium">Descrição do produto *</label>
          <textarea
            maxLength={5000}
            placeholder="Digite a descrição do produto..."
            className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm resize-none"
          />
          <p className="text-xs text-right text-gray-400">0/5000</p>
        </div>

        <div className="space-y-4 mb-6">
          <button
            onClick={() => setShowModal('preco')}
            className="flex items-center justify-between w-full border px-4 py-2 rounded text-sm hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              <Tag size={16} /> Preço *
            </span>
            <span className="text-gray-500">{preco || '>'}</span>
          </button>

          <button
            onClick={() => setShowModal('estoque')}
            className="flex items-center justify-between w-full border px-4 py-2 rounded text-sm hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              <Boxes size={16} /> Estoque *
            </span>
            <span className="text-gray-500">{estoque || '>'}</span>
          </button>

          <button
            onClick={() => setShowModal('categoria')}
            className="flex items-center justify-between w-full border px-4 py-2 rounded text-sm hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              <List size={16} /> Categoria *
            </span>
            <span className="text-gray-500">{categoria || '>'}</span>
          </button>
        </div>

        <div className="flex justify-between gap-4">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold">Salvar</button>
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold">Publicar</button>
        </div>
      </div>

      {showModal === 'preco' && (
        <Modal onClose={() => setShowModal(null)}>
          <h3 className="font-bold mb-2">💰 Preço</h3>
          <input
            type="text"
            placeholder="Digite o preço do produto..."
            className="w-full border rounded p-2 text-sm"
            onChange={(e) => setPreco(e.target.value)}
          />
        </Modal>
      )}

      {showModal === 'estoque' && (
        <Modal onClose={() => setShowModal(null)}>
          <h3 className="font-bold mb-2">📦 Estoque</h3>
          <input
            type="number"
            placeholder="Digite a quantidade..."
            className="w-full border rounded p-2 text-sm"
            onChange={(e) => setEstoque(e.target.value)}
          />
        </Modal>
      )}

      {showModal === 'categoria' && (
        <Modal onClose={() => setShowModal(null)}>
          <h3 className="font-bold mb-2">📂 Categoria</h3>
          <select
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full border rounded p-2 text-sm"
          >
            <option value="">Escolha a categoria</option>
            {categoriasDisponiveis.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow p-5 w-full max-w-sm relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">✕</button>
        {children}
      </div>
    </div>
  );
}
