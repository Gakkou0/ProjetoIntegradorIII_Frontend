import {
  User,
  Truck,
  Star,
  Store,
  Settings,
  Heart,
  Megaphone,
  AlertTriangle,
  HelpCircle,
  Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import NavBottom from '../components/navBottom';
import apiService from '../services/apiService';
import { useEffect, useState } from 'react';
import UserInfo from '../types/User'

export default function Usuario() {
  
  const [ user, setUser ] = useState<UserInfo>();
  

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await apiService.get('users/profile', {
        withCredentials:true
      })
      
      console.log(response.data)
      const userResponse = {
        userName: response.data.username,
        userRole: response.data.role,
        userIconURL: ''
      } as UserInfo

      setUser(userResponse)
    }
    fetchUser()
  }, [])

  const logout = async () => {
    try{
      await apiService.post('logout/',{},{withCredentials: true}) 
    }
    finally{
      navigate('/')
    }
  }

  const actionsWithRole = [
    { label: 'Seja vendedor', icon: <Store size={18} className="text-pink-600" />, rota: '/cadastroloja', role: 0 },
    { label: 'Acessar sua loja', icon: <Store size={18} className="text-pink-600" />, role: 1 },
    { label: 'Adicionar novo produto', icon: <Plus size={18} className="text-green-600" />, rota: '/cadastroProduto', role: 1 }
  ]

  const acoes = [
    { label: 'Feedback', icon: <Megaphone size={18} className="text-black" /> },
    { label: 'Configurações', icon: <Settings size={18} className="text-gray-700" />, rota: '/configuracoes' },
    { label: 'Denunciar', icon: <AlertTriangle size={18} className="text-black" /> },
    { label: 'Favoritos', icon: <Heart size={18} className="text-purple-600" /> },
    { label: 'Ajuda', icon: <HelpCircle size={18} className="text-black" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col"> {/* espaço pro menu fixo */}
      
      <div className="flex-1">
        <div className="bg-orange-500 p-6 flex flex-col items-center text-white">
          <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 mb-2">
            <User size={32} />
          </div>
          <p className="font-semibold text-lg">{user?.userName}</p>
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
          {
            actionsWithRole
            .filter((action) => user?.userRole === action.role)
            .map((action, index) => (
              <button
              key={index}
              onClick={() => action.rota && navigate(action.rota)} // <-- navegação ativada aqui
              className="h-[60px] flex items-center justify-start gap-2 px-3 py-2 bg-white shadow rounded text-sm text-left hover:bg-gray-100"
            >
              {action.icon}
              <span>{action.label}</span>
            </button>
            ))
          }
          {acoes.map((acao, index) => (
            <button
              key={index}
              onClick={() => acao.rota && navigate(acao.rota)} // <-- navegação ativada aqui
              className="h-[60px] flex items-center justify-start gap-2 px-3 py-2 bg-white shadow rounded text-sm text-left hover:bg-gray-100"
            >
              {acao.icon}
              <span>{acao.label}</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl w-full mx-auto px-4 mt-4">
          <button className="bg-red-600 hover:bg-red-700 w-full text-white py-2 rounded font-semibold" onClick={logout}>
            SAIR
          </button>
        </div>
      </div>
        <NavBottom></NavBottom>
    </div>
  );
}
