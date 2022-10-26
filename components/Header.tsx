import Image from "next/image";

const Header = () => {
  return (
    <header className="p-2 bg-cyan-900 shadow-xl  text-stone-200 flex flex-col items-center">
      <h2 className="font-bold text-xl my-2">ABOUT ME</h2>
      <Image
        className="rounded-full shadow-xl mb-4"
        src="/img/CarlosB.png"
        width={120}
        height={100}
        alt="Profile-picture"
        priority
      />

      <p className="text-sm text-justify mx-3 font-medium">
        Hi! I'm Carlos Britto and I'm an Industrial Engineer who has focus his
        career on Frontend development, the technologies that I used are
        NextsJs, ReactJs, JavaScript, TailwindCss, Html and CSS. <br /> I
        consider myself as a problem solver thank to my engineer background and
        good at teamwork with GitHub using GitFlow and Fork Flow!
      </p>
    </header>
  );
};

export default Header;
