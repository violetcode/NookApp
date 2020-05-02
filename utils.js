import {styles} from './components/style';

export const MONTH_NAMES_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formatHour = hours => {
  // hours comes in like 18:00, extract just 18
  hours = +hours.substr(0, 2);

  //it is pm if hours from 12 onwards
  var suffix = hours >= 12 ? 'pm' : 'am';

  //only -12 from hours if it is greater than 12 (if not back at mid night)
  var hours = hours > 12 ? hours - 12 : hours;

  //if 00 then it is 12 am
  var hours = hours === '00' ? 12 : hours;

  return hours + suffix;
};

export const getRarityStyle = rarity => {
  switch (rarity) {
    case 'Common':
      return styles.common;
    case 'Uncommon':
      return styles.uncommon;
    case 'Rare':
      return styles.rare;
    case 'Ultra-rare':
      return styles.ultrarare;
  }
};

export const getRarityDotStyle = rarity => {
  switch (rarity) {
    case 'Common':
      return styles.commonDot;
    case 'Uncommon':
      return styles.uncommonDot;
    case 'Rare':
      return styles.rareDot;
    case 'Ultra-rare':
      return styles.ultrarareDot;
  }
};
