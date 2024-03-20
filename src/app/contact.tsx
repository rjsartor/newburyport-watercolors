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
    <div id='contact' className='content-section flex-col h-min-1/2'>
      <h2 className='m-12 text-5xl'>Contact</h2>
      <div className='flex flex-wrap justify-center gap-8 sm:gap-24'>
        <div className="max-w-lg flex gap-4 items-end sm:flex-col">
          <IconLink Icon={FaInstagram} label="Instagram" url="https://www.instagram.com" />
          <IconLink Icon={FaEtsy} label="Etsy" url="https://www.etsy.com" />
        </div>
        <div className="max-w-lg flex flex-col justify-center">
          <h2 className='text-2xl'>Thanks for visiting my page!</h2>
          <Spacer height={2} />
          <p>
            For any inqueries, questions, or comments reach out to me at 
              <span>{' '}
                <a href="mailto:brucewarlington@gmail.com?subject=Artwork Inquiry&body=Hi Bruce, " target="_blank" rel="noopener noreferrer" aria-label='email'>brucewarlington@gmail.com.</a>
              </span>
          </p>
          <Spacer height={2} />
          <p>anything else you want to say</p>
        </div>
      </div>
      <Spacer height={32} />

    </div>
  )
}