import Image from "next/image"
import Spacer from "./spacer";

export const About = () => {
  return (
    <section id='about' className='content-section flex-col sm:mb-24'>
      <h2 className='m-12 text-4xl sm:text-5xl'>About the Artist</h2>
      <div className='flex flex-wrap justify-center gap-8 sm:gap-24'>
        <div className="max-w-lg">
          <Image height={400} width={400} alt='centerpiece' src="/bruce.png" className='rounded-full' />
        </div>
        <div className="max-w-lg flex flex-col justify-center">
          <p>
            Bruce Arlington is a watercolor artist who lives in the Historic Seaport of Newburyport Massachusetts. He attended Salem State College where he earned a Bachelor of Science Degree in business. While at college, Bruce also studied art, became a certified Scuba Diver, and eventually a Divemaster. His extensive diving experiences have proven beneficial in his artistic endeavors. 
          </p>
          <Spacer height={2} />
          <p>
            Another early experience of Bruce’s was traditional wooden boat building. He learned the craft at the historic <span className='underline'><a href="http://lowellsboatshop.com/" target="_blank">Lowell’s Boat Shop</a></span> in Amesbury, Massachusetts, the oldest operating Boat Shop in America. While building a Dory in an Art Museum, Bruce became inspired to learn to paint.  As the saying goes, the rest is history. The boat shop influence is evident in many of his work. 
          </p>
          <Spacer height={2} />
          <p>
            Bruce is a member of the Newburyport Art Association and has participated in watercolor workshops with Tony Couch, Charles Margeson, and other local artists. 
          </p>
          <Spacer height={2} />  
          <p>
            Most of his artwork is donated to support local charities.
          </p>
          <Spacer height={2} />
        </div>
      </div>
    </section>
  );
};