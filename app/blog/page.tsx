"use client";
import Navigation from "@/components/Nav";
import BlurFade from "@/components/ui/blur-fade";

export default function Blog() {
  return (
    <div className="tracking-tight">
      <header className="flex items-center justify-between p-10">
        <h1 className="text-xl font-semibold">AS</h1>
        <Navigation />
      </header>
      <BlurFade delay={0.25} inView>
        <main className="container max-w-3xl mx-auto px-4 py-12 h-screen">
          <div className="mb-8">
            <h2 className="font-medium text-xl opacity-30">Blog</h2>
            <h1 className="font-medium text-2xl">Coming Soon 👀</h1>
          </div>
        </main>
      </BlurFade>
    </div>
  );
}
