import { createContext, useState, SetStateAction, Dispatch } from 'react';

interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextProps>({ isModalOpen: false, setIsModalOpen: () => {} });

const ModalProvider = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
