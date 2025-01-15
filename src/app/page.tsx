import { Badge } from "@/components/ui/badge";
import { Hand, HandHeart, SignalHigh } from "lucide-react";
import Image from "next/image";
import  { AboutSection, HeroSection, Navbar,TeacherCard } from "./component/arch/components";
const tutors = [
  {
    imageUrl: "https://www.svgrepo.com/show/227594/muslim-islam.svg",
    name: "John Doe",
    bio: "Quran teacher",
    alt: "Tutor John Doe"
  },
  {
    imageUrl: "https://www.svgrepo.com/show/420361/avatar-man-muslim.svg",
    name: "Jane Smith",
    bio: "Arabic teacher",
    alt: "Tutor Jane Smith"
  },
  {
    imageUrl: "https://www.svgrepo.com/show/16574/waiter.svg",
    name: "Ahmed Khan",
    bio: "Quran teacher",
    alt: "Tutor Ahmed Khan"
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
      <Navbar/>
      </div>

      <div className="bg-primary/10 rounded-b-[200px]" id="hero">
        <HeroSection
          title="HAFID"
          subtitle="A platform to memorize the Quran with expert tutor guidance."
          backgroundImage="https://www.svgrepo.com/show/492818/online-interview-male.svg"
          socialIcons={socialIcons}
        />
      </div>
      <div id="features">

      <FeatureSection/>
      </div>

      <div id="teachers" className="bg-primary/10 rounded-b-full self-center w-full">

        <h2 className="text-center font-bold text-2xl text-primary p-4 ">Our Teachers</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">

          {tutors.map((tutor, index) => (
            <TeacherCard key={index} {...tutor} />
          ))}
          </div>

      </div>
      {/* <div id="services" className="bg-teal-900 bg-opacity-10 w-full text-black">
        <h2 className="text-center font-bold text-black text-2xl mb-4">Our Services</h2>
        
        <div className="w-full flex flex-col sm:flex-row justify-between">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div> */}

      <div id="about" className="bg-primary/10 rounded-t-full p-4">
        <AboutSection
          title="About Us"
          description="We specialize in providing architectural design services for residential, commercial, industrial projects, and major projects such as skyscrapers and shopping centers."
        />
      </div>
      <div className="w-full h-6 bg-black text-white text-center">
        <HandHeart className="inline-block mr-2 animate-bounce z-10"/>
        zakaria zinedine
        {/* <FooterSection /> */}
      </div>
    </div>
  );
}

export function UserCard  ({ imageUrl, name }: { imageUrl: string; name: string }) {
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

export function FeatureCard({title, description}: {title: string, description:string}){
  return(
    <div className="w-full md:w-1/3 p-6 bg-white shadow-md rounded-lg text-center">
    <h3 className="text-2xl font-semibold text-primary/65 mb-4">{title}</h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
  )
}

export function FeatureSection(){
  return (
    <section className="flex flex-col items-center gap-2 md:flex-row">

      <div className="w-[550px] p-4 sm:p-0">
        <div className="w-full h-6 bg-gray-400 rounded-t-sm">
          <div className="flex space-x-1 ml-1">
            <div className="p-0 w-3 h-3 bg-red-400 rounded-full" />
            <div className="p-0 w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="p-0 w-3 h-3 bg-green-500 rounded-full" />
          </div>
        </div>
        <div className="border-2 border-gray-200">
          <div className="md:ml-20 w-full h-96 flex">
            <div className="w-1/3 mt-auto mb-auto">
              <UserCard name="Zakaria Zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg" />
            </div>
            <div className="w-2/3 h-full flex relative">
              <div className="absolute bottom-[165px] z-10">
                <span className="relative flex w-8">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-10 w-8 bg-gray-200 p-1">
                    <Hand className="w-full h-full text-red-700" />
                  </span>
                </span>
              </div>
              <div className="ml-3 w-2/6 h-full flex flex-col justify-center">
                <div className="w-full h-60 space-y-4">
                  <UserCard name="Zakaria Zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg" />
                  <UserCard name="Zakaria Zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg" />
                </div>
              </div>
              <div className="ml-6 w-3/6 h-full flex flex-col justify-center items-center">
                <div className="w-full space-y-4">
                  <UserCard name="Zakaria Zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg" />
                  <UserCard name="Zakaria Zinedine" imageUrl="https://www.svgrepo.com/show/492818/online-interview-male.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary/10 rounded-l-[200px]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Our Features</h2>
          <p className="text-lg text-gray-600 mb-12">
            Explore the powerful features that enhance your Quran learning experience.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <FeatureCard title="Video Call" description="Connect one-on-one with tutors for personalized Quran lessons." />
            <FeatureCard title="Group Video Call" description="Join group sessions to study and recite the Quran together." />
            <FeatureCard title="Messaging" description="Instantly message your teachers and peers for support and discussions." />
          </div>
        </div>
      </div>
    </section>
  );
};

