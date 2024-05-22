import SignUpForm from '@/components/SignUpForm';
import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto mt-20 flex flex-col items-center justify-center overflow-hidden'>
      <h1 className='mb-5'>Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
