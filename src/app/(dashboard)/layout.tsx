import React from 'react';
import Menu from '../component/Menu';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* News Bar */}
      <div className="mb-2 w-full h-6 bg-background text-secondary-foreground text-center news-bar-container">
        <div className="bg-primary uppercase text-white text-center pb-0.5 rounded-e-full rounded-ss-full font-light overflow-hidden">
          association ALAMAL
        </div>
      </div>

      <section className="flex ">
        <div className="h-screen sticky top-0 bg-white shadow-lg">
          <Menu role="admin" />
        </div>
        <main className=" w-full overflow-auto p-4">
          {children}
        </main>
      </section>

      <footer className="bg-secondary-foreground text-center text-primary p-4">
        <p>© HAFID Project</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
