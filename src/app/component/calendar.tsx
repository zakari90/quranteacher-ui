'use client'

import React, { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BigCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const dateRange = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))

  return (
    <div className="max-w-[500px] h-[400px] mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={goToPreviousMonth} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold">{format(currentMonth, 'MMMM yyyy')}</h2>
        <Button onClick={goToNextMonth} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center font-semibold p-2">
            {day}
          </div>
        ))}
        {dateRange.map((date, idx) => (
          <div
            key={idx}
            className={`
              p-2 border rounded-lg text-center cursor-pointer transition-colors
              ${isSameMonth(date, currentMonth) ? 'bg-background' : 'bg-muted text-muted-foreground'}
              ${isSameDay(date, selectedDate as Date) ? 'bg-primary text-primary-foreground' : ''}
              hover:bg-accent hover:text-accent-foreground
            `}
            onClick={() => setSelectedDate(date)}
          >
            {format(date, 'd')}
          </div>
        ))}
      </div>
      {selectedDate && (
        <p className="mt-4 text-center">
          Selected date: {format(selectedDate, 'MMMM d, yyyy')}
        </p>
      )}
    </div>
  )
}

export default BigCalendar

