import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const clickHeaderHandler = () => {
    navigate("/clubs");
  };
  return (
    <header className="flex items-center justify-center w-full p-6 ">
      <div
        onClick={clickHeaderHandler}
        className="flex flex-col items-center cursor-pointer"
      >
        <p className="mb-1 text-3xl text-white font-PyeongChangPeaceBold">
          2023-1 동아리제
        </p>
        <p className="text-[13px] text-white font-PyeongChangPeace">
          멋쟁이사자처럼 SYU X 동아리연합회 다원
        </p>
      </div>
    </header>
  );
};

export default Header;
