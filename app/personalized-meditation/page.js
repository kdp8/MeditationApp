'use client';
import Navbar from '@/components/Navbar';
import Question from '@/components/Question';
import VideoPlayer from '@/components/VideoPlayer';
import React, { useState } from 'react';

const list = [
  {
    title:
      '1. Positive Energy Chakra Meditation',
    url: '/audios/Positive Energy Chakra Meditation 10 Minute Guided Activation & Alignment.mp3',
    order: '111',
  },
  {
    title:
      '2. 6-phase Morning Meditation',
    url: '/audios/This Powerful 6-phase Morning Meditation has Everything You Could Want in a Guided Meditation.mp3',
    order: '112',
  },
  {
    title:
      '3. Energizing Morning',
    url: '/audios/Its a Good Morning Meditation Guided & Energise with Positive Energy Love & Light.mp3',
    order: '113',
  },
  {
    title:
      '4. Increase your Vibrational Frequency',
    url: '/audios/Increase your Vibrational Frequency With Positive Energy Guided Meditation.mp3',
    order: '121',
  },
  {
    title:'5. Mindfulness Meditation',
    url: '/audios/The Perfect Mindfulness Meditation in only 10 Minutes.mp3',
    order: '122',
  },
  {
    title:
      '6. Get Through Difficult Situations',
    url: '/audios/A-Guided-Meditation-for-Getting-Through-Difficult-Situations.mp3',
    order: '123',
  },
  {
    title: '7. Meditation for Health Wealth & Happiness',
    url: '/audios/Morning Meditation for Health Wealth & Happiness.mp3',
    order: '131',
  },
  {
    title:
      '8. Meditation for Joy & Happiness',
    url: '/audios/This Morning Gratitude Meditation will leave you full of Joy & Happiness.mp3',
    order: '132',
  },
  {
    title: '9. Start Your Day',
    url: '/audios/A-Powerful-Morning-Meditation-to-Start-Your-Day.mp3',
    order: '133',
  },
  {
    title: '10. Feel in Balance',
    url: '/audios/A-Guided-Meditation-for-Getting-Through-Difficult-Situations.mp3',
    order: '211',
  },
  {
    title:
      '11. Feel the Self Healing Energy',
    url: '/audios/Can you feel the powerful Self Healing Energy Within_ Try this 10 minute Guided Meditation..mp3',
    order: '212',
  },
  {
    title:
      '12. Feel Fully Present',
    url: '/audios/Feeling Fully Present in The Moment a 10 Minute Mindfulness Guided Meditation.mp3',
    order: '213',
  },
  {
    title:
      '13. Feel Inspired & Alive',
    url: '/audios/Feel Inspired & Alive with This Morning Motivation Guided Meditation.mp3',
    order: '221',
  },
  {
    title:
      '14. The Perfect Way to Start Your Day',
    url: '/audios/Morning Mindfulness Meditation The Perfect Way to Start Your Day....mp3',
    order: '222',
  },
  {
    title:
      '15. Relaxation',
    url: '/audios/Can You Feel The Difference After Using this 10 Minute Mindfulness Guided Meditation.mp3',
    order: '223',
  },
  {
    title:
      '16. Become Focused & Create the Perfect Day',
    url: '/audios/Productive Morning Guided Meditation Become Focused and Create the Perfect Day.mp3',
    order: '231',
  },
  {
    title:
      '17. Morning Consciousness',
    url: '/audios/Guided Mindfulness Morning Meditation Just 10 Minutes to Start Your Day.mp3',
    order: '232',
  },
  {
    title: '18. Entering Into Higher Consciousness',
    url: '/audios/Entering Into Higher Consciousness A 10 Minute Guided Meditation.mp3',
    order: '233',
  },
  {
    title: '19. Make Today Productive',
    url: '/audios/Today Will Be Productive ~ Morning Guided Meditation.mp3',
    order: '311',
  },
  {
    title: '20. Wonderful Morning Meditation',
    url: '/audios/Wonderful Morning Meditation 10 Minute Guided Visualization.mp3',
    order: '312',
  },
  {
    title:
      '21. Entering into a Perfect State of Being',
    url: '/audios/Entering into a Perfect State of Being using Mindfulness 10 Minute Guided Meditation.mp3',
    order: '313',
  },
  {
    title:
      '22. Leaving You Feeling Full of Gratitude',
    url: '/audios/Leaving You Feeling Full of Gratitude 10 Minute Morning Guided Meditation.mp3',
    order: '321',
  },
  {
    title: '23. Become Amazing at Meditation',
    url: '/audios/Become-Amazing-at-Meditation-_-A-Guided-Meditation-for-Beginners.mp3',
    order: '322',
  },
  {
    title: '24. A Safe Place for Anxiety Relief',
    url: '/audios/A-Safe-Place-for-Anxiety-Relief-_-10-Minute-Guided-Meditation.mp3',
    order: '323',
  },
  {
    title:
      '25. Let the Sounds Bring You Into the Present Moment',
    url: '/audios/Let the Sounds Bring You Into the Present Moment 10 Minute Mindfulness Guided Meditation.mp3',
    order: '331',
  },
  {
    title:
      '26. 3-phase Guided Meditation',
    url: '/audios/A-Powerful-3-phase-Guided-Meditation-_-Mindfulness-_-Letting-go-_-Gratitude.mp3',
    order: '332',
  },
  {
    title: '27. Powerful Morning Affirmations & Mindful Meditation',
    url: '/audios/Powerful Morning Affirmations & Mindful Meditation.mp3',
    order: '333',
  },
];

const PersonalizedMediation = () => {
  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');
  const [ans3, setAns3] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const options1 = [
    { title: 'Good', value: '1' },
    { title: 'Neutral', value: '2' },
    { title: 'Bad', value: '3' },
  ];
  const options2 = [
    { title: 'Happy', value: '1' },
    { title: 'Neutral', value: '2' },
    { title: 'Sad', value: '3' },
  ];
  const options3 = [
    { title: 'Light', value: '1' },
    { title: 'Neutral', value: '2' },
    { title: 'Heavy', value: '3' },
  ];
  return (
    <>
      {selectedItem ? (
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/audiobg1.jpeg')` }}
        >
          <Navbar className="stickey" />
          <div
            className="overflow-y-scroll scrollbar-thin"
            style={{ height: 'calc(100% - 70px)' }}
          >
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
          </div>
        </div>
      ) : (
        <div
          className="h-screen w-full bg-cover bg-center "
          style={{ backgroundImage: `url('/audiobg1.jpeg')` }}
        >
          <Navbar className="sticky" />
          <div className="px-5 sm:px-10 py-5">
            <Question
              label="Q1:"
              q="How did you sleep last night? "
              setAns={setAns1}
              ans={ans1}
              options={options1}
            />
            <Question
              label="Q2:"
              q="How are you feeling right now?"
              setAns={setAns2}
              ans={ans2}
              options={options2}
            />
            <Question
              label="Q3:"
              q="How was the workload today?"
              setAns={setAns3}
              ans={ans3}
              options={options3}
            />
            {list.filter((item) => item.order === ans1 + ans2 + ans3)[0]
              ?.title && (
              <>
                <h1 className="text-2xl text-red-500">
                  {
                    list.filter((item) => item.order === ans1 + ans2 + ans3)[0]
                      ?.title
                  }
                </h1>
                <button
                  type="button"
                  className="mt-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() =>
                    setSelectedItem(
                      list.filter(
                        (item) => item.order === ans1 + ans2 + ans3
                      )[0]
                    )
                  }
                >
                  Start Meditation
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalizedMediation;
