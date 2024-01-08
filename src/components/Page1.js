import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Video from "./video.mp4";
import logo1 from './logo_two.png'
import logo2 from './logo_good.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping,faCircle,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './custom.css'

gsap.registerPlugin(ScrollTrigger);

function Page1() {
   
    var settings={
        dots: true,
        centerMode:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        SlidesToScroll:1
    };
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const playButtonRef = useRef(null);
  const cursorRef = useRef(null);
  const headingRef1= useRef();
  const headingRef2= useRef();
  const logoRef=useRef();
useGSAP(()=>{
    const heading1 = headingRef1.current;
gsap.from(heading1, {
    y:100,
    opacity:0,
    delay:0.1,
    duration:0.5,
    ease: "power1.out"
    }
    )   
})
useGSAP(()=>{
    const heading2 = headingRef2.current;
    gsap.from(heading2, {
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.5,
        ease: "power1.out"
        }
        )   
    })
  useEffect(() => {
    
    const playButton = playButtonRef.current;
    const handleMouseMove = (e) => {
      gsap.from(playButton, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1

      });
    };
 
    window.addEventListener('mousemove', handleMouseMove);
       
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
    };
  }, []);
  useEffect(() => {
    
    const cursor = cursorRef.current;
    const handleMouseMove2 = (e) => {
      gsap.from(cursor, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1

      });
    };
 
    window.addEventListener('mousemove', handleMouseMove2);
       
    return () => {
      window.removeEventListener('mousemove', handleMouseMove2);
      
    };
  }, []);
  const [control, openDiv]=useState(false)
const handleClick=()=>{
    openDiv(true);
}
    const [control2, openDiv2]=useState(true)
    const handleClick2=()=>{
        openDiv2(true);
        openDiv(false);
}
const [control3, openDiv3]=useState(false)
const handleClick3=()=>{
    openDiv3(true);
}
    const [control4, openDiv4]=useState(true)
    const handleClick4=()=>{
        openDiv4(true);
        openDiv3(false);
}
const [control5, openDiv5]=useState(false)
const handleClick5=()=>{
    openDiv5(true);
}
    const [control6, openDiv6]=useState(true)
    const handleClick6=()=>{
        openDiv6(true);
        openDiv5(false);
}
  return (
    <div className='overflow-x-hidden m-0 p-0 box-border font-futura h-[100%] w-[100%]'>
        <div id="nav" className="z-[99] w-[100%] h-[6vw] ">
            <img ref={logoRef} src={logo1} className="w-[9vw] p-[1vw]" alt="" />
            <div>
                <ul className=' flex relative top-[-8vw] text-[1.1vw] w-[50%] right-[-50vw] justify-evenly'>
                    <li className=' hover:text-[grey] hover:underline'>SHOP</li>
                    <li className='hover:text-[grey]  hover:underline'>CATERING</li>
                    <li className='hover:text-[grey] hover:underline'>DONATE</li>

                    <li className='hover:text-[grey]  hover:underline'><FontAwesomeIcon icon={faBars} /></li>
                    <li className='hover:text-[grey] hover:underline'><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </div>
      <div id='main'>
        <div id='page1' className='z-0 min-h-[60vw] relative w-[100%] py-0 px-[1vw] pt-[8vw]'>
          <h1 ref={headingRef1} className='font-extrabold text-[15.8vw] leading-[14vw] tracking-[-0.3rem]'>CHANGE</h1>
          <h1 ref={headingRef2} className='font-extrabold text-[15.8vw] leading-[14vw] tracking-[-0.3rem]'>THE COURSE</h1>
          <div id='video-container' className='h-[45vw] w-[100%] bg-gray-400 mt-[1vw] relative' >
            <video className='h-[100%] w-[100%] object-cover' autoPlay loop muted src={Video}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ></video>
            <div
              ref={playButtonRef}
              id='play'
              className={`
                  px-[2vw] py-[2.7vw] w-[7vw] h-[7vw] transform translate-x-[-50%] translate-y-[-50%] bg-black text-white text-[1.3vw] fixed rounded-full ${isHovered ? 'opacity-1 scale-1' : 'opacity-0 scale-0'} `} >PLAY</div>
              <div className='flex w-[97%] text-[1vw] m-[auto] justify-between relative top-[4vw] '>
    <p>BUY GOOD</p>
    <p>DO GOOD</p>
</div>    
          <hr className='w-[97%] m-[auto] font-extrabold border-black  h mb-[2vw] relative top-[4vw]' />
          </div>
          <div id='page2' className=' flex justify-between min-h-[50vw] w-[100%] px-[1vw] py-[3vw] relative items-center mt-[5vw] '>
            <div id='elem1'  className=' h-[47vw] width-[30%] overflow-hidden relative flex items-center justify-center'>
              <img className='h-[100%] w-[100%] px-[2vw] object-cover scale-[1.1]' src="https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format" alt="" />
              <div className={`bg-[#daf6c2] absolute w-[80%] h-[4vw] hover:w-[82%] rounded-[2vw] ${control2? 'visible':'invisible'} `} onClick={handleClick}>
               
                <ul className='flex justify-between p-[1vw] text-[1.1vw]'>
                    <li><FontAwesomeIcon icon={faCircle} /></li>
                    <li>SHOP</li>
                    <li>MESSINA</li>
                    <li><FontAwesomeIcon icon={faChevronRight} /></li>
                </ul>
                </div>
              <div className={`bg-[#daf6c2] absolute w-[80%] h-[20vw] rounded-[2vw] ${control ? 'visible' : 'invisible'}`} onClick={handleClick2}>
               
                <ul className='flex justify-between p-[1vw] text-[1.1vw]'>
                    <li><FontAwesomeIcon icon={faCircle} /></li>
                    <li>SHOP</li>
                    <li>MESSINA</li>
                    <li><FontAwesomeIcon icon={faChevronRight} /></li>
                </ul>
                <div className='flex'>
                    <img className='w-[10vw] h-[14vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/6a73d4df28963d86c7f9dd49f805b8ec84774bd5-4672x7008.png/DSC0069_Dexter%20Kim%20copy.png?rect=0,515,4672,5241&fp-x=0.5&fp-y=0.44735661764705875&w=320&h=359&fit=crop&crop=focalpoint&auto=format" alt="" />
                    <img className='w-[15vw] h-[16vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/d6c7e5bbcf3445fccb7e221bc5b1b9fd94d83362-5000x5000.png/DSC0032_Dexter%20Kim.png?w=320&h=320&auto=format" alt="" />
                </div>
              </div>
            </div>
            <div id="elem2" className='h-[47vw] width-[30%] overflow-hidden relative flex items-center justify-center '>
                <img className='h-[100%] w-[100%] object-cover scale-[1.1] px-[2vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format"
                    alt=""/>
                        <div className={`bg-[#bfcaf6] hover:w-[82%] absolute w-[80%] h-[4vw] rounded-[2vw] ${control4? 'visible':'invisible'} `} onClick={handleClick3}>
               
               <ul className='flex justify-between p-[1vw] text-[1.1vw]'>
                   <li><FontAwesomeIcon icon={faCircle} /></li>
                   <li>SHOP</li>
                   <li>MESSINA</li>
                   <li><FontAwesomeIcon icon={faChevronRight} /></li>
               </ul>
               </div>
               <div className={`bg-[#bfcaf6] absolute w-[80%] h-[20vw] rounded-[2vw] ${control3 ? 'visible' : 'invisible'}`} onClick={handleClick4}>
               
               <ul className='flex justify-between p-[1vw] text-[1.1vw] '>
                   <li><FontAwesomeIcon icon={faCircle} /></li>
                   <li>SHOP</li>
                   <li>MESSINA</li>
                   <li><FontAwesomeIcon icon={faChevronRight} /></li>
               </ul>
               <div className='flex'>
                   <img className='w-[10vw] h-[14vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/6a73d4df28963d86c7f9dd49f805b8ec84774bd5-4672x7008.png/DSC0069_Dexter%20Kim%20copy.png?rect=0,515,4672,5241&fp-x=0.5&fp-y=0.44735661764705875&w=320&h=359&fit=crop&crop=focalpoint&auto=format" alt="" />
                   <img className='w-[15vw] h-[16vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/d6c7e5bbcf3445fccb7e221bc5b1b9fd94d83362-5000x5000.png/DSC0032_Dexter%20Kim.png?w=320&h=320&auto=format" alt="" />
               </div>
             </div>
                     </div>
                <div id="elem3" className='h-[100%] width-[30%] overflow-hidden relative flex items-center justify-center'>
                <img className='px-[2vw] h-[47vw] w-[100%] object-cover scale-[1.1]'
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
                    alt=""/>
                       <div className={`bg-[#f7caf8] hover:w-[82%] absolute w-[80%] h-[4vw] rounded-[2vw] ${control6? 'visible':'invisible'} `} onClick={handleClick5}>
               
               <ul className='flex justify-between p-[1vw] text-[1.1vw]'>
                   <li><FontAwesomeIcon icon={faCircle} /></li>
                   <li>SHOP</li>
                   <li>MESSINA</li>
                   <li><FontAwesomeIcon icon={faChevronRight} /></li>
               </ul>
               </div>
             <div className={`bg-[#f7caf8] absolute w-[80%] h-[20vw] rounded-[2vw] ${control5 ? 'visible' : 'invisible'}`} onClick={handleClick6}>
               
               <ul className='flex justify-between p-[1vw] text-[1.1vw]'>
                   <li><FontAwesomeIcon icon={faCircle} /></li>
                   <li>SHOP</li>
                   <li>MESSINA</li>
                   <li><FontAwesomeIcon icon={faChevronRight} /></li>
               </ul>
               <div className='flex'>
                   <img className='w-[10vw] h-[14vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/6a73d4df28963d86c7f9dd49f805b8ec84774bd5-4672x7008.png/DSC0069_Dexter%20Kim%20copy.png?rect=0,515,4672,5241&fp-x=0.5&fp-y=0.44735661764705875&w=320&h=359&fit=crop&crop=focalpoint&auto=format" alt="" />
                   <img className='w-[15vw] h-[16vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/d6c7e5bbcf3445fccb7e221bc5b1b9fd94d83362-5000x5000.png/DSC0032_Dexter%20Kim.png?w=320&h=320&auto=format" alt="" />
               </div>
             </div>
            </div>
           

          </div>
          <div
              ref={cursorRef}
              id='cursor'
              className={`
                  px-[2vw] py-[2.7vw] w-[14vw] h-[14vw] transform translate-x-[-50%] translate-y-[-50%] bg-[#9393fc23]  text-[1.3vw] fixed rounded-full ${isHovered1 ? 'opacity-1 scale-1' : 'opacity-0 scale-0'} `} ></div>
        </div>
      </div>
     <div id="page3" className='w-[100%] min-h-[60vw] mt-[10vw]'>
        <div className='w-[50%] font-bold text-[4vw] leading-[4vw] pl-[2vw]'>
        <h1>WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES AGAIN.</h1>
        </div>
        <div className='w-[30%] leading-[2vw] relative right-[-60vw] top-[-12vw] text-[1.7vw]'>
        Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.
        </div>
        <div className='w-[30%] leading-[2vw] text-[1.7vw] relative right-[-60vw] top-[-9vw]'>
        With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.
        </div>
        <a className='w-[30%] text-[1.7vw] relative right-[-60vw] top-[-8vw] underline hover:text-[grey] leading-[2vw]' href="#">SHOP TO SUPPORT</a>
     </div>
<div id="images" className=' flex w-[100%] flex-wrap relative top-[-25vw]'>
    <div className='w-[50%] px-[4vw]'>
    <img  onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} src="https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=1024&h=817&fit=crop&crop=focalpoint&auto=format" alt="" />
    <caption className='w-[1000%] relative
    ml-[-0.5vw] text-[1.2vw]'>
       CHANGE COURSE COOK KIT
       <br/>
       $95
    </caption>
    </div>
    <div className='w-[50%] px-[4vw]'>
    <img onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} src="https://cdn.sanity.io/images/w8f1ak3c/production/4206e9c3f7ab098369c39a2194b82eeca6bb0664-6166x4111.png/DSC0005_Dexter%20Kim.png?rect=2,0,6163,4111&w=1024&h=683&auto=format" alt="" />
    <caption className='w-[1000%] relative
    ml-[-1.7vw] text-[1.2vw]'>
       THE COOKBOOK DUO KIT
       <br/>
       $72
    </caption>
    </div>
    <div  className='w-[50%] px-[4vw]'>
    <img onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} src="https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=1024&h=1024&auto=format" alt="" />
    <caption className='w-[1000%] relative
    ml-[-0.5vw] text-[1.2vw]'>
       TWO HUGS CANDLE
       <br/>
       $69
    </caption ></div>
    <div  className='w-[50%] px-[8vw]'>
    <img onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} src="https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="" />
    <caption className='w-[1000%] relative
    ml-[-1.1vw] text-[1.2vw]' >
       THE GOOD NIGHT'S SLEEP CARE PACK
       <br/>
       $125
    </caption></div>
</div>
<div className='flex w-[97%] text-[1vw] m-[auto] justify-between relative top-[-18vw] '>
    <p>WORDS OF GOODNESS</p>
    <p>MESSAGE OF LOVE AND SUPPORT</p>
</div>
<hr className='w-[97%] m-[auto] font-extrabold border-black  h-[6vw] relative top-[-18vw]' />

<Slider  {...settings} id="message" className='relative top-[-27vw] h-[30vw]  p-[2vw] w-[100%]'>

     <div>
        <p className='text-[5vw] mr-[2vw] font-bold relative top-[-2vw] p-[6vw] text-center leading-[4.6vw]'>
THANK YOU SO MUCH FOR THE
BEAUTIFUL CATERING; IT MEANS
A LOT WORKING WITH A
COMPANY SUCH AS TWO GOOD
CO.
        </p>
     </div>
     <div>
        <p className='text-[5vw] font-bold relative top-[-2vw] p-[6vw] text-center leading-[4.6vw]'>
        THE HAMPERS WE ORDERED
WERE LOVELY AND THE TEAM
ARE WONDERFUL TO LIAISE
WITH.
        </p>
     </div>
     <div>
        <p className='text-[4vw] font-bold relative top-[-2vw] p-[6vw] text-center leading-[4.6vw]'>
        I THINK I SPEAK FOR EVERYONE
WHEN I SAY WE ARE VERY
GRATEFUL TO HAVE BEEN ABLE
TO COME IN AND HELP OUT FOR
THE DAY; THE WORK YOU DO IS
AMAZING.
        </p>
     </div>
     <div>
        <p className='text-[4vw] font-bold relative top-[-2vw] p-[6vw] text-center leading-[4.6vw]'>
        EVERYONE AT TWO GOOD ARE
LOVELY TO WORK WITH.
CATERING WAS EXCELLENT AND
WELL PRICED, ALL FOR A GOOD
CAUSE... WHAT'S NOT TO LOVE?
        </p>
    </div>
     <div>
        <p className='text-[4vw] font-bold relative top-[-2vw] p-[6vw] text-center leading-[4.6vw]'>
        MY CEO ASKED ME WHO I HAD
USED FOR THE CATERING; WHEN
I EXPLAINED ABOUT TWO
GOOD, SHE SAID "OH, THAT’S
WHY - THE FOOD IS MADE WITH
LOVE."
        </p>
     </div>
    
</Slider>
<div className='w-[100%] relative top-[-14vw] flex flex-col items-center'>
<button className=' text-white bg-black rounded-[1.8vw] py-[1vw] px-[3vw] text-[1.5vw] hover:px-[3.2vw]  mx-[36%]'>SEND YOUR MESSAGE</button>
<p className=' mt-[2vw]'>Sometimes it’s the smallest actions<br/> that can make the biggest impact. </p>
</div>
<div className='relative top-[0vw] mx-6 flex text-[1.2vw]'>
    <div className='w-[20%] h-[60vw]'>
        <h1 className='text-[2vw] font-bold'>OUR IMPACT</h1>
        <br />
        <p>The thing is, we don't save anyone.<br/><br/>
What we do is provide a safe space for women to change the course of their own lives.<br/><br/>
After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing.</p>
<br />
<p className='underline hover:text-[grey]'>HERE'S HOW WE DO IT</p>
    </div>
    <div  className='w-[35%] ml-[5vw]'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/943f8f43b76b4e030f41deddca1edd44170fee39-5504x8256.jpg/Christina-Maria-Jes-Lindsay-9143.jpg?fp-x=0.5&fp-y=0.5&w=640&h=947&fit=crop&crop=focalpoint&auto=format" alt="" />
    </div>
    <div className='w-[35%] ml-[5vw]'>
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format" alt="" />
    </div>
</div>
<div>
    <h1 className='text-[2vw] font-bold mt-[1.7vw] ml-7'>
        ENTER YOUR EMAIL ADDRESS FOR GOOD
    </h1>
  
</div>
<hr className='w-[97%] m-[auto] font-extrabold border-black  h-10 relative ' />
<div className='relative left-[3vw] top-[2vw] flex w-[93%]'>
    <div className='mr-[30vw]'>
    <p className='text-[grey] text-[1.2vw]'>CONNECT WITH US</p>
    <ul className='text-[1.2vw]'>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Linkedin</li>
        <li>You Tube</li>
    </ul>
    </div>
    <div className='relative flex justify-center mr-[30vw] w-[25vw]'>
       <img src={logo2} alt="" /> 
      
     
   
    </div>
    <div>
        <ul className='text-right relative right-[vw] text-[1.2vw]'>
            <li className='text-[grey]'>THE NITTY GRITTIES</li>
            <li>Good Things FAQs</li>
            <li>Good Food FAQs</li>
            <li>Good Places</li>
            <li>Pathways</li>
            <li>Careers</li>
        </ul>
        </div>
</div>
<div >
<p className='text-center  mt-[1vw] relative right-[2vw] top-[4vw] h-[8vw] text-[1.2vw]'>
            <span className='mx-[2vw]'>TWO GOOD CO. 2023</span>
            <span className='mx-[2vw]'>TERMS OF USE</span>
            <span className='mx-[2vw]'>PRIVICY POLICY</span>
        </p>
        <p className='text-center mx-[6vw] mt-[1vw] relative top-[4vw] h-[8vw] text-[1.2vw]'>
        We are proud and privileged to have our home on this land, and to be able to continue the long tradition of community coming together around food, begun thousands of years ago by First Nations peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the original custodians of this land, and we recognise their deep connection to land, water, sky and community which continues today. We pay our deep respects to community elders, past, present and emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres Strait Islander peoples. Always was, always will be Aboriginal land.
        </p>
    </div>
</div>
    
  );
}

export default Page1
