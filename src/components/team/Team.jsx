const Team = () => {
  return (
    <div className="bg-slate-500 bg-opacity-20 px-4 md:px-10 md:py-20 py-4 rounded-sm">
      <h1 className="text-3xl md:text-4xl pb-5 md:pb-10 text-[#FFCE6D] dancing text-center md:mb-10 mb-4">
        Our Team
      </h1>
      <div className="md:flex gap-5 justify-center" >
        <div className="bg-slate-500 bg-opacity-20 md:p-4 rounded-sm p-2 mb-2">
            <img className="w-full" src="/Team/1.png" alt="" />
            <h1 className="text-[#FFC] text-center text-lg md:text-2xl">Johnathan Demario</h1>
            <h3 className="text-white text-center text-md md:text-xl">Founder</h3>
            <p className="text-white text-center text-xs md:text-lg">In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris.</p>
        </div>
        <div className="bg-slate-500 bg-opacity-20 md:p-4 rounded-sm p-2 mb-2">
            <img className="w-full" src="/Team/2.png" alt="" />
            <h1 className="text-[#FFC] text-center text-2xl">Bryan Machado</h1>
            <h3 className="text-white text-center text-xl">Chef</h3>
            <p className="text-white text-center text-lg">Duis sed ut dolor viverra porttitor semper et faucibus facilisis. Hac maecenas rhoncus.</p>
        </div>
        <div className="bg-slate-500 bg-opacity-20 md:p-4 rounded-sm p-2 mb-2">
            <img className="w-full" src="/Team/3.png" alt="" />
            <h1 className="text-[#FFC] text-center text-2xl">Adam Joseph</h1>
            <h3 className="text-white text-center text-xl">Chef</h3>
            <p className="text-white text-center text-lg">Faucibus sed vitae dui Egestas ipsum ut a elementum at laoreet at quam vitae.</p>
        </div>

        <div className="bg-slate-500 bg-opacity-20 md:p-4 rounded-sm p-2 mb-2"   >
            <img className="w-full" src="/Team/4.png" alt="" />
            <h1 className="text-[#FFC] text-center text-2xl">Putin Desque</h1>
            <h3 className="text-white text-center text-xl">Chef</h3>
            <p className="text-white text-center text-lg">Molestie viverra mattis nisl vitae orci feugiat in. Aliquet quis orci turpis aliquet.</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
