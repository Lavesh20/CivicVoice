import React from 'react';
import Background from '@/components/Background';
import LoginContainer from '@/components/LoginContainer';
import Footer from '@/components/Footer';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Background />
      <LoginContainer />
      
    </div>
  );
};

export default Login;