import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "All Projects - Your Name",
  description: "Complete project archive showcasing my work and experience.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
} 