import Image from "next/image";

const IMG_URL = "/bisyojo_chan.png";
const IMG_SIZE = 360;

/**
 * キャラクター画像を表示するコンポーネント
 * 画面下部に固定で配置される
 */
export const CharacterImage = () => {
  return (
    <Image
      className="absolute right-0 bottom-0 left-0 w-full h-auto pointer-events-none"
      src={IMG_URL}
      width={IMG_SIZE}
      height={IMG_SIZE}
      alt="美少女ちゃん"
    />
  );
};
