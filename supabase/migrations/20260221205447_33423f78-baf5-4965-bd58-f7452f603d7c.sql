
-- Add unique constraint on global_settings.key if not exists
ALTER TABLE public.global_settings ADD CONSTRAINT global_settings_key_unique UNIQUE (key);

-- Seed global settings
INSERT INTO public.global_settings (key, value) VALUES
  ('site_name', 'Valorous Hope for African Youths'),
  ('site_description', 'A pan-African empowerment movement'),
  ('contact_email', 'info@vhay.org'),
  ('contact_phone', '+234 800 VHAY 001'),
  ('address', 'Lagos, Nigeria'),
  ('facebook_url', ''),
  ('twitter_url', ''),
  ('instagram_url', ''),
  ('youtube_url', ''),
  ('hero_title', 'VALOROUS AFRICA'),
  ('hero_subtitle', 'A Continental Movement for Empowerment'),
  ('countries_count', '14'),
  ('states_count', '28'),
  ('youths_empowered', '1000'),
  ('brand_primary_color', '#E8752A'),
  ('brand_font_heading', 'Roboto Condensed'),
  ('brand_font_body', 'Inter')
ON CONFLICT (key) DO NOTHING;
