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
import {useState, useEffect} from 'react';
import apiService from '../services/apiService';
import defautImage from '../assets/defaut.png';
import { useParams } from 'react-router-dom';
import Product from '../types/Product';
import cart from '../hooks/cart'
import { useAlert } from '../contexts/AlertContext';
import NavBottom from '../components/navBottom';


export default function TelaProduto() {

  const [produtoInfo, setProdutoInfo] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const path = useParams();
  const { showAlert } = useAlert();
  
  const { addToCart } = cart()  

  const quantityUp = () => {
    setQuantity(prev => prev + 1);
  }

  const quantityDown = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  useEffect(() => {

    try {
      const fetchProduto = async () => {
        const response = await apiService.get(`/products/${path.productId}`, {
          withCredentials: true
        });
        setProdutoInfo(response.data);

      };
      fetchProduto();
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
    } 
  }, []);

  if (!produtoInfo) {
    return <div>Carregando...</div>;
  }

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
        <button className="absolute left-6 top-4 text-gray-600"
          onClick={() => window.history.back()}>
          <ChevronLeft size={20} />
        </button>
        <img
          src={produtoInfo.imageUrl || defautImage}
          alt={produtoInfo.name}
          className="w-full h-60 object-contain"
        />
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 pb-40">
        <p className="font-medium mt-4">{produtoInfo.name}</p>
        <p className="text-orange-600 font-bold text-lg">{produtoInfo.price}</p>
        <p className="text-gray-500 text-sm">
          {produtoInfo.stockQuantity} unidades disponíveis
        </p>

        <div className="mt-4">
          <p className="font-semibold text-sm mb-1">Quantidade</p>
          <div className="flex gap-2">
            <div className="flex items-center border rounded w-[90px] justify-between">
              <button
                onClick={quantityDown}
                className="w-8 h-8 text-gray-500 disabled:opacity-40"
                disabled={quantity === 1}
              >
                –
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={quantityUp}
                className="w-8 h-8 text-gray-500"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center text-sm text-gray-700">
          <span className="flex items-center font-semibold mr-1">
            {}
            <Star className="text-yellow-500 ml-1" size={16} />
          </span>
          <span>Avaliações do produto (9)</span>
          <span className="ml-auto text-blue-600 text-xs cursor-pointer hover:underline">
            Ver mais
          </span>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-sm mb-1">Descrição</p>
          <p className="text-sm text-gray-700">{produtoInfo.description}</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="max-w-4xl mx-auto flex">
          {/* Botão Contato */}
          <button className="flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-100 text-orange-600">
            <Phone size={20} />
            <span className="text-xs">Contato</span>
          </button>

          <button className="flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-100 text-orange-600" onClick={() => addToCart(Number(path.productId), quantity)}>
            <ShoppingCart size={20} />
            <span className="text-xs">Adicionar</span>
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 text-sm w-[50%]">
            Comprar agora
          </button>
        </div>

        <NavBottom></NavBottom>
      </div>
    </div>
  );
}
