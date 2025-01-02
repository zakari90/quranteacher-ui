import React from 'react'
import { Home, Users, BookOpen, FileText, Calendar, MessageCircle, Bell, Settings, LogOut, PencilRuler, GraduationCap, Notebook, LibraryBig, Clipboard, NotepadText, UserRoundCheck, UserRoundCog } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: "MENU",
    items: [
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
        icon: <BookOpen />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <LibraryBig />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <Notebook />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <Clipboard />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FileText />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <NotepadText />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <UserRoundCheck />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
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
      {
        icon: <Bell />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <UserRoundCog />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Settings />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <LogOut />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];


function Menu() {
  return (
    <div className=' w-20  md:w-[200px] p-2'>{menuItems.map((section) => (
        
        <div key={section.title}>
          <h3 className='text-primary mt-2 mb-2'>{section.title}</h3>
          <ul>
            {section.items.map((item) => (
              <Link className='m-4 gap-4 flex items-center ' 
              href={item.href} key={item.href}>
          
                  <div className='size-5'>{item.icon}</div>
                  <div className='hidden md:block'>{item.label}</div>              </Link>
            ))}
          </ul>
        </div>
      ))}
      </div>
  )
}

export default Menu