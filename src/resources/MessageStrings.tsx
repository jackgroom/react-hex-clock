import { MessageType } from '../enums/MessageType';

export default {
  [MessageType.default]: [
    'For all you bird brains out there, the format is: 00:00:00 (hour, minute, second)',
    // "For you bird brains out there, the format is: 00:00:00 (hour, minute, second)",
    // "Aren't hex codes lovely?",
    // "Daylight savings: "..dls,
    // "Current day in year: "..date.yday,
    // "Days until christmas: "..(359 (359 - date.yday)),
    // "Current time in idiot format: "..hour..":"..min..":"..sec,
    // "How's this "..days[date.wday].." treating you so far?"
  ],
  [MessageType.morning]: [
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
  ],
  [MessageType.afternoon]: [
    'Good afternoon.',
    'Eaten lunch yet?',
    "Hope it's sunny and warm where you are.",
    "How's the weather treating you this afternoon?",
    'I should probably make lunch soon...',
    "I bet you're having so much fun, sitting here watching time tick by...",
  ],
  [MessageType.evening]: [
    "I'm getting sleepy...",
    'What a beautiful sunset.',
    'Should probably head to bed soon...',
    '*Yawn*',
    'Sleep well.',
    'Sweet dreams.',
    'Have you eaten dinner yet?',
    "Don't forget to brush your teeth.",
    'You know, you should stop using all electronics 30 minutes before bed.',
  ],

  [MessageType.night]: [
    "You're up a bit late, aren't you?",
    // "You do know it's "..date.hour.." AM, right...?",
    "Don't you have school tomorrow? (or should I say, this morning).",
    'Bit of a night owl, are you?',
    'It certainly is peaceful this time of night',
    'You should probably go to sleep...',
    "You're going to regret staying up this late in the morning. (Oh wait; it is the morning)",
    'How about a midnight snack?',
    "Man, I'm getting sleepy.",
    "Go to sleep already, you're keeping me awake.",
  ],
};
