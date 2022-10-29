import Image from "next/image";
import img from "../public/images/1.jpg";

const Images = () => {
  return (
    <div>
      <h2>Images</h2>

      <Image
        src={img}
        alt="placeholder image"
        placeholder="blur"
        width="400"
        height="280"
      />

      <div>
        {["1", "2", "3", "4"].map((image, index) => (
          <div key={index}>
            <Image
              src={`/images/${image}.jpg`}
              alt={`Image ${image}`}
              width="400"
              height="280"
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
