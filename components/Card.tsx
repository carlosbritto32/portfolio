import Image from "next/image";

interface props {
  title: string;
  description: string;
  URL: string;
  image: string;
  github: string;
}

const Card = ({ title, description, URL, image, github }: props) => {
  return (
    <div className="text-sm text-justify bg-gray-800  w-[300px] h-[500px]  pb-3  rounded-xl shadow-lg  text-white border-2 font-medium overflow-hidden mb-6 md:flex md:justify-between md:w-full md:h-auto md:p-0 md:pr-3 lg:w-[900px]">
      <a href={URL}>
        <Image
          className=" inset-y-0 inset-x-0"
          src={`${image}`}
          width={300}
          height={9}
          alt="card-img"
        />
      </a>
      <div className="p-3 md:w-[500px]">
        <h2 className="h-8 text-xl inset-x-0 top-0 text-center font-bold ">
          {title}
        </h2>
        <p className="px-2 text-gray-400">{description}</p>
        <div className="flex items-end justify-evenly text-stone-100 mt-4">
          <a
            href={github}
            className="p-2 bg-blue-700 hover:bg-blue-800 text-center rounded-xl w-24"
          >
            Code
          </a>
          <a
            href={URL}
            className="p-2 bg-green-600 hover:bg-green-800 text-center rounded-xl w-24"
          >
            Web Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
