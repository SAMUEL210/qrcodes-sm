import Image from "next/image";
import QrCodesGenerator from "./components/QrCodesGenerator";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] h-full flex justify-center items-center">

      <Image
        src="/glass.png"
        width={1600}
        height={1200}
        alt="glass image"
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none" />
      <h1>QR CODES GENERATOR BY SAMUEL IBOU MARONE</h1>
    </div>
  );
}