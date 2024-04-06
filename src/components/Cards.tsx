import { Card } from "flowbite-react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const cardData = [
    {
      title: 'Noteworthy technology acquisitions 2021',
      content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      imageSrc: '/main1.jpeg',
    },
    {
      title: 'Noteworthy technology acquisitions 2021',
      content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      imageSrc: '/pic.png',
    },
    {
        title: 'Noteworthy technology acquisitions 2021',
        content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        imageSrc: '/pic.png',
      },
    // Add more card objects here
  ];

const Cards = () => {
  return (
    <Fade>
       <div className="flex">
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