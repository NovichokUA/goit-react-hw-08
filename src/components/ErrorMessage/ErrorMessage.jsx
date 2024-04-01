import toast from "react-hot-toast";

const ErrorMessage = ({ message }) => {
  return toast.error(`${message}: Please reload the page.`);
};

export default ErrorMessage;
