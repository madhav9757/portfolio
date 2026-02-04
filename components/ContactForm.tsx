"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  User, 
  MessageSquare, 
  Loader2,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "madhavsemwal9@gmail.com",
    href: "mailto:madhavsemwal9@gmail.com",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8608798065",
    href: "tel:+918608798065",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pimpri, Maharashtra, IN",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix the errors in the form", {
        description: "Check all required fields",
        icon: <AlertCircle className="w-4 h-4" />
      });
      return;
    }

    setStatus("sending");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setStatus("sent");
      
      // Show success toast
      toast.success("Message sent successfully!", {
        description: "I'll get back to you within 24 hours",
        icon: <CheckCircle2 className="w-4 h-4" />
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      toast.error("Failed to send message", {
        description: "Please try again or email me directly",
        icon: <AlertCircle className="w-4 h-4" />
      });
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
          className="mb-6 px-4 py-2 border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Get In Touch
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Let's Work{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Together
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can bring your ideas to life
          with cutting-edge technology and creative solutions.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left Column: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Contact Cards */}
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all rounded-2xl overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl ${info.bgColor} ${info.color} shrink-0`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-blue-500 transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

          {/* Quick Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-linear-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-green-600 dark:text-green-400 mb-1">
                      Quick Response Guaranteed
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I typically respond within 24 hours during business days. 
                      For urgent matters, feel free to email me directly!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-500" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="John Doe"
                    className={`h-12 rounded-xl border-2 transition-all ${
                      errors.name 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-border focus:border-blue-500"
                    }`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="john@example.com"
                    className={`h-12 rounded-xl border-2 transition-all ${
                      errors.email 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-border focus:border-blue-500"
                    }`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="Project Inquiry / Collaboration"
                    className={`h-12 rounded-xl border-2 transition-all ${
                      errors.subject 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-border focus:border-blue-500"
                    }`}
                  />
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="Tell me about your project, timeline, and how I can help..."
                    className={`rounded-xl border-2 resize-none transition-all ${
                      errors.message 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-border focus:border-blue-500"
                    }`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </motion.p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {formData.message.length} / 1000 characters
                  </p>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                >
                  <Button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className="w-full h-14 text-base font-bold rounded-xl bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" && (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    )}
                    {status === "sent" && (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        Message Sent Successfully!
                      </>
                    )}
                    {status === "error" && "Error - Please Try Again"}
                    {status === "idle" && (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Success Message */}
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-xl bg-green-500/10 border-2 border-green-500/20"
                  >
                    <p className="text-green-600 dark:text-green-400 font-medium text-center flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Thank you! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}