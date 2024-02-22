//import React from 'react'

const Banner = () => {
  return (
    <>
      <div
        className="bg-[url('https://img.freepik.com/premium-photo/blueberry-background-images-natural-colors-bright-background-generative-ai_913266-15893.jpg')] 
      relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]  bg-no-repeat  bg-cover"
      ></div>

      <div className="max-sm:relative max-sm:-top-60 absolute top-60 w-full text-center">
        <p id="textOrganic">100% organic food served</p>
        <div>
          <h2 id="hight-Quality">High-Quality Organic products:</h2>
        </div>
        <p id="textdo" className="hidden lg:block">
          Why do we use it? It is a long established fact that a reader will be
        </p>
        <button className="bg-slate-100 capitalize px-10 py-4 shadow-md  font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 cursor-pointer rounded">find fruits</button>
      </div>
    </>
  );
};

export default Banner;
