/* eslint-disable @next/next/no-img-element */
"use client";
import Navigation from "@/components/Nav";
import ProjectCard from "@/components/project-card";
import BlurFade from "@/components/ui/blur-fade";

/* eslint-disable react/no-unescaped-entities */
export default function Projects() {
  return (
    <div className="tracking-tight">
      <header className="flex items-center justify-between p-10">
        <h1 className="text-xl font-semibold">AS</h1>
        <Navigation />
      </header>
      <BlurFade delay={0.25} inView>
        <main className="container max-w-3xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="font-medium text-xl opacity-30">Projects</h2>
            <h1 className="font-medium text-2xl">Selected Work</h1>
            <p className="mt-4 opacity-70">
              Some of my projects are presented below. If you want to check all
              my projects out, visit my{" "}
              <a
                href="https://github.com/as2811-project"
                className="text-blue-500"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <BlurFade delay={0.25} inView>
            <div>
              <h2 className="text-lg font-medium">
                Data Science and Engineering Projects
              </h2>
              <ProjectCard
                videoSrc="https://lavulopbfiogsnnczeae.supabase.co/storage/v1/object/public/photos/monolith-demo.mp4?t=2024-12-15T22%3A45%3A35.645Z"
                projectTitle="Scale Replica of TikTok's Monolith Recommender System's Pipeline"
                githubUrl="https://github.com/as2811-project/Monolith-Pipeline"
                description="Recently read TikTok's whitepaper on Monolith, their real-time recommendation system and was so fascinated. So I rebuilt parts of it on a small scale. This is a pipeline built using Kafka for streaming and PySpark for transformation."
              />
              <ProjectCard
                videoSrc="https://lavulopbfiogsnnczeae.supabase.co/storage/v1/object/public/photos/RAGPlatformDemo.mp4?t=2024-12-15T23%3A00%3A57.979Z"
                projectTitle="RAG-based Ad Generation Platform"
                description="Architected and built a complete ad generation platform for RMIT University's Marketing Team. The platform allows users to analyse competitor ads and generate new ads using GPT4o and RAG. Single handedly built the auth system, competitor analytics' frontend and backend followed by full RBAC implementation. Deployed everything on AWS using services like RDS, Lambda and ECR for containers."
              />
              <ProjectCard
                videoSrc="https://lavulopbfiogsnnczeae.supabase.co/storage/v1/object/public/photos/recruit-demo.mp4?t=2024-12-16T00%3A41%3A10.372Z"
                projectTitle="Job Posting Platform with a pinch of ML"
                description="Built a NLP/Logistic Regression model to classify job postings into categories. The model was trained on a dataset of 700 job postings. The deployed model achieved an accuracy of 91%. Also built a nice React frontend around it."
                githubUrl="https://github.com/as2811-project/Job-Postings-NLP"
              />
              <div className="mt-8">
                <p>
                  I've built several other projects over the last 12 months. I'm
                  also working on some new ones right now. Feel free to check
                  out my{" "}
                  <a
                    href="https://github.com/as2811-project"
                    className="text-blue-500"
                  >
                    GitHub
                  </a>
                  !
                </p>
              </div>
            </div>
          </BlurFade>
        </main>
      </BlurFade>
    </div>
  );
}
