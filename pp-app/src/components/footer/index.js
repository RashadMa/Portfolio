import { Link } from 'react-router-dom';
import { Bio } from '../../data/constants';

function Footer() {
  return (
    <footer className='
    // md:sticky md:top-0
     black-bg min-h-min'
      id='footer'>
      <div className='container sm:px-0 px-4 py-10 mx-auto'>
        <h1 className="bb pb-20 2xl:text-[120px] xl:text-8xl lg:text-7xl md:text-5xl text-4xl font-normal tracking-tighter white-tx">
          Contact
        </h1>
        <div className='flex justify-between'>
          <div className='basis-1/2'>
            <div className='bb md:p-5 p-2  flex md:flex-row flex-col justify-between'>
              <div className='white-tx md:pb-12 pb-6 md:text-base text-xs'>phone</div>
              <div className='white-tx pb-12 md:text-base text-xs'>{Bio.phone}</div>
            </div>
            <div className='bb md:p-5 p-2  flex md:flex-row flex-col justify-between'>
              <div className='white-tx md:pb-12 pb-6 md:text-base text-xs'>email</div>
              <div className='white-tx pb-12 md:text-base text-xs'>{Bio.email}</div>
            </div>
          </div>
          <div className='basis-1/2 bl'>
            <div className='bb md:p-5 p-2  flex md:flex-row flex-col justify-between'>
              <div className='white-tx pb-6 md:text-base text-xs'>social</div>
              <div className='white-tx pb-6'>
                <div>
                  <Link className='hover:underline md:text-base text-xs' to={Bio.linkedin} target='new'>
                    linkedin
                  </Link>
                </div>
                <div>
                  <Link className='hover:underline md:text-base text-xs' to={Bio.github} target='new'>
                    github
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <h1 className='white-tx text-2xl'>
            <MailOutlineIcon className='mr-3' />
            {Bio.email}
          </h1> */}
      </div>
    </footer>
  );
}

export default Footer;