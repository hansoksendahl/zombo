import Draw from './Draw.ts';
import Game from './Game.ts';
import Emoji from './Emoji.ts';
import randomInt from './utils/randomInt.ts';
import Character from './Character.ts';
import hypot from './utils/hypot.ts';
import angleTo from './utils/angleTo.ts';
import meanAngle from './utils/meanAngle.ts';

const PROFESSIONS = [
  'judge',
  'doctor',
  'student',
  'farmer',
  'cook',
  'factoryWorker',
  'officeWorker',
  'scientist',
  'technologist',
  'singer',
  'artist',
  'pilot',
  'astronaut',
  'officer',
  'fireFighter',
  // 'detective',
  'guard',
];

class World extends Game {
  draw: Draw;
  characters: Character[];
  zombies: Character[];
  characterSize: number;
  halfCharacterSize: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  centerVertical: number;
  centerHorizontal: number;
  started: boolean;

  constructor() {
    super(20);

    const element = document.getElementById('app')!

    element.addEventListener('click', () => {
      this.started = !this.started;
    })

    this.draw = new Draw(element);
    this.draw.resize(
      this.draw.root.offsetWidth,
      this.draw.root.offsetHeight,
    );
    const { width, height } = this.draw.canvas;
    this.characterSize = Math.max(width, height) / 20;
    this.halfCharacterSize = this.characterSize / 2;
    this.left = -this.halfCharacterSize;
    this.right = width + this.halfCharacterSize;
    this.top = -this.halfCharacterSize;
    this.bottom = height + this.halfCharacterSize;
    this.centerHorizontal = this.right / 2;
    this.centerVertical = this.bottom / 2;
    this.characters = (new Array(100)).fill(void 0).map(() => this.createCharacter());
    this.zombies = [this.createCharacter('zombie')];
    this.started = false;
    this.prepareStage();
  }

  createCharacter(profession: string = PROFESSIONS[randomInt(PROFESSIONS.length)]) {
    const { draw: { canvas: { width, height } } } = this;

    return new Character(
      new Emoji(profession),
      [
        Math.random() * width,
        Math.random() * height,
      ],
      Math.random() * Math.PI * 2,
      Math.random() * 0.5 + 0.5,
    )
  }

  update() {
    if (this.started) {
      this.updateCharacters();
    }
  }

  updateHeadingZombie(character: Character) {
    const { position: [x1, y1] } = character;
    const { characters } = this;
    let min;
    let targetX;
    let targetY;
    
    for (let i = 0; i < characters.length; i += 1) {
      const neighbor = characters[i];
      const { position: [x2, y2] } = neighbor;
      const distance = this.toroidalDistance(x1, y1, x2, y2);

      if (distance <= this.halfCharacterSize) {
        neighbor.emoji.setProfession('zombie');
        characters.splice(i, 1);
        this.zombies.push(neighbor);
        return;
      } else if (!min || distance < min) {
        min = distance;
        targetX = x2;
        targetY = y2;
      }
    }

    if (targetX && targetY) {
      character.heading = this.toroidalAngleTo(x1, y1, targetX, targetY);
    }
  }

  toroidalDistance(x1: number, y1: number, x2: number, y2: number) {
    let dX = Math.abs(x2 - x1);
    let dY = Math.abs(y2 - y1);

    if (dX > this.centerHorizontal) {
      dX = this.right - dX;
    }

    if (dY > this.centerVertical) {
      dY = this.bottom - dY;
    }

    return Math.sqrt(dX ** 2 + dY ** 2);
  }

  toroidalAngleTo(x1: number, y1: number, x2: number, y2: number) {
    const [actualX] = [
      x2 - this.right,
      x2,
      x2 + this.right
    ].reduce(
      ([memoX, memoD], x) => {
        const dX = Math.abs(x - x1);

        if (memoD === null || dX < memoD) {
          return [x, dX] as [number, number | null];
        } else {
          return [memoX, memoD] as [number, number | null];
        }
      },
      [0, null] as [number, number | null],
    );

    const [actualY] = [
      y2 - this.bottom,
      y2,
      y2 + this.bottom
    ].reduce(
      ([memoY, memoD], y) => {
        const dY = Math.abs(y - y1);

        if (memoD === null || dY < memoD) {
          return [y, dY] as [number, number | null];
        } else {
          return [memoY, dY] as [number, number | null];
        }
      },
      [0, null] as [number, number | null],
    );

    return angleTo(x1, y1, actualX, actualY);
  }

  updateHeadingHuman(character: Character) {
    const { position: [x1, y1] } = character;
    const { zombies } = this;
    const angles = [];

    for (const zombie of zombies) {
      const { position: [x2, y2] } = zombie;

      angles.push(this.toroidalAngleTo(x1, y1, x2, y2));
    }

    if (angles.length > 0) {
      character.setHeading(meanAngle(angles) + Math.PI);
    }
  }

  updateCharacterPosition(character: Character) {
    const { left, right, top, bottom } = this;
    const { position: [x, y], heading, speed } = character;
    let nextX;
    let nextY;
    
    if (character.emoji.profession === 'zombie') {
      this.updateHeadingZombie(character);
    } else {
      // this.updateHeadingHuman(character);
    }
    
    if (x < left) {
      nextX = right;
    } else if (x > right) {
      nextX = left;
    } else {
      nextX = x + Math.cos(heading) * speed;
    }
    
    if (y < top) {
      nextY = bottom;
    } else if (y > bottom) {
      nextY = top;
    } else {
      nextY = y + Math.sin(heading) * speed;
    }
    
    character.setPosition(
      nextX,
      nextY,
    );
  }

  updateCharacters() {
    const { characters, zombies } = this;
    
    zombies.forEach(zombie => this.updateCharacterPosition(zombie))
    characters.forEach(character => this.updateCharacterPosition(character));
  }

  render() {
    this.draw.clearRect();

    this.zombies.forEach(zombie => this.renderCharacter(zombie));
    this.characters.forEach(character => this.renderCharacter(character));
    // this.draw.context.font = 'normal 50px sans-serif'
    // this.draw.context.textBaseline = 'middle';
    // this.draw
    //   .clearRect()
    //   .save()
    //   .translate(...this.node.pos)
    //   .fillRect(-1, -1, 2, 2)
    //   .translate(-25, 0)
    //   .fillText(this.emoji.toString(), 0, 0)
    //   .restore()
  }

  private prepareStage() {
    this.draw.font({ size: `${this.characterSize}px` })
  }

  renderCharacter(character: Character) {
    const { halfCharacterSize } = this;
    const [x, y] = character.position;
    this.draw
      .save()
      .translate(x -halfCharacterSize, y + halfCharacterSize)
      .fillText(character.emoji.toString(), 0, 0)
      .restore();
  }
}

const world = new World();
world.start();