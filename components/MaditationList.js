const list = [
  {
    title:
      '1. Positive Energy Chakra Meditation',
    url: '/audios/Positive Energy Chakra Meditation 10 Minute Guided Activation & Alignment.mp3',
  },
  {
    title:
      '2. 6-phase Morning Meditation',
    url: '/audios/This Powerful 6-phase Morning Meditation has Everything You Could Want in a Guided Meditation.mp3',
  },
  {
    title:
      '3. Energizing Morning',
    url: '/audios/Its a Good Morning Meditation Guided & Energise with Positive Energy Love & Light.mp3',
  },
  {
    title:
      '4. Increase your Vibrational Frequency',
    url: '/audios/Increase your Vibrational Frequency With Positive Energy Guided Meditation.mp3',
  },
  {
    title: '5. Mindfulness Meditation',
    url: '/audios/The Perfect Mindfulness Meditation in only 10 Minutes.mp3',
  },
  {
    title:
      '6. Get Through Difficult Situations',
    url: '/audios/A-Guided-Meditation-for-Getting-Through-Difficult-Situations.mp3',
  },
  {
    title: '7. Meditation for Health Wealth & Happiness',
    url: '/audios/Morning Meditation for Health Wealth & Happiness.mp3',
  },
  {
    title:
      '8. Meditation for Joy & Happiness',
    url: '/audios/This Morning Gratitude Meditation will leave you full of Joy & Happiness.mp3',
  },
  {
    title: '9. Start Your Day',
    url: '/audios/A-Powerful-Morning-Meditation-to-Start-Your-Day.mp3',
  },
  {
    title: '10. Feel in Balance',
    url: '/audios/A-Guided-Meditation-for-Getting-Through-Difficult-Situations.mp3',
  },
  {
    title:
      '11. Feel the Self Healing Energy',
    url: '/audios/Can you feel the powerful Self Healing Energy Within_ Try this 10 minute Guided Meditation..mp3',
  },
  {
    title:
      '12. Feel Fully Present',
    url: '/audios/Feeling Fully Present in The Moment a 10 Minute Mindfulness Guided Meditation.mp3',
  },
  {
    title:
      '13. Feel Inspired & Alive',
    url: '/audios/Feel Inspired & Alive with This Morning Motivation Guided Meditation.mp3',
  },
  {
    title:
      '14. The Perfect Way to Start Your Day',
    url: '/audios/Morning Mindfulness Meditation The Perfect Way to Start Your Day....mp3',
  },
  {
    title:
      '15. Relaxation',
    url: '/audios/Can You Feel The Difference After Using this 10 Minute Mindfulness Guided Meditation.mp3',
  },
  {
    title:
      '16. Become Focused & Create the Perfect Day',
    url: '/audios/Productive Morning Guided Meditation Become Focused and Create the Perfect Day.mp3',
  },
  {
    title:
      '17. Morning Consciousness',
    url: '/audios/Guided Mindfulness Morning Meditation Just 10 Minutes to Start Your Day.mp3',
  },
  {
    title: '18. Entering Into Higher Consciousness',
    url: '/audios/Entering Into Higher Consciousness A 10 Minute Guided Meditation.mp3',
  },
  {
    title: '19. Make Today Productive',
    url: '/audios/Today Will Be Productive ~ Morning Guided Meditation.mp3',
  },
  {
    title: '20. Wonderful Morning Meditation',
    url: '/audios/Wonderful Morning Meditation 10 Minute Guided Visualization.mp3',
  },
  {
    title:
      '21. Entering into a Perfect State of Being',
    url: '/audios/Entering into a Perfect State of Being using Mindfulness 10 Minute Guided Meditation.mp3',
  },
  {
    title:
      '22. Leaving You Feeling Full of Gratitude',
    url: '/audios/Leaving You Feeling Full of Gratitude 10 Minute Morning Guided Meditation.mp3',
  },
  {
    title: '23. Become Amazing at Meditation',
    url: '/audios/Become-Amazing-at-Meditation-_-A-Guided-Meditation-for-Beginners.mp3',
  },
  {
    title: '24. A Safe Place for Anxiety Relief',
    url: '/audios/A-Safe-Place-for-Anxiety-Relief-_-10-Minute-Guided-Meditation.mp3',
  },
  {
    title:
      '25. Let the Sounds Bring You Into the Present Moment',
    url: '/audios/Let the Sounds Bring You Into the Present Moment 10 Minute Mindfulness Guided Meditation.mp3',
  },
  {
    title:
      '26. 3-phase Guided Meditation',
    url: '/audios/A-Powerful-3-phase-Guided-Meditation-_-Mindfulness-_-Letting-go-_-Gratitude.mp3',
  },
  {
    title: '27. Powerful Morning Affirmations & Mindful Meditation',
    url: '/audios/Powerful Morning Affirmations & Mindful Meditation.mp3',
  },
];

const MaditationList = ({ setSelectedItem }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
      {list.map((item) => (
        <div
          key={item.title}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          onClick={() => setSelectedItem(item)}
        >
          <div className="min-w-0">
            <div className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MaditationList;
