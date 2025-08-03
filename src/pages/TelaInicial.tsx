import { Search, Home, ShoppingCart, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiService';
import { useEffect, useState } from 'react';
import Product from '../types/Product';
import defaultImage from '../assets/defaut.png';

export default function TelaInicial() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
          const response = await apiService.get('/products', {
            withCredentials: true});

          setProducts(response.data.Products);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return [];
      }
    }
    fetchProdutos();
  }, []);

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

      <div 
      className="flex-1 px-4 py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {products.map((products) => (
          <div key={products.productId} className="text-sm cursor-pointer" onClick={() => navigate(`/produto/${products.productId}`)} >
            <img
              src={products.imageUrl || defaultImage}
              alt={products.name}
              className="w-full aspect-square object-cover rounded-md mb-2 h-auto"
            />
            <p className="line-clamp-2 leading-tight">{products.name}</p>
            <p className="text-orange-600 font-bold">R$ {products.price}</p>
            <p className="text-gray-500">{products.storeName}</p>
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
