"use client"
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
// import EmailjsComponent from './emailjsComponent';

export const NavItem: React.FC<NavItemProps> = ({ label, isActive, href }) => (
  <a 
    href={href}
    className={` ${isActive ? 'font-bold' : ''} hover:text-zinc-600 transition-colors`}
  >
    {label}
  </a>
  );
  
  export const Navigation: React.FC = () => {
  return (
    <div className="container flex mb-4 justify-between w-full max-w-[1265px] text-black ">
    <div className="flex h-full w-2/3 md:w-1/3 justify-between mt-auto mb-auto">
    <NavItem href="/" label="Home" isActive />
      <NavItem href="/about" label="About" />
      <NavItem href="/projects" label="Projects" />
    </div>
    <div className="text-3xl font-bold">Your Company</div>

    </div>
  );
  };
export const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col text-center whitespace-nowrap">
    <label htmlFor="email" className="sr-only">Email address</label>
    <input
      type="email"
      id="email"
      className="px-3 py-1 rounded-lg border border-black border-solid bg-neutral-50 text-zinc-800 "
      placeholder="info@futureare.com"
    />
    <label htmlFor="message" className="sr-only">Message</label>
    <textarea
      id="message"
      className="px-16 pt-5 pb-24 mt-5 rounded-xl border border-black border-solid bg-neutral-50 text-neutral-700 max-md:px-5 max-md:pb-28 max-md:max-w-full"
      placeholder="Message"
    />
    <button type="submit">
      <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b5844996bb529faee992e51bfa53e964b566fac8414f08187f0e1c77de6e791?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
      alt="Submit form"
      className="object-contain self-end mt-9 aspect-[1.26] w-[58px]"
      />
    </button>
    </form>
  );
  };

export const SocialIcon: React.FC<SocialIconProps> = ({ imageUrl, alt }) => {
  return (
    <img
    loading="lazy"
    src={imageUrl}
    alt={alt}
    className="object-contain shrink-0 aspect-[1.15] w-[23px]"
    />
  );
  };

export const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col flex-1 md:text-xl pb-9">
    <img
      loading="lazy"
      src={imageUrl}
      alt={`${title} service icon`}
      className=" self-center  w-[32px] md:w-[52px]"
    />
    <div className="mt-1 md:mt-3 md:font-medium">{title}</div>
    </div>
  );
  };

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, description }) => {
  return (
    <>
    <div className="flex h-screen items-center justify-center px-10">
  <div className="w-full sm:w-1/2  bg-white shadow-xl rounded-3xl">
    <div className="mt-10 flex justify-center mb-5 ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKN2MjSr0slVb3jxwjrIuBaAaqo669IBIKxw&usqp=CAU" className="rounded-full" alt="" />
    </div>
    <div className="flex justify-center px-5 ">
      <div className="border-b-2 border-gray-500 w-full"></div>
    </div>
    <div className="flex justify-center text-center p-5">
      <p>
        zakaria zinedine
      </p>
    </div>
    <div className="flex justify-center gap-4 p-5">
      <button className="py-3 bg-indigo-500 font-semibold text-white w-1/4 rounded-xl hover:bg-indigo-600">Follow</button>
      <button className="py-3 bg-pink-500 font-semibold text-white w-1/4 rounded-xl hover:bg-pink-600">Subscribe</button>
    </div>
  </div>
</div>
    <div className="container flex flex-col grow text-base text-center text-black max-md:mt-10">
    <img
      loading="lazy"
      src={imageUrl}
      alt="Architecture project showcase"
      className="object-contain w-full aspect-[1.77]"
    />
    <div className="self-center md:w-60 mt-2 rounded-lg">{description}</div>
    </div>
    </>

  );
  };

// export const FooterSection: React.FC = () => {
  
//   return(
//     <footer className="bg-gray-800 text-white py-8 flex text-center">
//     <div className="mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       <div className='max-w-sm max-h-[400px] md:mb-4'>
//             <EmailjsComponent/>
//         </div>
//         <div className='max-w-sm max-h-[400px]'>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.754426053669!2d-0.12543678468083543!3d51.50735011625854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876031f67b15d69%3A0xf11e5d01596c67a0!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1671515947569!5m2!1sen!2suk"
//           width="100%"
//           height="auto"
//           style={{ border: 0 }}
//           loading="lazy"
//         ></iframe>
//         </div>
//         <div className='max-w-sm max-h-[400px] mb-4'>
//         <h2 className=" text-center font-bold text-white text-2xl mb-3">Our Address
//               </h2>
//               <address className=" text-center not-italic">
//                 Future Architecture Company
        
//                 Main Street, Fifth Tower, Fourth Floor
        
//                 Central Business District, Arab City
//                 <br />
//                 Phone: +971 4 123 4567
//               </address>
//         </div>
 
   
//       </div>
//       <div className=" border-t border-gray-700 text-center text-gray-300">
//         <p>All rights reserved © {new Date().getFullYear()}</p>
//       </div>
//     </div>
//   </footer>
//   )
// }  

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  socialIcons
  }) => {
  return (
    <>
    <div className='w-full h-1/2 flex items-center'>
    <div className='w-1/2 h-52 '>
      <h2 className="ml-8 text-primary text-3xl font-bold uppercase">{title}</h2>
      <p className="mt-4 ml-4 text-xl">{subtitle}</p>
    </div>
      <div className='w-1/2 h-96 relative'>
      <Image
      loading="lazy"
      width={300}
      height={300}
      // fill
      // layout='responsive'
      src={backgroundImage}
      alt="Architecture hero"
      className="size-full"
    />
      </div>

    </div>
    </>

  );
  };
  export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  imageUrl
  }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className=" w-full flex">
    <div className=" relative">
      <Image
      width={300}
      height={300}
      loading="lazy"
      src={imageUrl}
      alt="About us"
      className="object-contain"
      />
    </div>
    <div className="flex flex-col justify-center items-center w-[60%] p-8"> 
    <h2 className="text-center font-bold text-2xl mb-4 ">{title}</h2>
      <div className={`transition-all duration-500  ${isExpanded  ? '' : 'overflow-hidden'}`}>
      <p className="text-lg">
        {description}
      </p>
      </div>
      <p  
      className="hover:cursor-pointer font-bold ml-auto mt-2 text-black text-opacity-40 hover:text-opacity-100 transition-opacity"
      onClick={handleToggle}  
      >
      {isExpanded ? 'Less' : 'Read more'}
      </p>
    </div>

    </div>
      );
  };


  export interface TeacherCardProps {
    imageUrl: string;
    bio: string;
    name: string;
    alt?: string;
  }

  export const TeacherCard: React.FC<TeacherCardProps> = ({ imageUrl, bio, name, alt }) => {
    const handleMessage = () => {
      console.log(`Message sent to ${name}`);
    };

    return (
      <Card className="flex flex-col items-center text-center w-52">
        <Image
          loading="lazy"
          width={200}
          height={200}
          src={imageUrl}
          alt={alt ||""}
          className="object-contain w-32 h-32 rounded-full"
        />
        <h3 className="mt-4 text-xl font-bold">{name}</h3>
        <p className="mt-2 text-gray-600">{bio}</p>
        <div className="mt-4">
          <button onClick={handleMessage} className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Message
          </button>
        </div>
      </Card>
    );
  };
  
  export interface ProjectCardProps {
  imageUrl: string;
  description: string;
  alt?: string;

  }
  
  export interface ServiceCardProps {
  imageUrl: string;
  title: string;
  alt?: string;
  }
  
  export interface SocialIconProps {
  imageUrl: string;
  alt: string;
  href: string;
  }
  
  export interface NavItemProps {
  label: string;
  isActive?: boolean;
  href: string;
  }
  
  export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  socialIcons: SocialIconProps[];
  }
  
  export interface AboutSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  }
  
  export interface ContactFormData {
  email: string;
  message: string;
  }