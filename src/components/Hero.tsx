import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
    <div className="container mx-auto px-6 py-20 flex items-center justify-between">     
      <div className="w-1/2">
        <h1 className="text-5xl font-bold text-[#18217A]">
          Random Video Calling
        </h1>
        <p className="mt-6 text-[2.5rem] font-thin text-[#18217A]">
          Connect with strangers and make new friends from around the world.
        </p>
        <div className="mt-8">
            <Link to="/call">
            <Button size="xl" outline color="blue" pill onClick={() => {}}>
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
  </div>
);
}


export default Hero