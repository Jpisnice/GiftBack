import { useState, useEffect } from "react";
import Link from "next/link";

const RotatingBanner = () => {
  const [backgroundImage, setBackgroundImage] = useState("/bannerimage1.png");

  useEffect(() => {
    const images = ["/bannerimage1.png","/bannerimage2.png","/bannerimage3.png","/bannerimage4.png","/bannerimage5.png","/bannerimage6.png"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <div
        className="w-full h-[650px] flex justify-start items-center p-5"
        style={{
          height:"40vw",
          maxHeight: "500px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "fill",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="pl-8">
          <p className="capitalize text-6xl font-semibold text-black mb-3 pb-5">
            GiftRight
          </p>
          <Link
            href="/charity-listings"
            className="bg-yellow-400 text-black py-3 px-6 rounded-md text-lg font-semibold"
          >
            Explore Charities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RotatingBanner;
