import CalendarPage from '@/app/component/calendar'
import { ChartComponent, CustomStudentCard, EventsCard, MessagesCard, TitleElement, TopStudentCard } from '@/app/component/chart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function TeacherHome() {
  return (
    <div className='flex flex-wrap'>
    <section className='max-w-4xl'>
    <div className='w-full mb-4'>
      <div className=' flex  flex-wrap justify-around'>
        <CustomStudentCard currentDate="2022-12-31" studentCount={150} />
        <CustomStudentCard currentDate="2022-12-31" studentCount={2} />
      </div>

    </div>
    <div className='flex flex-wrap justify-around gap-3'>
    

      <ChartComponent/>

      <Card className='w-72 h-96 mt-4 overflow-y-auto'>
      <CardHeader >
        <CardTitle className='ml-auto mr-auto ' >Top performming Students</CardTitle>
      </CardHeader>
      <CardContent className='ml-auto mr-auto flex flex-col gap-3  '>
        <TopStudentCard name="zakaria zinedine" hizb={55} rank={1} gender='male'  />
        <TopStudentCard name="hafida zinedine" hizb={55} rank={2} gender='female'  />
        <TopStudentCard name="zakaria zinedine" hizb={55} rank={1} gender='male'  />
        <TopStudentCard name="zakaria zinedine" hizb={55} rank={1} gender='male'  />
      </CardContent>
    </Card>
    </div>
    <div className='mt-3'>
      <div className='flex justify-between m-2'>

      <h2 className='font-bold'>Messages  </h2>
      <p className='text-primary text-sm font-semibold hover:cursor-pointer '>View All</p>
      
      </div>
      <Card className='flex flex-col gap-2 p-4 overflow-auto max-h-[300px]'>
      <MessagesCard  name= "zakaria zinedine" message="keep going incha2 lah you will make it, say bismi lah , la hamdo li lah " time ="01/05/2025 3:55" />
      <MessagesCard  name= "zakaria zinedine" message="keep going incha2 lah you will make it, say bismi lah , la hamdo li lah " time ="01/05/2025 3:55" />
      <MessagesCard  name= "zakaria zinedine" message="keep going incha2 lah you will make it, say bismi lah , la hamdo li lah " time ="01/05/2025 3:55" />
      <MessagesCard  name= "zakaria zinedine" message="keep going incha2 lah you will make it, say bismi lah , la hamdo li lah " time ="01/05/2025 3:55" />
      <MessagesCard  name= "zakaria zinedine" message="keep going incha2 lah you will make it, say bismi lah , la hamdo li lah " time ="01/05/2025 3:55" />
      <MessagesCard  name= "zakaria zinedine" message="keep going incha2 lah you will make it, say bismi lah , la hamdo li lah " time ="01/05/2025 3:55" />
      </Card>

    </div>

    </section>
    
    <section className='w-full mt-4 flex md:flex-col justify-center items-center mr-auto ml-auto'>
  <div>

        <TitleElement title = "" linkHref="/"/>
      <CalendarPage/> 
      </div>

    <div>

      <TitleElement title = "" linkHref="/"/>
      
        <EventsCard title="test" date="01/05/2025" description="solveErrorDev
file:///C:/Users/zakaria/Desktop/my%20projetc/expressnext/ui/.
// next/static/chunks/node_modules_next_dis
// t_compiled_107ce8._
// .js (3662:65)" />
    </div>

    </section>


</div>

  )
}

export default TeacherHome



