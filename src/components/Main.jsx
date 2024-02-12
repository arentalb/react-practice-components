import { ImageGallery } from "./ImageGallery.jsx";

export function Main({ gallery }) {
  return (
    <div className={"mx-auto max-w-[1200px]"}>
      <ImageGallery gallery={gallery} />
    </div>
  );
}
