import React from 'react';

interface buttonAttr {
  text: string
}

export default function Button({text}: buttonAttr) {
  return (
    <button className='h-10 w-full rounded-md bg-neutral-600 px-3 py-2 font-bold'>
      { text }
    </button>
  );
}
