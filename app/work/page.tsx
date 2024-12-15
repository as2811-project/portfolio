"use client";
import Navigation from "@/components/Nav";
import { Image } from "@nextui-org/react";
import BlurFade from "@/components/ui/blur-fade";

export default function Work() {
  return (
    <div className="tracking-tight">
      <header className="flex items-center justify-between p-10">
        <h1 className="text-xl font-semibold">AS</h1>
        <Navigation />
      </header>
      <BlurFade delay={0.25} inView>
        <main className="container max-w-3xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="font-medium text-2xl">Work Experience</h2>
          </div>
          <div className="mb-8">
            <h3 className="font-medium text-lg mb-5">Full Time</h3>
            <div className="flex flex-row items-center gap-4">
              <Image
                src="https://cdn.brandfetch.io/freshworks.com/w/512/h/512/symbol?c=1idKaH_iwwY7_QN5llq"
                alt="Freshworks logo"
                className="w-14 h-13"
                radius="none"
              />
              <div className="grid grid-rows-2">
                <h1 className="text-xl opacity-80">
                  Product Specialist | Feb 2021 - Dec 2022
                </h1>
                <h1>Freshworks</h1>
              </div>
            </div>
            <div className="mt-4">
              <ul>
                - Solved over 800 tickets and 800+ chats, averaging over 90% in
                CSAT scores.{" "}
              </ul>
              <ul>
                - Acted as a consultant for product management along with
                external stakeholders like marketplace developers.{" "}
              </ul>
              <ul>
                - Developed powerful automation tools, increasing data migration
                efficiency by 100%.
              </ul>

              <ul>
                - Engineered complex CRM solutions (workflow and marketing
                automations) and onboarded high MRR clients (upwards of
                USD10,000).
              </ul>
              <ul>
                - Trained 5 incoming specialists, ensuring their smooth
                transitions into production.{" "}
              </ul>
              <ul>
                - Trained 5+ clients, improving their productivity by 25% in
                some cases.
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="font-medium text-lg mb-5">
                Work Integrated Learning
              </h3>
              <div className="flex flex-row items-center gap-4 items-center">
                <Image
                  src="https://cdn.brandfetch.io/rmit.edu.au/w/400/h/400?c=1idKaH_iwwY7_QN5llq"
                  alt="rmit logo"
                  className="w-14 h-13"
                  radius="full"
                />
                <div className="grid grid-rows-2">
                  <h1 className="text-xl opacity-80">
                    Technical Lead | RMIT Marketing Ad Analytics Project | Aug
                    2024 - Oct 2024
                  </h1>
                  <h1>RMIT University</h1>
                </div>
              </div>
              <ul className="mt-4">
                <li>
                  - Led a team of 6 to build and deliver an internal RAG
                  application for RMIT University’s Marketing BU
                </li>
                <li>
                  - Designed a solution that is 5-10x more performant than the
                  previous iteration in delivering complex visualisations and
                  analysis. Reduced API response times from 25+ seconds to
                  &lt;4s.
                </li>
                <li>
                  - Built and deployed an invite-based user sign-up process
                  along with Role-Based Access Control.
                </li>
                <li>
                  - Deployed solution obtained 99% retrieval precision (measure
                  of how many retrieved documents out of top N that are relevant
                  to user’s query)
                </li>
                <li>
                  - Architecture/Stack includes Next.js, Python, OpenAI APIs,
                  Docker, AWS Lambda, RDS (Postgres), ECR and Cognito. Used
                  Github Actions for CI/CD.
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="font-medium text-lg mb-5">Part Time</h3>
              <div className="flex flex-row items-center gap-4">
                <Image
                  src="https://cdn.brandfetch.io/woolworths.com.au/w/180/h/180?c=1idKaH_iwwY7_QN5llq"
                  alt="Woolworths logo"
                  className="w-14 h-13"
                  radius="full"
                />
                <div className="grid grid-rows-2">
                  <h1 className="text-xl opacity-80">
                    Customer Service | Nov 2023 - Present
                  </h1>
                  <h1>Woolworths Supermarkets</h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 mt-4">
                <Image
                  src="https://cdn.brandfetch.io/ted.com/w/512/h/512?c=1idKaH_iwwY7_QN5llq"
                  alt="TED logo"
                  className="w-14 h-13"
                  radius="full"
                />
                <div className="grid grid-rows-2">
                  <h1 className="text-xl opacity-80">
                    Human Resources Manager | September 2019 - August 2020
                  </h1>
                  <h1>TEDx Chennai</h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      </BlurFade>
    </div>
  );
}
