/*
  # Resume Templates Schema

  1. New Tables
    - `resume_templates`
      - `id` (uuid, primary key)
      - `name` (text) - Template name
      - `description` (text) - Template description
      - `preview_image` (text) - URL to template preview
      - `template_data` (jsonb) - Template structure and styling
      - `created_at` (timestamp)
    
    - `user_resumes`
      - `id` (uuid, primary key)
      - `user_id` (uuid) - Reference to auth.users
      - `template_id` (uuid) - Reference to resume_templates
      - `resume_data` (jsonb) - User's resume content
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for template viewing and user resume management
*/

-- Create resume templates table
CREATE TABLE IF NOT EXISTS resume_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  preview_image text NOT NULL,
  template_data jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create user resumes table
CREATE TABLE IF NOT EXISTS user_resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  template_id uuid REFERENCES resume_templates NOT NULL,
  resume_data jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE resume_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_resumes ENABLE ROW LEVEL SECURITY;

-- Policies for resume_templates
CREATE POLICY "Templates are viewable by everyone"
  ON resume_templates
  FOR SELECT
  TO public
  USING (true);

-- Policies for user_resumes
CREATE POLICY "Users can view their own resumes"
  ON user_resumes
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own resumes"
  ON user_resumes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own resumes"
  ON user_resumes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Insert sample templates
INSERT INTO resume_templates (name, description, preview_image, template_data) VALUES
(
  'Modern Professional',
  'A clean and modern design perfect for tech professionals',
  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=500',
  '{
    "layout": "modern",
    "colors": {
      "primary": "#2563eb",
      "secondary": "#1e40af"
    }
  }'
),
(
  'Creative Minimal',
  'Stand out with this minimalist design for creative professionals',
  'https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80&w=500',
  '{
    "layout": "creative",
    "colors": {
      "primary": "#059669",
      "secondary": "#047857"
    }
  }'
),
(
  'Executive Classic',
  'Traditional layout with a modern twist for business professionals',
  'https://images.unsplash.com/photo-1586282023378-839a65aaa71e?auto=format&fit=crop&q=80&w=500',
  '{
    "layout": "classic",
    "colors": {
      "primary": "#4f46e5",
      "secondary": "#4338ca"
    }
  }'
);