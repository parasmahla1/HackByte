import { Card } from "flowbite-react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const cardData = [
    {
      title: 'AI-Generated Faces',
      content: 'Anonimo utilizes state-of-the-art artificial intelligence technology to generate lifelike faces that users can choose to superimpose over their own during video calls. This innovative feature not only ensures anonymity but also adds a layer of fun and creativity to conversations.',
      imageSrc: 'https://marzbandds.com/wp-content/uploads/2019/12/Balance-400x356.jpg',
    },
    {
      title: 'Privacy Protection',
      content: 'Anonimo is committed to safeguarding user privacy by encrypting all communications end-to-end, preventing unauthorized access to sensitive information. User data is never stored on the platform, further enhancing privacy protection and ensuring user confidentiality.',
      imageSrc: 'https://cdn.gencraft.com/prod/user/3b6dbfdd-9214-4cb4-a6d9-d9fc95346eb8/f81190cb-b80c-4900-89ae-3bb89d8d49ae/image/image1_0.jpg?Expires=1712519232&Signature=KHBXUR4Knn0eap16SRjsGORkKGqySj6ZJSNxWKUj964HGnru-4cZpVk4CB01W8dhypBKZ5FdUGHIhgHh4G69fQERHg8DFuOSf7wPw2Hitpk38fX-P2MIPRMp79EexBMkc0znIcnskfmPgWtVrCW2uoaTWtpfvI5OcwpO2n-7qO0LaS3Tb06jn~tsigA2BTgNT0RJJb4aoc5oKoma9Ml2fLk2JyV3xBOLrQvSCbdvwc1AcuciR7qGvffk3RJrOPCGfYIC~uGOnyyulSeuXNK3LTtE5PZBCi99MeGaLyjENf206eToQroNDB6wl~Pc2XWafhNiFbkv3-X9SLXZs49zxQ__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    },
    {
        title: 'Enhanced User Experience',
        content: 'Anonimo offers an immersive and personalized user experience, empowering users to express themselves freely during video calls. With intuitive interface controls and a wide array of interactive features, users can engage with others in a seamless and enjoyable manner.',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8JHJOGdbEnyzOIdUgdBxwrh2svPoLFme78GJWuU_-7ecvKT61wUpyhA3iBQpeZqZjII&usqp=CAU',
      },
    // Add more card objects here
  ];

const Cards = () => {
  return (
    <Fade>
       <div className="flex" >
      {cardData.map((card, index) => (
        <Card
          key={index}
          className={`max-w-sm ${index > 0 ? 'ml-20' : 'ml-64'}`}
          renderImage={() => <img width={500} height={500} className="rounded-lg" src={card.imageSrc} alt="Card image" />}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link to={`/some-path/${index}`}>{card.title}</Link>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {card.content}
          </p>
        </Card>
      ))}
    </div>
    </Fade>   
  );
}
export default Cards