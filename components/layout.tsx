import NavBar from "./NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout-container">
      <NavBar />
      {children}
    </div>
  );
}
