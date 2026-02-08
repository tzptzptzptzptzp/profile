export const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="contents md:block overflow-hidden w-sm max-h-full">
      {children}
    </div>
  );
};
