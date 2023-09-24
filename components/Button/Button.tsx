type Props = {
    text: string;
    onClick: () => void;
    disabled: boolean;
  };
  
  const Button = ({ text, onClick, disabled }: Props) => {
    return (
      <button
        className={`${disabled ? 'bg-gray-300' : 'bg-[#FF3B3F]'} w-full select-none text-2xl font-[600] h-[50px] min-w-[120px] rounded-full text-white`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  