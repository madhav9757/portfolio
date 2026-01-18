"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight,
  Tag,
  TrendingUp,
  Eye,
  MessageSquare,
  Share2,
  Bookmark,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Applications with Next.js 14 and Server Actions",
    excerpt: "Explore the power of Next.js 14's server actions and how they revolutionize full-stack development with improved performance and developer experience.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "Web Development",
    tags: ["Next.js", "React", "Server Actions"],
    author: {
      name: "Madhav Semwal",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Madhav",
      role: "Full Stack Developer"
    },
    publishedDate: "2024-01-15",
    readTime: "8 min read",
    views: 2547,
    comments: 24,
    featured: true
  },
  {
    id: 2,
    title: "Integrating OpenAI GPT-4 with Your Web Applications",
    excerpt: "Learn how to integrate GPT-4 into your applications, build intelligent chatbots, and create AI-powered features that enhance user experience.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "AI/ML",
    tags: ["OpenAI", "AI", "TypeScript"],
    author: {
      name: "Madhav Semwal",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Madhav",
      role: "Full Stack Developer"
    },
    publishedDate: "2024-01-10",
    readTime: "12 min read",
    views: 3821,
    comments: 42,
    featured: true
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt: "Deep dive into advanced TypeScript patterns including generics, conditional types, and utility types to write more maintainable code.",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    author: {
      name: "Madhav Semwal",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Madhav",
      role: "Full Stack Developer"
    },
    publishedDate: "2024-01-05",
    readTime: "10 min read",
    views: 1923,
    comments: 18,
    featured: false
  },
  {
    id: 4,
    title: "Building Real-time Applications with WebSockets and Socket.io",
    excerpt: "Create interactive real-time features like chat, notifications, and live updates using WebSockets and modern real-time technologies.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "Backend",
    tags: ["WebSockets", "Node.js", "Real-time"],
    author: {
      name: "Madhav Semwal",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Madhav",
      role: "Full Stack Developer"
    },
    publishedDate: "2023-12-28",
    readTime: "15 min read",
    views: 2156,
    comments: 31,
    featured: false
  }
];

const categories = [
  { name: "All", count: 24, color: "bg-blue-500" },
  { name: "Web Development", count: 12, color: "bg-purple-500" },
  { name: "AI/ML", count: 6, color: "bg-pink-500" },
  { name: "Programming", count: 8, color: "bg-green-500" },
  { name: "Backend", count: 5, color: "bg-orange-500" }
];

const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
  const isFeatured = post.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={isFeatured ? "md:col-span-2" : ""}
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl overflow-hidden group">
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Featured Badge */}
          {isFeatured && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 left-4"
            >
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </motion.div>
          )}

          {/* Category Badge */}
          <Badge 
            variant="outline" 
            className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0"
          >
            {post.category}
          </Badge>

          {/* Actions */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-colors"
            >
              <Bookmark className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        <CardHeader className="pb-4">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Stats */}
          <div className="flex items-center justify-between mb-4 pb-4 border-t border-border/40 pt-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {post.comments}
              </div>
            </div>
          </div>

          {/* Author & CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border-2 border-blue-500/20">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="rounded-full group/btn hover:bg-blue-500/10 hover:text-blue-500"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function BlogSection() {
  return (
    <section className="relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Badge 
          variant="outline" 
          className="mb-6 px-4 py-2 border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Blog & Articles
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Latest{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Insights
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Sharing knowledge about web development, AI integration, and modern
          programming practices.
        </p>
      </motion.div>

      {/* Categories Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category, i) => (
          <motion.button
            key={category.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-all font-medium text-sm flex items-center gap-2"
          >
            <div className={`w-2 h-2 rounded-full ${category.color}`} />
            {category.name}
            <Badge variant="secondary" className="text-xs">{category.count}</Badge>
          </motion.button>
        ))}
      </motion.div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-8 hover:border-blue-500 hover:bg-blue-500/5 group"
        >
          <Link href="/blog">
            View All Articles
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}