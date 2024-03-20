import Image from "next/image"
import { PAINTINGS } from "./data/paintings"
import Spacer from "./spacer";

interface PaintingCardProps {
  src: string;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ src }): JSX.Element => {
  return (
    <div key={src} className="flex flex-col justify-center items-center cursor-pointer" title="Link to Etsy">
      <Image height={300} width={300} alt="centerpiece" src={src} />
      <span className="mt-4"><i>Title and info?</i></span>
    </div>
  );
};

export const Works = () => {
  return (
    <div id='artworks' className='content-section flex-col'>
      <h2 className='m-12 text-5xl'>Works</h2>
      <div className='flex justify-center flex-wrap w-9/10 gap-10 mx-12'>
        {PAINTINGS.map(src => <PaintingCard key={src} src={src} /> )}
      </div>
      <Spacer height={2} />
    </div>
  )
}