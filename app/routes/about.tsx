import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About - Next.js SSR with Supabase" },
    { name: "description", content: "About this application" },
  ];
};

export default function About() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">About This Application</h1>
      
      <div className="prose lg:prose-xl">
        <p className="mb-4">
          This is a demo application showcasing server-side rendering (SSR) with Next.js and Supabase integration.
          The application is built using the following technologies:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Next.js for server-side rendering</li>
          <li>Remix for routing and data loading</li>
          <li>Supabase for database and authentication</li>
          <li>Tailwind CSS for styling</li>
          <li>TypeScript for type safety</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Server-side rendering for improved SEO and performance</li>
          <li>Data fetching from Supabase on the server</li>
          <li>Form submissions with server-side validation</li>
          <li>Responsive design with Tailwind CSS</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
        
        <p className="mb-4">
          To get started with this application, you need to:
        </p>
        
        <ol className="list-decimal pl-6 mb-6">
          <li>Clone the repository</li>
          <li>Install dependencies with <code>npm install</code></li>
          <li>Run the development server with <code>npm run dev</code></li>
          <li>Make sure you've run the migration script to create test data</li>
        </ol>
        
        <p className="mt-8 text-gray-600 italic">
          This application is for demonstration purposes only.
        </p>
      </div>
    </div>
  );
}
