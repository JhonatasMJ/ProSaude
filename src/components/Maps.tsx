import { Instagram } from "lucide-react";

export default function Maps() { 
    return (
         <div className="relative top-1/2 -right-75 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[750px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464.7642796649903!2d-48.5074380084851!3d-21.26694517981974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b947ccf6030055%3A0xcad08de1de8c3c1e!2sPr%C3%B3%20Sa%C3%BAde%20Monte%20Alto!5e0!3m2!1spt-BR!2sbr!4v1760660493299!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xs "
          ></iframe>

          <div>
            <a
              href="#"
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-marca1 font-bold px-6 py-3 rounded-md shadow-md hover:bg-marca1 hover:text-white transition-colors"
            >
              Ver no Google Maps
            </a>
            <div className="absolute top-0 left-0 -translate-x-1/2">
              <div className="flex flex-col items-center gap-4 z-100 ">
                <a
                  href="#"
                  className=" bg-marca2 text-white font-bold p-3 cursor-pointer rounded-md shadow-md transition-colors "
                >
                  <Instagram className="inline-block " />
                </a>

                  <a
                  href="#"
                  className=" bg-marca2 text-white font-bold p-3 cursor-pointer rounded-md shadow-md transition-colors"
                >
                  <Instagram className="inline-block " />
                </a>

                  <a
                  href="#"
                  className=" bg-marca2 text-white font-bold p-3 cursor-pointer rounded-md shadow-md transition-colors"
                >
                  <Instagram className="inline-block " />
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}