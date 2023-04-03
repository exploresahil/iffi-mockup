import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";

export default function Home() {
  useEffect(() => {
    const logos = document.getElementsByClassName("logos");
    const heroText = document.getElementsByClassName("heroContent");
    const imageOne = document.getElementsByClassName("imageOne");
    const imageTwo = document.getElementsByClassName("imageTwo");
    const imageThree = document.getElementsByClassName("imageThree");
    const imagesContainer = document.getElementsByClassName("imagesContainer");
    const welcomeText = document.getElementsByClassName("welcomeText");
    const highlightsSec = document.getElementsByClassName("highlightsSec");
    const videosContainer = document.getElementsByClassName("videosContainer");
    const videos = document.getElementsByClassName("videos");
    const oTape = document.getElementsByClassName("o-tape");

    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline();

    tl.fromTo(
      oTape,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: highlightsSec,
          //markers: true,
          scrub: 1,
          start: "top 65%",
          end: "top 65%",
        },
      }
    );
    tl.fromTo(
      oTape,
      {
        y: 0,
      },
      {
        y: 500,

        scrollTrigger: {
          trigger: highlightsSec,
          //markers: true,
          scrub: 1,
          start: "top 65%",
          end: "bottom top",
        },
      }
    );

    gsap.fromTo(
      videos,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: videosContainer,
          //markers: true,
          scrub: 0.2,
          start: "top bottom",
          end: "center bottom",
        },
      }
    );

    gsap.fromTo(
      logos,
      {
        y: 20,
        transform: "rotateX(90deg)",
      },
      {
        y: 0,
        delay: 2.5,
        stagger: 0.1,
        transform: "rotateX(0deg)",
      }
    );

    gsap.fromTo(
      heroText,
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2.8,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      imageOne,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 2.5,
      }
    );

    gsap.fromTo(
      imageTwo,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 2.6,
      }
    );

    gsap.fromTo(
      imageThree,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 2.7,
      }
    );

    gsap.fromTo(
      imageOne,
      {
        width: "500px",
        height: "500px",
        borderRadius: "50px",
        y: 0,
        padding: 0,
        margin: 0,
      },
      {
        ease: "none",
        width: "100vw",
        height: "180vh",
        borderRadius: 0,
        y: -220,
        padding: 0,
        margin: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: imagesContainer,
          //markers: "true",
          scrub: 0.1,
          start: "top 80px",
          end: "bottom bottom",
        },
        transformOrigin: "center center",
      }
    );

    gsap.fromTo(
      welcomeText,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.in",

        scrollTrigger: {
          trigger: imagesContainer,
          //markers: "true",
          start: "70% 70%",
          scrub: 1,
          end: "80% 80%",
        },
      }
    );

    gsap.fromTo(
      highlightsSec,
      {
        y: 0,
      },
      {
        y: -400,
        scrollTrigger: {
          trigger: highlightsSec,
          //markers: "true",
          scrub: 0.2,
          start: "top bottom",
          end: "80% 80%",
        },
      }
    );

    gsap.fromTo(
      highlightsSec,
      {
        borderRadius: "40% 40% 0 0",
      },
      {
        borderRadius: "0 0 0 0",
        scrollTrigger: {
          trigger: highlightsSec,
          //markers: "true",
          scrub: 0.2,
          start: "top 550px",
          end: "20% 550px",
        },
      }
    );
  }, []);

  return (
    <section className="mt-[80px]">
      <div className="w-[100vw] h-[180px] my-[100px] lg:my-0 px-[8vw] flex flex-wrap gap-6 justify-center lg:justify-between items-center text-xl text-[#E54613] font-iFontB">
        <h1 className="logos">IFFI</h1>
        <h1 className="logos">FIAPF</h1>
        <h1 className="logos">Ministry of I&B</h1>
        <h1 className="logos">NFDC</h1>
        <h1 className="logos">ESG</h1>
      </div>
      <div className="w-[100vw] flex flex-col justify-center items-center">
        <h2 className="heroContent text-center leading-[1] font-iFontSerif text-[3.5rem]">
          Film Bazaar 2023
        </h2>
        <p className="heroContent max-w-[800px] px-[8vw] font-semibold">
          ( NOVEMBER 20 - 24, 2023)
        </p>
        <p className="heroContent max-w-[800px] px-[8vw] text-center mt-2">
          Each year more than 200 scripts, projects and films from South Asia
          are pitched to various producers, buyers, sales agents and film
          festival programmers from across the world.
        </p>
      </div>
      <div className="imagesContainer mt-[50px] flex h-[750px] w-[100vw] pointer-events-none  relative">
        <h2 className="welcomeText text-center absolute left-[50%] translate-x-[-50%] bottom-[150px] z-[100] font-iFontSerif text-[3.5rem] text-iDark font-extrabold">
          Welcome to Film Bazaar 2023
        </h2>
        <div className="imageOne w-[500px] absolute left-[50%] translate-x-[-50%] top-[100px] z-[99] pointer-events-none rounded-[50px] overflow-hidden">
          <div className="c-noiseOne" />
          <div className="c-oldOne" />
          <img
            className="w-full h-full absolute inset-0 object-cover"
            src="https://images.unsplash.com/photo-1598690594129-f79eee68761f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="image"
          />
        </div>
        <div className="imageThree w-[200px] h-[400px] absolute left-0 top-[100px]">
          <img
            className="imgRadiusOne rounded-xl w-full h-full inset-0 object-cover"
            src="https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="image"
          />
        </div>
        <div className="imageTwo w-[220px] h-[220px] absolute left-[250px] top-[50px]">
          <img
            className="rounded-xl w-full h-full inset-0 object-cover"
            src="https://images.unsplash.com/photo-1563212108-c057fe176810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80"
            alt="image"
          />
        </div>

        <div className="imageTwo w-[220px] h-[220px] absolute right-[250px] top-[50px]">
          <img
            className="rounded-xl w-full h-full inset-0 object-cover"
            src="https://images.unsplash.com/photo-1563212108-c057fe176810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80"
            alt="image"
          />
        </div>
        <div className="imageThree w-[200px] h-[400px] absolute right-0 top-[100px]">
          <img
            className="imgRadiusTwo w-full h-full absolute inset-0 object-cover"
            src="https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="image"
          />
        </div>
      </div>
      <div className="highlightsSec relative pt-[100px] top-[250px] w-[100vw] h-[1050px] z-[99] bg-iPink flex flex-col gap-[100px] items-center overflow-hidden">
        <div className="c-noiseOne" />
        <div className="c-oldOne" />

        <h2 className="font-iFontSerif text-[3.5rem] text-iOrange">
          Highlights of the Bazaar
        </h2>
        <div className="o-tape -left"></div>
        <div className="o-tape -right"></div>
        <div className="videosContainer relative z-[98] grid grid-cols-3 gap-4 w-[100vw] h-[500px] px-[15vw]">
          <div className="videos relative z-[100] h-aoto">
            <div className="h-[250px] relative">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                alt="Image"
              />
            </div>
            <p className="text-iDark z-[99] p-4 w-full">
              Co-Production Market - Ek Mutthi Badal (My Shade Of Sky) |
              Producer Abhimanyu Dixit
            </p>
          </div>
          <div className="videos relative z-[100] h-aoto">
            <div className="h-[250px] relative">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                alt="Image"
              />
            </div>
            <p className="text-iDark z-[99] p-4 w-full">
              Co-Production Market - Ek Mutthi Badal (My Shade Of Sky) |
              Producer Abhimanyu Dixit
            </p>
          </div>
          <div className="videos relative z-[100] h-aoto">
            <div className="h-[250px] relative">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                alt="Image"
              />
            </div>
            <p className="text-iDark z-[99] p-4 w-full">
              Co-Production Market - Ek Mutthi Badal (My Shade Of Sky) |
              Producer Abhimanyu Dixit
            </p>
          </div>
          <div className="videos relative z-[100] h-aoto">
            <div className="h-[250px] relative">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                alt="Image"
              />
            </div>
            <p className="text-iDark z-[99] p-4 w-full">
              Co-Production Market - Ek Mutthi Badal (My Shade Of Sky) |
              Producer Abhimanyu Dixit
            </p>
          </div>
          <div className="videos relative z-[100] h-aoto">
            <div className="h-[250px] relative">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                alt="Image"
              />
            </div>
            <p className="text-iDark z-[99] p-4 w-full">
              Co-Production Market - Ek Mutthi Badal (My Shade Of Sky) |
              Producer Abhimanyu Dixit
            </p>
          </div>
          <div className="videos relative z-[100] h-aoto">
            <div className="h-[250px] relative">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                alt="Image"
              />
            </div>
            <p className="text-iDark z-[99] p-4 w-full">
              Co-Production Market - Ek Mutthi Badal (My Shade Of Sky) |
              Producer Abhimanyu Dixit
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[-150px] w-[100vw] px-[10vw] py-[100px] flex justify-center text-center bg-iDark relative z-[99]">
        <div className="c-noiseOne" />
        <div className="c-oldOne" />
        <div className="flex justify-between gap-10 text-iLight">
          <div className="flex flex-col gap-6 ">
            <h2 className="font-iFontSerif text-[2rem]">
              FILM BAZAAR 2019 ON GROUND
            </h2>
            <iframe
              className="relative z-[100]"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/evIFGHMmrCY?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="flex flex-col gap-6 ">
            <h2 className="font-iFontSerif text-[2rem]">
              FILM BAZAAR 2021 ONLINE
            </h2>
            <iframe
              className="relative z-[100]"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jaYsBLCSi58?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-[10vw] py-[80px]">
        <h2 className="font-iFontSerif text-[3.5rem] text-iOrange">Sponsors</h2>
        <div className="w-[100vw] h-[180px] my-[100px] lg:my-0 px-[8vw] flex flex-wrap gap-6 justify-center lg:justify-between items-center text-2xl text-[#E54613] font-iFontB">
          <h1>IFFI</h1>
          <h1>FIAPF</h1>
          <h1>Ministry of I&B</h1>
          <h1>NFDC</h1>
          <h1>ESG</h1>
        </div>
      </div>
      <div className="flex justify-between gap-10 px-[10vw] py-[80px] bg-iBlue">
        <div className="flex flex-col gap-4 flex-1">
          <img
            src="https://filmbazaarindia.com/wp-content/uploads/2022/08/iffi_2022-360x187.png"
            alt="image"
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="font-semibold text-[1.2rem]">Film Bazaar</h3>
          <p>
            Relive past winners, films and parties with our extensive archive
            section!
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="font-semibold text-[1.2rem]">Film Bazaar</h3>
          <p>
            National Film Development Corporation 6th Floor, Discovery of India
            Building Nehru Centre, Dr. Annie Besant Road Worli, Mumbai 400018,
            India T. +91 22 6628 8288
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="font-semibold text-[1.2rem]">Follow Us</h3>
          <div className="flex gap-2">
            <AiFillYoutube size={30} />
            <AiFillTwitterCircle size={30} />
            <BsFacebook size={27} />
            <AiOutlineInstagram size={30} />
          </div>
        </div>
      </div>
    </section>
  );
}
