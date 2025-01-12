import { Card } from "@/components/ui/card";
import { AboutSection, HeroSection, NavItem, ServiceCard, TeacherCard } from "./component/arch/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Hand, HandshakeIcon, Phone, SignalHigh } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const tutors = [
  {
    imageUrl: "https://www.svgrepo.com/show/227594/muslim-islam.svg",
    name: "John Doe",
    bio: "Expert in Quran memorization with over 10 years of experience.",
    alt: "Tutor John Doe"
  },
  {
    imageUrl: "https://www.svgrepo.com/show/420361/avatar-man-muslim.svg",
    name: "Jane Smith",
    bio: "Certified tutor with a passion for teaching Quran to all age groups.",
    alt: "Tutor Jane Smith"
  },
  {
    imageUrl: "https://www.svgrepo.com/show/16574/waiter.svg",
    name: "Ahmed Khan",
    bio: "Experienced tutor specializing in Quran recitation and memorization.",
    alt: "Tutor Ahmed Khan"
  }
];

const services = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccebadc150ddab4b502e170a6f421bcc2fb28ead3d4adeaa62f68f080e469651?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    title: "Urban Planning",
    alt: "Urban Planning Icon"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ddf3ff9d6e5dbf41dafe7594640ce2fc9fad97543a0e2aa050d0bef7a7f72b1?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    title: "Interior Design",
    alt: "Interior Design Icon"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7debd6437ceb6c48d515f11b4bc0e94953f55336116495c55a9cb41e68c61ec?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    title: "Exterior Design",
    alt: "Exterior Design Icon"
  }
];

const socialIcons = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b867826e277fbfa94e2e582e89b7bc4c2ab0c8dc520a7bf8921e908880db3fc2?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    alt: "Facebook",
    href: "https://facebook.com"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9abf621093f0a15f31fd3da182b29abf9e2c83a2bd29760305c2db1190ce0040?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    alt: "Twitter",
    href: "https://twitter.com"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a4dc672f3c7603d1005590b76b0443930cfc70e65ce9e6c782af4ce50a2d77b?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    alt: "Instagram",
    href: "https://instagram.com"
  }
];

export default function Home() {
  return (
    <div >
      <div className="bg-primary/10">
        <div className="container flex justify-between w-full max-w-[1265px] text-black ">
        <div className="text-2xl md:text-3xl font-bold text-primary">HAFID</div>

          <div className="flex h-full w-1/2 md:w-1/3 justify-between mt-auto mb-auto">
            <NavItem href="#hero" label="Home" isActive />
            <NavItem href="#about" label="About" />
            <NavItem href="#services" label="Our Services" />
            <NavItem href="#teachers" label="Our teachers" />
          </div>
          <div >
            <Button variant="outline" >Login</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 rounded-b-[200px]" id="hero">
        <HeroSection
          title="HAFID"
          subtitle="A platform to memorize the Quran with expert tutor guidance."
          backgroundImage="https://www.svgrepo.com/show/492818/online-interview-male.svg"
          socialIcons={socialIcons}
        />
      </div>
      <section className="w-full h-96 flex">
        <div className=" w-1/3 mt-auto mb-auto ">
        <div className="border-2 rounded-xl relative w-fit h-fit ">
          <div>
            <ProfileCard name="zakaria zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg"/>
          </div>
      </div>
      </div>  
        <div className="w-2/3 h-full flex relative">
        <div className="w-1/6 flex justify-center items-center ">
        <span className="w-10 h-10 border-4 rounded-full border-white flex justify-center items-center">
          <span className="w-8 h-8 border-2 border-gray-400 rounded-full flex justify-center items-center p-1">
            <Hand className="w-full h-full text-red-700" />
          </span>
        </span>

        </div>
        <div className="w-2/6 h-full flex flex-col justify-center">

        <div className="w-full h-28 ">
        <div className="border-2 rounded-xl relative w-32 h-fitb ">
          <ProfileCard name="zakaria zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg"/>
        </div> 

        </div>
        <div className="w-full h-28 ">
        <div className="border-2 rounded-xl relative w-32 h-fitb ">
          <ProfileCard name="zakaria zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg"/>
        </div> 
        </div>

        </div>
        <div className="w-3/6 h-full flex flex-col justify-center items-center">

        <div className="w-full h-40 "><div className="border-2 rounded-xl relative w-32 h-fitb ">
        <ProfileCard name="zakaria zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg"/>

          </div> 
          </div>
        <div className="w-full h-40 "><div className="border-2 rounded-xl relative w-32 h-fitb ">
          <ProfileCard name="zakaria zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg"/>
           
          </div> 
          </div>

      </div>
        </div>

      </section>

      <div id="teachers" className=" self-center mt-4 w-full
       mb-8 max-md:mt-10 max-md:max-w-full">
        <Card className="gap-2 p-4">
        <h2 className="text-center font-bold text-black text-2xl">Our Teachers</h2>
          <div className="flex flex-wrap items-center justify-center gap-2">

          {tutors.map((tutor, index) => (
            <TeacherCard key={index} {...tutor} />
          ))}
          </div>
        </Card>
      </div>
      {/* <div id="services" className="bg-teal-900 bg-opacity-10 w-full text-black">
        <h2 className="text-center font-bold text-black text-2xl mb-4">Our Services</h2>
        
        <div className="w-full flex flex-col sm:flex-row justify-between">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div> */}

      <div id="about">
        <AboutSection
          title="About Us"
          description="We specialize in providing architectural design services for residential, commercial, industrial projects, and major projects such as skyscrapers and shopping centers."
          imageUrl="https://www.svgrepo.com/show/48770/quran-rehal.svg"
        />
      </div>
      <div>
        {/* <FooterSection /> */}
      </div>
    </div>
  );
}

export function ProfileCard  ({ imageUrl, name }: { imageUrl: string; name: string }) {
  return (
    <div className="border-2 rounded-xl relative w-fit h-fit">
      <Image
        alt={name}
        width={200}
        height={200}
        src={imageUrl}
      />
      <div className="absolute bottom-1 w-[90%] backdrop-blur-sm rounded-sm flex align-middle item gap-2">
        <SignalHigh />
        <p>{name}</p>
        <Badge className="w-2 h-2 p-0 absolute top-0 right-0"></Badge>
      </div>
    </div>
  );
};


