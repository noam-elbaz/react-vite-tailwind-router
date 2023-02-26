import { useState } from "react";

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full">
        <div className="bg-black py-4 pl-8 text-2xl font-extrabold text-white">
          noamelbaz.com
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col space-y-6 pt-32">
        <div className="text-5xl font-bold">Work Experience</div>
        <div className="text-5xl font-bold">Skills</div>
        <div className="flex gap-6">
          <div className="h-32 w-32 border-4"></div>
          <div className="h-32 w-32 border-4"></div>
          <div className="h-32 w-32 border-4"></div>
          <div className="h-32 w-32 border-4"></div>
          <div className="h-32 w-32 border-4"></div>
        </div>
        <div className="flex gap-6">
          <div className="h-32 w-32 border-4"></div>
          <div className="h-32 w-32 border-4"></div>
          <div className="h-32 w-32 border-4"></div>
          <div className="h-32 w-32 border-4"></div>
          <div className="h-32 w-32 border-4"></div>
        </div>

        <div className="text-5xl font-bold">Testimonials</div>
        <div className="text-5xl font-bold">Projects</div>
      </div>
    </div>
  );
}

export default App;
