import CalendarPage from '@/app/component/calendar'
import { BarChartComponent, ChartComponent, LineChartComponent } from '@/app/component/chart'
import { MoreHorizontal } from 'lucide-react'
import React from 'react'

function TeacherHome() {
  return (
    <section>
    <div className='w-full'>
      {/* card sections */}
      <div className='ml-auto mr-auto  grid grid-cols-2 lg:grid-cols-4 gap-1'>
        
    <div className='bg-blue-400 w-[200px] h-[100px] flex rounded-xl p-2'>
      <div className='w-3/4' >
          <div>
              <span className='bg-primary-foreground text-xs p-1 border-2 border-solid border-black rounded-xl'>
              2025/25
          </span>
          <p className='font-bold text-lg mt-2'>
              1234
          </p>
          <p className='text-primary'>Students</p>
          </div>

      </div>
      <div className='hover:cursor-pointer h-1'>
      <MoreHorizontal className='text-white'/>
    </div>

  </div>

  <div className='bg-blue-400 w-[200px] h-[100px] flex rounded-xl p-2'>
      <div className='w-3/4' >
          <div>
              <span className='bg-primary-foreground text-xs p-1 border-2 border-solid border-black rounded-xl'>
              2025/25
          </span>
          <p className='font-bold text-lg mt-2'>
              1234
          </p>
          <p className='text-primary'>Students</p>
          </div>

      </div>
      <div className='hover:cursor-pointer h-1'>
      <MoreHorizontal className='text-white'/>
    </div>

  </div>
  <div className='bg-blue-400 w-[200px] h-[100px] flex rounded-xl p-2'>
      <div className='w-3/4' >
          <div>
              <span className='bg-primary-foreground text-xs p-1 border-2 border-solid border-black rounded-xl'>
              2025/25
          </span>
          <p className='font-bold text-lg mt-2'>
              1234
          </p>
          <p className='text-primary'>Students</p>
          </div>

      </div>
      <div className='hover:cursor-pointer h-1'>
      <MoreHorizontal className='text-white'/>
    </div>

  </div>
  <div className='bg-blue-400 w-[200px] h-[100px] flex rounded-xl p-2'>
      <div className='w-3/4' >
          <div>
              <span className='bg-primary-foreground text-xs p-1 border-2 border-solid border-black rounded-xl'>
              2025/25
          </span>
          <p className='font-bold text-lg mt-2'>
              1234
          </p>
          <p className='text-primary'>Students</p>
          </div>

      </div>
      <div className='hover:cursor-pointer h-1'>
      <MoreHorizontal className='text-white'/>
    </div>

  </div>
      </div>

    </div>
    <div>
      <h1 className='text-2xl font-bold'>chart</h1>
    <div className='flex'>
    

      <ChartComponent/>

      <BarChartComponent/>
    </div>
    </div>
    {/* <LineChartComponent/> */}
      {/* <CalendarPage/> */}
      {/* events */}
      {/* <section>

      <div className="max-w-5xl mx-auto mt-8">
        <h1>events</h1>
        <EventList />
</div>
<div>
  <h2>annonncement</h2>
  <div className='bg-blue-400 w-[300px] h-[100px]'>
    <h3 className='text-xl font-medium'> test math</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
      </section> */}
    </section>

  )
}

export default TeacherHome


const events = [
  { title: "Event 1", date: "January 1, 2022", description: "Some description goes here..." },
  { title: "Event 2", date: "February 1, 2022", description: "Some description goes here..." },
  { title: "Event 3", date: "March 1, 2022", description: "Some description goes here..." },
  { title: "Event 4", date: "April 1, 2022", description: "Some description goes here..." }
];

const EventList = () => {
  return (
      <div className="border-l-2 border-gray-500 pl-8">
          {events.map((event, index) => (
              <div className={`flex flex-col md:flex-row md:justify-between mt-8`} key={index}>
                  <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm">Date: {event.date}</p>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
              </div>
          ))}
      </div>
  );
};


