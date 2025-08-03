import { useState } from 'react';
import {
  ArrowLeft,
  Info,
  User,
  MapPin,
  Mail,
  Smartphone,
  FileText
} from 'lucide-react';

export default function CadastroLojaCPF() {
  const [formData, setFormData] = useState({
    nome: '',
    nacionalidade: '',
    cpf: '',
    cnpj: '',
    nascimento: '',
    identidadeFrente: null,
    identidadeVerso: null,
    nomeLoja: '',
    endereco: '',
    email: '',
    telefone: '',
    aceite: false
  });

  const handleChange = (campo, valor) => {
    setFormData((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleFileChange = (e, campo) => {
    const file = e.target.files[0];
    if (file) handleChange(campo, file);
  };

  const handleSubmit = () => {
    if (!formData.aceite) return alert("Você deve aceitar os termos");
    console.log('Dados enviados:', formData);
  };

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <div className="flex items-center px-4 py-4 border-b border-orange-300">
        <ArrowLeft className="text-orange-500" size={20} />
        <h1 className="ml-2 text-sm md:text-base font-semibold">Fornecer informações</h1>
      </div>
      <div className="text-[12px] md:text-sm text-orange-600 bg-orange-50 px-4 py-2 border-b border-orange-200">
        Por favor revise as informações e tente novamente para completar seu cadastro.
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Campo label="Nome Completo *" placeholder="Digite seu nome" value={formData.nome} onChange={(e) => handleChange('nome', e.target.value)} icon={<User size={16} />} />
          <Campo label="Nacionalidade" placeholder="Digite sua nacionalidade" value={formData.nacionalidade} onChange={(e) => handleChange('nacionalidade', e.target.value)} icon={<Info size={16} />} />
          <Campo label="CPF" placeholder="000.000.000-00" value={formData.cpf} onChange={(e) => handleChange('cpf', e.target.value)} icon={<Info size={16} />} />
          <Campo label="CNPJ" placeholder="Opcional" value={formData.cnpj} onChange={(e) => handleChange('cnpj', e.target.value)} icon={<Info size={16} />} />
          <Campo label="Data de nascimento" placeholder="dd/mm/aaaa" value={formData.nascimento} onChange={(e) => handleChange('nascimento', e.target.value)} icon={<Info size={16} />} />
        </div>

        <div>
          <label className="text-sm font-medium block mb-2">Documento de identidade</label>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="w-full md:w-1/2 h-28 border-2 border-dashed border-orange-400 flex items-center justify-center text-orange-500 text-xs rounded cursor-pointer text-center">
                Frente
                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'identidadeFrente')} />
              </label>
              <label className="w-full md:w-1/2 h-28 border-2 border-dashed border-orange-400 flex items-center justify-center text-orange-500 text-xs rounded cursor-pointer text-center">
                Verso
                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'identidadeVerso')} />
              </label>
          </div>
          <p className="text-[10px] text-gray-400 mt-1">
            Formato suportado: jpg/jpeg/png. Certifique-se de enviar a imagem correta da frente e do verso.
          </p>
        </div>

        <div className="pt-3 border-t">
          <h3 className="text-sm md:text-base font-semibold mb-4">Informações da Loja</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Campo label="Nome da loja" value={formData.nomeLoja} onChange={(e) => handleChange('nomeLoja', e.target.value)} icon={<FileText size={16} />} />
            <Campo label="Endereço" value={formData.endereco} onChange={(e) => handleChange('endereco', e.target.value)} icon={<MapPin size={16} />} />
            <Campo label="E-mail" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} icon={<Mail size={16} />} />
            <Campo label="Telefone" value={formData.telefone} onChange={(e) => handleChange('telefone', e.target.value)} icon={<Smartphone size={16} />} />
          </div>
        </div>

        <div className="flex items-start gap-2 text-xs mt-2">
          <input type="checkbox" checked={formData.aceite} onChange={(e) => handleChange('aceite', e.target.checked)} />
          <span>
            Eu li e concordo com os <a href="#" className="text-blue-600 underline">Termos de Serviço</a> e a <a href="#" className="text-blue-600 underline">Política de Privacidade</a> do Crateús Shop.
          </span>
        </div>

        <div className="pt-2">
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
          >
            SALVAR E ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
}

function Campo({ icon, label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-gray-700 mb-1 text-sm md:text-base">
        {icon}
        {label}
      </label>
      <input
        className="w-full border rounded p-2 md:p-3 text-sm md:text-base"
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
