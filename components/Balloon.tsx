import { cn } from "@/lib/utils";

type ArrowPosition = "bottom-left" | "bottom-center" | "bottom-right";

type BalloonProps = {
  children: React.ReactNode;
  arrowPosition: ArrowPosition;
  className?: string;
};

export const Balloon: React.FC<BalloonProps> = ({
  children,
  arrowPosition,
  className = "",
}) => {
  const getArrowClasses = () => {
    const baseArrow = "absolute -bottom-2.5 fill-white dark:fill-zinc-700";

    switch (arrowPosition) {
      case "bottom-left":
        return {
          arrow: `${baseArrow} right-2/5 scale-x-[-1]`,
        };
      case "bottom-right":
        return {
          arrow: `${baseArrow} left-2/5`,
        };
      default:
        return {
          arrow: `${baseArrow} left-1/2 transform -translate-x-1/2`,
        };
    }
  };

  const { arrow } = getArrowClasses();

  return (
    <div
      className={cn(
        "relative w-fit px-4 py-1 rounded-2xl bg-white dark:bg-zinc-700 text-foreground",
        className,
      )}
    >
      <svg
        className={arrow}
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H15L11 14L0 0Z" />
      </svg>
      {children}
    </div>
  );
};
