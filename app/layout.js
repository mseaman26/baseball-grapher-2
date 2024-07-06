
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "Mike's Baseball Grapher",
  description: "A visual representation of the current MLB season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
        rel="icon"
        href="/images/public/images/baseball_icon.webp"
        type="image/<generated>"
        sizes="<generated>"
      />
      </Head>
      
        <body className={inter.className}>{children}</body>
    </html>
  );
}
