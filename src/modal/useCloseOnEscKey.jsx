import { useEffect, useCallback } from 'react';

export const useCloseOnEscKey = (isOpen, setIsOpen, closeOnEscKey) => {
  const handleEscKeyUp = useCallback(
    (event) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    },
    [setIsOpen, isOpen],
  );

  return useEffect(() => {
    if (closeOnEscKey) {
      window.addEventListener('keydown', handleEscKeyUp);
    }

    return () => {
      if (closeOnEscKey) {
        window.removeEventListener('keydown', handleEscKeyUp);
      }
    };
  }, [closeOnEscKey, handleEscKeyUp]);
};
