import SignInForm from '@/components/SignInForm';
import React from 'react';

const SignIn: React.FC = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto mt-20 flex flex-col items-center justify-center overflow-hidden'>
      <h1 className='mb-5'>Sign In</h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
