import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    setOpenModal(false);
    navigate("/call");
  };

  return (
    <div>
      <Fade>
        <div className="container mx-auto px-6 py-32 flex items-center justify-between mb-12">
          <div className="w-1/2">
            <Slide>
              <h1 className="text-5xl font-bold text-[#18217A] font-serif">
                Random Video Calling
              </h1>
            </Slide>

            <Fade>
              <p className="mt-6 text-[2.5rem] font-thin text-[#18217A]">
                Connect with strangers and make new friends from around the
                world.
              </p>
            </Fade>

            <div className="mt-8">
              <Button
                className="shadow-lg"
                size="xl"
                outline
                color="blue"
                pill
                onClick={() => setOpenModal(true)}
              >
                Start a Call
              </Button>
              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Welcome to Anonimo, a random video chat web application that connects users from around the world for real-time video conversations. By using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    You must be at least 18 years of age to use Our App. You agree to use Anonimo in a manner consistent with any and all applicable laws and regulations. You are responsible for your interactions with other users. We reserve the right, but have no obligation, to monitor disputes between you and other users.
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button color="gray" onClick={handleAccept}>I accept</Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* <Link to="/call">
            <Button className="shadow-lg" size="xl" outline color="blue" pill onClick={() => {}}>
            Start a Call
          </Button>
            </Link> */}
            </div>
          </div>

          <div className="w-1/3 rounded-lg">
            <img src="/pic.png" alt="Video Call" className="rounded-[2rem]" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
