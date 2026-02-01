import { Balloon } from "@/components/Balloon";
import { Frame } from "@/components/Frame";
import Image from "next/image";

const IMG_URL = "https://bsj-api.vercel.app/api/bsj/default?size=250";
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
        <div className="w-full bg-main h-screen flex flex-col">
          <div className="flex-1 flex flex-col-reverse gap-6 overflow-y-scroll px-6 py-4">
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
            className="relative bottom-0 w-full h-auto"
            src={IMG_URL}
            width={IMG_SIZE}
            height={IMG_SIZE}
            alt=""
          />
        </div>
      </Frame>
    </main>
  );
}
