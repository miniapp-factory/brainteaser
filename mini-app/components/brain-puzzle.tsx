'use client';

import { useEffect, useState } from "react";

export default function BrainPuzzle() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnswer(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <p className="text-xl">What has keys but can&apos;t open locks?</p>
      {showAnswer && (
        <p className="text-lg font-semibold">A piano.</p>
      )}
    </div>
  );
}
