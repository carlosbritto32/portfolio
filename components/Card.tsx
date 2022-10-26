import Image from "next/image";

const Card = () => {
  return (
    <div className=" w-full p-3 bg-stone-50 rounded-xl shadow-lg flex flex-col  justify-center text-cyan-900 font-medium">
      <h2 className="text-center ">Project Name</h2>
      <div className="my-4 flex items-center justify-around">
        <Image
          src="/img/CarlosB.png"
          width={50}
          height={50}
          alt="project-picture"
        />
        <p>Description</p>
      </div>
      <a href="" className="text-center">
        Go to Web site!
      </a>
    </div>
  );
};

export default Card;
