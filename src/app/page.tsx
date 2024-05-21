import Image from "next/image";
import { InputWithButton } from "@/components/ui/inputwbutt";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-2xl text-center">
        <h1>----------- Tapestry -----------</h1>
        <div className="mt-[50px]">
        <InputWithButton />
        </div>
      </div>
    </main>
  );
}
