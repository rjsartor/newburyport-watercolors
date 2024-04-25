import Image from "next/image"
import { PAINTINGS, baseEtsyUrl } from "./data/paintings"
import Spacer from "./spacer";

interface PaintingCardProps {
  painting: {
    path: string;
    name: string;
    details: string;
    etsyUrl: string;
    price?: number;
  };
}

const PaintingCard: React.FC<PaintingCardProps> = ({ painting }): JSX.Element => {
  const { path, name, etsyUrl, details, price } = painting
  return (
    <div key={name} className="flex flex-col m-auto justify-center items-center text-center cursor-pointer" title="Link to Etsy">
      <a href={etsyUrl || baseEtsyUrl } target="_blank">
        <Image height={500} width={500} alt={name} src={path} />
        <Spacer height={1} />
        <p className="text-xl"><i>{name}</i> - ${price}</p>
        <p>{details}</p>
      </a>
      <Spacer height={3} />
    </div>
  );
};

export const Works = () => {
  return (
    <section id='artworks' className='content-section flex-col sm:mb-24'>
      <h2 className='m-12 text-5xl'>Works</h2>
      <div className='flex justify-center flex-wrap w-9/10 gap-10 mx-12'>
        {PAINTINGS.map((p, i) => <PaintingCard key={`${p.name}-${i}`} painting={p} /> )}
      </div>
      <Spacer height={2} />
    </section>
  )
}