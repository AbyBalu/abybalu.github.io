import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-bg flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-border border-t-brand animate-spin" />
    </div>
  );
}
