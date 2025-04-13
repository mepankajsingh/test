import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createServerClient } from "~/lib/supabase";

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  
  if (!id) {
    throw new Response("Post ID is required", { status: 400 });
  }
  
  const supabase = createServerClient();
  
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error || !post) {
    throw new Response("Post not found", { status: 404 });
  }
  
  return json({ post });
}

export default function PostDetail() {
  const { post } = useLoaderData<typeof loader>();
  
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>
        
        <div className="text-gray-500 mb-6">
          Published on {new Date(post.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        
        <div className="prose lg:prose-xl">
          <p className="text-gray-700">{post.content}</p>
        </div>
        
        <div className="mt-8">
          <a 
            href="/posts" 
            className="text-blue-500 hover:text-blue-700 flex items-center"
          >
            ← Back to all posts
          </a>
        </div>
      </div>
    </div>
  );
}
