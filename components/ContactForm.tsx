"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, User, MessageSquare, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputVariants = {
    focus: { scale: 1.01, transition: { duration: 0.2 } },
  };

  return (
    <section className="py-16 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            💬 Let's Connect
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can work together
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Quick Info */}
          <Card className="border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Quick Info</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "madhavsemwalofficial@gmail.com",
                    href: "mailto:madhavsemwalofficial@gmail.com",
                  },
                  {
                    icon: User,
                    label: "Location",
                    value: "Pimpri, Maharashtra, IN",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="font-bold text-lg">Quick Response</h3>
                </div>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours during business days
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Name */}
                <motion.div variants={inputVariants} whileFocus="focus">
                  <Label htmlFor="name" className="text-base font-semibold mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    disabled={status === "sending"}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="h-12 border-2 focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={inputVariants} whileFocus="focus">
                  <Label htmlFor="email" className="text-base font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    disabled={status === "sending"}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="h-12 border-2 focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={inputVariants} whileFocus="focus">
                  <Label htmlFor="message" className="text-base font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    disabled={status === "sending"}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="border-2 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                >
                  <Button
                    onClick={submit}
                    disabled={status === "sending" || status === "sent"}
                    className="w-full h-12 text-base font-semibold gap-2 shadow-lg"
                  >
                    {status === "sending" && (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    )}
                    {status === "sent" && (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                      </>
                    )}
                    {status === "error" && "Error - Please Try Again"}
                    {status === "idle" && (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>

                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border-2 border-green-500/20 text-center"
                  >
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Thank you! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}