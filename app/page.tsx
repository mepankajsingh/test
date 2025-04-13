import { createServerClient } from '@/lib/supabase';

export default async function Home() {
  const supabase = createServerClient();
  
  // Fetch data from Supabase
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching posts:', error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Error loading posts</h1>
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }

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
        <p>Built with Next.js and Supabase</p>
      </footer>
    </div>
  );
}
