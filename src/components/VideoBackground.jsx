import ReactPlayer from "react-player";
import { videoLinkConverter } from "../util/videoLinkConverter.js";

export function VideoBackground(condition) {
  return (
    <div className="fixed top-0 left-0 w-screen h-auto z-[-3]">
      <ReactPlayer
        url={videoLinkConverter(condition)}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
    </div>
  );
}
