'use client';
import dynamic from 'next/dynamic';
import MaditationList from '@/components/MaditationList';
import Navbar from '@/components/Navbar';
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  ssr: false,
});
import React, { useState } from 'react';

const GuidedMeditation = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <div>
      <Navbar className="sticky" />
      <div>
        {selectedVideo ? (
          <div className="sm:w-[70%] m-auto">
            <div className="flex justify-end my-4 sm:my-1">
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setSelectedVideo(null)}
              >
                BACK
              </button>
            </div>
            <div>
              <VideoPlayer url={selectedVideo.url} />
            </div>
          </div>
        ) : (
          <MaditationList setSelectedVideo={setSelectedVideo} />
        )}
      </div>
    </div>
  );
};

export default GuidedMeditation;
