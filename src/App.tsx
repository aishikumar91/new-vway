import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Agenda from "./pages/Agenda";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/Dashboard";
import PagesManager from "./pages/admin/PagesManager";
import BlogManager from "./pages/admin/BlogManager";
import EventsManager from "./pages/admin/EventsManager";
import GalleryManager from "./pages/admin/GalleryManager";
import SettingsManager from "./pages/admin/SettingsManager";
import DonationsManager from "./pages/admin/DonationsManager";
import NewsletterManager from "./pages/admin/NewsletterManager";
import ContactManager from "./pages/admin/ContactManager";
import ActivityManager from "./pages/admin/ActivityManager";
import AuditLogManager from "./pages/admin/AuditLogManager";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/agenda/:id" element={<Agenda />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/pages" element={<PagesManager />} />
            <Route path="/admin/blog" element={<BlogManager />} />
            <Route path="/admin/events" element={<EventsManager />} />
            <Route path="/admin/gallery" element={<GalleryManager />} />
            <Route path="/admin/donations" element={<DonationsManager />} />
            <Route path="/admin/newsletter" element={<NewsletterManager />} />
            <Route path="/admin/contact-submissions" element={<ContactManager />} />
            <Route path="/admin/settings" element={<SettingsManager />} />
            <Route path="/admin/activity" element={<ActivityManager />} />
            <Route path="/admin/audit" element={<AuditLogManager />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
