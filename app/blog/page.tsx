import { createClient } from "@supabase/supabase-js";
import BlogList from "@/components/BlogList";
import Navigation from "@/components/Nav";
import BlurFade from "@/components/ui/blur-fade";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getBlogs() {
  const { data, error } = await supabase
    .from("posts")
    .select("id, created_at, slug, title, thumbnail")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }

  return data;
}

export default async function BlogPage() {
  const blogs = await getBlogs();

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
            <h1 className="font-medium text-2xl">
              Reflections, Thoughts and Stories
            </h1>
          </div>

          <BlogList blogs={blogs} />
        </main>
      </BlurFade>
    </div>
  );
}
