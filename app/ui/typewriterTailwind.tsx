'use client';

import { useEffect, useState } from 'react';

interface TypewriterTailwindProps {
  onComplete: () => void;
}

export function TypewriterTailwind({ onComplete }: TypewriterTailwindProps) {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = 'Paulo Henrique, Desenvolvedor front-end!';

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if(i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect)
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, [onComplete]);

  return (
      <div className='relative flex items-center flex-wrap'>
        <span className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          {text}
          {!isComplete && (
          <span className='inline-block w-1 h-6 sm:h-8 bg-gray-800 animate-[blink_1s_infinite] ml-1 mt-1'></span>
          )}
        </span>
      </div>
  )
}