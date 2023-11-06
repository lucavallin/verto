import { toast } from "react-toastify";

export const useToast = () => {
  return (message: string) => {
    toast.warn(message, {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: 0,
      theme: "dark",
      closeButton: false
    });
  };
};
