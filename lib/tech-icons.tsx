import React from "react";
import { 
  SiGo, SiJavascript, SiTypescript, SiPython, 
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
  SiPostgresql, SiMongodb, SiRedis, SiDocker, SiGit, 
  SiNodedotjs, SiExpress, SiSocketdotio
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbPlugConnected } from "react-icons/tb";
import { Code2 } from "lucide-react";

export const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("react")) return <SiReact className="text-[#61DAFB]" size={14} />;
  if (t.includes("next")) return <SiNextdotjs className="text-white" size={14} />;
  if (t.includes("javascript") || t.includes("es6")) return <SiJavascript className="text-[#F7DF1E]" size={14} />;
  if (t.includes("typescript")) return <SiTypescript className="text-[#3178C6]" size={14} />;
  if (t.match(/\bgo\b/) || t.includes("golang") || t.includes("gin")) return <SiGo className="text-[#00ADD8]" size={14} />;
  if (t.includes("python")) return <SiPython className="text-[#3776AB]" size={14} />;
  if (t.includes("redux")) return <SiRedux className="text-[#764ABC]" size={14} />;
  if (t.includes("tailwind")) return <SiTailwindcss className="text-[#06B6D4]" size={14} />;
  if (t.includes("node")) return <SiNodedotjs className="text-[#339933]" size={14} />;
  if (t.includes("express")) return <SiExpress className="text-white" size={14} />;
  if (t.includes("postgres")) return <SiPostgresql className="text-[#336791]" size={14} />;
  if (t.includes("mongo")) return <SiMongodb className="text-[#47A248]" size={14} />;
  if (t.includes("redis")) return <SiRedis className="text-[#DC382D]" size={14} />;
  if (t.includes("aws") || t.includes("amazon")) return <FaAws className="text-[#FF9900]" size={14} />;
  if (t.includes("docker")) return <SiDocker className="text-[#2496ED]" size={14} />;
  if (t.includes("git")) return <SiGit className="text-[#F05032]" size={14} />;
  if (t.includes("socket.io") || t.includes("websocket")) return <SiSocketdotio className="text-white" size={14} />;
  if (t.includes("oauth") || t.includes("auth")) return <TbPlugConnected className="text-white" size={14} />;
  
  return <Code2 className="text-zinc-500" size={14} />;
};
