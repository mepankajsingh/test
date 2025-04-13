import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import { createServerClient } from "~/lib/supabase";

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createServerClient();
  
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

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  
  if (!title || !content) {
    return json({ error: "Title and content are required" }, { status: 400 });
  }
  
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('posts')
    .insert([{ title, content }])
    .select();
  
  if (error) {
    return json({ error: error.message }, { status: 500 });
  }
  
  return json({ success: true, post: data[0] });
}

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Manage Posts</h1>
      
      <div className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Create New Post</h2>
        
        {actionData?.error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            {actionData.error}
          </div>
        )}
        
        {actionData?.success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
            Post created successfully!
          </div>
        )}
        
        <Form method="post" className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Create Post
          </button>
        </Form>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Existing Posts</h2>
        
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Create your first post above!</p>
        ) : (
          <div className="space-y-4">
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
      </div>
    </div>
  );
}
