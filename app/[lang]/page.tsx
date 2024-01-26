import Diesel from "@/assets/icons/diesel.svg";
import Displacement from "@/assets/icons/displacement.svg";
import Miles from "@/assets/icons/miles.svg";
import Transmission from "@/assets/icons/transmission.svg";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";

import SPEC_LIST from "@/components/data/SPEC_LIST";
import { Sidebar } from "@/components/sidebar";
import { TableWithHeader } from "@/components/table-with-header";
import { CarouselDApiDemo } from "@/components/carousel";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const ABOUT_CAR_DATA: { text: string; image: string }[] = [
  { text: "Diesel Fuel", image: Diesel },
  { text: "Automatic Transmission", image: Transmission },
  { text: "11,594 Miles", image: Miles },
  { text: "3.5L Displacement", image: Displacement },
];

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <main className="min-h-screen items-center justify-between w-full text-primaryText">
      <PageHeader />
      <section className="bg-[#FBFCFE] w-full flex relative h-fit">
        <div className="w-full sticky top-0">
          <CarouselDApiDemo />
        </div>
        <Sidebar />
      </section>
      <section className="py-14 px-[82px] bg-[#FBFCFE]">
        <h4 className="text-h4 mb-[42px]">About this car {page.home.title}</h4>
        <div className="flex flex-wrap gap-[120px]">
          {ABOUT_CAR_DATA.map(({ image, text }) => (
            <div key={text} className="flex items-center gap-4">
              <Image src={image} alt={text} />
              <p className="text-body1">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-14 px-[82px] bg-[#FBFCFE]">
        <h4 className="text-h4 mb-[42px]">Specifications</h4>
        <div className="grid grid-cols-3 gap-[106px]">
          {SPEC_LIST.map((spec, i) => {
            if (i > 1) return null;
            return <TableWithHeader spec={spec} key={i} />;
          })}
          <div className="flex flex-col gap-14">
            {SPEC_LIST.map((spec, i) => {
              if (i < 2) return null;
              return <TableWithHeader spec={spec} key={i} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

// const ExpandableContent = () => {
//   let [ref, { height }] = useMeasure();
//   const [expand, setExpand] = useState(false);

//   return (
//     <>
//       <motion.div animate={{ height }} className="overflow-hidden">
//         <div ref={ref} className="p-10">
//           <div>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
//             voluptatibus earum repellendus nisi fugiat nam culpa ipsa ea maiores
//             corrupti.
//           </div>
//           {expand && (
//             <div>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Perspiciatis, modi. Necessitatibus eligendi autem vel sunt id
//               repudiandae? Quam, accusantium minima! Tempora cupiditate rem illo
//               inventore necessitatibus officiis distinctio ex enim soluta
//               dolorem autem error numquam quasi dignissimos accusantium, eum
//               fuga!
//             </div>
//           )}
//         </div>
//       </motion.div>
//       <button onClick={() => setExpand(!expand)}>CLIKC</button>
//     </>
//   );
// };
