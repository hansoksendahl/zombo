import randomEntry from './utils/randomEntry.ts'
import zwidge from './zwidge.ts';

export default class Emoji {
  static professions = {
    judge: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '⚖️'),
    doctor: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '⚕️'),
    student: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🎓'),
    farmer: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🌾'),
    cook: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🍳'),
    factoryWorker: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🏭'),
    officeWorker: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '💼'),
    scientist: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🔬'),
    technologist: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '💻'),
    singer: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🎤'),
    artist: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🎨'),
    pilot: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '✈️'),
    astronaut: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🚀'),
    officer: (t: string, g: string, _: string) => zwidge(`👮${t}`, g),
    fireFighter: (t: string, _: string, s: string) => zwidge(`${s}${t}`, '🚒'),
    detective: (t: string, g: string, _: string) => zwidge(`🕵️${t}`, g),
    guard: (t: string, g: string, _: string) => zwidge(`💂${t}`, g),
    zombie: (_: string, g: string, __: string) => zwidge(`🧟`, g),
    fairy: (t: string, g: string, _: string) => zwidge(`🧚${t}`, g),
    vampire: (t: string, g: string, _: string) => zwidge(`🧛${t}`, g),
    merperson: (t: string, g: string, _: string) => zwidge(`🧜${t}`, g),
    mage: (t: string, g: string) => zwidge(`🧙${t}`, g),
    elf: (t: string, g: string, _: string) => zwidge(`🧝${t}`, g),
  };

  static tones = {
    // 0: '',
    1: '🏻',
    2: '🏼',
    3: '🏼',
    4: '🏽',
    5: '🏾',
    6: '🏿',
  };

  static generics = {
    'female': '👩',
    'male': '👨',
    'other': '🧑',
  }

  static genders = {
    'female': '♀️',
    'male': '♂️',
    'other': '',
  };

  string: string | null;
  profession: keyof typeof Emoji.professions;
  tone: keyof typeof Emoji.tones;
  gender: keyof typeof Emoji.genders;
  generic: keyof typeof Emoji.genders;

  constructor(
    profession = randomEntry(Object.keys(Emoji.professions)),
    tone = randomEntry(Object.keys(Emoji.tones)),
    gender = randomEntry(Object.keys(Emoji.generics)),
  ) {
    this.string = null;
    this.profession = profession as keyof typeof Emoji.professions;
    this.tone = tone as keyof typeof Emoji.tones;
    this.gender = gender as keyof typeof Emoji.genders;
    this.generic = gender as keyof typeof Emoji.genders;
  }
  
  setProfession(profession: keyof typeof Emoji.professions) {
    this.profession = profession;
    this.string = null;
  }
  
  setTone(tone: keyof typeof Emoji.tones) {
    this.tone = tone;
    this.string = null;
  }
  
  setGender(gender: keyof typeof Emoji.genders) {
    this.gender = gender;
    this.generic = gender;
    this.string = null;
  }
  
  toString() {
    if (!this.string) {
      const {
        profession,
        tone,
        gender,
        generic,
      } = this;
      
      this.string = Emoji.professions[profession](
        Emoji.tones[tone],
        Emoji.genders[gender],
        Emoji.generics[generic as keyof typeof Emoji.generics],
      );
    }
    
    return this.string;
  }
}
