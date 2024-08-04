// pages/index.js
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { WebLayout } from "./layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import RotatingBanner from "./RotatingBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [Charity, setCharity] = useState([]);

  const getHighlights = async () => {
    try {
      const res = await axios.get(`/api/getHighlights`);
      console.log("Fetched highlights:", res.data); // Debugging: Log fetched data
      setCharity(res.data.highlights);
    } catch (error) {
      console.log("Failed To Get Highlights!", error); // Debugging: Log error details
    }
  };

  useEffect(() => {
    getHighlights();
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Gift Right | Home</title>
      </Head>

      <WebLayout>
        <RotatingBanner />

        <section className="p-5">
          <h2 className="text-4xl font-semibold">Highlighted Charities</h2>
          <div className="mt-3 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3">
            {Charity.length === 0 && (
              <p className="text-center">No highlighted charities available.</p>
            )}
            {Charity.map((item, index) => (
              <div key={index}>
                <Link href={`/charity-details/${item.id}`}>
                  <div className="rounded-xl shadow-2xl bg-white text-center p-3">
                    <div className="p-7 size-[150px] rounded-full shadow-2xl mx-auto flex justify-center items-center mb-5">
                      <img
                        className="w-full mx-auto"
                        src={
                          item.imgName
                            ? `/charity/${item.imgName}`
                            : item.img_name
                            ? `/charity/${item.img_name}`
                            : "/default-image.jpg" // Fallback image if none provided
                        }
                        alt="icon"
                      />
                    </div>

                    <h2 className="text-2xl font-semibold capitalize">
                      {item.name}
                    </h2>
                    <p className="mt-3 line-clamp-3 capitalize">{item.about}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </WebLayout>
    </div>
  );
}
