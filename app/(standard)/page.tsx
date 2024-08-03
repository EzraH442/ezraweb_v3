import type { Metadata, NextPage } from "next";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Divider from "../../components/Divider/Divider";
import Card from "../../components/homepage/Card";
import Wasm from "../../components/Wasm";
import { robotoSlab } from "../../lib/fonts";

export const metadata: Metadata = {
  title: "Ezra Huang",
  description: "Welcome to my website",
  icons: "/public/favicon.ico",
};

const Home: NextPage = () => {
  return (
    <>
      <div className="border-secondary border-2 border-solid rounded-md">
        <Link href="/cloud" target="_blank">
          <Image
            src="/images/cloud.png"
            alt="A terminal history word cloud"
            className="w-full rounded-md"
            priority={false}
            width={1200}
            height={1200}
          />
        </Link>
      </div>
      <div>
        <span className="flex items-center justify-center pt-2 font-serif text-sm">
          Terminal word cloud, June 2023 - June 2024. Click on image for full
          size.
        </span>
      </div>
      <Divider>
        <h2 className="text-2xl font-thin text-accent" id="about">
          About
        </h2>
      </Divider>
      <pre className="bg-inherit overflow-x-scroll">{`
EZRA HUANG

NAME
    ezra - math and computer science student at mcgill

SYNOPSIS
    ezra [--calgarian] [--montrealer] 
         [--scrambler] [--backpacker] [--climber] [--skier] 

DESCRIPTION
    ezra was born in Calgary, AB, and currently lives in Montreal working 
    towards an honors joint degree in math and computer science degree at McGill.  
    Outside, ezra enjoys scrambling, skiing, and backpacking, and inside, he enjoys 
    listening to phish. He is a member of McGill Neurotech and the current
    hiking executive of the McGill Outdoors Club.

SEE ALSO
    Jonathan Lamontagne Kratz (https://kratzj.vercel.app)
    David Li (https://github.com/Random121)

EZRA HUANG                              July 2024                           EZRA HUANG
          `}</pre>
      <Divider>
        <h2 className="text-2xl font-thin text-accent" id="projects">
          Project Gallery
        </h2>
      </Divider>
      <Divider>
        <h3 className="font-lg">Current Projects</h3>
      </Divider>
      <div>
        <Card
          label="Mind-controlled card games, with McGill Neurotech (2024)."
          href="https://github.com/mcgill-neurotech/2024"
        />
        <Card
          label="Reinforcement Learning, with Jonathan Lamontagne Kratz (2024)."
          href="https://github.com/epicgamer17/rl-research"
        />
      </div>

      <Divider>
        <h3 className="font-lg mb-2">Past Projects</h3>
      </Divider>

      <div>
        <div className="border-secondary border">
          <Image
            src="/images/files-server.png"
            alt="A terminal history word cloud"
            className="w-full"
            priority={false}
            width={960}
            height={638}
          />
        </div>
        <span className="flex items-center justify-center font-serif text-sm mt-1 mb-2">
          <p>
            {
              "File server, built on Backblaze B2 bucket storage with a Vue frontend and go backend (2023). "
            }
          </p>
          <Link
            className="hover:underline hover:cursor-pointer text-accent"
            href="https://files.ezrahuang.com"
            target="_blank"
          >
            Link.
          </Link>
        </span>
      </div>
      <Divider />
      <div>
        <div className="flex flex-col items-center justify-center">
          <div
            style={{ transform: "scale(0.7)", margin: "calc(-15%)" }}
            className="hidden tb:block"
          >
            <Wasm />
          </div>

          <div className="tb:hidden">
            <Image
              src="/images/tetris.png"
              width={601}
              height={601}
              alt="3d tetris game"
              className="tb:hidden"
            />
          </div>
          <span className="flex items-center justify-center font-serif text-sm space-x-2">
            <p>
              {
                "3D tetris; 3-dimensional rendering coded from scratch with SDL2. Compiled with WebAssembly (2022). "
              }
            </p>
            <Link
              className="hover:underline hover:cursor-pointer text-accent"
              href="https://github.com/EzraH442/3d-space"
              target="_blank"
            >
              {"Source Code. "}
            </Link>
            <Link
              className="hover:underline hover:cursor-pointer text-cyan-200 "
              href="/help"
              target="_blank"
            >
              (Help/Controls).
            </Link>
          </span>
        </div>
      </div>
      <Divider />
      <div>
        <div className="border-secondary border">
          <Image
            src="/images/xerris.png"
            alt="A terminal history word cloud"
            className="w-full"
            priority={false}
            width={1200}
            height={1200}
          />
        </div>
        <span className="flex items-center justify-center mt-2 font-serif text-sm ">
          <p>{"Xerris internship Project (2022).  "}</p>
          <Link
            className="hover:underline hover:cursor-pointer text-accent"
            href="https://www.linkedin.com/in/wdave40/"
            target="_blank"
          >
            {"Reference. "}
          </Link>
        </span>
      </div>
      <Divider>
        <h2 className="text-2xl font-thin text-accent">Links</h2>
      </Divider>

      <div className="flex flex-col items-center">
        <ul className="list-disc pl-5">
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://vpn.ezrahuang.com">VPN</Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://music.ezrahuang.com">Music</Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://files.ezrahuang.com">File server</Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://www.mcgilloutdoorsclub.ca/">
              McGill Outdoors Club
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://mcgilloutdoorsclub.myturn.com/library/inventory/browse">
              MOC Gear Inventory
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://annas-archive.org/">{`Anna's archive`}</Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://libgen.rs/">Libgen</Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://vsb.mcgill.ca/vsb/criteria.jsp?access=0&lang=en&tip=1&page=results&scratch=0&term=202409&sort=none&filters=iiiiiiiii&bbs=&ds=&cams=Distance_Downtown_Macdonald_Off-Campus&locs=any&isrts=&course_0_0=MATH-245&sa_0_0=&cs_0_0=--202409_3450--&cpn_0_0=&csn_0_0=&ca_0_0=&dropdown_0_0=al&ig_0_0=0&rq_0_0=&course_1_0=MATH-254&sa_1_0=&cs_1_0=--202409_3452--&cpn_1_0=&csn_1_0=&ca_1_0=&dropdown_1_0=al&ig_1_0=0&rq_1_0=&course_2_0=COMP-330&sa_2_0=&cs_2_0=--202409_1972--&cpn_2_0=&csn_2_0=&ca_2_0=&dropdown_2_0=ss&ig_2_0=0&rq_2_0=&course_3_0=MATH-356&sa_3_0=&cs_3_0=--202409_3497--&cpn_3_0=&csn_3_0=&ca_3_0=&dropdown_3_0=al&ig_3_0=0&rq_3_0=&course_4_0=COMP-551&sa_4_0=&cs_4_0=--202409_1992--&cpn_4_0=&csn_4_0=&ca_4_0=&dropdown_4_0=al&ig_4_0=0&rq_4_0=">
              Fall Schedule
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="https://vsb.mcgill.ca/vsb/criteria.jsp?access=0&lang=en&tip=1&page=results&scratch=0&term=202501&sort=none&filters=iiiiiiiii&bbs=&ds=&cams=Distance_Downtown_Macdonald_Off-Campus&locs=any&isrts=&course_0_0=MATH-255&sa_0_0=&cs_0_0=--202501_3112--&cpn_0_0=&csn_0_0=&ca_0_0=&dropdown_0_0=al&ig_0_0=0&rq_0_0=&course_1_0=COMP-252&sa_1_0=&cs_1_0=--202501_1798--&cpn_1_0=&csn_1_0=&ca_1_0=&dropdown_1_0=al&ig_1_0=0&rq_1_0=&course_2_0=COMP-310&sa_2_0=&cs_2_0=--202501_1803--&cpn_2_0=&csn_2_0=&ca_2_0=&dropdown_2_0=al&ig_2_0=0&rq_2_0=&course_3_0=COMP-302&sa_3_0=&cs_3_0=--202501_1800--&cpn_3_0=&csn_3_0=&ca_3_0=&dropdown_3_0=al&ig_3_0=0&rq_3_0=&course_4_0=MATH-357&sa_4_0=&cs_4_0=--202501_3153--&cpn_4_0=&csn_4_0=&ca_4_0=&dropdown_4_0=al&ig_4_0=0&rq_4_0=">
              Winter Schedule
            </Link>
          </li>
        </ul>
        <Divider>
          <h2 className="text-2xl font-thin text-accent" id="contact">
            Contact
          </h2>
        </Divider>
        <div className={`${robotoSlab.className} flex flex-col`}>
          <Link href="mailto:ezra.huang@mail.mcgill.ca">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} width={12} />
              <span>ezra.huang@mail.mcgill.ca </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
