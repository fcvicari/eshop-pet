"use client"
import { FiEye, FiEyeOff, FiMail } from 'react-icons/fi'

import { FormProvider, useForm } from "react-hook-form"
import { Button } from '../src/components/button';
import Image from 'next/image';
import { Input } from '../src/components/input';
import Link from 'next/link';
import Logo from '../../public/logo.png';
import { useState } from 'react';
import { Title } from '../src/components/title';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const loginFormSchema = z.object({
  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido')
    .toLowerCase(),
  password: z.string()
    .nonempty('Senha é obrigatório')
    .min(6, 'Informe no mínimo 6 caracteres'),
})

type loginFormDate = z.infer<typeof loginFormSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<loginFormDate>({
    resolver: zodResolver(loginFormSchema),
  });

  function loginUser({ email, password }: loginFormDate) {
    console.log(email)
    console.log(password)
  }

  return (
    <div className="bg-[url('/background.png')] bg-cover bg-no-repeat flex h-[87vh] md:h-screen w-screen items-center justify-center">
      <div className="bg-[var(--blue-800)] flex flex-col md:flex-row p-5 m-4 rounded-lg w-[24rem] md:w-[55rem] h-[31.875rem] drop-shadow-md justify-center items-center">
        <div className="flex items-center justify-center p-4 md:w-[50%]">
          <Image
            src={Logo}
            alt="Logotipo E-Shop"
          />
        </div>
        <div className="flex flex-col m-2 gap-4 md:m-6 items-center justify-between py-4 md:py-8 px-5 md:w-[50%] rounded-lg h-[100%] w-[100%] md:h-[90%] bg-[var(--blue-100)]">
          <Title size='large'>Faça seu login</Title>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(loginUser)} className='flex flex-col gap-2'>
              <Input
                required
                inputSize="full"
                label='E-Mail'
                type="email"
                nameField="email"
              >
                <FiMail />
              </Input>

              <Input
                required
                inputSize="full"
                label='Senha'
                type={showPassword ? "text" : "password"}
                nameField="password"
              >
                {showPassword ? <FiEyeOff onClick={() => setShowPassword(!showPassword)} /> : <FiEye onClick={() => setShowPassword(!showPassword)} />}
              </Input>

              <Button
                type='submit'
                label="Entrar"
                variant="primary"
                size="full"
              />
            </form>
          </FormProvider>

          <Link className='text-xs text-[var(--blue-800)]' href="./login">Esqueci minha senha</Link>
        </div>
      </div>
    </div >
  )
}
