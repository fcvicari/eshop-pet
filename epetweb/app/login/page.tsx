"use client"
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.png';

import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi'
import { Input } from '../src/components/input';
import { Button } from '../src/components/button';

export default function Login() {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-no-repeat flex h-[87vh] md:h-screen w-screen items-center justify-center">
      <div className="bg-[var(--blue-800)] flex flex-col md:flex-row p-5 m-4 rounded-lg w-[24rem] md:w-[55rem] h-[31.875rem] drop-shadow-md justify-center items-center">
        <div className="flex items-center justify-center p-4 md:w-[50%]">
          <Image
            src={Logo}
            alt="Logotipo E-Shop"
          />
        </div>
        <div className="flex flex-col m-2 gap-4 md:m-6 items-center justify-between py-8 px-5 md:w-[50%] rounded-lg h-[100%] w-[100%] md:h-[90%] bg-[var(--blue-100)]">
          <h1 className='text-2xl font-bold text-[var(--blue-800)]'>Faça seu login</h1>

          <Input
            required
            name="email"
            inputSize="full"
            label='E-Mail'
            type="email"
            Icon={FiMail}
          />

          <Input
            inputSize="full"
            name="password"
            label='Senha'
            type="text"
            Icon={FiEye}
          />

          <Button
            label="Entrar"
            variant="primary"
            size="full"
          />

          <Link href="./login">Esqueci minha senha</Link>
        </div>
      </div>
    </div>
  )
}
