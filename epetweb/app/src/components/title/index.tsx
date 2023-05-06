interface TitleProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: 'large' | 'normal' | 'small';
  children: React.ReactNode;
}

export function Title({ size = 'normal', className, children, ...props }: TitleProps) {
  const buttonClass = {
    size: {
      large: 'text-2xl font-bold',
      normal: 'text-lg font-semibold',
      small: 'text-sm',
    }
  };

  return (
    <label
      {...props}
      className={`text-[var(--blue-800)] ${className} ${buttonClass.size[size]} `}
    >
      {children}
    </label >
  );
}
