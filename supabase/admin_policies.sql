-- Widen the read policy so the logged-in admin (role: authenticated) can
-- also read courses, not just anonymous visitors.
drop policy if exists "Public can read courses" on public.courses;

create policy "Public can read courses"
  on public.courses
  for select
  using (true);

-- Only ctnelson1997@gmail.com may create, edit, or delete courses.
-- This is the actual security boundary — enforced by the database
-- regardless of what the frontend does.
create policy "Admin can insert courses"
  on public.courses
  for insert
  to authenticated
  with check (auth.jwt() ->> 'email' = 'ctnelson1997@gmail.com');

create policy "Admin can update courses"
  on public.courses
  for update
  to authenticated
  using (auth.jwt() ->> 'email' = 'ctnelson1997@gmail.com')
  with check (auth.jwt() ->> 'email' = 'ctnelson1997@gmail.com');

create policy "Admin can delete courses"
  on public.courses
  for delete
  to authenticated
  using (auth.jwt() ->> 'email' = 'ctnelson1997@gmail.com');
