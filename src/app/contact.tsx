import { FaInstagram, FaEtsy } from 'react-icons/fa';
import Spacer from "./spacer";

const IconLink = (props: any) => {
  const { Icon, url, label } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className='social-link-hover'>
      <Icon size={24} />
    </a>
  );
}

export const Contact = () => {
  return (
    <section id='contact' className='content-section flex-col mb-24 sm:mb-48'>
      <h2 className='m-12 text-5xl'>Contact</h2>
      {/* <div className='flex flex-wrap justify-center gap-8 sm:gap-24'> */}
        {/* <div className="max-w-lg flex gap-4 items-end sm:flex-col">
          <IconLink Icon={FaInstagram} label="Instagram" url="https://www.instagram.com" />
          <IconLink Icon={FaEtsy} label="Etsy" url="https://www.etsy.com" />
        </div> */}
        <div className="max-w-xlg flex flex-col justify-center">
          <h2 className='text-2xl'>Thanks for visiting my page!</h2>
          <Spacer height={3} />
          <p>
            For any inqueries or questions, email me at <b className="underline">{' '}<a href="mailto:brucewarlington@gmail.com?subject=Artwork Inquiry&body=Hi Bruce, " target="_blank" rel="noopener noreferrer" aria-label='email'>brucewarlington@gmail.com.</a></b>
          </p>
          <Spacer height={2} />
          <p>To purchase a piece online, click on the painting above or <b className="underline"><a href="https://www.etsy.com/shop/NBPTWatercolors" target="_blank">visit the shop</a></b>.</p>
        </div>
      {/* </div> */}
    </section>
  )
}