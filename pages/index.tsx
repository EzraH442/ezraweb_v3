import type { NextPage } from "next";
import Head from "next/head";
import Divider from "../components/Divider/Divider";
import Image from "next/image";
import Card from "../components/homepage/Card";
import Layout from "../components/Layout";
import React from "react";
import Wasm from "../components/Wasm";
import Link from "next/link";

const Home: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>Ezra Huang</title>
        <link rel="icon" href="/public/favicon.ico" />
        <meta name="description" content="The homepage of Ezra's website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="border-secondary border-2 border-solid rounded-md">
          <Image
            src="/images/cloud.png"
            alt="A terminal history word cloud"
            className="w-full rounded-md"
            priority={false}
            width={1200}
            height={1200}
          />
        </div>
        <div>
          <span className="flex items-center justify-center pt-2 font-serif text-sm">
            <p>{"Terminal word cloud, June 2023 - June 2024.  "}</p>
            <Link
              className="hover:underline hover:cursor-pointer text-accent"
              href={"/images/cloud.png"}
            >
              {"Large"}
            </Link>
          </span>
        </div>
        <div className="flex flex-col items-center pt-9">
          <Divider>
            <h2
              className="font-raleway text-2xl font-thin text-accent"
              id="about"
            >
              About
            </h2>
          </Divider>
          <pre className="bg-inherit">{`
EZRA HUANG

NAME
    ezra - math and computer science student at mcgill

SYNOPSIS
    ezra [--calgarian] [--montrealer] 
         [--scrambler] [--backpacker] [--climber] [--skier] 
         [--phan] [--deadhead] 

DESCRIPTION
    ezra was born in Calgary, AB, and currently lives in Montreal working 
    towards an honors joint degree in math and computer science degree at McGill.  
    Outside, ezra enjoys scrambling, skiing, and backpacking, and inside, he enjoys 
    listening to phish. He is a part of McGill Neurotech and the McGill Outdoors Club.

SEE ALSO
    leo zhang
    random 121
    lithium engineer

EZRA HUANG                              July 2024                           EZRA HUANG
          `}</pre>
          <Divider>
            <h2
              className="font-raleway text-2xl font-thin text-accent"
              id="projects"
            >
              Project Gallery
            </h2>
          </Divider>
          <Divider>
            <h3 className="font-lg">Current Projects</h3>
          </Divider>
          <div>
            <Card
              label="Mind-controlled card games, with McGill Neurotech."
              href="https://github.com/mcgill-neurotech/2024"
            />
            <Card
              label="Reinforcement Learning, with Jonathan Lamontagne Kratz."
              href="https://github.com/epicgamer17/rl-research"
            />
          </div>
          <Divider>
            <h3 className="font-lg">Past Projects</h3>
          </Divider>
          <div className="border-secondary border">
            <Image
              src="/images/files-server.png"
              alt="A terminal history word cloud"
              className="w-full"
              priority={false}
              width={1200}
              height={1200}
            />
          </div>
          <span className="flex items-center justify-center pt-2 font-serif text-sm">
            <p>
              {
                "File server, built on Backblaze B2 bucket storage with a Vue frontend and go backend. "
              }
            </p>
            <Link
              className="hover:underline hover:cursor-pointer text-accent"
              href={"https://files.ezrahuang.com"}
              target="_blank"
            >
              {"Link."}
            </Link>
          </span>
          <div className="flex flex-col items-center justify-center my-12">
            <div
              className={`hidden tb:block`}
              style={{ transform: "scale(0.7)", margin: "calc(-15%)" }}
            >
              <Wasm />
            </div>
            <span className="flex items-center justify-center pt-2 font-serif text-sm">
              <p>
                {
                  "3-dimensional rendering from scratch with SDL2. Compiled with WebAssembly "
                }
              </p>
              <Link
                className="hover:underline hover:cursor-pointer text-accent"
                href={"https://github.com/EzraH442/3d-space"}
                target="_blank"
              >
                {"Source Code."}
              </Link>
            </span>
          </div>
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
          <span className="flex items-center justify-center pt-2 font-serif text-sm">
            <p>{"The project I worked on during my internship in 2022.  "}</p>
            <Link
              className="hover:underline hover:cursor-pointer text-accent"
              href={"https://www.linkedin.com/in/wdave40/"}
              target="_blank"
            >
              {"Reference. "}
            </Link>
          </span>
          <Divider>
            <h2 className="font-raleway text-2xl font-thin text-accent">
              Bookshelf
            </h2>
          </Divider>
          <ul className="list-disc">
            <li className="hover:cursor-pointer hover:underline">
              <Link
                href="http://incompleteideas.net/book/the-book.html"
                target="_blank"
              >
                {"Reinforcement Learning: An Introduction (Barto and Sutton)"}
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link
                href="https://web.stanford.edu/~jurafsky/slp3"
                target="_blank"
              >
                {"Speech and Language Processing (Jurafsky and Martin)"}
              </Link>
            </li>
          </ul>
          <Divider>
            <h2 className="font-raleway text-2xl font-thin text-accent">
              Links
            </h2>
          </Divider>

          <ul className="list-disc">
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
              <Link href="https://https://food.ezrahuang.com">Dining hall food reviews</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href="https://www.mcgilloutdoorsclub.ca/">McGill Outdoors Club</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href="https://mcgilloutdoorsclub.myturn.com/library/inventory/browse">MOC Gear Inventory</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href="https://annas-archive.org/">Anna's archive</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href="https://libgen.rs/">Libgen</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href="https://vsb.mcgill.ca/vsb/criteria.jsp?access=0&lang=en&tip=1&page=results&scratch=0&term=202409&sort=none&filters=iiiiiiiii&bbs=&ds=&cams=Distance_Downtown_Macdonald_Off-Campus&locs=any&isrts=&course_0_0=MATH-245&sa_0_0=&cs_0_0=--202409_3450--&cpn_0_0=&csn_0_0=&ca_0_0=&dropdown_0_0=al&ig_0_0=0&rq_0_0=&course_1_0=MATH-254&sa_1_0=&cs_1_0=--202409_3452--&cpn_1_0=&csn_1_0=&ca_1_0=&dropdown_1_0=al&ig_1_0=0&rq_1_0=&course_2_0=COMP-330&sa_2_0=&cs_2_0=--202409_1972--&cpn_2_0=&csn_2_0=&ca_2_0=&dropdown_2_0=ss&ig_2_0=0&rq_2_0=&course_3_0=MATH-356&sa_3_0=&cs_3_0=--202409_3497--&cpn_3_0=&csn_3_0=&ca_3_0=&dropdown_3_0=al&ig_3_0=0&rq_3_0=&course_4_0=COMP-551&sa_4_0=&cs_4_0=--202409_1992--&cpn_4_0=&csn_4_0=&ca_4_0=&dropdown_4_0=al&ig_4_0=0&rq_4_0=">Fall Schedule</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link href="https://vsb.mcgill.ca/vsb/criteria.jsp?access=0&lang=en&tip=1&page=results&scratch=0&term=202501&sort=none&filters=iiiiiiiii&bbs=&ds=&cams=Distance_Downtown_Macdonald_Off-Campus&locs=any&isrts=&course_0_0=MATH-255&sa_0_0=&cs_0_0=--202501_3112--&cpn_0_0=&csn_0_0=&ca_0_0=&dropdown_0_0=al&ig_0_0=0&rq_0_0=&course_1_0=COMP-252&sa_1_0=&cs_1_0=--202501_1798--&cpn_1_0=&csn_1_0=&ca_1_0=&dropdown_1_0=al&ig_1_0=0&rq_1_0=&course_2_0=COMP-310&sa_2_0=&cs_2_0=--202501_1803--&cpn_2_0=&csn_2_0=&ca_2_0=&dropdown_2_0=al&ig_2_0=0&rq_2_0=&course_3_0=COMP-302&sa_3_0=&cs_3_0=--202501_1800--&cpn_3_0=&csn_3_0=&ca_3_0=&dropdown_3_0=al&ig_3_0=0&rq_3_0=&course_4_0=MATH-357&sa_4_0=&cs_4_0=--202501_3153--&cpn_4_0=&csn_4_0=&ca_4_0=&dropdown_4_0=al&ig_4_0=0&rq_4_0=">Winter Schedule</Link>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
};
export default Home;
