export default function Video() {
  return (
    <section className="py-20 relative">
    
      <span className="bg-marca1 w-full h-54 absolute left-0 top-1/2"></span>
      
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-5xl max-w-[33%]">
            Venha conhecer <span className="text-marca1">nossa clínica.</span>
          </h1>
          <p className="max-w-[33%] text-lg">
            Unimos{" "}
            <span className="font-bold text-marca1">tecnologia, qualidade</span>{" "}
            e cuidado para oferecer a você a melhor experiência em saúde.
          </p>
        </div>
        
        <div className="relative z-10">
          <iframe
            className="w-full h-[700px] rounded-md"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}