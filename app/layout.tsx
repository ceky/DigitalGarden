import MainNavigation from "@/components/main-navigation/MainNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>My app</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
