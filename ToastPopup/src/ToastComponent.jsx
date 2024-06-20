
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = () => {
  const notify = () => {
    toast("This is a toast notification!");
  };

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
};

export default ToastComponent;