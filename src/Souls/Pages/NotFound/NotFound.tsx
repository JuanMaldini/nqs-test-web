import { useMemo } from "react";
import "./NotFound.css";

const ERROR_IMAGES = [
  "https://ih1.redbubble.net/image.2515682869.7692/raf,360x360,075,t,fafafa:ca443f4786.jpg",
  "https://media.tenor.com/5mHcoecT-QUAAAAM/crying.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NXIjct6PTDlH0PnGPy0ND0NtXa2cP3PIEqcSreN1VNqCQ8eL65d27S3UycOVXWN25Vk&usqp=CAU",
  "https://i.imgflip.com/br1q2.jpg",
  "https://media.tenor.com/OJbN3TbeEy0AAAAe/but-i%E2%80%99m-not-original.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvSxolw6_yyWJV8G2XrRLpUZvD67BFB9_f2naPKBPJLCtwNMgnkcJbT7BPW7O3a_MGyY&usqp=CAU",
];

const NotFound = () => {
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * ERROR_IMAGES.length);
    return ERROR_IMAGES[randomIndex];
  }, []);

  return (
    <section className="not-found">
      <p className="not-found__text">Error de página que no se encontró</p>
      <div className="not-found__image">
        <img src={randomImage} alt="Error" />
      </div>
    </section>
  );
};

export default NotFound;
