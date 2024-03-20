import FlatList from "@/components/atoms/List/FlatList";
import { videos } from "@/lib/api/data";
import React from "react";
import VideoCard from "../Card/VideoCard";

const VideoList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:pl-2 xl:pl-8 gap-3 sm:p-4 py-6">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        RenderItem={(item) => <VideoCard details={item} />}
      />
    </div>
  );
};

export default VideoList;
