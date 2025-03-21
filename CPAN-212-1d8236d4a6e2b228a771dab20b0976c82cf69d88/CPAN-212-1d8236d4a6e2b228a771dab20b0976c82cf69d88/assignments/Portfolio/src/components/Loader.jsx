import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center h-screen w-full flex-col gap-4'>
        <div className='loader'>
          <div className='flex gap-2 text-2xl font-bold'>
            <span className='bounce text-blue-600' style={{ animationDelay: '0.1s' }}>M</span>
            <span className='bounce text-blue-400' style={{ animationDelay: '0.3s' }}>J</span>
          </div>
        </div>
        <p className='text-sm text-slate-500 animate-pulse'>Loading your awesome portfolio...</p>
      </div>
    </Html>
  )
}

export default Loader