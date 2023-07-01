"use client";
import React, { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ClientOnly({ children }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return <>{children}</>;
}
