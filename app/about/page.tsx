export default function About() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">About This Project</h1>
        
        <div className="prose lg:prose-xl">
          <p className="text-gray-700 mb-4">
            This is a demo project showcasing Next.js with Su<boltAction type="file" filePath="app/about/page.tsx">
export default function About() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">About This Project</h1>
        
        <div className="prose lg:prose-xl">
          <p className="text-gray-700 mb-4">
            This is a demo project showcasing Next.js with Supabase integration. It demonstrates how to build a modern web application with server-side rendering (SSR) and a powerful backend database.
          </p>
          
          <p className="text-gray-700 mb-4">
            The application uses:
          </p>
          
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li>Next.js for the frontend framework</li>
            <li>Supabase for the database and backend</li>
            <li>Tailwind CSS for styling</li>
            <li>TypeScript for type safety</li>
          </ul>
          
          <p className="text-gray-700">
            This demo showcases how to fetch data from Supabase and render it server-side with Next.js, providing a fast and SEO-friendly user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
