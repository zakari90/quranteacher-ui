"use client"

import { MoreHorizontal, MoreVertical, Plus, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { LabelList, Pie, PieChart } from "recharts"

import { Bar, BarChart } from "recharts"
import Image from "next/image"
import Link from "next/link"


const chartData1 = [
  { browser: "male", visitors: 200, fill: "#2563EB" },
  { browser: "Female", visitors: 300, fill: "#FECACA" },
]

const chartConfig1 = {
  visitors: {
    label: "student",
  },
  chrome: {
    label: "Male",
    color: "#2563EB",
  },
  safari: {
    label: "Female",
    color: "#FECACA",
  },
 
} satisfies ChartConfig

export function ChartComponent() {
  return (
    <Card className="flex flex-col w-72 h-96 mt-4">
      <CardHeader className="items-center pb-0">
        <CardTitle>Students statistics</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig1}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData1} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
      <div className="flex items-center gap-2 font-medium leading-none">
        <span className="w-4 h-4 bg-blue-600"/>  Male
        <span className="w-4 h-4 bg-red-200"/>   Female

        </div>

      </CardFooter>
    </Card>
  )
}

const chartData2 = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig2 = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function BarChartComponent() {
  return (
    <Card className="w-72 h-96 mt-4">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig2}>
          <BarChart accessibilityLayer data={chartData2}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}


const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function LineChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

type TopStdProps = {
  name: string
  hizb: number
  rank: number
  gender: string
}


export function TopStudentCard({ name, hizb, rank, gender }: TopStdProps) {
  const color = gender === "male" ? "bg-[#2563EB]" :  "bg-[#FECACA]"
  return (
    <>
 <Card className={`${color} w-54 h-14 flex`}>
  <CardHeader 
    className='m-1 w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center'>
    {hizb}
  </CardHeader>
  <CardContent className="ml-4 mt-3 p-0 w-4/6" >{name}
  </CardContent>
  <CardFooter className="m-2 mt-3 p-0 w-[35px] h-[28px] rounded-full flex justify-center items-center bg-white">
  {rank}
</CardFooter>

 </Card>

    </>
 
  )
}

type HeaderProps ={
  title: string
  linkHref: string
}
export function TitleElement({title , linkHref} : HeaderProps) {
  return(
    <div className='flex justify-between m-2 w-full'>

    <h2 className='font-bold'>{title}  </h2>
    <Link href={ linkHref || "/"} className='text-primary text-sm font-semibold hover:cursor-pointer '>
    View All</Link>
    
    </div>
  )
}


type MessagesProps={
  sender? : string
  name : string
  message : string
  time : string

}

export function MessagesCard({sender, name , message, time  }:MessagesProps){
  return(
    <Card className="flex hover:cursor-pointer " >
    <CardHeader >
     <div className="mt-auto mb-auto overflow-hidden w-[45px] h-[45px] rounded-full border-2 flex justify-center items-center">
     <Image
      width={40}
      height={40}
      src={sender || "file.svg"}
      alt="sender profile picture"
      />
     </div>
      
    </CardHeader>
    <CardContent className="ml-4 mt-3 p-0 w-4/6" >
    <h2 className="font-semibold">  {name}   </h2>
    <p className="text-black/35 max-w-md max-h-8 overflow-hidden" >{message}</p>

    </CardContent>
    <CardFooter className=" text-sm  text-center text-black/35">
    {time}
  </CardFooter>
  
   </Card>
  )
}




interface EventsProps {
  title: string
  date: string
  description : string
}
export function EventsCard ({title, date, description}:EventsProps) {
  return (
  <details className={`hover:cursor-pointer`}>
      <summary className="border-l-2 flex justify-between ">
          <h3 className="text-xl font-bold mb-2 flex gap-3"><Plus/> {title}</h3>
          <p className="text-gray-600 text-sm">{date}</p>
      </summary>
      <p className="text-gray-700">{description}</p>
  </details>
  );
};


interface CustomCardProps {
  currentDate: string
  studentCount: number
}

export function CustomStudentCard({ currentDate, studentCount }: CustomCardProps) {
  return (
    <Card className="w-[200px] h-[100px] bg-primary/35 p-2">
      <CardContent className="p-0 flex justify-between h-full">
        <div className="w-3/4 flex flex-col justify-between">
          <div>
            <span className="bg-white text-xs p-1 border-2 border-solid rounded-xl">
              {currentDate}
            </span>
          </div>
          <div>
            <p className="font-bold text-lg">{studentCount.toLocaleString()}</p>
            <p className="text-white font-semibold text-sm">Students</p>
          </div>
        </div>
        <div className="self-start">
          <button
            className="hover:bg-blue-500 p-1 rounded-full transition-colors"
            aria-label="More options"
          >
            <MoreHorizontal className="text-white h-5 w-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
