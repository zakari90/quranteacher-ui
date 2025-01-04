import { Calendar, GraduationCap, Home, MessageCircle, PencilRuler, Users, UserSquare } from "lucide-react";
import Link from 'next/link';

const menuItems = [
      {
        icon: <Home />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <PencilRuler />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <GraduationCap />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <Users />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <Calendar />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MessageCircle />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
    

];


function Menu( {role}: {role: string}) {
  return (

    <div className=' h-screen sticky flex flex-col justify-between  w-20  md:w-[200px] p-2'>

          <h2 className='w-1/5 text-lg font-bold text-primary'>HAFD</h2>  
          <ul className="w-3/5 flex flex-col justify-around">
            {
              menuItems.map((item) => {
                if (item.visible.includes(role)) {
                  return (
                    <li key={item.label} className='mb-2 mt-2'>
                      <Link className='flex items-center gap-2' href={item.href}>
                       
                      <span>{item.icon}</span>
                      <span className="hidden md:block">{item.label}</span>
                        
                      </Link>
                    </li>
                  );
                }
              })  
            }
          </ul>
          <div className='w-1/5 flex justify-center items-center mt-2'>
            <Link href='/profile'>
              <button className='bg-primary text-white p-2 rounded-xl'>
                <UserSquare />
              </button>
            </Link>
          </div>
      </div>
  )
}

export default Menu