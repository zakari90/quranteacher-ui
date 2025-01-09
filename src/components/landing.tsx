import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-green-600">IslamicLearn</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master Quran, Arabic, and Hadith
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Personalized one-on-one online classes to deepen your understanding of Islam
                </p>
              </div>
              <div className="space-x-4">
                <Button>Start Learning</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Quran Studies</h3>
                  <p className="text-center text-gray-600">
                    Learn Quranic recitation, tajweed, and tafsir with expert teachers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Globe className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Arabic Language</h3>
                  <p className="text-center text-gray-600">
                    Master Arabic grammar, vocabulary, and conversation skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <MessageCircle className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Hadith Studies</h3>
                  <p className="text-center text-gray-600">
                    Explore the sayings and actions of Prophet Muhammad (PBUH).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "The one-on-one Quran classes have transformed my understanding of the holy book. The teacher's patience and knowledge are exceptional."
                  </p>
                  <p className="font-bold">- Ahmed S.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "Learning Arabic has never been easier. The personalized approach has helped me progress faster than I ever thought possible."
                  </p>
                  <p className="font-bold">- Fatima R.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Begin your path to deeper Islamic knowledge with our personalized one-on-one classes.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="w-full">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 IslamicLearn. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

