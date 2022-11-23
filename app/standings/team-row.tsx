import Image from 'next/image'
// import { Team } from './standing'

export default function TeamRow({ team }: any) {
  /* 
  "mp"  =>  matches played
  "w"   =>  matches won
  "l"   =>  matches lost
  "pts" =>  point / score
  "gf"  =>  goals for
  "ga"  =>  goals against
  "gd"  =>  goals difference
  "d"   =>  drawn
  */
  const { name_en, mp, w, l, d, pts, flag } = team

  // console.log("flag", flag);
  

  return (
    <div className='grid grid-cols-7 text-xs'>
      <div className='flex items-center col-span-2 my-2 space-x-4 text-sm min-w-max'>
        <Image src={flag} width={40} height={40} alt={name_en} />
        <p>{name_en}</p>
      </div>
      <p className='m-auto'>{mp}</p>
      <p className='m-auto'>{w}</p>
      <p className='m-auto'>{l}</p>
      <p className='m-auto'>{d}</p>
      <p className='m-auto'>{pts}</p>
    </div>
  )
}