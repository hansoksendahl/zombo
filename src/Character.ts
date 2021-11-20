
import Emoji from './Emoji.ts';

type Position2D = [number, number];

export default class Character {
  emoji: Emoji;
  position: Position2D;
  heading: number;
  speed: number;

  constructor(emoji: Emoji, position: Position2D, heading: number, speed: number = 1) {
    this.emoji = emoji;
    this.position = position;
    this.heading = heading;
    this.speed = speed;
  }

  setEmoji(emoji: Emoji) {
    this.emoji = emoji;
  }

  setPosition(positionX: number, positionY: number) {
    this.position = [positionX, positionY];
  }

  setHeading(heading: number) {
    this.heading = heading;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }
}
