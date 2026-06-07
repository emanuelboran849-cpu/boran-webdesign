export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute left-1/2 top-[-15rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[120px]" />
      <div className="absolute right-[-10rem] top-[20rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-[120px]" />
    </div>
  );
}