export const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="contents md:block overflow-hidden w-sm max-h-full shadow-[0_0_500px_rgba(255,255,255,0.1)]">
      {children}
    </div>
  );
};
