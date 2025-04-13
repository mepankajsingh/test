import { createServerClient } from '@/lib/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const supabase = createServerClient();
  
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error || !post) {
    console.error('Error fetching post:', error);
    return notFound();
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Link 
        href="/posts" 
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        ← Back to all posts
      </Link>
      
      <article className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6">
          {new Date(post.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
        
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
}
