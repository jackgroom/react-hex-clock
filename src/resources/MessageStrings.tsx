import { MessageType } from '../enums/MessageType';
import { TimeStamp } from '../interfaces/TimeStamp';

import DateStrings from './DateStrings';

// note: i didn't want this file to contain logic, since in my mind resources should just be raw text, however i have not as of yet been able to
// come up with a better solution than this, since a few of the messages that I wanted to include required external information on time and date

const getMessageStrings = (
  messageType: MessageType,
  timeStamp: TimeStamp
): Array<string> => {
  switch (messageType) {
    case MessageType.default:
      return getDefaultStrings(timeStamp);
    case MessageType.morning:
      return getMorningStrings();
    case MessageType.afternoon:
      return getAfternoonStrings();
    case MessageType.evening:
      return getEveningStrings();
    case MessageType.night:
      return getNightStrings(timeStamp);
  }
};

const getDefaultStrings = (timeStamp: TimeStamp): Array<string> => {
  return [
    'The format is: 00:00:00 (hour, minute, second)',
    "Aren't hex codes lovely?",
    // "Daylight savings: "..dls,
    `Current day in year: ${timeStamp.date.dayOfYear}`,
    `Days until christmas: ${359 - timeStamp.date.dayOfYear}`, // not exactly accurate
    `How's this ${DateStrings.days[timeStamp.date.dayOfWeek]} been so far?`,
  ];
};

const getMorningStrings = (): Array<string> => {
  return [
    'Good morning!',
    "Hope you're feeling nice and awake this morning.",
    'Have you had your breakfast yet?',
    "You're up early...",
    'Go back to bed.',
    "You're quite the early bird...",
    "It's too early...",
    'Did you even go to sleep?',
    'Which one do you prefer; cereal or toast?',
    'Hope you have a good day today.',
  ];
};

const getAfternoonStrings = (): Array<string> => {
  return [
    'Good afternoon.',
    'Eaten lunch yet?',
    "Hope it's sunny and warm where you are.",
    "How's the weather treating you this afternoon?",
    'I should probably make lunch soon...',
    "I bet you're having so much fun, sitting here watching time tick by...",
  ];
};

const getEveningStrings = (): Array<string> => {
  return [
    "I'm getting sleepy...",
    'What a beautiful sunset.',
    'Should probably head to bed soon...',
    '*Yawn*',
    'Sleep well.',
    'Sweet dreams.',
    'Have you eaten dinner yet?',
    "Don't forget to brush your teeth.",
    'You know, you should stop using all electronics 30 minutes before bed.',
  ];
};

const getNightStrings = (timeStamp: TimeStamp): Array<string> => {
  return [
    "You're up a bit late, aren't you?",
    `You do know it's ${timeStamp.time.hours} AM, right...?`,
    "Don't you have school or work tomorrow? (or should I say, this morning).",
    'Bit of a night owl, are you?',
    'It certainly is peaceful this time of night',
    'You should probably go to sleep...',
    "You're going to regret staying up this late in the morning. (Oh, wait; it is the morning)",
    'How about a midnight snack?',
    "Man, I'm getting sleepy.",
    "Go to sleep already. You're keeping me awake.",
  ];
};

export default getMessageStrings;
