type Post = {
  id: string;
  title: string;
  content: string;
  created_at: string;
};

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-xl mb-2 text-gray-900">{post.title}</h3>
      <p className="text-gray-500 text-sm mb-4">
        {new Date(post.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}
