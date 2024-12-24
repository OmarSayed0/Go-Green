import toast from 'react-hot-toast';

export const showSuccess = (message: string) => {
  toast.success(message, {
    duration: 3000,
    position: 'top-right',
  });
};

export const showError = (error: Error | string) => {
  const message = error instanceof Error ? error.message : error;
  toast.error(message, {
    duration: 5000,
    position: 'top-right',
  });
};