export const metadata = {
  title: 'Pepper Clone',
  description: 'Freestyle of Pepper',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
