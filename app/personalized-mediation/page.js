'use client';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const PersonalizedMediation = () => {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  return (
    <div>
      <Navbar className="sticky" />
      <div className="px-5 sm:px-10 py-5">
        <h1 className="text-4xl mt-3">Here will be quesiton one?</h1>
        <h1 className="text-4xl mt-3">Here will be quesiton two?</h1>
        <h1 className="text-4xl mt-3">Here will be quesiton three?</h1>
      </div>
    </div>
  );
};

export default PersonalizedMediation;
