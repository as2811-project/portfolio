/* eslint-disable react/no-unescaped-entities */
"use client";

import Navigation from "@/components/Nav";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Image } from "@nextui-org/react";
import BlurFade from "@/components/ui/blur-fade";

const items = [
  {
    src: "/C786607F-9A67-40DD-A379-1974935C672E_1_105_c.jpeg",
    width: 300,
    height: 300,
  },
  {
    src: "/D9B74773-D443-47A4-938F-36AE431F3C04_1_105_c.jpeg",
    width: 200,
    height: 200,
  },
  {
    src: "/AD0CC94A-C998-4892-8CC5-5A33446DAF72_1_105_c.jpeg",
    width: 200,
    height: 200,
  },
];

const frameworks = [
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: ".NET", logo: "https://cdn.simpleicons.org/dotnet" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
  {
    name: "AWS",
    logo: "https://cdn.brandfetch.io/aws.com/w/400/h/400?c=1idKaH_iwwY7_QN5llq",
  },
];

const tools = [
  {
    url: "https://cdn.brandfetch.io/dribbble.com/w/400/h/400?c=1idKaH_iwwY7_QN5llq",
  },
  {
    url: "https://cdn.brandfetch.io/figma.com/w/320/h/320?c=1idKaH_iwwY7_QN5llq",
  },
  {
    url: "https://cdn.brandfetch.io/reddit.com/w/400/h/400?c=1idKaH_iwwY7_QN5llq",
  },
  {
    url: "https://cdn.brandfetch.io/notion.so/w/400/h/400?c=1idKaH_iwwY7_QN5llq",
  },
  {
    url: "https://cdn.brandfetch.io/spotify.com/w/512/h/512/symbol?c=1idKaH_iwwY7_QN5llq",
  },
];

const movies = [
  {
    url: "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    url: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    url: "https://m.media-amazon.com/images/M/MV5BNjVjNDkxOGYtZGY1NS00MjI2LWEyNWEtOTA1ZGQ0NjYyNmIzXkEyXkFqcGc@._V1_.jpg",
  },
];

export default function Home() {
  return (
    <div className="tracking-tight">
      <header className="flex items-center justify-between p-10">
        <h1 className="text-xl font-semibold">AS</h1>
        <Navigation />
      </header>
      <BlurFade delay={0.25} inView>
        <main className="container max-w-3xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="font-medium text-xl opacity-30">
              Data. Software. Photography.
            </h2>
            <h1 className="font-medium text-2xl">Anandh Sellamuthu</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {items.map((item, index) => (
              <div key={index} className="relative aspect-square rounded-lg">
                <Image
                  src={item.src}
                  alt="Portfolio photograph"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 opacity-90">
            <p className="">
              Hi, I’m Anandh. I am from Chennai, India. I was born in ‘99, in
              Dammam, Saudi Arabia. Being an early GenZ-er, I experienced
              dial-up internet connections and keypad phones all the way up to
              streaming Netflix on 4K on my 5G connection and LLMs. Naturally, I
              built a passion for technology. I GREW up along with the
              exponential progress of tech!
            </p>
            <p className="mt-4">
              After my bachelor's degree in IT, I started working at Freshworks
              in 2021 not as an engineer but as a product and customer
              specialist. I immediately became one of the best in the team (if I
              say so myself). I realised my passion for data science and
              web-scale software engineering during my time there, so I decided
              to pivot back into fully technical roles and study further. That
              decision brought me to Melbourne, Australia. I’ve completed my
              Masters in Data Science from RMIT University. I’m more capable
              than ever and itching to restart my career in tech.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="font-medium text-xl">Stack</h1>
            <div>
              <figure
                className={cn(
                  "relative cursor-pointer rounded-xl p-4",
                  // light styles
                  "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                  // dark styles
                  "dark:border-gray-50/[.1]"
                )}
              >
                <Marquee className="">
                  {frameworks.map((framework, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Image
                        src={framework.logo}
                        alt={framework.name}
                        className="w-12 h-12"
                      />
                    </div>
                  ))}
                </Marquee>
              </figure>
            </div>
            <div className="mt-8">
              <h1 className="font-medium">
                Tools I use for inspiration, to get in the zone and be
                productive
              </h1>
              <div className="flex flex-row space-x-4 mt-4">
                {tools.map((tool, index) => (
                  <Image
                    key={index}
                    src={tool.url}
                    alt="Tool"
                    className="w-12 h-12"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="font-medium text-xl">Movies</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {movies.map((item, index) => (
                <div key={index} className="relative aspect-square rounded-lg">
                  <Image
                    src={item.url}
                    alt="Movie Poster"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    isBlurred
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h1 className="font-medium text-xl">Music</h1>
            <div className="grid gap-2 mt-2">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/5JWPUEov2wlX7c0jhYZpeB?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/0zEKfIm5b8EUcDM3qoPXKX?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="font-medium text-xl">Contact</h1>
            <div className="mt-4">
              You can reach out to me at{" "}
              <div className="flex flex-row space-x-4 mt-4 items-center">
                <a href="mailto:sanandh1234@gmail.com">
                  <Image
                    src="https://cdn.brandfetch.io/gmail.com/w/512/h/385/symbol?c=1idKaH_iwwY7_QN5llq"
                    alt="Gmail"
                    radius="none"
                    className="w-10 h-7"
                  />
                </a>
                <a href="https://www.linkedin.com/in/anandh-sellamuthu-as/">
                  <Image
                    src="https://cdn.brandfetch.io/linkedin.com/w/512/h/437/symbol?c=1idKaH_iwwY7_QN5llq"
                    alt="LinkedIn"
                    radius="none"
                    className="w-10 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </main>
      </BlurFade>
    </div>
  );
}
