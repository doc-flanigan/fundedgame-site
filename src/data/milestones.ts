export type Milestone = {
  year: number;
  amount: number; // USD millions, cumulative
  label: string;
  note?: string;
};

/**
 * Cumulative crowdfunding totals for Star Citizen across the years.
 * Sources: publicly reported RSI funding figures, year-end announcements.
 * Numbers are rounded to the nearest million for visual clarity.
 */
export const MILESTONES: Milestone[] = [
  { year: 2012, amount: 6, label: 'Kickstarter', note: 'Original campaign closes at $6.2M — already a record for crowdfunding.' },
  { year: 2013, amount: 35, label: 'First record broken', note: 'Crosses $35M, surpassing all prior crowdfunded video games combined.' },
  { year: 2014, amount: 67, label: '$50M stretch unlocked', note: 'Backer count crosses 600,000.' },
  { year: 2015, amount: 102, label: 'Nine figures', note: 'First crowdfunded project to cross $100M.' },
  { year: 2016, amount: 138, label: 'Steady climb', note: 'Persistent universe alpha expands; backer count crosses 1.5M.' },
  { year: 2017, amount: 178, label: '3.0 alpha', note: 'Major patch ships; funding accelerates again.' },
  { year: 2018, amount: 211, label: 'Outside investment', note: '$46M private investment from Calder Partners (separate from crowdfunding totals).' },
  { year: 2019, amount: 250, label: 'Quarter billion', note: 'Crosses $250M crowdfunded.' },
  { year: 2020, amount: 333, label: 'Pandemic surge', note: 'Backers double down during lockdowns.' },
  { year: 2021, amount: 412, label: '$400M crossed', note: 'Squadron 42 progress updates resume.' },
  { year: 2022, amount: 500, label: 'Half a billion', note: 'Half-billion-dollar milestone hit a decade after Kickstarter.' },
  { year: 2023, amount: 600, label: '$600M', note: 'Pyro system reveal energizes the community.' },
  { year: 2024, amount: 700, label: 'Most funded ever', note: 'Star Citizen surpasses $700M — no other crowdfunded project comes close.' },
];

export const HEADLINE_STATS = [
  {
    value: '$700M+',
    label: 'Raised from backers',
    sub: 'Largest crowdfunded project in history',
  },
  {
    value: '3M+',
    label: 'Individual backers',
    sub: 'A pledge for every household in Chicago',
  },
  {
    value: '13 yrs',
    label: 'In active development',
    sub: 'Since the 2012 Kickstarter that started it all',
  },
  {
    value: '#1',
    label: 'Crowdfunded project ever',
    sub: 'No other campaign in any category is close',
  },
];
