const Hero2 = () => {
    const imageUrl = "/comp.svg";
    const text = "Enjoy Free Video Chat";
  
    return (
      <div className="flex flex-col items-center mt-12 justify-center">
        <img src={imageUrl} alt="Description" className="w-1/2 h-auto rounded-lg" />
        <p className="mt-8 text-center text-[3rem] font-medium font-serif">{text}</p>
      </div>
    );
  }
  

export default Hero2