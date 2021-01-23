import React from 'react';

import clsx from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const className = clsx(
    'text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l',
    rest.disabled ? 'opacity-50 cursor-not-allowed' : null,
  );

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
