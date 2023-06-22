'use client'

import clsx from "clsx";
interface ButtonProps {
    type ?: 'button'|'submit'|'reset' 
    fullWidth ?: boolean
    children ?: React.ReactNode
    onClick ?: ()=>void
    secondary ?: boolean
    danger ?: boolean
    disabled ?: boolean
    className? : string

};

function Button({
    type, fullWidth, children,onClick,secondary, danger, disabled, className
}:ButtonProps) {
    return (
       <button 
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(
            className,     
            `
                flex justify-center rounded-md px-3 py-2 text-sm font-semibold 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            `,
            disabled && 'opacity-50 cursor-default', 
            fullWidth && 'w-full',
            secondary? 'text-greenish-blue':'text-white', 
            danger&& 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose', 
            !secondary && ! danger && 'bg-text-whitish focus-visible:outline-sky',
            
        )}
        >
          {children}
       </button>
    );
};

export default Button;