import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import Nav from "../components/ui/Nav";
import ClubImage from "../components/clubs/ClubImage";
import { dummyList } from "../assets/dummyList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import ClubContent from "../components/clubs/ClubContent";

const ClubDetailPage = () => {
  const navigate = useNavigate();
  const [isSet, setIsSet] = useState(false);
  const clubId = useParams().clubId;

  const clubData = dummyList.filter((club) => club.clubName === clubId)[0];

  useEffect(() => {
    if (!clubData) {
      navigate("/error");
    } else {
      setIsSet(true);
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Nav />
      <section className="w-full p-4 overflow-y-auto grow">
        {isSet && (
          <article className="flex flex-col bg-white rounded-lg p-8">
            <section className="flex justify-between w-full mb-8">
              <ClubImage size="md" />
              <div className="flex flex-col grow px-4 py-2">
                <p className="text-xl font-PyeongChangPeaceBold text-clubfest-blue mb-2">
                  {clubData.clubName}
                </p>
                <p className="text-base font-PyeongChang text-clubfest-gray">
                  {clubData.clubDesc}
                </p>
              </div>
            </section>

            <ClubContent
              title="동아리 소개"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt laborum fuga minima commodi doloribus non temporibus
                neque rerum? Aliquam ipsa laborum repellat similique
                repellendus! Fugiat quos commodi omnis dolores incidunt."
            />
            <ClubContent
              title="주요활동"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt laborum fuga minima commodi doloribus non temporibus
                neque rerum? Aliquam ipsa laborum repellat similique
                repellendus! Fugiat quos commodi omnis dolores incidunt."
            />
            <ClubContent
              title="문의 및 SNS"
              content="카카오톡 채널 '동아리 채널'"
              content2="010-1234-5678"
            />
          </article>
        )}
      </section>
    </Layout>
  );
};

export default ClubDetailPage;
