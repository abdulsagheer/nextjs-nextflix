import React from "react";
import { useRouter } from "next/router";

const VideoId = () => {
  const router = useRouter();
  console.log({ router });
  return <div>VideoId</div>;
};

export default VideoId;
