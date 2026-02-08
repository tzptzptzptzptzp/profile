import { CharacterImage } from "@/components/CharacterImage";
import { DialogueArea } from "@/components/DialogueArea";
import { Frame } from "@/components/Frame";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh">
      <div className="fixed md:top-4 md:right-4 bottom-3 md:bottom-auto left-3 md:left-auto z-20 h-8">
        <LanguageToggle />
      </div>
      <Frame>
        <div className="flex flex-col relative w-full h-screen bg-main">
          <DialogueArea />
          <CharacterImage />
        </div>
      </Frame>
    </main>
  );
}
