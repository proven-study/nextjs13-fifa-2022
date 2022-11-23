import Link from "next/link";
import { DateTime } from "luxon";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="container mx-auto">
        <Nav>
          <Link href="/" className="text-3xl font-black text-red-600">
            FIFA WC 2022
          </Link>
          <p className="my-auto text-sm font-semibold">
            {/* {DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)} */}
            {DateTime.now().toLocaleString(DateTime.DATETIME_MED)}
          </p>
        </Nav>
        {children}
      </body>
    </html>
  );
}

const Nav = ({ children }: any) => {
  return (
    <h1 className={`py-3 border-b-2`}>
      <div className="flex items-center justify-between">{children}</div>
    </h1>
  );
};
