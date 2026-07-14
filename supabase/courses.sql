-- Create the courses table
create table if not exists public.courses (
  id bigint generated always as identity primary key,
  title text not null,
  description text not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.courses enable row level security;

-- Allow anyone (anon key) to read courses
create policy "Public can read courses"
  on public.courses
  for select
  to anon
  using (true);

-- Seed the original three courses
insert into public.courses (title, description) values
  ('Introduction to Web Development', 'Learn the fundamentals of HTML, CSS, and JavaScript.'),
  ('React Fundamentals', 'Build dynamic user interfaces with React and hooks.'),
  ('Data Structures & Algorithms', 'Master core CS concepts with practical problem solving.');
