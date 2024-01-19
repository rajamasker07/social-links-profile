import Image from 'next/image';
import React from 'react';
import imgProfile from '../../public/assets/avatar-jessica.jpeg';
import Button from './button';

export default function Card() {
  return (
    <div className='flex h-fit w-[300px] flex-col items-center gap-2 rounded-md bg-neutral-800 p-6 text-center'>
      <Image
        src={imgProfile}
        alt='profile-img'
        className='rounded-full'
        width={60}
        height={60}
      />
      <hgroup>
        <h1 className="text-lg font-bold">Jesica Randall</h1>
        <h3 className='mt-1 text-sm font-semibold text-lime-500'>London, United Kingdom</h3>
      </hgroup>
      <p className='my-3 text-sm'> {'"Front-end debeloper and avaid reader."'} </p>
      <Button text={'Github'}/>
      <Button text={'Frontend Mentor'}/>
      <Button text={'LinkedIn'}/>
      <Button text={'Twitter'}/>
      <Button text={'Instagram'}/>
    </div>
  );
}
