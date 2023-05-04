// import { useState } from "react";
import { sounds } from "../../Mixins/data";
import Details from "./Details";
// import { items } from "../../Mixins/data";

const Square  = () => {
//   const [values, setValues] = useState(true);

  return (
    <section id="home" className="mx-auto ">
      <div className="">
        <div className="cursor-pointer sm:w-fit lg:w-fit ">
          <div className="bg-white shadow-xl rounded-lg border">
              <div className="lg:grid-row-2 lg:gap-6 lg:grid-cols-2 xl:grid-cols-2 grid flex-row p-4  sm:grid-cols-2 sm:grid-rows-1 sm:gap-6 md:grid-cols-2">
                {sounds.map((sound, soundSlide: number) => (
                  <Details key={soundSlide} sound={sound} />
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Square;
