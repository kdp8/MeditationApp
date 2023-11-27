'use client';
import MyTime from '@/components/MyTime';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const slogans = [
    {
      title: 'Find peace within, meditate to begin.',
      bgImg: '/bg1.jpeg',
    },
    {
      title: 'Quiet the mind, find your kind.',
      bgImg: '/bg2.jpeg',
    },
    {
      title: 'Inhale calm, exhale the storm.',
      bgImg: '/bg3.jpeg',
    },
    {
      title: 'Meditation nation, a peaceful sensation.',
      bgImg: '/bg4.jpeg',
    },
    {
      title: "Mindfulness in every breath, conquer life's depth.",
      bgImg: '/bg5.jpeg',
    },
    {
      title: 'Serenity starts with a single thought.',
      bgImg: '/bg6.jpeg',
    },
    {
      title: 'Elevate your mind, meditate in kind.',
      bgImg: '/bg7.jpeg',
    },
    {
      title: 'Inner peace is the ultimate release.',
      bgImg: '/bg8.jpeg',
    },
    {
      title: 'Harmony within, where life begins.',
      bgImg: '/bg9.jpeg',
    },
    {
      title: 'Breathe in, bliss out.',
      bgImg: '/bg10.jpeg',
    },
    {
      title: 'Silence the chaos, embrace the stillness.',
      bgImg: '/bg11.jpeg',
    },
    {
      title: 'Meditate to liberate, cultivate a tranquil state.',
      bgImg: '/bg12.jpeg',
    },
    {
      title: 'Peaceful minds, unified finds.',
      bgImg: '/bg13.jpeg',
    },
    {
      title: 'In the silence, find resilience.',
      bgImg: '/bg14.jpeg',
    },
    {
      title: 'Awaken the soul, let meditation control.',
      bgImg: '/bg15.jpeg',
    },
    {
      title: "Mindful moments, life's best components.",
      bgImg: '/bg16.jpeg',
    },
    {
      title: 'Calm the mind, find the divine.',
      bgImg: '/bg17.jpeg',
    },
    {
      title: 'Breathe deeply, live completely.',
      bgImg: '/bg18.jpeg',
    },
    {
      title: 'Quiet the chatter, find what matters.',
      bgImg: '/bg19.jpeg',
    },
    {
      title: 'Meditate to radiate positivity.',
      bgImg: '/bg20.jpeg',
    },
    {
      title: 'Discover the power within, let the journey begin.',
      bgImg: '/bg21.jpeg',
    },
    {
      title: 'Stillness speaks, listen to the peace it seeks.',
      bgImg: '/bg22.jpeg',
    },
    {
      title: 'Center your soul, let the universe play its role.',
      bgImg: '/bg23.jpeg',
    },
    {
      title: 'Meditation: where the mind finds its vacation.',
      bgImg: '/bg24.jpeg',
    },
    {
      title: 'Meditation: where the mind finds its vacation.',
      bgImg: '/bg25.jpeg',
    },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(Math.floor(Math.random() * 25));
  }, []);

  return (
    <>
      <Navbar className="absolute" />
      <div
        className="h-screen w-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${slogans[index].bgImg})` }}
      >
        <div>
          <MyTime />
          <h1
            className="text-6xl text-white font-bold text-shadow px-3 text-center"
            style={{
              textShadow: '0 0 4px #000',
            }}
          >
            {slogans[index].title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
