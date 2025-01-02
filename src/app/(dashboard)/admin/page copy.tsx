// import CalendarPage from '@/app/component/calendar'
// import { BarChartComponent, ChartComponent, LineChartComponent } from '@/app/component/chart'
// import { MoreHorizontal } from 'lucide-react'
// import React from 'react'

// function TeacherHome() {
//   return (
//     <section>
//        <div className="flex overflow-hidden flex-col bg-white">
//       <div className="w-full bg-blue-50 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col">
//           {/* Left Sidebar */}
//           {/* <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full"> */}
//             <div className="flex flex-col py-14 mx-auto w-full font-bold bg-white rounded-none shadow-[2px_4px_22px_rgba(0,0,0,0.12)] max-md:mt-7">
//               <div className="flex gap-1.5 self-center max-w-full text-2xl text-blue-500 whitespace-nowrap w-[107px]">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/594114c675c477818cd0269dadef2dad301f200bba2f4182e28c367371e80649?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   alt="Edulog logo"
//                   className="object-contain shrink-0 aspect-[0.86] w-[30px]"
//                 />
//                 <div className="my-auto">Edulog</div>
//               </div>
              
//               <SidebarItem 
//                 icon="https://cdn.builder.io/api/v1/image/assets/TEMP/662586b30aa39d53222f1e74e498c05c53a76b98715a83cac291026b78b96186?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                 label="Home"
//                 isActive={true}
//               />
              
//               <div className="flex flex-col pr-5 pl-14 mt-10 w-full max-md:pl-5">
//                 <SidebarItem 
//                   icon="https://cdn.builder.io/api/v1/image/assets/TEMP/af6e71b86d35853c1ef49fc527bafcfb4947a5f70137dd810db0e6c04e242be4?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   label="Classes"
//                 />
                
//                 <SidebarItem 
//                   icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f75d396f2036614b3479ce0b85eb194300418409c72f2f7c1189d8ed9006261d?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   label="Documents"
//                 />
                
//                 <SidebarItem 
//                   icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c62c17da9828b7a99c1df84e58f846f126aed377915da27dd2fd1ad364ae556e?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   label="Bookmarks"
//                 />
                
//                 <SidebarItem 
//                   icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c3f06544f6fa2e8b5d38f3c5d732d69c606beec354bd690e442d0329c9eb0d?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   label="Messages"
//                   count={4}
//                 />
                
//                 <SidebarItem 
//                   icon="https://cdn.builder.io/api/v1/image/assets/TEMP/92ee26e30b35b1e65cf9f7c7bd09899b6158e04d2ecfed77c9c24ed2797aabb6?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   label="Settings"
//                 />
                
//                 <div className="flex gap-2.5 self-center mt-72 max-w-full text-xl text-rose-500 w-[119px] max-md:mt-10">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa3df3b56b31246fc5463805f2e90c161746ddf8dc4c285c6e1946ab7e929779?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                     alt=""
//                     className="object-contain shrink-0 my-auto w-6 aspect-[1.04]"
//                   />
//                   <div>Sign Out</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
//               {/* Search Bar */}
//               <div className="flex flex-wrap gap-5 justify-between max-w-full text-base font-semibold text-zinc-500 w-[677px]">
//                 <div className="flex gap-2.5 px-9 py-3.5 bg-white rounded-[50px] max-md:px-5">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/95e6b0fa6375bdde78de295f2a54e88e82e9573be217444975536c6bd7f21f13?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                     alt="Search icon"
//                     className="object-contain shrink-0 w-6 aspect-[0.96]"
//                   />
//                   <input 
//                     type="search"
//                     placeholder="Search Courses, Documents, Activities..."
//                     className="flex-auto my-auto bg-transparent border-none outline-none"
//                     aria-label="Search courses and documents"
//                   />
//                 </div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/2abeda99ded96c850979ffd753fcfd6b872b19f8175304d23af6f953c043464b?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   alt="Notification icons"
//                   className="object-contain shrink-0 my-auto max-w-full rounded-none aspect-[4.24] w-[127px]"
//                 />
//               </div>

//               {/* Welcome Banner */}
//               <div className="flex flex-wrap gap-2.5 items-start px-9 mt-6 text-white bg-blue-600 rounded-3xl max-md:px-5 max-md:max-w-full">
//                 <div className="flex flex-col my-auto">
//                   <h1 className="text-4xl font-bold tracking-tighter">
//                     Welcome back, Ayo
//                   </h1>
//                   <div className="mt-6 text-base tracking-wide leading-7 max-md:mr-1">
//                     You ve learned <span className="font-bold">70% </span> of your goal this week!
//                     <br />
//                     Keep it up and improve your progress.
//                   </div>
//                 </div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/add73a3f912bc2df1fda477e1b0fe2e50bafc3e379b1892f9fec5b6c48fa2458?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   alt=""
//                   className="object-contain z-10 shrink-0 self-start mt-10 aspect-square w-[38px] max-md:mt-10"
//                 />
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/482e5382a9aed1c9d997b67ecd0a2926d4d9e05305fe35c5280e398b2d5d940d?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   alt=""
//                   className="object-contain self-end mt-0 w-full aspect-[1.37]"
//                 />
//               </div>

//               {/* Performance Section */}
//               <div className="mt-5 w-full max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col">
//                   <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col px-3.5 py-5 mx-auto w-full font-bold whitespace-nowrap bg-white rounded-3xl max-md:mt-6 max-md:max-w-full">
//                       <div className="flex gap-5 justify-between mx-6 max-md:mx-2.5">
//                         <div className="text-base text-zinc-800">Performance</div>
//                         <button className="flex gap-2.5 self-start text-sm text-zinc-500">
//                           <div>Overall</div>
//                           <img
//                             loading="lazy"
//                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/45632ef047f530faa1a26298fb8b897390d0ed2bd30bb0cc6bed43dd7d4d31a9?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                             alt=""
//                             className="object-contain shrink-0 my-auto aspect-[1.12] w-[9px]"
//                           />
//                         </button>
//                       </div>
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/40bebc5baada81b8e09bcf71315fb6e15fdc84b2022abf21bb57ebca58731ed6?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                         alt="Performance graph"
//                         className="object-contain mt-6 w-full aspect-[1.66]"
//                       />
//                     </div>
//                   </div>

//                   {/* Messages Section */}
//                   <div className="flex flex-col px-8 py-5 mx-auto w-full bg-white rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
//                     <div className="flex gap-5 justify-between font-bold max-md:mx-1.5">
//                       <div className="text-base text-zinc-800">Messages</div>
//                       <button className="text-sm text-blue-600">View All</button>
//                     </div>
                    
//                     {messages.map((message, index) => (
//                       <React.Fragment key={index}>
//                         <img
//                           loading="lazy"
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fc1d43359c457288e2fce8a1c9c4169e574e403238e739154212c972f4e8a3c?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                           alt=""
//                           className="object-contain mt-3.5 w-full aspect-[166.67]"
//                         />
//                         <Message {...message} />
//                       </React.Fragment>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col items-start px-7 pt-11 pb-6 mx-auto w-full bg-white rounded-[30px_0px_0px_30px] shadow-[2px_4px_22px_rgba(0,0,0,0.12)] max-md:px-5 max-md:mt-7">
//               <div className="flex gap-5 justify-between max-w-full text-base font-semibold tracking-tight text-zinc-800 w-[298px]">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/629e7df0d52a06e71dfd8c43633c5a6e34f05db6595741fabbd67db74f513628?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                   alt="Notification icon"
//                   className="object-contain shrink-0 my-auto w-6 aspect-[0.8]"
//                 />
//                 <button className="flex gap-2.5 items-center px-3.5 py-1.5 bg-blue-50 rounded-xl">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/108bcc8e376dfb26079cdd2c1f3dc4dcb3599264cae2b11e35745869b79ffac9?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                     alt="User avatar"
//                     className="object-contain shrink-0 self-stretch rounded-xl aspect-[1.18] w-[47px]"
//                   />
//                   <div className="self-stretch my-auto">Adeola Ayo</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4477c364b91b9249741f1e6fc069b51953cb8b842dddff58ff22ee259a46495a?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                     alt=""
//                     className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
//                   />
//                 </button>
//               </div>

//               {/* Calendar Section */}
//               <div className="mt-12 w-full max-md:mt-10">
//                 <h2 className="text-xl font-bold text-zinc-800">My Progress</h2>
//                 <div className="flex gap-1 self-start text-lg text-zinc-500">
//                   <div className="grow">JULY 2021</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4193d4e8ed683d04370ef91710bf6cce0ef565962f77d5ebed5af000dceac86?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//                     alt=""
//                     className="object-contain shrink-0 my-auto aspect-[1.83] w-[11px]"
//                   />
//                 </div>
                
//                 {/* Calendar Grid */}
//                 <div className="calendar-grid mt-6">
//                   {/* Calendar implementation */}
//                 </div>
//               </div>

//               {/* Activities Section */}
//               <div className="flex gap-10 self-start mt-16 text-center max-md:mt-10">
//                 <h2 className="text-xl font-bold text-zinc-800">Upcoming Activities</h2>
//                 <button className="text-sm text-blue-600">See all</button>
//               </div>
              
//               {activities.map((activity, index) => (
//                 <Activity key={index} {...activity} />
//               ))}

//               {/* Performance Cards */}
//               <div className="mt-16 w-full max-md:mt-10">
//                 <h2 className="text-xl font-bold text-zinc-800">Top Performing Students</h2>
//                 {performanceData.map((performance, index) => (
//                   <PerformanceCard key={index} {...performance} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div>
//       {/* card sections */}
//       <div className='grid grid-cols-2 lg:grid-cols-4 gap-1'>
        
//     <div className='bg-blue-400 w-[200px] h-[100px] flex rounded-xl p-2'>
//       <div className='w-3/4' >
//           <div>
//               <span className='bg-primary-foreground text-xs p-1 border-2 border-solid border-black rounded-xl'>
//               2025/25
//           </span>
//           <p className='font-bold text-lg mt-2'>
//               1234
//           </p>
//           <p className='text-primary'>Students</p>
//           </div>

//       </div>
//       <div className='hover:cursor-pointer h-1'>
//       <MoreHorizontal className='text-white'/>
//     </div>

//   </div>

//   <div className='bg-blue-400 w-[200px] h-[100px] flex rounded-xl p-2'>
//       <div className='w-3/4' >
//           <div>
//               <span className='bg-primary-foreground text-xs p-1 border-2 border-solid border-black rounded-xl'>
//               2025/25
//           </span>
//           <p className='font-bold text-lg mt-2'>
//               1234
//           </p>
//           <p className='text-primary'>Students</p>
//           </div>

//       </div>
//       <div className='hover:cursor-pointer h-1'>
//       <MoreHorizontal className='text-white'/>
//     </div>

//   </div>
//   <div className='bg-blue-400 w-[200px] h-[100px] flex rounded-xl p-2'>
//       <div className='w-3/4' >
//           <div>
//               <span className='bg-primary-foreground text-xs p-1 border-2 border-solid border-black rounded-xl'>
//               2025/25
//           </span>
//           <p className='font-bold text-lg mt-2'>
//               1234
//           </p>
//           <p className='text-primary'>Students</p>
//           </div>

//       </div>
//       <div className='hover:cursor-pointer h-1'>
//       <MoreHorizontal className='text-white'/>
//     </div>

//   </div>
//   <div className='bg-blue-400 w-[200px] h-[100px] flex rounded-xl p-2'>
//       <div className='w-3/4' >
//           <div>
//               <span className='bg-primary-foreground text-xs p-1 border-2 border-solid border-black rounded-xl'>
//               2025/25
//           </span>
//           <p className='font-bold text-lg mt-2'>
//               1234
//           </p>
//           <p className='text-primary'>Students</p>
//           </div>

//       </div>
//       <div className='hover:cursor-pointer h-1'>
//       <MoreHorizontal className='text-white'/>
//     </div>

//   </div>
//       </div>

//     </div>
//     <div>
//       <h1 className='text-2xl font-bold'>chart</h1>
//     <div className='flex'>
    

//       <ChartComponent/>

//       <BarChartComponent/>
//     </div>
//     </div>
//     <LineChartComponent/>
//     <div>

//       <CalendarPage/>
//       <div>
//       {/* events */}
//       <section>

//       <div className="max-w-5xl mx-auto mt-8">
//         <h1>events</h1>
//         <EventList />
// </div>
// <div>
//   <h2>annonncement</h2>
//   <div className='bg-blue-400 w-[300px] h-[100px]'>
//     <h3 className='text-xl font-medium'> test math</h3>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//   </div>
// </div>
//       </section>
//       </div>
//     </div>
//     </section>

//   )
// }

// export default TeacherHome


// const events = [
//   { title: "Event 1", date: "January 1, 2022", description: "Some description goes here..." },
//   { title: "Event 2", date: "February 1, 2022", description: "Some description goes here..." },
//   { title: "Event 3", date: "March 1, 2022", description: "Some description goes here..." },
//   { title: "Event 4", date: "April 1, 2022", description: "Some description goes here..." }
// ];

// const EventList = () => {
//   return (
//       <div className="border-l-2 border-gray-500 pl-8">
//           {events.map((event, index) => (
//               <div className={`flex flex-col md:flex-row md:justify-between mt-8`} key={index}>
//                   <div className="mb-4 md:mb-0">
//                       <h3 className="text-xl font-bold mb-2">{event.title}</h3>
//                       <p className="text-gray-600 text-sm">Date: {event.date}</p>
//                   </div>
//                   <p className="text-gray-700">{event.description}</p>
//               </div>
//           ))}
//       </div>
//   );
// };



// export const SidebarItem: React.FC = ({ icon, label, count, isActive }) => {
//   return (
//     <div className={`flex gap-2.5 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-zinc-500'}`}>
//       <img
//         loading="lazy"
//         src={icon}
//         alt=""
//         className="object-contain shrink-0 aspect-square w-[25px]"
//       />
//       <div className="flex-1">{label}</div>
//       {count && (
//         <div className="px-2 pb-3 my-auto text-base text-white bg-blue-600 rounded-full h-[22px] w-[22px]">
//           {count}
//         </div>
//       )}
//     </div>
//   );
// };


// export const messages: MessageProps[] = [
//   {
//     avatar: "MA",
//     name: "Mayowa Ade",
//     message: "Hey! I just finished the first chapter",
//     time: "09:34 am",
//     attachment: [{
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b0318230f15108e02e22bf9d3937e4c45bb66017ad5ef81a609ba8fa1df9828?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313",
//       text: "First Chapter of Project .doc"
//     }],
//     bgColor: "bg-orange-400"
//   },
//   {
//     avatar: "OT", 
//     name: "Olawuyi Tobi",
//     message: "Can you check out the formulas in these Images att...",
//     time: "12:30 pm",
//     attachment: [
//       { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9da3049d63c11d2228db73be4a843ed80cb10b703c4af7377cbb9677517bb451?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313", text: "Image .jpg" },
//       { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9da3049d63c11d2228db73be4a843ed80cb10b703c4af7377cbb9677517bb451?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313", text: "Form .jpg" },
//       { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9da3049d63c11d2228db73be4a843ed80cb10b703c4af7377cbb9677517bb451?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313", text: "Image 2 .jpg" }
//     ],
//     bgColor: "bg-pink-600"
//   },
//   {
//     avatar: "JA",
//     name: "Joshua Ashiru", 
//     message: "Dear Ayo, You are yet to submit your assignment for chapt...",
//     time: "15:30 pm",
//     bgColor: "bg-green-500"
//   }
// ];


// export const activities: ActivityProps[] = [
//   {
//     date: 8,
//     title: "Life Contingency Tutorials",
//     dateRange: "8th - 10th July 2021",
//     timeRange: "8 A.M - 9 A.M",
//     location: "Edulog Tutorial College, Blk 56, Lagos State.",
//     bgColor: "bg-blue-50",
//     textColor: "bg-blue-600"
//   },
//   {
//     date: 13,
//     title: "Social Insurance Test",
//     dateRange: "13th July 2021",
//     timeRange: "8 A.M - 9 A.M",
//     location: "School Hall, University Road, Lagos State",
//     bgColor: "bg-pink-50",
//     textColor: "bg-pink-600"
//   },
//   {
//     date: 18,
//     title: "Adv. Maths Assignment Due",
//     dateRange: "18th July 2021",
//     timeRange: "8 A.M - 9 A.M",
//     location: "**To be submitted via Email",
//     bgColor: "bg-green-50",
//     textColor: "bg-green-500"
//   },
//   {
//     date: 23,
//     title: "Dr. Dipo's Tutorial Class",
//     dateRange: "23rd July 2021",
//     timeRange: "10 A.M - 1 P.M",
//     location: "Edulog Tutorial College, Blk 56, Lagos State.",
//     bgColor: "bg-orange-50",
//     textColor: "bg-orange-400"
//   }
// ];


// export const performanceData: PerformanceCardProps[] = [
//   {
//     name: "Joshua Ashiru",
//     points: "9.6/10 points",
//     position: 1,
//     bgColor: "bg-yellow-400",
//     avatarBgColor: "bg-green-500",
//     avatarText: "JA",
//     medalIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2621d98201ebb8cbabec07ac580e33e7dd0d6fb65af5129425def9c35d1e887?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//   },
//   {
//     name: "Adeola Ayo",
//     points: "9/10 points",
//     position: 2,
//     bgColor: "bg-stone-300",
//     avatarBgColor: "bg-blue-600",
//     avatarText: "AA",
//     medalIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf003205cbba9beee35528c3feacd65097e693daec3f3059d31bffea806062?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//   },
//   {
//     name: "Olawuyi Tobi",
//     points: "8.5/10 points",
//     position: 3,
//     bgColor: "bg-orange-300",
//     avatarBgColor: "bg-pink-600",
//     avatarText: "OT",
//     medalIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2512c6a78021420d38e86e40935cc0d5aa2f789d4baeeae82f30bcc2cd2ed35e?placeholderIfAbsent=true&apiKey=85e478c7f39c4ba2b25ad406dcbb7313"
//   },
//   {
//     name: "Mayowa Ade",
//     points: "7/10 points",
//     position: 4,
//     bgColor: "bg-blue-50",
//     avatarBgColor: "bg-orange-400",
//     avatarText: "MA"
//   }
// ];



// export const Message: React.FC<MessageProps> = ({ 
//   avatar, 
//   name, 
//   message, 
//   time, 
//   attachment,
//   bgColor 
// }) => {
//   return (
//     <div className="flex gap-3 mt-3">
//       <div className={`self-start px-2 text-xl text-white whitespace-nowrap ${bgColor} rounded-full h-[50px] w-[50px]`}>
//         {avatar}
//       </div>
//       <div className="flex flex-col text-xs">
//         <div className="self-start text-base font-bold text-zinc-800">{name}</div>
//         <div className="mt-1.5 font-semibold text-zinc-500">{message}</div>
//         {attachment && (
//           <div className="flex gap-1.5 mt-1.5">
//             {attachment.map((item, index) => (
//               <div key={index} className="flex gap-1 px-2.5 py-1 text-blue-600 border border-blue-600 border-solid rounded-[50px]">
//                 <img
//                   loading="lazy"
//                   src={item.icon}
//                   alt=""
//                   className="object-contain shrink-0 aspect-square w-[13px]"
//                 />
//                 <div>{item.text}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="self-start text-xs font-semibold text-zinc-500">{time}</div>
//     </div>
//   );
// };


// export const PerformanceCard: React.FC<PerformanceCardProps> = ({
//   name,
//   points,
//   avatarBgColor,
//   avatarText,
//   bgColor,
//   medalIcon
// }) => {
//   return (
//     <div className={`flex gap-2.5 px-3.5 pb-2.5 mt-2.5 text-white ${bgColor} rounded-3xl`}>
//       <div className={`px-2 my-auto text-base whitespace-nowrap ${avatarBgColor} rounded-full h-[35px] w-[35px]`}>
//         {avatarText}
//       </div>
//       <div className="flex flex-col">
//         <div className="flex gap-5 items-start text-base">
//           <div className="grow shrink mt-3.5 w-[100px]">{name}</div>
//           {medalIcon && (
//             <img
//               loading="lazy"
//               src={medalIcon}
//               alt=""
//               className="object-contain shrink-0 w-5 aspect-[0.65]"
//             />
//           )}
//         </div>
//         <div className="self-start text-xs uppercase">{points}</div>
//       </div>
//     </div>
//   );
// };
// export const Activity: React.FC<ActivityProps> = ({
//   date,
//   title,
//   dateRange,
//   timeRange,
//   location,
//   bgColor,
//   textColor
// }) => {
//   return (
//     <div className={`flex gap-2 px-4 py-5 mt-6 ${bgColor} rounded-3xl`}>
//       <div className={`px-3 my-auto text-2xl text-center text-white whitespace-nowrap ${textColor} rounded-full h-[50px] w-[50px]`}>
//         {date}
//       </div>
//       <div className="flex flex-col text-xs text-zinc-500">
//         <div className="self-start text-base text-zinc-800">{title}</div>
//         <div className="flex gap-4">
//           <div>{dateRange}</div>
//           <div>{timeRange}</div>
//         </div>
//         <div className="mt-1.5">{location}</div>
//       </div>
//     </div>
//   );
// };



// export interface MessageProps {
//   avatar: string;
//   name: string;
//   message: string;
//   time: string;
//   attachment?: {
//     icon: string;
//     text: string;
//   }[];
//   bgColor?: string;
// }

// export interface ActivityProps {
//   date: number;
//   title: string;
//   dateRange: string;
//   timeRange: string;
//   location: string;
//   bgColor: string;
//   textColor: string;
// }

// export interface SidebarItemProps {
//   icon: string;
//   label: string;
//   count?: number;
//   isActive?: boolean;
// }

// export interface PerformanceCardProps {
//   name: string;
//   points: string;
//   position: number;
//   bgColor: string;
//   avatarBgColor: string;
//   avatarText: string;
//   medalIcon?: string;
// }