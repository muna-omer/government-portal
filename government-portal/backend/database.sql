CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(30) NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cabinet_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  position VARCHAR(150) NOT NULL,
  ministry VARCHAR(200),
  bio TEXT,
  image_url TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS institutions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  website VARCHAR(300),
  logo_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  summary TEXT,
  content TEXT,
  image_url TEXT,
  published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(200) NOT NULL,
  subject VARCHAR(250),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password_hash, role)
VALUES ('admin', '$2b$10$5eJ8v0f0Y6zY3n7JxQwX3OeQ6YxQ3mJ4k8s8XqX3b6sX7XQ0v6n7W', 'admin')
ON CONFLICT (username) DO NOTHING;

INSERT INTO cabinet_members (name, position, ministry, bio, display_order)
SELECT 'Amina Hassan', 'Minister', 'Ministry of Planning', 'Responsible for national planning and development coordination.', 1
WHERE NOT EXISTS (SELECT 1 FROM cabinet_members);

INSERT INTO cabinet_members (name, position, ministry, bio, display_order)
SELECT 'Abdi Mohamed', 'Minister', 'Ministry of Education', 'Responsible for education policy and national education programs.', 2
WHERE (SELECT COUNT(*) FROM cabinet_members) < 2;

INSERT INTO institutions (name, description, category)
SELECT 'Ministry of Education', 'National education policy, standards and programs.', 'Ministry'
WHERE NOT EXISTS (SELECT 1 FROM institutions);

INSERT INTO institutions (name, description, category)
SELECT 'Ministry of Finance', 'Public finance, budget and economic management.', 'Ministry'
WHERE (SELECT COUNT(*) FROM institutions) < 2;

INSERT INTO media (title, summary, content)
SELECT 'Government launches new digital public services', 'A new phase of digital public service delivery has been announced.', 'The initiative aims to make selected public services easier to access through digital channels.'
WHERE NOT EXISTS (SELECT 1 FROM media);
