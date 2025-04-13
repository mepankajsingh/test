import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createServerClient } from "~/lib/supabase";

export const meta: MetaFunction = () => {
  return [
    { title: "Next.js SSR with Supabase" },
    { name: "description", content: "Welcome to the Supabase integration demo!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createServerClient();
  
  // Fetch data from Supabase
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching posts:', error);
    return json({ posts: [] });
  }
  
  return json({ posts });
}

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Next.js SSR with Supabase</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Posts from Supabase</h2>
        
        {posts.length === 0 ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            <p>No posts found. Make sure you've run the migration script to create test data.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg text-gray-900">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{post.content}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>Built with Next.js, Remix, and Supabase</p>
      </footer>
    </div>
  );
}
