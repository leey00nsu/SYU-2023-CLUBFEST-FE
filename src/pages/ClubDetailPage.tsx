import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import Nav from "../components/ui/Nav";
import ClubImage from "../components/clubs/ClubImage";
import { dummyList } from "../assets/dummyList";
import { useParams } from "react-router-dom";
import React from "react";

const ClubDetailPage = () => {
  const clubId = useParams().clubId;

  const clubData = dummyList.filter((club) => club.clubName === clubId)[0];

  return (
    <Layout>
      <Header />
      <Nav />
      <section className="w-full p-4 overflow-y-auto grow">
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
          <section className="flex flex-col items-center w-full mb-8">
            <p className="w-full text-start font-PyeongChang text-clubfest-blue  border-clubfest-blue border-b-2 py-1 mb-2">
              동아리 소개
            </p>
            <p className="w-full text-start font-PyeongChang text-clubfest-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum fuga minima commodi doloribus non temporibus neque rerum?
              Aliquam ipsa laborum repellat similique repellendus! Fugiat quos
              commodi omnis dolores incidunt.
            </p>
          </section>
          <section className="flex flex-col items-center w-full mb-8">
            <p className="w-full text-start font-PyeongChang text-clubfest-blue  border-clubfest-blue border-b-2 py-1 mb-2">
              주요활동
            </p>
            <p className="w-full text-start font-PyeongChang text-clubfest-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum fuga minima commodi doloribus non temporibus neque rerum?
              Aliquam ipsa laborum repellat similique repellendus! Fugiat quos
              commodi omnis dolores incidunt.
            </p>
          </section>
          <section className="flex flex-col items-center w-full mb-8">
            <p className="w-full text-start font-PyeongChang text-clubfest-blue  border-clubfest-blue border-b-2 py-1 mb-2">
              문의 및 SNS
            </p>
            <p className="w-full text-start font-PyeongChang text-clubfest-gray">
              카카오톡 채널 '동아리채널'
            </p>
            <p className="w-full text-start font-PyeongChang text-clubfest-gray">
              010-0000-0000
            </p>
          </section>
        </article>
      </section>
    </Layout>
  );
};

export default ClubDetailPage;
