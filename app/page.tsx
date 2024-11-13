"use client";
import MyNavBar from "./ui/navbar/navbar";
import { GeistMono } from "geist/font/mono";
import copy from "copy-to-clipboard";
import { useState } from "react";
import clsx from "clsx";
import { useToast } from "@/components/ui/use-toast";
import LanguageCard from '@/app/ui/card/language-card';

export default function Home() {
  const [copied, setCopy] = useState(false);
  const { toast } = useToast();

  const copyHandler = () => {
    const text =
      "git clone https://github.com/gungzzlee/image-finder-with-pexels-app";
    copy(text);
    setCopy(true);

    toast({
      title: "Copied",
      description: "Text copied to clipboard.",
    });

    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-8">
      <MyNavBar />

      {/* section one */}
      <div className="w-full h-auto xl:px-8 xl:py-4 flex flex-col relative">
        <div className="--divider absolute w-2 border-l left-20 border-dashed h-full"></div>
        <div className="--divider absolute w-2 border-r right-20 border-dashed h-full"></div>
        {/* subheader */}
        <div className="--wrapper-sub-header w-full flex justify-center">
          <div className="--sub-header flex gap-2 justify-center xl:mt-8 border-x border-dashed w-fit p-4">
            <span className="text-[20px] font-bold text-[#171717]">
              Pexels.com
            </span>
            <span className="flex items-center gap-4">
              <div className="text-[14px] text-[#8E8E8E] font-medium">
                lihat disini untuk penggunaan API lengkap.
              </div>{" "}
              <div>
                <a
                  href=""
                  className="bg-[#171717] text-white text-[14px] font-medium px-4 py-2 rounded-full"
                >
                  Dokumentasi &nbsp;<i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </span>
          </div>
        </div>
        {/* header */}
        <div className="--header w-full border-y p-4 border-dashed xl:text-[68px] font-black text-[#242424] text-center">
          Image Finder With Pexels App
        </div>

        {/* description */}
        <div className="--description flex justify-center border-b border-dashed">
          <p className="p-6 font-medium text-center w-3/4 text-[#717171] text-[20px] antialiased">
            Sebuah{" "}
            <span className="text-[#171717]">Website pencarian gambar</span>{" "}
            yang memungkinkan anda untuk mencari, filter dan download sesuai
            kriteria yang di inginkan
          </p>
        </div>

        {/* button */}
        <div className="--button-getstarted-contactdev w-full flex justify-center">
          <div className="border-x border-dashed w-fit flex flex-col gap-6 p-8">
            <div className="--btn flex items-center gap-4 justify-center">
              <div className="--getstarted">
                <button
                  type="button"
                  className="bg-[#171717] hover:bg-[#8E8E8E] text-white text-[14px] font-medium px-5 py-3 rounded-lg"
                >
                  Get Started
                </button>
              </div>
              <div className="--contactdev">
                <button
                  type="button"
                  className="shadow-box-shadow-8 hover:bg-[#8E8E8E] text-black text-[14px] font-medium px-5 py-3 rounded-lg"
                >
                  Contact Dev
                </button>
              </div>
            </div>
            <div className="--code-clone">
              <p
                onClick={copyHandler}
                className={`cursor-pointer ${GeistMono.className} group text-[13px] font-medium`}
              >
                <i className="bi bi-triangle-fill"></i> ~ git clone
                https://github.com/agungkurniawanid/image-finder-with-pexels-app.git{" "}
                <i
                  className={clsx(
                    "opacity-0 group-hover:opacity-100 transition-all bi",
                    {
                      "bi-clipboard": !copied,
                      "bi-clipboard-check": copied,
                    }
                  )}
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section two */}
      <div className="--section-two w-full px-8 py-4 h-auto">
        <p className="text-[#171717] text-[32px] font-black text-center">Build With?</p>
        <div className="--card">
          <LanguageCard />
        </div>
      </div>
    </div>
  );
}
