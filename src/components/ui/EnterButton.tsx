interface EnterButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const EnterButton = (props: EnterButtonProps) => {
  return (
    <a
      onClick={props.onClick}
      className="flex justify-center p-1 text-base text-black bg-white cursor-pointer font-PyeongChang w-60 rounded-2xl"
    >
      {props.children}
      <img
        className=" ml-1 w-3 object-contain"
        src="/src/assets/img/rabbit.png"
      />
    </a>
  );
};

export default EnterButton;
