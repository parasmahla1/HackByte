import { Fade, Slide } from "react-awesome-reveal";
import Header from "../components/Header";

const About = () => {
    return (
        <div> 
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">
           
            <Slide>
              <h1 className="text-5xl font-bold text-[#18217A] font-serif text-center mb-5">
                About us
              </h1>
            </Slide>
            <div className="mt-4 w-[60%] text-center">
                Anonimo is a cutting-edge web-based platform that revolutionizes the way individuals engage in video calls by prioritizing user privacy and security. With Anonimo, users can seamlessly connect with others while enjoying the peace of mind that comes with anonymity.

                Key Features:
                <br />
                AI-Generated Faces: Anonimo utilizes state-of-the-art artificial intelligence technology to generate lifelike faces that users can choose to superimpose over their own during video calls. This innovative feature not only ensures anonymity but also adds a layer of fun and creativity to conversations.
                <br/>
                Customization Options: Users have the flexibility to customize their AI-generated faces to reflect their preferences and personality. From choosing different facial features to adjusting expressions, users can tailor their digital avatars to suit their individual style.
                <br />
                Secure Platform: Anonimo prioritizes security, employing robust security measures to prevent unauthorized access and data breaches. With advanced encryption protocols and regular security updates, users can trust Anonimo to keep their conversations secure.
                <br />
                User-Friendly Interface: Anonimo features an intuitive interface that makes it easy for users to navigate the platform and initiate video calls effortlessly. Whether accessing Anonimo via web browsers or mobile devices, users can enjoy a seamless experience every time.
                <br />
            </div>
        </div></div>
    );
};

export default About;
