/* eslint-disable @typescript-eslint/no-explicit-any */
import Navigation from "@/components/Nav";
import BlurFade from "@/components/ui/blur-fade";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }

  return data;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ContentBlock({ block }: { block: any }) {
  return (
    <div className="mb-6">
      <p className="text-base mb-4">{block.text}</p>
      {block.images && block.images.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {block.images.map((image: any, index: number) => (
            <Image
              key={index}
              src={image.url}
              alt={image.alt || `Image ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg hover:scale-105 transform transition-transform"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="tracking-tight">
      <header className="flex items-center justify-between p-10">
        <h1 className="text-xl font-semibold">AS</h1>
        <Navigation />
      </header>
      <BlurFade delay={0.25} inView>
        <article className="max-w-3xl mx-auto px-4 py-8">
          <div className="mb-8">
            <p className="text-gray-500 mb-2">{formatDate(post.created_at)}</p>
            <h1 className="text-xl mb-4">{post.title}</h1>
          </div>
          <div>
            {post.content.map((block: any, index: number) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>
        </article>
      </BlurFade>
    </div>
  );
}
