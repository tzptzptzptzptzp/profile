import { DialogueArea } from "@/components/DialogueArea";
import { Frame } from "@/components/Frame";
import Image from "next/image";

const IMG_URL = "/bisyojo_chan.png";
const IMG_SIZE = 360;

export default function Home() {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh">
      <Frame>
        <div className="flex flex-col relative w-full h-screen bg-main">
          <DialogueArea />

          <Image
            className="absolute right-0 bottom-0 left-0 w-full h-auto pointer-events-none"
            src={IMG_URL}
            width={IMG_SIZE}
            height={IMG_SIZE}
            alt="美少女ちゃん"
          />
        </div>
      </Frame>
    </main>
  );
}
