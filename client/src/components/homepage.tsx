
import { Carousel } from "./carousel/carousel";

export const Homepage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-medium text-center leading-tight text-5xl my-5 text-slate-700">
        Let's find you a pet!
      </h1>
      <p className="my-3 w-10/12 mx-auto text-center">
        Use Pet World to find the newest member of your family.
      </p>
      <p className="my-3 w-9/12 mx-auto text-center">
        Pet World is a demo fullstack MERN application that allows you to to
        shop for and adopt your next pet!
      </p>

      <Carousel />

     
    </div>
  );
};
