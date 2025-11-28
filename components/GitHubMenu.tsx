"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github as GitHubIcon } from "lucide-react";

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
}

export function GitHubMenu() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/madhav9757/repos?sort=updated&per_page=5"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API responded with ${res.status}`);
        }
        return res.json();
      })
      .then((data: any[]) => {
        const filtered = data
          .filter((r) => !r.fork) // optionally skip forks
          .map((r) => ({
            name: r.name,
            html_url: r.html_url,
            description: r.description,
          }));
        setRepos(filtered);
      })
      .catch((err) => {
        console.error("Failed to fetch GitHub repos:", err);
        setError("Could not load repos");
      });
  }, []);

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" aria-label="GitHub menu">
        <GitHubIcon size={18} />
      </Button>
      <div className="absolute right-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
        <div className="p-3 border-b border-border/60">
          <a
            href="https://github.com/madhav9757"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            <GitHubIcon size={20} />
            <span>madhav9757</span>
          </a>
        </div>

        <div className="p-2">
          {error && <p className="text-sm text-destructive">{error}</p>}

          {!repos && !error && (
            <p className="text-sm text-muted-foreground">Loading...</p>
          )}

          {repos && repos.length === 0 && !error && (
            <p className="text-sm text-muted-foreground">No public repos</p>
          )}

          {repos && repos.length > 0 && (
            <ul className="space-y-2">
              {repos.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-md hover:bg-secondary/50 dark:hover:bg-secondary/30"
                  >
                    <div className="font-medium text-sm">{repo.name}</div>
                    {repo.description && (
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {repo.description}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Separator className="my-2" />

        <div className="p-2 text-center">
          <a
            href="https://github.com/madhav9757"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:underline inline-flex items-center justify-center gap-1"
          >
            View full GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
