/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { IFormUser } from './formUser.data'
import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IForm, IFormOptions } from '../../interfaces/form.interface';
// import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { TableReturn } from '../table/table.data';
import { ICreateUser, ITypesRegisterClient } from '../../pages/users/users.data';

export const FormUser: FC<IFormUser> = ({ title, action, defaultValues, keyWordId, extra, dataForm, validationSchema, onSubmitForm }) => {

    const { register, control, handleSubmit, formState: { errors } } = useForm<ICreateUser>({
        defaultValues,
        resolver: zodResolver(validationSchema),
        mode: 'onChange'
    });


    const { isValid } = useFormState({ control });

    const onSubmit = (returnForm: any) => {
        returnForm[keyWordId] = defaultValues[keyWordId as ITypesRegisterClient];
        returnForm[extra] = defaultValues[extra as ITypesRegisterClient];

        const formData: TableReturn<ICreateUser> = {
            action: action,
            data: returnForm
        }
        onSubmitForm(formData)
    }

    return (
        <div className='md:w-[30rem] w-[80vw]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center py-4 px-8'>
                <h1 className='text-2xl font-bold text-blue-400'>{title}</h1>

                {dataForm && dataForm.map((form: IForm, index: number) => (
                    (form.type == 'text' &&
                        <div key={index} className="w-full my-3">
                            <label className=' text-black ml-2'>{form.label}</label>
                            <input type="text"
                                className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none border-2 border-solid ${errors[form.name as ITypesRegisterClient]?.message ? 'border-red-500' : 'border-blue-200'} focus:border-blue-500`}
                                {...register(form.name as ITypesRegisterClient)}
                            />
                            {errors[form.name as ITypesRegisterClient]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name as ITypesRegisterClient]?.message?.toString()}</p>}
                        </div>
                    ) ||
                    (form.type == 'number' &&
                        <div key={index} className="w-full my-3">
                            <label className=' text-black ml-2'>{form.label}</label>
                            <input type="number"
                                className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none border-2 border-solid ${errors[form.name as ITypesRegisterClient]?.message ? 'border-red-500' : 'border-blue-200'} focus:border-blue-500`}
                                {...register(form.name as ITypesRegisterClient, { valueAsNumber: true })} />
                            {errors[form.name as ITypesRegisterClient]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name as ITypesRegisterClient]?.message?.toString()}</p>}
                        </div>
                    ) ||
                    (form.type == 'prefix' && (
                        <div key={index} className="flex items-center justify-between w-full my-3">
                            <div key={index} className="flex flex-col justify-center items-start gap-2 w-[20%]">
                                <label className='ml-1'>{form.label2}</label>
                                <select
                                    {...register(form.name2 as ITypesRegisterClient)}
                                    className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none border-2 border-solid ${errors[form.name as ITypesRegisterClient]?.message ? 'border-red-500' : 'border-blue-200'} focus:border-blue-500`}
                                >
                                    {form.options?.map((opt: IFormOptions) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                                {errors[form.name2 as ITypesRegisterClient]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name2 as ITypesRegisterClient]?.message?.toString()}</p>}
                            </div>

                            <div className="flex flex-col justify-center items-start gap-2 w-[75%]">
                                <label className='ml-1'>{form.label}</label>
                                <input
                                    type={'text'}
                                    placeholder={form.label}
                                    className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none border-2 border-solid ${errors[form.name as ITypesRegisterClient]?.message ? 'border-red-500' : 'border-blue-200'} focus:border-blue-500`}
                                    maxLength={form.maxLength}
                                    {...register(form.name as ITypesRegisterClient, { valueAsNumber: true })}
                                />
                                {errors[form.name as ITypesRegisterClient]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name as ITypesRegisterClient]?.message?.toString()}</p>}
                            </div>
                        </div>
                    )) ||
                    (form.type == 'select' &&
                        <div key={index} className="w-full my-3 gap-5">
                            <label className=' text-black ml-2'>{form.label}</label>
                            <select
                                // value={defaultValues[form.name]}
                                {...register(form.name as ITypesRegisterClient)}
                                className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none border-2 border-solid ${errors[form.name as ITypesRegisterClient]?.message ? 'border-red-500' : 'border-blue-200'} focus:border-blue-500 selectOption`}  >
                                {form.options?.map((opt: IFormOptions) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            {errors[form.name as ITypesRegisterClient]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name as ITypesRegisterClient]?.message?.toString()}</p>}
                        </div>
                    )
                ))}

                <div className="flex flex-col items-center justify-center ">
                    <Button variant="contained" type='submit' disabled={!isValid}>{action == 'addApi' ? 'Agregar' : 'Actualizar'}</Button>
                </div>
            </form>
        </div>
    )
}
