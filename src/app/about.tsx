import Image from "next/image"

export const About = () => {
  return (
    <div id='about' className='content-section flex-col'>
      <h2 className='m-12 text-4xl'>About the Artist</h2>
      <div className='flex flex-wrap justify-center gap-24'>
        <div className="max-w-lg">
          <Image height={500} width={500} alt='centerpiece' src="/artist-placeholder.png" className='rounded-full' layout="responsive" />
        </div>
        <div className="max-w-lg flex flex-col justify-center">
          <p>
            Info about you or the art goes here...
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};