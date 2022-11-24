import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Image
        src="/assets/2022_FIFA_World_Cup.svg"
        alt="FIFA WC 2022"
        height={200}
        width={400}
      />
      {/* <H1>FIFA 2022 World Cup</H1> */}
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
