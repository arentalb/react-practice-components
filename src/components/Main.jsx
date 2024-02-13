import { ImageGallery } from "./ImageGallery.jsx";

export function Main({ gallery, loadMore }) {
  return (
    <div className={"mx-auto max-w-[1200px]"}>
      <ImageGallery gallery={gallery} loadMore={loadMore} />
    </div>
  );
}
