import { Bell, MessageCircle, Projector, School2, Search } from 'lucide-react';
import React from 'react';
import Menu from '../component/Menu';

const DashboardLayout= ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
            <header className='w-full container'>
                <div className='w-full'>
                <div className='flex justify-between items-center p-4'>
                    <h1 className='flex gap-1'> <School2 /> quran teacher</h1>
                    <div className='hidden md:flex items-center border-2 rounded-3xl  p-2' >
                        <Search
                        width={14} height={14}
                        /><input 
                        type="text" 
                        placeholder=' search...'
                        />
                    </div>
                    <div className='flex gap-4'>
                        <MessageCircle />
                        <div className='relative w-8'>
                        <Bell/>
                        <span className='absolute top-0 right-0 bg-blue-900 text-white rounded-full w-3 h-3 flex items-center justify-center text-xs'>
                            1
                        </span>
                        </div>
                        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Projector />
                    </div>
    
                </div>
                

                </div>
                
            </header>
            <section className='flex'>
                    <Menu/>    
            <main className=' w-full bg-primary-foreground'>
                

                {children}</main>
            </section>
            <footer>
                <p>© 2023 My Project</p>
            </footer>
        </div>
    );
};

export default DashboardLayout;