"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, GitFork, ExternalLink, Briefcase } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  topics?: string[];
  fork: boolean; // <-- Add this line
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/madhav9757/repos?sort=updated&per_page=50"
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count); // optional: sort by stars
        setRepos(filtered);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load repos from GitHub.");
      });
  }, []);

  if (error)
    return (
      <section
        id="projects"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p className="text-center text-red-500">{error}</p>
      </section>
    );

  if (!repos)
    return (
      <section
        id="projects"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p className="text-center text-muted-foreground">Loading projects...</p>
      </section>
    );

  return (
    <section
      id="projects"
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
          <Briefcase size={16} /> My GitHub Projects
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Explore My Repositories
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          All active public repositories from my GitHub account.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full flex flex-col border-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-lg font-bold line-clamp-2">
                  {repo.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {repo.description || "No description provided."}
                </p>

                {/* Tech stack badges (optional: show topics) */}
                <div className="flex flex-wrap gap-2">
                  {repo.topics &&
                    repo.topics.map((topic) => (
                      <Badge
                        key={topic}
                        variant="outline"
                        className="text-xs px-2 py-1 font-medium border-primary/40 text-foreground"
                      >
                        {topic}
                      </Badge>
                    ))}
                </div>

                {/* Git stats */}
                <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                  <Badge className="flex items-center gap-1 text-xs bg-black/10 text-foreground">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {repo.stargazers_count}
                  </Badge>
                  <Badge className="flex items-center gap-1 text-xs bg-black/10 text-foreground">
                    <GitFork className="w-3 h-3" />
                    {repo.forks_count}
                  </Badge>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    className="flex-1 font-semibold"
                    variant="default"
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
