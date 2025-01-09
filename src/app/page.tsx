import { AboutSection, HeroSection, NavItem, ProjectCard, ServiceCard } from "./component/arch/components";

const projects = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f763468310c73af447dd6c1e1efff7fb2c8c29ef0b0337a27f7308294ff5d27b?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    description: "One of the high-end architectural projects in the area.",
    alt: "Architectural project 1"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/fef4d58a75f2a2f0dfa719a4eae5a0b347fede2efd4eb2c2e07db44414b1532e?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    description: "One of the high-end architectural projects in the area.",
    alt: "Architectural project 2"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/42bab78892b92f0fd1e5dc59f6a06c57242b219b0a117d0fdd85e6d58f1e7e52?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    description: "One of the high-end architectural projects in the area.",
    alt: "Architectural project 3"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/73a640269b8edee7b951e13007d6e26acc408ee1c10f3222f6567004d8031ce6?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    description: "One of the high-end architectural projects in the area.",
    alt: "Architectural project 4"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/570e4cfebd5ab58f1c7736e0ab555bdd5c52df52572f3e0292afc2c17d1ab22f?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    description: "One of the high-end architectural projects in the area.",
    alt: "Architectural project 5"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f763468310c73af447dd6c1e1efff7fb2c8c29ef0b0337a27f7308294ff5d27b?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
    description: "One of the high-end architectural projects in the area.",
    alt: "Architectural project 6"
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
    <div>
      <div className="container flex mb-4 justify-between w-full max-w-[1265px] text-black">
        <div className="flex h-full w-1/2 md:w-1/3 justify-between mt-auto mb-auto">
          {/* Navigation Items */}
          <NavItem href="#hero" label="Home" isActive />
          <NavItem href="#about" label="About" />
          <NavItem href="#services" label="Our Services" />
          <NavItem href="#project" label="Our Projects" />
        </div>
        <div className="text-2xl md:text-3xl font-bold">Your Company</div>
      </div>

      <div id="hero">
        <HeroSection
          title="Future Architectural Engineering Company"
          subtitle="One of the leading companies in the field of designing and building high-end architectural projects in the area."
          backgroundImage="https://www.svgrepo.com/show/492818/online-interview-male.svg"
          socialIcons={socialIcons}
        />
      </div>

      <div id="services" className="bg-teal-900 bg-opacity-10 w-full text-black">
        <h2 className="text-center font-bold text-black text-2xl mb-4">Our Services</h2>
        <div className="w-full flex flex-col sm:flex-row justify-between">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div id="about">
        <AboutSection
          title="About Us"
          description="We specialize in providing architectural design services for residential, commercial, industrial projects, and major projects such as skyscrapers and shopping centers."
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a6f642b7a6f96a451da8ad67911065d6642dc20d377ab673539ec6d7369683a7?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
        />
      </div>

      <div id="project" className="container self-center mt-4 w-full max-w-[1269px] mb-8 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-right font-bold text-black text-2xl md:mb-8">Our Projects</h2>
        <div className="grid grid-cols-2 md:gap-y-12 gap-6 md:grid-cols-3 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div>
        {/* <FooterSection /> */}
      </div>
    </div>
  );
}
