interface ButtonProps {
  color: string
  text: string
  bgColor: string
  bgHoverColor?: string
  border?: string;
  icon?: string;
}
const Button = ({ text, color, bgColor, border, icon}: ButtonProps) => {
  return (
    <button type="submit"
      className="font-bold uppercase hover:opacity-80 space-x-1  duration-200 px-7 py-4 rounded-full"
      style={{ backgroundColor: bgColor, color: color, border: border  }} >
      {text} 
      {  icon && <span className="pl-2"> {icon} </span> }
    </button>
  );
};

export default Button; 
 