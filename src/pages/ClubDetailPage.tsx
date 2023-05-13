import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import Nav from "../components/ui/Nav";
import ClubImage from "../components/clubs/ClubImage";
import { clubList } from "../assets/clubList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import ClubContent from "../components/clubs/ClubContent";

const ClubDetailPage = () => {
  const navigate = useNavigate();
  const [isSet, setIsSet] = useState(false);
  const clubId = useParams().clubId;

  const clubData = clubList.filter(
    (club) => club.clubName.replace(/\./g, "") === clubId
  )[0];

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
              <ClubImage size="md" url={clubData.clubImg} />
              <div className="flex flex-col grow px-4 py-2">
                <p className="text-xl font-PyeongChangPeaceBold text-clubfest-blue mb-2">
                  {clubData.clubName}
                </p>
                <p className="text-base font-PyeongChang text-clubfest-gray">
                  {clubData.clubTag}
                </p>
              </div>
            </section>

            <ClubContent title="동아리 소개" contents={clubData.clubDesc} />
            <ClubContent title="주요활동" contents={clubData.clubActivity} />
            <ClubContent title="문의 및 SNS" contents={clubData.clubContact} />
          </article>
        )}
      </section>
    </Layout>
  );
};

export default ClubDetailPage;
