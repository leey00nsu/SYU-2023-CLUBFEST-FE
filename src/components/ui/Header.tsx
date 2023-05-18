import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const clickHeaderHandler = () => {
    sessionStorage.setItem("isLanding", "true");
    navigate("/");
  };
  return (
    <header className="flex  items-center justify-center w-full p-6">
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
        <a className="my-2 h-[20px]">
          <img
            alt="hits"
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fsyu-2023-clubfest-fe.pages.dev&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
