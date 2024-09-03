import ConcertReviews from "../components/ConcertReviews";
import { artists } from "../components/mockArtistData";

import React from "react";
import { Input, Button } from "@material-tailwind/react";
 
export function InputWithButton() {
  const [conReview, setConReview] = React.useState("");
  const onChange = ({ target }) => setConReview(target.value);
 
  return (
    <div className="relative flex w-full max-w-[40rem] mx-auto">
      <Input
        type="text"
        label="Writing A review"
        value={conReview}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={conReview ? "gray" : "blue-gray"}
        disabled={!conReview}
        className="!absolute right-1 top-1 rounded"
      >
        Enter
      </Button>
    </div>
  );
}


import { cn } from "@/lib/utils";


export function SquadCard() {
  return (
    (<div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://www.apple.com/newsroom/images/product/music/standard/Apple-Music-Live-Ed-Sheeran-with-guitar_big.jpg.slideshow-large_2x.jpg)] bg-cover"
        )}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
        <img src="https://www.apple.com/newsroom/images/product/music/standard/Apple-Music-Live-Ed-Sheeran-with-guitar_big.jpg.slideshow-large_2x.jpg" height="100"
            width="100"
            alt="Avatar"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            토요일 콘서트 같이 가실 분 구해요!!
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            20대 여성분 구합니다! 뉴비도 환영해요
          </p>
        </div>
      </div>
    </div>)
  );
}


const ConcertDetail = () => {
  const artist = artists[1];
  console.log(artist);

  return (
    <main className="container mx-auto">
      <section className="text-center">
        <img src={artist.imageUrl} className="inline" alt="" />
      </section>

      <section>
        <p>Artist: {artist.name}</p>
        <p>description: {artist.description}</p>
        <p>ticket link: dsfsdfsdf.com</p>
      </section>

      <section>
        <InputWithButton />
        <ConcertReviews />
      </section>

      <section>
        <h2>recruiting squads</h2>

        <SquadCard />
      </section>
    </main>
  )
};

export default ConcertDetail;