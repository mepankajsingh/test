-- Create posts table
CREATE TABLE IF<boltAction type="file" filePath="migrations/001_create_tables.sql">
-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create users table for future authentication
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO posts (title, content, created_at)
VALUES 
  ('Getting Started with Supabase', 'Supabase is an open source Firebase alternative. It provides all the backend services you need to build a product.', NOW() - INTERVAL '3 days'),
  ('Server-Side Rendering with Next.js', 'Next.js gives you the best developer experience with all the features you need for production.', NOW() - INTERVAL '2 days'),
  ('Why Remix is Awesome', 'Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.', NOW() - INTERVAL '1 day'),
  ('Tailwind CSS Tips and Tricks', 'Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.', NOW()),
  ('Building a Blog with Supabase and Next.js', 'Learn how to create a full-featured blog using Supabase as the backend and Next.js for the frontend.', NOW() - INTERVAL '5 days');

-- Create a trigger to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();
