import { CharacterImage } from "@/components/CharacterImage";
import { DialogueArea } from "@/components/DialogueArea";
import { Frame } from "@/components/Frame";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh">
      <Frame>
        <div className="flex flex-col relative w-full h-screen bg-main">
          <DialogueArea />
          <CharacterImage />
        </div>
      </Frame>
    </main>
  );
}
