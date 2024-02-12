import { ImageGallery } from "./ImageGallery.jsx";

export function Main({ url }) {
  return (
    <div className={"mx-auto max-w-[1200px]"}>
      <ImageGallery url={url} />
    </div>
  );
}
