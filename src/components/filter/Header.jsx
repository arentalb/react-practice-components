import { Search } from "./Search.jsx";
import { ColorFilter } from "./ColorFilter.jsx";

export function Header({ onParamChange }) {
  return (
    <>
      <div
        className=" w-full bg-no-repeat bg-cover p-20  flex flex-col items-center"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/index/2024/02/09/04-09-59-598_1920x550.jpg)`,
        }}
      >
        <div className={"mb-20"}>
          <h1 className={"text-3xl text-green-50 mb-4 font-bold"}>
            Stunning royalty-free images & royalty-free stock
          </h1>
          <p className={"text- text-green-50 mb-16"}>
            Over 4.3 million+ high quality stock images, videos and music shared
            by our talented community.
          </p>
          <Search onParamChange={onParamChange} />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-4 mt-6 mb-14">
        <div>
          <ColorFilter onParamChange={onParamChange} />
        </div>
      </div>
    </>
  );
}
