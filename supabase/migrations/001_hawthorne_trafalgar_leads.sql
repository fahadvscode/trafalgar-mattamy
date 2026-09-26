-- Live table in Supabase project cfzuypbljirmibmxpabi.
-- This site inserts into hawthorne_trafalgar_leads. Do not create trafalgar_mattamy_leads.
-- Extra registration answers (home type, budget, buyer type, timeline, CASL proof, UTMs)
-- are stored in notes because those columns are not on this table.

create table if not exists hawthorne_trafalgar_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  firstname text not null,
  lastname text not null,
  email text not null,
  phone text not null,
  is_broker boolean not null default false,
  project_name text not null default 'Hawthorne on Trafalgar',
  source text not null default 'hawthorne-trafalgar-landing',
  form_location text,
  status text not null default 'new',
  priority text not null default 'high',
  notes text
);

alter table hawthorne_trafalgar_leads enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'hawthorne_trafalgar_leads'
      and policyname = 'anon can insert hawthorne_trafalgar_leads'
  ) then
    create policy "anon can insert hawthorne_trafalgar_leads"
      on hawthorne_trafalgar_leads for insert
      to anon
      with check (true);
  end if;
end $$;
