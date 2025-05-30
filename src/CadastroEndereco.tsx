
export default function CadastroEndereco() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-lg">
        {/* Topo com logo */}
        <div className="bg-orange-500 p-6 text-center">
          <img src="/logo-crateus-shop.png" alt="Logo" className="mx-auto mb-2 w-16" />
        </div>

        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-center mb-4">Olá, Bem vindo!</h2>

          {/* Barra de progresso fake */}
          <div className="flex items-center mb-4">
            <div className="flex-grow h-1 bg-green-500 rounded" />
            <span className="mx-2 text-sm text-gray-700">2</span>
            <div className="flex-grow h-1 bg-green-500 rounded" />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="CRATEÚS   Rua..."
              className="w-full py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Bairro"
              className="w-full py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>

          <div className="mb-3 flex gap-2">
            <input
              type="text"
              placeholder="Nº"
              className="w-1/2 py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Complemento"
              className="w-1/2 py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>

          <div className="mb-5">
            <input
              type="text"
              placeholder="Ponto de referência"
              className="w-full py-2 px-3 border-b border-gray-400 focus:outline-none placeholder:text-sm"
            />
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded font-semibold">
            CADASTRAR
          </button>
        </div>

        <div className="bg-orange-500 text-center text-sm text-white py-3">
          Já tem uma conta?{' '}
          <a href="/" className="text-blue-100 underline">Entrar</a>
        </div>
      </div>
    </div>
  );
}
