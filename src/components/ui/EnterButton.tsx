interface EnterButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const EnterButton = (props: EnterButtonProps) => {
  return (
    <a
      onClick={props.onClick}
      className="p-1 text-center text-black bg-white cursor-pointer  font-PyeongChang w-60 rounded-2xl"
    >
      {props.children}
    </a>
  );
};

export default EnterButton;
