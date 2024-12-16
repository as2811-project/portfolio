"use client";

import { useEffect, useState } from "react";
import BlurFade from "@/components/ui/blur-fade";
import Navigation from "@/components/Nav";
import { Image, Skeleton } from "@nextui-org/react";

export default function Photography() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/getImages");
        const data = await response.json();

        // Ensure data is in the expected format
        if (!data || !Array.isArray(data.imageUrls)) {
          throw new Error("Invalid API response");
        }

        setImageUrls(data.imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="tracking-tight">
      <header className="flex items-center justify-between p-10">
        <h1 className="text-xl font-semibold">AS</h1>
        <Navigation />
      </header>
      <BlurFade delay={0.25} inView>
        <main className="container max-w-3xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="font-medium text-xl opacity-30">Photography</h2>
            <h1 className="font-medium text-2xl">Portraits Gallery</h1>
          </div>
          {loading ? (
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-72 bg-default-300 rounded-lg"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {imageUrls.map((url, index) => (
                <Image key={index} src={url} alt={`Image ${index}`} />
              ))}
            </div>
          )}
        </main>
      </BlurFade>
    </div>
  );
}
