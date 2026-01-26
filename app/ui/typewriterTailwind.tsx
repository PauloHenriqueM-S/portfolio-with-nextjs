'use client';

import { useEffect, useState } from 'react';

export function TypewriterTailwind(){
  const [text, setText] = useState('');
  const fullText = 'Paulo Henrique, Desenvolvedor front-end!';

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if(i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect)
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className='relative'>
      <span className='text-3xl font-bold'>{text}</span>
      <span className='absolute right-0 top-0 w-1 h-full bg-gray-800 animate-[blink_1s_infinite]'></span>

    </div>
  )
}