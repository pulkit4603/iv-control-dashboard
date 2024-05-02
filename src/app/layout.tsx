export const metadata = {
  title: 'IV-Dashboard',
  description: 'IV-Dashboard-login-page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
