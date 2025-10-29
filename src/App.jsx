import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './provider/AuthProvider';
import { RouterProvider } from 'react-router';
import router from './routes/routes';

const App = () => {
   useEffect(() => {

    AOS.init({
      duration: 500,
      offset: 100,     
      easing: 'ease-in-out',
      once: false,       
    });

    window.addEventListener('load', AOS.refresh);

    return () => {
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}


export default App;