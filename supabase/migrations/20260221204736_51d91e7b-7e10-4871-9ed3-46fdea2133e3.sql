
-- Donations table
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT,
  donor_email TEXT,
  amount NUMERIC(12,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'NGN',
  payment_method TEXT NOT NULL DEFAULT 'manual',
  payment_reference TEXT,
  paystack_reference TEXT,
  donation_type TEXT NOT NULL DEFAULT 'one-time',
  status TEXT NOT NULL DEFAULT 'pending',
  cover_fees BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can create donations" ON public.donations FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can manage donations" ON public.donations FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Donors can view own donations by email" ON public.donations FOR SELECT USING (true);

CREATE TRIGGER update_donations_updated_at BEFORE UPDATE ON public.donations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Newsletter subscribers
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can subscribe" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can manage subscribers" ON public.newsletter_subscribers FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit contact forms" ON public.contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can manage submissions" ON public.contact_submissions FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));
