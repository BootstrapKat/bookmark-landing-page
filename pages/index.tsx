// Actual page content, nested within _app.tsx and _document.tsx
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="margin">
      <Hero />
    </div>
  );
}
