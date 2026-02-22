

# Comprehensive VHAY Website Upgrade Plan

## Overview
This plan covers 5 major areas: (A) Change brand color from pink to orange, (B) Apply warm theme to all sub-pages, (C) Expand admin CMS with donations, newsletter, contact, and brand settings, (D) Add footer legal/info pages with the 7 agendas as dedicated routes, (E) Add social sharing to blog posts.

---

## A. Brand Color Change: Pink to Orange

Update the CSS `--primary` variable from pink/coral (`350 72% 55%`) to a concentrated orange (approximately `24 90% 55%` -- a warm, bold orange like #E8752A).

**File:** `src/index.css`
- Change `--primary`, `--ring`, `--sidebar-primary`, `--sidebar-ring` to the new orange HSL values
- All buttons, tags, accents, and hover states across the entire site will automatically update since they reference the CSS variable

---

## B. Warm Light Theme Applied to All Sub-Pages

The sub-pages (About, Programs, Events, Blog, Gallery, Contact) already use the same design system classes (`glass-card`, `glow-button`, `gradient-text`, `section-padding`, etc.) and CSS variables. Once the orange color is set in step A, they will automatically inherit the warm theme. Minor cleanup:

**Files:** `About.tsx`, `Programs.tsx`, `Events.tsx`, `Blog.tsx`, `Gallery.tsx`, `Contact.tsx`
- Verify all pages use the shared `Layout` component (they do)
- No structural changes needed -- the CSS variable swap handles the color change globally

---

## C. Expanded Admin CMS

### C1. Seed Global Settings (Database Migration)
Insert default settings rows so the Settings page has data to edit:
- `site_name`, `site_description`, `contact_email`, `contact_phone`, `address`
- `facebook_url`, `twitter_url`, `instagram_url`, `youtube_url`
- `hero_title`, `hero_subtitle`
- `countries_count`, `states_count`, `youths_empowered`
- **New keys:** `brand_primary_color`, `brand_font_heading`, `brand_font_body`

### C2. Admin Donations Manager
**New file:** `src/pages/admin/DonationsManager.tsx`
- List all donations from `donations` table
- Show donor name, email, amount, payment method, status, date
- Admin can update status (pending -> confirmed / rejected)
- Filter by status and payment method

### C3. Admin Newsletter Manager
**New file:** `src/pages/admin/NewsletterManager.tsx`
- List all subscribers from `newsletter_subscribers` table
- Show email, name, subscribed date, active status
- Admin can toggle active/inactive
- Export functionality (copy emails)

### C4. Admin Contact Submissions Manager
**New file:** `src/pages/admin/ContactManager.tsx`
- List all contact form submissions from `contact_submissions` table
- Show name, email, subject, message, date, read status
- Admin can mark as read/unread
- Delete submissions

### C5. Admin Sidebar Update
**File:** `src/components/admin/AdminSidebar.tsx`
- Add menu items: Donations, Newsletter, Contact Submissions

### C6. Admin Routes
**File:** `src/App.tsx`
- Add routes: `/admin/donations`, `/admin/newsletter`, `/admin/contact-submissions`

### C7. Settings Manager Enhancement
**File:** `src/pages/admin/SettingsManager.tsx`
- Add brand color picker section (updates `brand_primary_color` setting)
- Add font selection dropdowns for heading and body fonts
- Group settings into tabs: General, Social Media, Brand

---

## D. Footer Pages and 7 Agenda Dedicated Pages

### D1. Footer Legal Pages
Create static pages accessible from the footer:

**New files:**
- `src/pages/PrivacyPolicy.tsx` -- Standard privacy policy page
- `src/pages/TermsOfService.tsx` -- Terms and conditions
- `src/pages/FAQ.tsx` -- Frequently asked questions about VHAY
- `src/pages/Donate.tsx` -- Dedicated donation page (reuses donation card from Index)

### D2. Individual Agenda Pages
**New file:** `src/pages/Agenda.tsx`
- A single dynamic page that reads an agenda number from the URL (`/agenda/:id`)
- Displays the full detailed content for each of the 7 agendas (title, description, outcomes, images, CTA)
- Data sourced from the existing `agendas` array in Programs.tsx (extracted to a shared data file)

**New file:** `src/data/agendas.ts`
- Extract the 7 agendas data from Programs.tsx into a shared module

### D3. Footer Update
**File:** `src/components/Footer.tsx`
- Add "Legal" column: Privacy Policy, Terms of Service, FAQ
- Update "Our 7 Agendas" links to point to `/agenda/1` through `/agenda/7`
- Add social media icon links (Facebook, Twitter, Instagram, YouTube)

### D4. Routes
**File:** `src/App.tsx`
- Add routes: `/privacy`, `/terms`, `/faq`, `/donate`, `/agenda/:id`

---

## E. Social Sharing for Blog

### E1. Blog Social Share Buttons
**New file:** `src/components/SocialShareButtons.tsx`
- Share to Facebook, Twitter/X, LinkedIn, WhatsApp
- Uses `window.open` with share URLs (no external SDK needed)
- Accepts `url` and `title` props

### E2. Blog Post Detail Page
**New file:** `src/pages/BlogPost.tsx`
- Individual blog post page at `/blog/:slug`
- Fetches post from `blog_posts` table by slug
- Displays full content with cover image
- Includes `SocialShareButtons` component
- Open Graph meta tags for social media previews (using `document.title` and meta tag updates)

### E3. Update Blog Listing
**File:** `src/pages/Blog.tsx`
- Make blog post cards link to `/blog/:slug`
- Add small share icons on each card

### E4. Route
**File:** `src/App.tsx`
- Add route: `/blog/:slug`

---

## Technical Details

### Database Migration SQL
```sql
-- Seed global_settings with defaults (only insert if not exists)
INSERT INTO global_settings (key, value) VALUES
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
```
Note: This requires a unique constraint on `global_settings.key`. A migration will add it if not present.

### New Routes Summary
| Route | Component | Purpose |
|-------|-----------|---------|
| `/agenda/:id` | Agenda | Individual agenda detail |
| `/blog/:slug` | BlogPost | Individual blog post |
| `/donate` | Donate | Dedicated donation page |
| `/privacy` | PrivacyPolicy | Privacy policy |
| `/terms` | TermsOfService | Terms of service |
| `/faq` | FAQ | Frequently asked questions |
| `/admin/donations` | DonationsManager | Manage donations |
| `/admin/newsletter` | NewsletterManager | Manage subscribers |
| `/admin/contact-submissions` | ContactManager | Manage contact forms |

### Files Modified
- `src/index.css` -- Orange primary color
- `src/App.tsx` -- New routes
- `src/components/Footer.tsx` -- Legal links, social icons, agenda links
- `src/components/admin/AdminSidebar.tsx` -- New admin menu items
- `src/pages/admin/SettingsManager.tsx` -- Brand settings section
- `src/pages/Blog.tsx` -- Link posts to detail pages, add share icons
- `src/pages/Programs.tsx` -- Import agendas from shared data file

### Files Created
- `src/data/agendas.ts`
- `src/pages/Agenda.tsx`
- `src/pages/BlogPost.tsx`
- `src/pages/Donate.tsx`
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/TermsOfService.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/admin/DonationsManager.tsx`
- `src/pages/admin/NewsletterManager.tsx`
- `src/pages/admin/ContactManager.tsx`
- `src/components/SocialShareButtons.tsx`

