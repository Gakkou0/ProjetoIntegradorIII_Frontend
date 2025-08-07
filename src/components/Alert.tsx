type AlertProps = {
  type?: 'success' | 'error' | 'info';
  message: string;
};

export default function Alert({ type = 'info', message }: AlertProps) {
  const baseStyle = 'p-3 rounded-md shadow-md text-sm flex items-center gap-2';
  const colorMap = {
    success: 'bg-green-100 text-green-800 border border-green-300',
    error: 'bg-red-100 text-red-800 border border-red-300',
    info: 'bg-blue-100 text-blue-800 border border-blue-300',
  };

  return (
    <div className={`${baseStyle} ${colorMap[type]} animate-fade-in`}>
      {message}
    </div>
  );
}