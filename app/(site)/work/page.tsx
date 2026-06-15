import Link from "next/link";

export const revalidate = 60;

const references = [
  {
    title: "Hansen-Raumgestaltung",
    description: "Interieur | Portraits",
    url: "https://hansen-raumgestaltung.de",
  },
  {
    title: "Prof. Dr. jur. Madeleine Bernhardt",
    description: "Bilder für Webseite | Personal Branding",
    url: "https://deephumanscience.de",
  },
  {
    title: "Luise Illgen",
    description: "Portraits | Bilder für Webseite | Personal Branding",
    url: "https://www.luise-illigen.de",
  },
  {
    title: "Zahnarztpraxis Alexander Fischer",
    description: "Bilder für Webseite | Grußkarten",
    url: "https://www.zahnfischer.de/galerie",
  },
  {
    title: "Dr. Buttgereit & Dr. Muche | Tierarztpraxis",
    description: "Bilder für Webseite",
    url: "https://www.tierarzt-praxis-falkensee.de",
  },
  {
    title: "Julia Sahi",
    description: "SPD Wahlkampagne",
    url: null,
  },
  {
    title: "Pfarrhaus Alt-Teterin",
    description: "Architekturbilder für Webseite",
    url: "https://ferien-im-pfarrhaus.de/wohnung-buchfink",
  },
  {
    title: "Gittner & Gittner | Facharzt für Kieferorthopädie",
    description: "Fotos für Webseite",
    url: "https://www.kfo-gittner.de/praxis/kieferorthopaede/vita-dr-gittner.html",
  },
  {
    title: "Dr. Dr. Nahles & Kollegen | Facharzt Oralchirurgie",
    description: null,
    url: "https://www.dr-nahles-berlin.de",
  },
  {
    title: "Gerrit Fischer | Zahnarzt Barum",
    description: null,
    url: "https://zahnarzt-barum.de",
  },
  {
    title: "Karin Gräppi | Coaching",
    description: null,
    url: "https://comentra-coaching.de",
  },
  {
    title: "Ergotherapie Menzel",
    description: null,
    url: "https://www.ergotherapie-falkensee.de/ergothearapie-in-falkensee.html",
  },
  {
    title: "Maias Tortenglück",
    description: "Bilder für Flyer & Kampagne",
    url: null,
  },
  {
    title: "Ira Thamm",
    description: "Bilder für Webseite",
    url: "https://linkshaender-beratung.berlin",
  },
  {
    title: "Nadine Gäbelein-Schneck | Frauengesundheit Potsdam",
    description: null,
    url: "https://www.beckenboden-potsdam.de",
  },
  {
    title: "Natalie Orthmann | Frauengesundheit Falkensee",
    description: null,
    url: "https://www.natalieorthmann.com",
  },
  {
    title: "Hörakustik Trutz",
    description: null,
    url: "https://www.hoerakustik-trutz.de",
  },
  {
    title: "Hartmannbund",
    description: null,
    url: null,
  },
  {
    title: "EFI | Expertenkommission Forschung und Innovation",
    description: null,
    url: null,
  },
  {
    title: "Wundcare Berlin Brandenburg",
    description: null,
    url: null,
  },
  {
    title: "Tryambakam | Raum für Bewegung Klang & Kunst",
    description: null,
    url: "https://www.tryambakam.de",
  },
  {
    title: "Kapitel 8 | Buchhandlung",
    description: null,
    url: "https://kapitel8-wp.de",
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-ztneue text-4xl text-center mb-24 text-gray-900 tracking-wide">
        Referenzen
      </h1>
      
      <div className="flex flex-col gap-10">
        {references.map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col md:flex-row md:items-baseline justify-between border-b border-gray-100 pb-8 transition-colors hover:border-gray-300"
          >
            <div className="mb-2 md:mb-0 md:max-w-[60%]">
              {item.url ? (
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sukhumvit text-xl md:text-2xl text-gray-900 hover:text-gray-500 transition-colors block"
                >
                  {item.title}
                </a>
              ) : (
                <h2 className="font-sukhumvit text-xl md:text-2xl text-gray-900">
                  {item.title}
                </h2>
              )}
              {item.description && (
                <p className="text-sm font-light tracking-widest text-gray-400 mt-2 uppercase">
                  {item.description}
                </p>
              )}
            </div>
            
            {item.url && (
              <div className="mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-light tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors"
                >
                  Zur Website ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
