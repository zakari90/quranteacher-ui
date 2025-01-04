import React from 'react';
import Menu from '../component/Menu';

const DashboardLayout= ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
            <div className="w-full h-6 bg-background text-secondary-foreground text-center news-bar-container">
                <div className={ 'bg-black text-white text-center pb-0.5 rounded-e-full rounded-ss-full font-light overflow-hidden marqueeAr'}>
                سجل واحصل على خصم
                </div>
            </div>
            <section className='flex'>
                <Menu role="admin" />    
            <main className=' w-full'>
                {children}
            </main>
            </section>
            <footer>
                <p>© 2023 My Project</p>
            </footer>
        </div>
    );
};

export default DashboardLayout;