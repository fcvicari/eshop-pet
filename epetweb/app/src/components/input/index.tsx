import { useFormContext } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  nameField: string;
  inputSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'full';
  children?: React.ReactNode;
}

export function Input({ label, nameField, required, readOnly, inputSize, children, ...props }: InputProps) {
  const { register, formState: { errors } } = useFormContext();

  const error = errors[nameField]?.message?.toString();

  const defaultConfig = `py-1 ${readOnly ? 'bg-[var(--gray-100)]' : 'bg-white'}  ${error ? '' : 'focus-within:border-[var(--yellow-500)]'} flex focus:bg-yellow-200 flex-row h-8 items-center justify-center w-full border-b-2 gap-1 rounded-lg p-2`;

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

  return (
    <div className={`h-16 flex flex-col ${readOnly ? 'text-[var(--blue-300)]' : 'text-[var(--blue-800)]'} ${inputClass.size[inputSize]} `}>
      <label htmlFor={nameField} className='flex gap-1 px-1 items-center text-xs w-72 text-[var(--blue-800)]'>
        {label}
      </label>
      <div className={`${defaultConfig} ${error ? 'border-[var(--red-900)]' : 'border-[var(--blue-800)]'} ${required ? 'border-l-[6px]' : ''} `} >
        <input
          className="text-sm w-full bg-transparent outline-none"
          {...props}
          {...register(nameField)}
        />
        <label className={`${readOnly ? '' : error ? 'text-[var(--red-900)]' : 'text-[var(--blue-800)]'}`} >
          {children}
        </label>
      </div>
      {error && (<span className='h-4 pl-2 text-xs w-full text-[var(--red-900)]'>{error}</span>)}
    </div >
  );
}
