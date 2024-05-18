'use client';

import { schemaOrderQuest } from '@/helpers/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from './ui-kit/Input';
import Buttom from './ui-kit/Buttom';
import Error from 'next/error';
import { orderQuests } from '@/actions/api';
import Link from 'next/link';
import { FormData } from '@/helpers/validation';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const FormOrder: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      peopleCount: 1,
      isLegal: false,
    },
    resolver: zodResolver(schemaOrderQuest),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = {
      name: data.name,
      phone: data.phone,
      peopleCount: +data.peopleCount,
      isLegal: data.isLegal,
    };
    try {
      const order = await orderQuests(formData);
      if (order) {
        toast.success('Заказ успешно оформлен', {
          onClose: () => router.back(),
          autoClose: 3000,
        });
        // if (order.error) throw new Error(order.error);
        // if (order === 201) {
        //   toast.success('Заказ успешно оформлен', {
        //     onClose: () => router.back(),
        //     autoClose: 3000,
        //   });
        reset();
      }
    } catch (error: unknown) {
      console.log(error);
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
      <h2 className='text-2xl font-bold mb-6'>Оставить заявку</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <Input
            name='name'
            placeholder='Имя'
            label='Ваше Имя'
            type='text'
            control={control}
          />
          {errors?.name && <p className='text-red-500 mt-2'>{errors?.name.message}</p>}
        </div>
        <div className='mb-5'>
          <Input
            name='phone'
            placeholder='Телефон'
            label='Контактный телефон'
            type='text'
            control={control}
          />
          {errors?.phone && <p className='text-red-500 mt-2'>{errors?.phone.message}</p>}
        </div>
        <div className='mb-5'>
          <Input
            name='peopleCount'
            placeholder='Количество участников'
            label='Количество участников'
            type='text'
            control={control}
          />
          {errors?.peopleCount && (
            <p className='text-red-500 mt-2'>{errors?.peopleCount.message}</p>
          )}
        </div>

        <div className='mb-14'>
          <Controller
            name='isLegal'
            control={control}
            render={({ field }) => (
              <div className='flex items-start'>
                <input
                  type='checkbox'
                  checked={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  className='mr-2 mt-1 leading-tight bg-secondary'
                />
                <label className='text-sm'>
                  Я согласен с
                  <Link
                    href='#'
                    className='underline mx-2'>
                    правилами обработки персональных данных
                  </Link>
                  и пользовательским соглашением
                </label>
              </div>
            )}
          />
          {errors.isLegal && <p className='text-red-500 mt-2'>{errors.isLegal.message}</p>}
        </div>
        <ToastContainer />
        <div className='w-full flex justify-center'>
          <Buttom
            disabled={!isValid}
            type='submit'>
            ОТПРАВИТЬ ЗАЯВКУ
          </Buttom>
        </div>
      </form>
    </div>
  );
};

export default FormOrder;
