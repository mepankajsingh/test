# Next.js SSR with Supabase Integration

This project demonstrates server-side rendering (SSR) with Next.js and Supabase integration. It's built using Remix for routing and data handling.

## Features

- Server-side rendering for improved SEO and performance
- Data fetching from Supabase on the server
- Form submissions with server-side validation
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 20.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Database Setup

This project uses Supabase as the database. The connection is already configured with the provided URL and key.

To set up the database schema and sample data, you need to run the migration script:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `migrations/001_create_tables.sql`
4. Paste and run the SQL in the Supabase SQL Editor

## Project Structure

- `app/` - Contains all the application code
  - `components/` - Reusable React components
  - `lib/` - Utility functions and libraries
  - `routes/` - Page components and route handlers
  - `types/` - TypeScript type definitions
- `migrations/` - SQL migration files for Supabase

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for SSR
- [Remix](https://remix.run/) - Full stack web framework
- [Supabase](https://supabase.io/) - Open source Firebase alternative
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## Deployment

This application can be deployed to Vercel:

```bash
npm run build
```

Then follow the Vercel deployment instructions.

## License

This project is licensed under the MIT License.
