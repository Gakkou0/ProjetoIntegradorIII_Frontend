import { createContext, useContext, useState, ReactNode } from 'react';
import Alert from '../components/Alert';

type AlertType = 'success' | 'error' | 'info';

type AlertData = {
  type?: AlertType;
  message: string;
};

type AlertContextType = {
  showAlert: (data: AlertData) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<AlertData | null>(null);

  const showAlert = ({ message, type = 'info' }: AlertData) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 transion-all animate-fade-in">
          <Alert type={alert.type} message={alert.message} />
        </div>
      )}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) throw new Error('useAlert deve ser usado dentro de <AlertProvider>');
  return context;
}