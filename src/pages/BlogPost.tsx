import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";
import Layout from "@/components/Layout";
import SocialShareButtons from "@/components/SocialShareButtons";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";


const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .eq("is_published", true)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | VHAY`;
    }
    return () => { document.title = "VHAY — Valorous Hope for African Youths"; };
  }, [post]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (isLoading) {
    return (
      <Layout>
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="container mx-auto text-center relative z-10">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-muted-foreground mt-4">Loading article...</p>
          </div>
        </section>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="container mx-auto text-center relative z-10">
            <h1 className="font-display text-3xl font-bold text-foreground mb-6">POST NOT FOUND</h1>
            <Link to="/blog" className="glow-button px-5 py-2 rounded-full text-[10px] font-bold tracking-wider inline-flex items-center gap-2">
              <ArrowLeft size={14} /> BACK TO BLOG
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {post.cover_image && (
        <div className="relative h-[45vh] overflow-hidden">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      )}

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 mb-8">
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <h1
              className="font-display text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold leading-[0.88] mb-5 text-image-clip"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              {post.title?.toUpperCase()}
            </h1>

            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              {post.published_at && (
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {format(new Date(post.published_at), "MMM d, yyyy")}
                </span>
              )}
            </div>

            <div className="line-glow h-px w-full mb-8" />

            <SocialShareButtons url={shareUrl} title={post.title} className="mb-10" />

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {post.content?.split("\n").map((paragraph, i) => (
                paragraph.trim() ? <p key={i}>{paragraph}</p> : null
              ))}
            </div>

            <div className="border-t border-border/50 mt-14 pt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Share this article</p>
              <SocialShareButtons url={shareUrl} title={post.title} />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
