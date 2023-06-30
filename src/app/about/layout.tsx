import { Foot } from "../components/foot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children} <Foot text="36" />
    </main>
  );
}
