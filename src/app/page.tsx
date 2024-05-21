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
      {/* <div className="grid grid-cols-3 gap-4 items-start justify-start">
      <IdeaCard title="Title 1" description="Description 1" content="Content 1" badge="Badge 1" footer="Footer 1" />
      <IdeaCard title="Title 2" description="Description 2" content="Content 2" badge="Badge 2" footer="Footer 2" />
      </div> */}
    </main>
  );
}
