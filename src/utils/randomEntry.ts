import randomInt from './randomInt.ts';

export default function randomEntry<T extends unknown[]>(arr: T) {
  return arr[randomInt(arr.length)]
}