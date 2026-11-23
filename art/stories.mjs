// Every story below happened, was first reported, or is scheduled to happen on
// Monday 23 November 2026 (UTC). Tags say how sure we are; FORECAST = on today's schedule.
export const DAY = { weekday: 'MONDAY', date: '23 NOVEMBER 2026', short: '23 NOV' };
export const FILED = '00:55';

export const LEADS = [
  {
    n: 1, region: 'ASIA', place: 'SEOUL', field: 'Markets', pic: 'marketdown', back: 'steel', lon: 127, lat: 37.6, utc: '00:00', when: 'Kospi open',
    head: 'Kospi opens 2.8% lower as the AI rout reaches Monday',
    body: 'Seoul opened at 4,734.90 and slid to 4,715.29 (-3.18%) by 09:03 KST, after Friday’s 5.2% plunge. Kosdaq -1.47%. A 10.76tn-won rescue fund stands ready.',
    tag: 'CONFIRMED', src: 'SBS News, 00:23 UTC',
  },
  {
    n: 2, region: 'EUROPE', place: 'DYMER, KYIV OBLAST', field: 'War', pic: 'drone', back: 'dusk', lon: 30.3, lat: 50.8, utc: '00:07', when: 'Dymer toll 7',
    head: 'Dymer drone-strike toll rises to seven as rubble search goes on',
    body: 'Overnight update: at least 7 dead and 6 hurt in the five-storey block north of Kyiv; a boy of 7 was pulled out alive after 14 hours. Kyiv Oblast mourns today.',
    tag: 'REPORTED', src: 'Kyiv Independent, 02:07 Kyiv',
  },
  {
    n: 3, region: 'EUROPE', place: 'BRUSSELS', field: 'Security', pic: 'summit', back: 'sky', lon: 4.4, lat: 50.9,
    head: 'NATO allies meet in emergency session over missiles in Poland',
    body: 'An extraordinary North Atlantic Council convenes after two Kh-101 missiles and a suspected drone entered Polish airspace on 20 Nov. Warsaw brings air-defence asks.',
    tag: 'FORECAST', src: 'Censor.net / EU Today',
  },
];

export const CARDS = [
  { n: 4, region: 'N.AMERICA', place: 'New York', field: 'Markets', pic: 'market', back: 'grass', lon: -74, lat: 40.7, utc: '00:01', when: 'US futures',
    head: 'US futures bounce: Nasdaq 100 +2.8%, S&P +2.0%', tag: 'CONFIRMED', src: 'MLQ.ai' },
  { n: 5, region: 'N.AMERICA', place: 'Comex', field: 'Commodities', pic: 'coin', back: 'sand', lon: -87.6, lat: 41.9,
    head: 'Gold jumps 1.8% to $3,579.60 at the reopen', tag: 'CONFIRMED', src: 'MLQ.ai' },
  { n: 6, region: 'ASIA', place: 'Taipei', field: 'Finance', pic: 'bank', back: 'steel', lon: 121.6, lat: 25, utc: '01:00', when: 'Taiwan ban',
    head: 'Taiwan bans short sales of falling stocks', tag: 'OFFICIAL', src: 'MLQ.ai / TNW' },
  { n: 7, region: 'ASIA', place: 'Quezon City', field: 'Transport', pic: 'protest', back: 'sky', lon: 121.05, lat: 14.65,
    head: 'Jeepney strike starts; 6,000 police on alert', tag: 'REPORTED', src: 'GMA News' },
  { n: 8, region: 'ASIA', place: 'Tokyo', field: 'Holiday', pic: 'calendar', back: 'paper', lon: 139.7, lat: 35.7,
    head: 'Tokyo stocks and JGBs shut for Labor Thanksgiving Day', tag: 'OFFICIAL', src: 'JPX' },
  { n: 9, region: 'OCEANIA', place: 'Adelaide', field: 'Energy', pic: 'oil', back: 'sand', lon: 138.6, lat: -34.9, utc: '00:20', when: 'Beach resumes',
    head: 'Beach Energy trades again after Santos halt', tag: 'CONFIRMED', src: 'ABC News' },
  { n: 10, region: 'OCEANIA', place: 'Wellington', field: 'Sport', pic: 'trophy', back: 'grass', lon: 174.8, lat: -41.3,
    head: 'Test final day: NZ 119/2, 233 behind India', tag: 'FORECAST', src: 'RNZ' },
  { n: 11, region: 'LATAM', place: 'Kourou', field: 'Space', pic: 'rocket', back: 'night', lon: -52.8, lat: 5.2, utc: '11:09', when: 'Ariane 6',
    head: 'Ariane 6 set to loft 36 Amazon Leo satellites', tag: 'FORECAST', src: 'RocketLaunch.org' },
  { n: 12, region: 'N.AMERICA', place: 'Mexico City', field: 'Sport', pic: 'ball', back: 'night', lon: -99.15, lat: 19.3, utc: '01:20', when: '49ers–Vikings',
    head: '49ers (8-1) face Vikings (7-2) at Estadio Banorte', tag: 'FORECAST', src: 'ESPN' },
  { n: 13, region: 'EUROPE', place: 'Strasbourg', field: 'Politics', pic: 'vote', back: 'sky', lon: 7.8, lat: 48.6,
    head: 'EU Parliament week opens on 2028–34 budget', tag: 'FORECAST', src: 'Eunews' },
  { n: 14, region: 'AFRICA', place: 'Centurion', field: 'Sport', pic: 'medal', back: 'grass', lon: 28.2, lat: -25.9, utc: '08:00', when: 'SA v Ban',
    head: 'South Africa v Bangladesh 2nd Test begins', tag: 'FORECAST', src: 'Cricinfo' },
  { n: 15, region: 'MIDEAST', place: 'Doha', field: 'Technology', pic: 'satellite', back: 'sand', lon: 51.5, lat: 25.3,
    head: 'ITU Plenipotentiary enters its final week in Qatar', tag: 'FORECAST', src: 'Daily News Egypt' },
];

export const BRIEFS = [
  { n: 16, region: 'ASIA', field: 'Markets', text: 'Kosdaq opens 1.47% down at 636.20', tag: 'CONFIRMED', src: 'SBS', lon: 127.2, lat: 36.8 },
  { n: 17, region: 'N.AMERICA', field: 'Markets', text: 'Dow futures +1.3% to 48,843 at 7pm ET', tag: 'CONFIRMED', src: 'MLQ.ai' },
  { n: 18, region: 'N.AMERICA', field: 'Crypto', text: 'Bitcoin edges up 1.5% to $61,171', tag: 'CONFIRMED', src: 'MLQ.ai' },
  { n: 19, region: 'MIDEAST', field: 'Energy', text: 'Brent slips 0.8% to $91.83 amid Hormuz risk', tag: 'CONFIRMED', src: 'MLQ.ai', lon: 56.3, lat: 26.6 },
  { n: 20, region: 'N.AMERICA', field: 'Energy', text: 'WTI crude -0.7% to $82.85 at the reopen', tag: 'CONFIRMED', src: 'MLQ.ai' },
  { n: 21, region: 'EUROPE', field: 'War', text: 'Kyiv Oblast holds a day of mourning', tag: 'OFFICIAL', src: 'Kyiv Independent' },
  { n: 22, region: 'EUROPE', field: 'Education', text: 'Odesa schools go remote all week after strikes', tag: 'OFFICIAL', src: 'France 24', lon: 30.7, lat: 46.5 },
  { n: 23, region: 'ASIA', field: 'Disaster', text: 'Search resumes for 29+ missing at Cikande fire', tag: 'FORECAST', src: 'The Standard', lon: 106.4, lat: -6.25 },
  { n: 24, region: 'ASIA', field: 'Markets', text: 'China, HK trade first session after support steps', tag: 'FORECAST', src: 'Business Day', utc: '01:30', when: 'HK open', lon: 114.2, lat: 22.3 },
  { n: 25, region: 'ASIA', field: 'Finance', text: 'Korea’s ₩10.76tn stock rescue fund on standby', tag: 'FORECAST', src: 'investingLive' },
  { n: 26, region: 'ASIA', field: 'Economy', text: 'Singapore October CPI due at 05:00 UTC', tag: 'FORECAST', src: 'Investing.com', utc: '05:00', when: 'SG CPI', lon: 103.85, lat: 1.3 },
  { n: 27, region: 'ASIA', field: 'Economy', text: 'HSBC flash India PMI for November due', tag: 'FORECAST', src: 'S&P Global', lon: 72.9, lat: 19.1 },
  { n: 28, region: 'ASIA', field: 'Diplomacy', text: 'Nepal PM Balendra Shah holds talks with Modi', tag: 'FORECAST', src: 'India Today NE', lon: 77.2, lat: 28.6 },
  { n: 29, region: 'ASIA', field: 'Justice', text: 'Philippine courts shut in Benguet for local holiday', tag: 'OFFICIAL', src: 'GMA News', lon: 120.6, lat: 16.5 },
  { n: 30, region: 'EUROPE', field: 'Economy', text: 'German flash PMI 08:30, eurozone 09:00 UTC', tag: 'FORECAST', src: 'LiteFinance', utc: '09:00', when: 'EZ PMI', lon: 8.7, lat: 50.1 },
  { n: 31, region: 'EUROPE', field: 'Economy', text: 'UK flash November PMI due at 09:30 UTC', tag: 'FORECAST', src: 'LiteFinance', lon: -0.1, lat: 51.5 },
  { n: 32, region: 'N.AMERICA', field: 'Economy', text: 'US flash PMIs due at 14:45 UTC', tag: 'FORECAST', src: 'LiteFinance', utc: '14:45', when: 'US PMI', lon: -77, lat: 38.9 },
  { n: 33, region: 'EUROPE', field: 'Fisheries', text: 'EU ministers set 2027 Atlantic fishing quotas', tag: 'FORECAST', src: 'Council of the EU' },
  { n: 34, region: 'EUROPE', field: 'Rights', text: 'UN business & human rights forum opens, Geneva', tag: 'FORECAST', src: 'Northeastern CGLJ', lon: 6.1, lat: 46.2 },
  { n: 35, region: 'EUROPE', field: 'Rights', text: 'UN anti-torture subcommittee starts 58th session', tag: 'FORECAST', src: 'Northeastern CGLJ' },
  { n: 36, region: 'EUROPE', field: 'Justice', text: 'Poland due to close Mołodycz missile-debris probe', tag: 'FORECAST', src: 'Kyiv Independent', lon: 22.6, lat: 50 },
  { n: 37, region: 'LATAM', field: 'Politics', text: 'Brazil’s lower house opens session on fiscal pack', tag: 'FORECAST', src: 'Rio Times', lon: -47.9, lat: -15.8 },
  { n: 38, region: 'LATAM', field: 'Holiday', text: 'Argentina marks Sovereignty Day; banks shut', tag: 'OFFICIAL', src: 'Rio Times', lon: -58.4, lat: -34.6 },
  { n: 39, region: 'ASIA', field: 'Markets', text: 'Kospi at 4,756.87 (-2.3%) at 09:13 KST', tag: 'CONFIRMED', src: 'MLQ.ai' },
  { n: 40, region: 'AFRICA', field: 'Investment', text: 'Invest Ghana Summit opens in Accra', tag: 'FORECAST', src: 'NewsGhana', lon: -0.2, lat: 5.6 },
  { n: 41, region: 'ASIA', field: 'Health', text: 'CPHI & PMEC India pharma fair opens (to 26 Nov)', tag: 'FORECAST', src: 'The Pharma Letter', lon: 77.5, lat: 28.5 },
];

export const LEFT_OUT = [
  { story: 'Drones destroy Dymer apartment block (only today’s toll used)', real: '22 NOV' },
  { story: 'Russian corvette hit by sea drone at Benghazi', real: '22 NOV' },
  { story: 'COP31 talks in Antalya end in collapse', real: '22 NOV' },
  { story: 'Australia flash PMI 48.7 (out 22:00 UTC)', real: '22 NOV' },
  { story: 'Bengals at Commanders, Monday Night Football', real: '24 NOV 01:15' },
];

export const SOURCES = 'SBS · MLQ.ai · Kyiv Independent · GMA News · ABC News · JPX · RNZ · ESPN · Eunews · France 24 · Rio Times · Council of the EU · S&P Global · Investing.com · Cricinfo · RocketLaunch.org';
