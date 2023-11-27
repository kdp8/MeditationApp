const list = [
  {
    title:
      'Positive Energy Chakra Meditation 10 Minute Guided Activation & Alignment',
    url: '/videos/Positive Energy Chakra Meditation 10 Minute Guided Activation & Alignment.mp4',
  },
  {
    title:
      'This Powerful 6-phase Morning Meditation has Everything You Could Want in a Guided Meditation',
    url: '/videos/This Powerful 6-phase Morning Meditation has Everything You Could Want in a Guided Meditation.mp4',
  },
  {
    title: 'Become Amazing at Meditation ~ A Guided Meditation for Beginners',
    url: '/videos/Become Amazing at Meditation ~ A Guided Meditation for Beginners.mp4',
  },
  {
    title:
      'Increase your Vibrational Frequency With Positive Energy Guided Meditation',
    url: '/videos/Increase your Vibrational Frequency With Positive Energy Guided Meditation.mp4',
  },
  {
    title: 'The Perfect Mindfulness Meditation in only 10 Minutes',
    url: '/videos/The Perfect Mindfulness Meditation in only 10 Minutes.mp4',
  },
  {
    title:
      "It's a Good Morning Meditation Guided & Energise with Positive Energy Love & Light",
    url: "/videos/It's a Good Morning Meditation Guided & Energise with Positive Energy Love & Light.mp4",
  },
  {
    title: 'Morning Meditation for Health Wealth & Happiness',
    url: '/videos/Morning Meditation for Health Wealth & Happiness.mp4',
  },
  {
    title:
      'This Morning Gratitude Meditation will leave you full of Joy & Happiness',
    url: '/videos/This Morning Gratitude Meditation will leave you full of Joy & Happiness.mp4',
  },
  {
    title: 'A Powerful Morning Meditation to Start Your Day',
    url: '/videos/A Powerful Morning Meditation to Start Your Day.mp4',
  },
  {
    title: 'Feel in Balance Using this 10 Minute Chakra Guided Meditation',
    url: '/videos/Feel in Balance Using this 10 Minute Chakra Guided Meditation.mp4',
  },
  {
    title:
      'Can you feel the powerful Self Healing Energy Within_  Try this 10 minute Guided Meditation.',
    url: '/videos/Can you feel the powerful Self Healing Energy Within_  Try this 10 minute Guided Meditation..mp4',
  },
  {
    title:
      'Feeling Fully Present in The Moment a 10 Minute Mindfulness Guided Meditation',
    url: '/videos/Feeling Fully Present in The Moment a 10 Minute Mindfulness Guided Meditation.mp4',
  },
  {
    title:
      'Feel Inspired & Alive with This Morning Motivation Guided Meditation',
    url: '/videos/Feel Inspired & Alive with This Morning Motivation Guided Meditation.mp4',
  },
  {
    title:
      'Morning Mindfulness Meditation The Perfect Way to Start Your Day...',
    url: '/videos/Morning Mindfulness Meditation The Perfect Way to Start Your Day....mp4',
  },
  {
    title:
      'Can You Feel The Difference After Using this 10 Minute Mindfulness Guided Meditation',
    url: '/videos/Can You Feel The Difference After Using this 10 Minute Mindfulness Guided Meditation.mp4',
  },
  {
    title:
      'Productive Morning Guided Meditation ~ Become Focused and Create the Perfect Day',
    url: '/videos/Productive Morning Guided Meditation ~ Become Focused and Create the Perfect Day.mp4',
  },
  {
    title:
      'Guided Mindfulness Morning Meditation ~ Just 10 Minutes to Start Your Day',
    url: '/videos/Guided Mindfulness Morning Meditation ~ Just 10 Minutes to Start Your Day.mp4',
  },
  {
    title: 'Entering Into Higher Consciousness ~ A 10 Minute Guided Meditation',
    url: '/videos/Entering Into Higher Consciousness ~ A 10 Minute Guided Meditation.mp4',
  },
  {
    title: 'Today Will Be Productive ~ Morning Guided Meditation',
    url: '/videos/Today Will Be Productive ~ Morning Guided Meditation.mp4',
  },
  {
    title: 'Wonderful Morning Meditation 10 Minute Guided Visualization',
    url: '/videos/Wonderful Morning Meditation 10 Minute Guided Visualization.mp4',
  },
  {
    title:
      'Entering into a Perfect State of Being  using Mindfulness ~ 10 Minute Guided Meditation',
    url: '/videos/Entering into a Perfect State of Being  using Mindfulness ~ 10 Minute Guided Meditation.mp4',
  },
  {
    title:
      'Leaving You Feeling Full of Gratitude ~ 10 Minute Morning Guided Meditation',
    url: '/videos/Leaving You Feeling Full of Gratitude ~ 10 Minute Morning Guided Meditation.mp4',
  },
  {
    title: 'A Guided Meditation for Getting Through Difficult Situations',
    url: '/videos/A Guided Meditation for Getting Through Difficult Situations.mp4',
  },
  {
    title: 'A Safe Place for Anxiety Relief ~ 10 Minute Guided Meditation',
    url: '/videos/A Safe Place for Anxiety Relief ~ 10 Minute Guided Meditation.mp4',
  },
  {
    title:
      'Let the Sounds Bring You Into the Present Moment ~ 10 Minute Mindfulness Guided Meditation',
    url: '/videos/Let the Sounds Bring You Into the Present Moment ~ 10 Minute Mindfulness Guided Meditation.mp4',
  },
  {
    title:
      'A Powerful 3-phase Guided Meditation ~ Mindfulness ~ Letting go ~ Gratitude',
    url: '/videos/A Powerful 3-phase Guided Meditation ~ Mindfulness ~ Letting go ~ Gratitude.mp4',
  },
  {
    title: 'Powerful Morning Affirmations & Mindful Meditation',
    url: '/videos/Powerful Morning Affirmations & Mindful Meditation.mp4',
  },
];

const MaditationList = ({ setSelectedVideo }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
      {list.map((item) => (
        <div
          key={item.title}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          onClick={() => setSelectedVideo(item)}
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
