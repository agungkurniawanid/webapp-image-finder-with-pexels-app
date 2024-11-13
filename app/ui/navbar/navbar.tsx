"use client";
import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "@/app/theme-context";
export default function MyNavBar() {

    const { isDark, setDarkTheme, setLightTheme } = useTheme();

  return (
    <nav className="w-full sticky shadow-box-shadow-8 top-0 xl:px-8 xl:py-4 xl:h-auto z-20 bg-white/20 backdrop-blur-sm flex justify-between items-center">
      {/* logo and menu item */}
      <div className="--logo-menuitem flex items-center gap-8">
        {/* logo */}
        <div className="--logo">
          <Image
            alt="gungzzlee-logo.png"
            className="object-cover xl:w-40 h-auto xl:max-w-60"
            src={`/logo/light-logo.png`}
            width={200}
            height={200}
          />
        </div>
        {/* menu item */}
        <div className="--menu-item">
          <ul
            className={clsx("--menu flex gap-4 items-center", {
              "text-white": isDark === 1,
              "text-[#6A6A6A]": isDark === 0,
            })}
          >
            <li>
              <a
                className="xl:text-[14px] capitalize xl:font-medium antialiased hover:text-[#171717]"
                href=""
              >
                user
              </a>
            </li>
            <li>
              <a
                className="xl:text-[14px] capitalize xl:font-medium antialiased hover:text-[#171717]"
                href=""
              >
                developer
              </a>
            </li>
            <li>
              <a
                className="xl:text-[14px] capitalize xl:font-medium antialiased hover:text-[#171717]"
                href=""
              >
                feedback <i className="bi bi-arrow-up-short"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* github and light/dark theme */}
      <div className="--themetoggle-github flex items-center gap-4">
        <div
          className={clsx(
            "--themetoggle flex items-center relative before:content-[''] before:-z-20 before:rounded-full before:absolute before:w-full before:h-full before:bg-[#EEEEEE] after:content-[''] after:-z-10 after:w-1/2 after:h-full after:rounded-full after:absolute after:bg-[#171717] after:transition-all",
            {
              "after:translate-x-0": isDark === 0,
              "after:translate-x-full": isDark === 1,
            }
          )}
        >
          <div className="--btn">
            <button
              type="button"
              onClick={() => setLightTheme()}
              className={clsx(
                "py-2 px-4 text-[14px] font-medium antialiased rounded-full",
                {
                  "text-white": isDark === 0,
                }
              )}
            >
              Light
            </button>
          </div>
          <div className="--btn">
            <button
              type="button"
              className={clsx(
                "py-2 px-4 text-[14px] font-medium antialiased rounded-full",
                {
                  "text-[#171717]": isDark === 0,
                }
              )}
              onClick={() => setDarkTheme()}
            >
              Dark
            </button>
          </div>
        </div>
        <div className="--divider w-[3px] rounded-full h-[20px] bg-[#171717]"></div>
        <div className="--github">
          <a
            className="px-4 py-2 bg-[#171717] text-white text-[14px] antialiased rounded-[10px] font-medium"
            href=""
          >
            <i className="bi bi-github"></i>&nbsp;&nbsp;Github
          </a>
        </div>
      </div>
    </nav>
  );
}
