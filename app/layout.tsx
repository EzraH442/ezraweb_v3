import Layout from "../components/Layout";
import "../styles/globals.css";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ezra',
  description: "Ezra's website"
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300" +
            "&family=Major+Mono+Display&" +
            "family=Open+Sans:wght@300&" +
            "family=Roboto&display=swap"
          }
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
