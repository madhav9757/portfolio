"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import PixelBlast from "@/components/PixelBlast";

export default function BackgroundEffect() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pixelColor = theme === "light" ? "#6366f1" : "#a855f7";

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <PixelBlast
        variant="square"
        pixelSize={5}
        color={pixelColor}
        patternScale={5}
        patternDensity={1}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={false}
        speed={0.5}
        edgeFade={0.25}
        transparent
        className={undefined}
        style={undefined}
      />
    </div>
  );
}
