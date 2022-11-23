import Link from "next/link";

export default function Home() {
  return (
    <div>
      <H1>FIFA 2022 World Cup</H1>
      {/* <H1 hasHover>FIFA 2022 World Cup</H1>
      <h1>FIFA 2022 World Cup</h1> */}
      <Btn>Standings</Btn>
    </div>
  );
}

const H1 = ({ hasHover, children }: any) => (
  <h1 className={`text-4xl ${hasHover && `hover:text-3xl`}`}>{children}</h1>
);
const Btn = ({ children }: any) => (
  <Link href="/standings">
    <button className="px-3 py-2 font-bold text-white uppercase bg-red-700 rounded-md hover:bg-red-600">
      {children}
    </button>
  </Link>
);
