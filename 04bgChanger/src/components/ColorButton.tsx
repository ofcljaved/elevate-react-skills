interface ColorButtonProps {
  name: string;
  color: number[];
  handleClick: () => void;
}

const ColorButton = ({ name, color, handleClick }: ColorButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
      style={{
        border: `1px solid rgb(${color})`,
        backgroundColor: `rgba(${color} , 0.5)`,
      }}
      onClick={handleClick}>
      {name}
    </button>
  );
};

export default ColorButton;
