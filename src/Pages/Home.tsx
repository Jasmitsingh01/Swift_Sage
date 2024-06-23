import { useGSAP } from "@gsap/react";
import Button from "../lib/ui/button";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const ref = useRef();
  useGSAP(() => {
    const split = new SplitType("h1");
    gsap.fromTo(
      split.words,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
      }
    );

    gsap.fromTo(
      ".tag",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 8,
      }
    );
    gsap.fromTo(
      ".btn-2",
      {
        right: 0,
      },
      {
        right: 100,
        duration: 1,

        scrollTrigger: ".btn-2",
      }
    );
    gsap.fromTo(
      ".btn-1",
      {
        left: 0,
      },
      {
        left: 100,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: ".btn-1",
      }
    );
  });

  return (
    <section className=" min-h-screen border-2 flex bg-black  text-white  justify-center items-center  flex-col py-16">
      <header className=" flex  w-full  h-full   items-center flex-col  ">
        <h1 className=" relative z-20 font-bold text-center mb-20 text-6xl">
          Welcome to Swift Sage Solutions
        </h1>
        <h3 className=" text-3xl mb-10  font-semibold text-center   typing ">
          Boost Your Online Presence With Our Expertise
        </h3>
      </header>
      <div className=" my-auto mb-0 flex justify-center gap-20 w-full">
        <Button
          text="learn more "
          onclick={() => {}}
          className=" !rounded-full btn-1 absolute w-1/4"
        />
        <Button
          text="Get started "
          onclick={() => {}}
          className=" !rounded-full absolute  btn-2 w-1/4"
        />
      </div>
    </section>
  );
}

export default Home;
