import { Button } from 'flowbite-react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <Fade>
      <div className="container mx-auto px-6 py-12 flex items-center justify-between">     
      <div className="w-1/2">
        <Slide>
        <h1 className="text-5xl font-bold text-[#18217A] font-serif">
          Random Video Calling
        </h1>
        </Slide>
        
        <Fade>
        <p className="mt-6 text-[2.5rem] font-thin text-[#18217A]">
          Connect with strangers and make new friends from around the world.
        </p>
        </Fade>
        
        <div className="mt-8">
            <Link to="/call">
            <Button className="shadow-lg" size="xl" outline color="blue" pill onClick={() => {}}>
            Start a Call
          </Button>
            </Link>
        </div>
      </div>
      
      <div className="w-1/3 rounded-lg">
        <img
          src="/pic.png"
          alt="Video Call"
          className="rounded-[2rem]"
        />
      </div>
    </div>

      </Fade>
    
  </div>
);
}


export default Hero