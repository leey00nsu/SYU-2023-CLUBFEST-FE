import { BiMenu } from "react-icons/bi";

interface HeaderProps {
  toggleSideBar: () => void;
}

const Header = (props: HeaderProps) => {
  const menuButtonHandler = () => {
    props.toggleSideBar();
  };
  return (
    <header className="flex items-center justify-between w-full h-10 p-4">
      <div onClick={menuButtonHandler}>
        <BiMenu size={30} color="white" />
      </div>
      <div>
        <p className="text-lg font-semibold text-white">동아리 홍보전</p>
      </div>
      <div>
        <div className="text-lg font-semibold text-white">D-00</div>
      </div>
    </header>
  );
};

export default Header;
