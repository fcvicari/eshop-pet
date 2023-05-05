import { useCallback, useEffect, useState } from 'react';

import { FiTarget } from 'react-icons/fi'
import { IconBaseProps } from 'react-icons';
import { roboto } from '@/app/config/fonts';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  label: string;
  error?: string;
  inputSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'full';
  Icon?: React.ComponentType<IconBaseProps>;
}

export function Input({ label, name, required, error, inputSize, Icon, ...props }: InputProps) {
  const inputClass = {
    default: 'flex flex-row h-8 items-center w-full bg-white justify-center gap-1 px-2 rounded-lg',
    size: {
      xs: 'w-24',
      sm: 'w-36',
      base: 'w-48',
      lg: 'w-56',
      xl: 'w-64',
      xxl: 'w-72',
      full: 'w-full',
    },
    typeBorder: {
      onFocus: 'border-[1px]',
      onBlur: 'border-b-[1px] border-r-[1px]',
    },
    color: {
      onFocus: 'var(--yellow-500)',
      onBlur: 'var(--blue-600)',
      error: 'var(--red-900)',
    }
  };
  
  
  const [typeBorder, setTypeBorder] = useState<'onFocus' | 'onBlur'>('onBlur');
  const [cssConfig, setCssConfig] = useState<'onFocus' | 'onBlur' | 'error'>('onBlur')

  const handleInputFocus = useCallback(() => {
    setTypeBorder('onFocus');
    if (!error) {
      setCssConfig('onFocus');
    }
  }, []);

  const handleInputBlur = useCallback(() => {
    setTypeBorder('onBlur');
    if (!error) {
      setCssConfig('onBlur');
    }
  }, []);

  useEffect(() => {
    if (!error) {
      setCssConfig('onBlur');
    }
    else {
      setCssConfig('error');
    }
  }, [error]);

  return (
    <div className={`flex flex-col text-[var(--blue-800)] ${inputClass.size[inputSize]} `}>
      <label
        htmlFor={name}
        className='flex gap-1 items-center text-xs w-72 px-2'
      >
        {label}
        {required && <FiTarget size={9} />}
      </label>
      <div className={`${inputClass.default} border-[${inputClass.color[cssConfig]}] ${inputClass.typeBorder[typeBorder]} `} >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          name={name}
          className={`${roboto.className} text-sm w-full bg-transparent outline-none`}
          {...props}
        />
        {Icon && <Icon className={`text-[${inputClass.color[cssConfig]}]`} />}
      </div>
      <div className={`h-4 pl-2 text-xs w-full text-[${inputClass.color[cssConfig]}] `}>
        {error && (<span>{error}</span>)}
      </div>
    </div >
  );
}
