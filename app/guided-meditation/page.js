'use client';
import dynamic from 'next/dynamic';
import MaditationList from '@/components/MaditationList';
import Navbar from '@/components/Navbar';
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  ssr: false,
});
import React, { useState } from 'react';

const GuidedMeditation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/audiobg1.jpeg')` }}
      >
        <Navbar className="stickey" />
        <div
          className="overflow-y-scroll scrollbar-thin"
          style={{ height: 'calc(100% - 70px)' }}
        >
          {selectedItem ? (
            <div className="sm:w-[70%] px-5 mt-[160px] m-auto">
              <div className="flex justify-end my-4 sm:my-8">
                <button
                  type="button"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => setSelectedItem(null)}
                >
                  BACK
                </button>
              </div>
              <div>
                <VideoPlayer url={selectedItem.url} />
              </div>
            </div>
          ) : (
            <MaditationList setSelectedItem={setSelectedItem} />
          )}
        </div>
      </div>
    </>
  );
};

export default GuidedMeditation;
