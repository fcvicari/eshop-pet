import { IconBaseProps } from 'react-icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'xs' | 'sm' | 'base' | 'lg' | 'full';
  label: string;
  Icon?: React.ComponentType<IconBaseProps>;
}

export function Button({ variant, label, Icon, size, ...props }: ButtonProps) {
  const buttonClass = {
    base: 'flex gap-2 justify-center items-center rounded-lg text-sm font-bold h-10 ease-linear drop-shadow-[2px_2px_4px_rgba(34,68,102,0.25)]',
    size: {
      xs: 'w-24',
      sm: 'w-32',
      base: 'w-40',
      lg: 'w-48',
      full: 'w-full',
    },
    variants: {
      primary: 'text-[var(--blue-100)] bg-[var(--blue-600)] hover:bg-[var(--blue-800)]',
      secondary: 'text-[var(--blue-800)] bg-[var(--gray-100)] hover:bg-[var(--blue-200)]',
      danger: 'text-[var(--white)] bg-[var(--red-700)] hover:bg-[var(--red-900)]',
    }
  };

  return (
    <button
      className={`${buttonClass.base} ${buttonClass.size[size]} ${buttonClass.variants[variant]}`}
      {...props}
    >
      <span>{label}</span>
      {Icon && <Icon />}
    </button >
  );
}
