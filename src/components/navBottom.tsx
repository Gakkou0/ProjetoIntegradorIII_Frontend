import { Home, ShoppingCart, Bell, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom' 

export default function NavBottom() {

    const navigate = useNavigate()
    return (
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
    )
}