export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Simple elegant CSS spinner */}
        <div className="w-8 h-8 border-[1px] border-gray-200 border-t-gray-500 rounded-full animate-spin"></div>
        <p className="font-sans font-light tracking-[0.2em] text-xs text-gray-400 uppercase">
          Laden...
        </p>
      </div>
    </div>
  );
}
