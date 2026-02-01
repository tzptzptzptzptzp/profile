export const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="contents md:block overflow-hidden w-sm max-h-full rounded-2xl"
      style={{
        boxShadow:
          "2px 2px 5px 3px rgba(0, 0, 0, 0.05), 4px 4px 25px 5px rgba(0, 0, 50, 0.15)",
      }}
    >
      {children}
    </div>
  );
};
