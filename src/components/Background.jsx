export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-300/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob blob-delay-2"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-[120px] animate-blob blob-delay-4"></div>
    </div>
  );
}
