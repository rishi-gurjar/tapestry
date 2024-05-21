import Image from "next/image";
import { InputWithButton } from "@/components/ui/inputwbutt";
import { IdeaCard } from "@/components/ui/ideaCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="text-2xl">
        <h1>Tapestry</h1>
        <div className="mt-[25px]">
          <InputWithButton />
        </div>
      </div>
    </main>
  );
}
