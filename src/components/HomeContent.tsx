import HomeItem1 from "./HomeItem1";
import HomeItem2 from "./HomeItem2";
import HomeItem3 from "./HomeItem3";
import HomeItem4 from "./HomeItem4";
import Partners from "./partners";

const HomeContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <HomeItem1 />
      <div className="mx-auto max-w-[110rem] space-y-16 py-[6.25rem] px-4 lg:px-8">
        <HomeItem2 />
        <HomeItem3 />
        <HomeItem4 />
      </div>
      <Partners />
    </div>
  );
};
export default HomeContent;
