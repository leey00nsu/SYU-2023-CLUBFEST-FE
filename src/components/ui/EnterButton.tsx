interface EnterButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const EnterButton = (props: EnterButtonProps) => {
  return (
    <a
      onClick={props.onClick}
      className="cursor-pointer w-60 rounded-lg bg-black/50 text-yellow-400 p-2 text-center"
    >
      {props.children}
    </a>
  );
};

export default EnterButton;
