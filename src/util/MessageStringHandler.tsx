import { MessageType } from '../enums/MessageType';
import MessageStrings from '../resources/MessageStrings';

type UnusedIndexesCache = Map<MessageType, Array<number>>;
const Cache: UnusedIndexesCache = new Map<MessageType, Array<number>>();

let last: number = -1;

const getMessageString = (messageType: MessageType): string => {
  let randomIndex: number = getRandomIndex(messageType);
  removeIndexFromCache(messageType, randomIndex);

  last = randomIndex;

  return MessageStrings[messageType][randomIndex];
};

const getIndexArray = (messageType: MessageType): Array<number> => {
  let array: Array<number> | undefined = Cache.get(messageType);
  if (typeof array == 'undefined') {
    array = [];
    Cache.set(messageType, array);
  }
  return array;
};

const getRandomIndex = (messageType: MessageType): number => {
  let indexArray: Array<number> = getIndexArray(messageType);

  if (indexArray.length == 0) {
    fillMessageTypeCache(messageType);
    indexArray = getIndexArray(messageType);
  }

  let randomIndex: number = Math.floor(Math.random() * indexArray.length);

  if (randomIndex == last) {
    return getRandomIndex(messageType);
  } else {
    return indexArray[randomIndex];
  }
};

const removeIndexFromCache = (
  messageType: MessageType,
  indexToRemove: number
) => {
  let indexArray: Array<number> = getIndexArray(messageType);
  let indexPosition: number = indexArray.indexOf(indexToRemove);

  if (indexPosition >= 0) {
    indexArray.splice(indexPosition, 1);
    Cache.set(messageType, indexArray);
  }
};

const fillMessageTypeCache = (messageType: MessageType) => {
  let stringArray: Array<string> = MessageStrings[messageType];
  let newArray: Array<number> = [...Array(stringArray.length).keys()];
  Cache.set(messageType, newArray);
};

export default getMessageString;
