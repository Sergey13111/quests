'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from './ui-kit/Input';
import Buttom from './ui-kit/Buttom';
import { createUser, loginUser, orderQuests } from '@/actions/api';
import { FormSignInType, FormSignUpType, schemaValidationSignIn } from '@/helpers/validation';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const SignInForm: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForm<FormSignInType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schemaValidationSignIn),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormSignInType> = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    try {
      await loginUser(formData);
      router.push('/');
    } catch (error: any) {
      if (error.message === 'Invalid password or email') {
        setError('email', { type: 'manual', message: 'Invalid password or email' });
        setError('password', { type: 'manual', message: 'Invalid password or email' });
      } else if (error.message === 'User not found') {
        setError('email', { type: 'manual', message: 'User not found' });
      } else {
        console.error('Login error:', error);
      }
    }
  };
  return (
    <div className='p-12 rounded relative shadow-md w-[480px] bg-[#141414] z-40'>
      <button
        className='absolute top-6 right-6'
        onClick={handleClose}
        aria-label='Закрыть форму'>
        <Image
          src='/img/icons/close.svg'
          width={14}
          height={14}
          alt='Close'
        />
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <Input
            name='email'
            placeholder='Enter Email'
            label='Email'
            type='email'
            control={control}
          />
          {errors?.email && <p className='text-red-500 mt-2'>{errors?.email.message}</p>}
        </div>
        <div className='mb-5'>
          <Input
            name='password'
            placeholder='Enter Password'
            label='Password'
            type='password'
            control={control}
          />
          {errors?.password && <p className='text-red-500 mt-2'>{errors?.password.message}</p>}
        </div>

        <ToastContainer />
        <div className='w-full flex justify-center'>
          <Buttom
            disabled={!isValid}
            type='submit'>
            Login
          </Buttom>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
