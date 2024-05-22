'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from './ui-kit/Input';
import Buttom from './ui-kit/Buttom';
import { createUser, orderQuests } from '@/actions/api';
import Link from 'next/link';
import { FormSignUpType, schemaValidationSignUp } from '@/helpers/validation';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import db from '@/app/modules/db';

const SignUpForm: React.FC = () => {
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
  } = useForm<FormSignUpType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(schemaValidationSignUp),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormSignUpType> = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const newUser = await createUser(formData);
      newUser.id && router.push('/');
    } catch (error: any) {
      if (error?.message === 'An account with this data already exists') {
        setError('email', { type: 'manual', message: 'An account with this data already exists' });
      } else {
        console.error('Registration error:', error);
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
            name='name'
            placeholder='Enter Name'
            label='Name'
            type='text'
            control={control}
          />
          {errors?.name && <p className='text-red-500 mt-2'>{errors?.name.message}</p>}
        </div>
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
            Registration
          </Buttom>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
