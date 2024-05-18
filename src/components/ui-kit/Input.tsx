'use client';

import { FormData } from '@/helpers/validation';
import { OrderQuestType } from '@/types/OrderQuestType';
import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

export type InputPropsType = {
  type?: string;
  label: string;
  name: keyof OrderQuestType;
  error?: string | undefined;
  control: Control<any>;
  placeholder: string;
};

const Input: React.FC<InputPropsType> = ({ label, name, error, control, type, placeholder }) => {
  return (
    <div className='w-full'>
      <label className='block text-primary text-start text-[14px]  font-medium mb-3'>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            {...field}
            className='form-input w-full bg-[#141414] border border-greySecondary text-primary font-ralewayMedium text-[14px] focus-visible:outline-none rounded px-4 py-2'
          />
        )}
      />
    </div>
  );
};

export default Input;
