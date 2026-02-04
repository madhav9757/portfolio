"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Trophy,
  Medal,
  Star,
  Calendar,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Zap,
  Target,
  Sparkles,
  Download,
  Eye
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    issuerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=AWS",
    date: "December 2023",
    credentialId: "AWS-SA-2023-12345",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
    description: "Demonstrated expertise in designing distributed systems on AWS platform with best practices for security, cost optimization, and operational excellence.",
    verifyUrl: "https://aws.amazon.com/certification/verify",
    certificateImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    type: "Professional",
    featured: true,
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 2,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    issuerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=META",
    date: "October 2023",
    credentialId: "META-FE-2023-67890",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    description: "Completed comprehensive program covering React, responsive web design, version control, and modern front-end development practices.",
    verifyUrl: "https://www.coursera.org/verify",
    certificateImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    type: "Professional",
    featured: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    issuerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=MONGO",
    date: "September 2023",
    credentialId: "MONGO-DEV-2023-11223",
    skills: ["NoSQL", "Database Design", "MongoDB", "Data Modeling"],
    description: "Validated skills in MongoDB operations, data modeling, indexing, and performance optimization for scalable applications.",
    verifyUrl: "https://university.mongodb.com/verify",
    certificateImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    type: "Certification",
    featured: false,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    issuerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=GCP",
    date: "August 2023",
    credentialId: "GCP-ARCH-2023-44556",
    skills: ["GCP", "Cloud Infrastructure", "Kubernetes", "Microservices"],
    description: "Demonstrated ability to design, develop, and manage robust, secure, scalable, and dynamic solutions on Google Cloud Platform.",
    verifyUrl: "https://www.credential.net/verify",
    certificateImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    type: "Professional",
    featured: false,
    color: "from-red-500 to-pink-500"
  },
  {
    id: 5,
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    issuerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=UDEMY",
    date: "June 2023",
    credentialId: "UDEMY-FS-2023-77889",
    skills: ["MERN Stack", "Full Stack", "APIs", "Authentication"],
    description: "Intensive bootcamp covering complete full-stack development with MERN stack, RESTful APIs, and modern deployment practices.",
    verifyUrl: "https://www.udemy.com/certificate",
    certificateImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    type: "Course",
    featured: false,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 6,
    title: "Advanced TypeScript Programming",
    issuer: "Frontend Masters",
    issuerLogo: "https://api.dicebear.com/7.x/initials/svg?seed=FM",
    date: "May 2023",
    credentialId: "FM-TS-2023-99001",
    skills: ["TypeScript", "Type System", "Generics", "Advanced Patterns"],
    description: "Mastered advanced TypeScript concepts including generics, conditional types, utility types, and complex type inference.",
    verifyUrl: "https://frontendmasters.com/certificates",
    certificateImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    type: "Course",
    featured: false,
    color: "from-blue-500 to-purple-500"
  }
];

const achievements = [
  { icon: Trophy, label: "6+ Certifications", value: "6+", color: "text-yellow-500" },
  { icon: Medal, label: "Professional Level", value: "4", color: "text-blue-500" },
  { icon: Star, label: "Featured Certs", value: "2", color: "text-purple-500" },
  { icon: TrendingUp, label: "Learning Path", value: "Active", color: "text-green-500" }
];

const CertificateCard = ({ cert, index }: { cert: typeof certificates[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl overflow-hidden group">
        {/* Certificate Preview */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={cert.certificateImage}
            alt={cert.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {cert.featured && (
              <Badge className="bg-linear-to-r from-yellow-500 to-orange-500 text-white border-0">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
            <Badge variant="outline" className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0">
              {cert.type}
            </Badge>
          </div>

          {/* Issuer Logo */}
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 border border-white/20">
              <img 
                src={cert.issuerLogo} 
                alt={cert.issuer}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-4 right-4 flex gap-2"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{cert.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img 
                        src={cert.certificateImage} 
                        alt={cert.title}
                        className="w-full rounded-xl"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Issuer</p>
                          <p className="font-semibold">{cert.issuer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Date</p>
                          <p className="font-semibold">{cert.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Credential ID</p>
                          <p className="font-mono text-sm">{cert.credentialId}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                      <Button
                        asChild
                        className="w-full rounded-xl"
                      >
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Verify Certificate
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <CardHeader className="pb-4">
          {/* Title */}
          <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-blue-500 transition-colors line-clamp-2">
            {cert.title}
          </h3>

          {/* Issuer & Date */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
            <span className="font-semibold">{cert.issuer}</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {cert.date}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {cert.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs font-medium rounded-md bg-muted hover:bg-muted/80 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 rounded-xl hover:border-blue-500 hover:bg-blue-500/5"
            >
              <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                <CheckCircle className="w-4 h-4 mr-2" />
                Verify
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-xl hover:bg-blue-500/10"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function CertificatesSection() {
  return (
    <section className="relative py-16">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <Badge 
          variant="outline" 
          className="mb-6 px-4 py-2 border-yellow-500/30 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full"
        >
          <Award className="w-4 h-4 mr-2" />
          Certifications & Achievements
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Credentials &{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Recognition
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Continuously learning and earning industry-recognized certifications
          to stay at the forefront of technology.
        </p>
      </motion.div>

      {/* Achievement Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
      >
        {achievements.map((achievement, i) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all rounded-2xl text-center">
                <CardContent className="p-6">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${achievement.color}`} />
                  <div className="text-3xl font-bold mb-1">{achievement.value}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 rounded-2xl bg-linear-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Always Learning</p>
              <p className="text-sm text-muted-foreground">More certifications in progress!</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}