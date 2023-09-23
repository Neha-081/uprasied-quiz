type Props = {
    text: string;
    onClick: () => void;
  };
  
  const Button = ({ text, onClick }: Props) => {
    return (
      <button
        className='w-full bg-[#FF3B3F] select-none text-2xl font-[600] h-[60px] min-w-[120px] rounded-full text-white bottom-0'
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  