import Image from "next/image";

const Header = () => {
  return (
    <header className="p-2 bg-gray-800 shadow-xl text-center md:flex md:justify-between md:items-center md:px-24 md:py-5">
      <Image
        className="rounded-3xl shadow-xl m-auto md:m-0 md:w-[180px]"
        src="/img/CarlosB.png"
        width={120}
        height={100}
        alt="Profile-picture"
        priority
      />

      <div className="md:w-[500px]">
        <h2 className="font-bold text-xl my-2 text-white">ABOUT ME</h2>
        <p className="text-sm text-justify mx-3 font-medium text-gray-300">
          Hi! I'm Carlos Britto and I'm an Industrial Engineer who has focus his
          career on Frontend development, the technologies that I used are
          NextsJs, ReactJs, JavaScript, TailwindCss, Html and CSS. <br /> I
          consider myself as a problem solver thank to my engineer background
          and good at teamwork with GitHub using GitFlow and Fork Flow!
        </p>
      </div>
    </header>
  );
};

export default Header;
