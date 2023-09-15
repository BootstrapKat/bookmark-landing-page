// Actual page content, nested within _app.tsx and _document.tsx

export default function Home() {
  return (
    <div className="margin">
      <header>
        <h1>Welcome to My Next.js App</h1>
      </header>

      <section>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li>Fast Loading</li>
          <li>SEO Optimized</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <address>
          <strong>Office:</strong> 123 Fake St, Some City, Country
          <br />
          <strong>Phone:</strong> (123) 456-7890
          <br />
          <strong>Email:</strong> info@example.com
        </address>
      </section>

      <footer>
        <p>Copyright © 2023. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
