import { Balloon } from "@/components/Balloon";
import { Frame } from "@/components/Frame";
import Image from "next/image";

const IMG_URL = "/bisyojo_chan.png";
const IMG_SIZE = 360;

const mock = [
  '"Hello, world!"',
  '"This is a sample profile page."',
  '"Feel free to explore more!"',
  '"Have a great day!"',
  '"Stay safe and healthy!"',
  '"Keep learning and growing!"',
  '"Enjoy every moment!"',
  '"Believe in yourself!"',
  '"Keep pushing forward!"',
  '"You are amazing!You are amazing!You are amazing!"',
];

export default function Home() {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh">
      <Frame>
        <div className="flex flex-col relative w-full h-screen bg-main">
          <div className="flex flex-col-reverse gap-6 overflow-y-scroll px-6 pt-4 pb-[100dvw] md:pb-100 hide-scrollbar">
            {mock.map((text, index) => (
              <div
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                key={index}
              >
                <Balloon
                  arrowPosition={
                    index % 2 === 0 ? "bottom-right" : "bottom-left"
                  }
                  className="max-w-11/12"
                >
                  {text}
                </Balloon>
              </div>
            ))}
          </div>

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
