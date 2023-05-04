import { roboto } from '@/app/config/fonts';
import { useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiTarget } from 'react-icons/fi'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  label: string;
  inputSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'full';
  Icon?: React.ComponentType<IconBaseProps>;
}

const inputClass = {
  size: {
    xs: 'w-24',
    sm: 'w-36',
    base: 'w-48',
    lg: 'w-56',
    xl: 'w-64',
    xxl: 'w-72',
    full: 'w-full',
  },
};

export function Input({ label, name, required, inputSize, Icon, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <div className={`flex flex-col gap-0.5 text-[var(--blue-800)] ${inputClass.size[inputSize]} `}>
      <label
        htmlFor={name}
        className='flex gap-1 items-center text-xs w-72 px-2'
      >
        {required && <FiTarget size={9} />}
        {label}
      </label>
      <div className={`flex flex-row h-8 items-center w-full bg-white justify-center gap-1 px-2 rounded-lg border-[var(--blue-600)] ${isFocused ? 'border-[1px]' : 'border-b-[1px] border-r-[1px]'} `} >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          name={name}
          className={roboto.className + " text-sm w-full bg-transparent outline-none"}
          {...props}
        />
        {Icon && <Icon />}
      </div>
    </div >
  );
}
