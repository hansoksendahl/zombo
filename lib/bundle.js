function randomInt(n) {
    return Math.floor(Math.random() * n);
}
class Draw {
    root;
    canvas;
    context;
    get randomXY() {
        return [
            randomInt(this.canvas.width),
            randomInt(this.canvas.height)
        ];
    }
    constructor(root){
        this.root = root;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.root.appendChild(this.canvas);
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        return this;
    }
    clearRect(x = 0, y = 0, width = this.canvas.width, height = this.canvas.height) {
        this.context.clearRect(x, y, width, height);
        return this;
    }
    fillRect(x = 0, y = 0, width = this.canvas.width, height = this.canvas.height) {
        this.context.fillRect(x, y, width, height);
        return this;
    }
    strokeRect(x = 0, y = 0, width = this.canvas.width, height = this.canvas.height) {
        this.context.strokeRect(x, y, width, height);
        return this;
    }
    fillText(text, x, y, maxWidth) {
        this.context.fillText(text, x, y, maxWidth);
        return this;
    }
    strokeText(text, x, y, maxWidth) {
        this.context.strokeText(text, x, y, maxWidth);
        return this;
    }
    measureText(text) {
        return this.context.measureText(text);
    }
    lineWidth(width = 1) {
        this.context.lineWidth = width;
        return this;
    }
    lineCap(cap = 'round') {
        this.context.lineCap = cap;
        return this;
    }
    lineJoin(join = 'miter') {
        this.context.lineJoin = join;
        return this;
    }
    miterLimit(limit) {
        this.context.miterLimit = limit;
        return this;
    }
    getLineDash() {
        return this.context.getLineDash();
    }
    setLineDash(lineDash) {
        this.context.setLineDash(lineDash);
        return this;
    }
    lineDashOffset(offset) {
        this.context.lineDashOffset = offset;
        return this;
    }
    font(font) {
        const descriptor = [
            font.style || 'normal',
            font.variant || 'normal',
            font.weight || 'normal',
            font.size || '100%',
            font.lineHeight || 'normal',
            font.family || 'inherit', 
        ].join(' ');
        this.context.font = descriptor;
        return this;
    }
    textAlign(align) {
        this.context.textAlign = align;
        return this;
    }
    textBaseline(baseline) {
        this.context.textBaseline = baseline;
        return this;
    }
    direction(direction) {
        this.context.direction = direction;
        return this;
    }
    fillStyle(color = '#000') {
        this.context.fillStyle = color;
        return this;
    }
    strokeStyle(color = '#000') {
        this.context.strokeStyle = color;
        return this;
    }
    createLinearGradient() {
    }
    createRadialGradient() {
    }
    createPattern() {
    }
    shadowBlur(blur) {
        this.context.shadowBlur = blur;
        return this;
    }
    shadowColor(color) {
        this.context.shadowColor = color;
        return this;
    }
    shadowOffsetX(offset) {
        this.context.shadowOffsetX = offset;
        return this;
    }
    shadowOffsetY(offset) {
        this.context.shadowOffsetY = offset;
        return this;
    }
    shadow(offsetX, offsetY, blur, color) {
        this.shadowOffsetX(offsetX);
        this.shadowOffsetY(offsetY);
        this.shadowBlur(blur);
        this.shadowColor(color);
    }
    beginPath() {
        this.context.beginPath();
        return this;
    }
    closePath() {
        this.context.closePath();
        return this;
    }
    moveTo(x = 0, y = 0) {
        this.context.moveTo(x, y);
        return this;
    }
    lineTo(x, y) {
        this.context.lineTo(x, y);
        return this;
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        this.context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        return this;
    }
    quadraticCurveTo(cpx, cpy, x, y) {
        this.context.quadraticCurveTo(cpx, cpy, x, y);
        return this;
    }
    arc(x, y, radius, startAngle, endAngle) {
        this.context.arc(x, y, radius, startAngle, endAngle);
        return this;
    }
    arcTo(x1, y1, x2, y2, radius) {
        this.context.arcTo(x1, y1, x2, y2, radius);
        return this;
    }
    ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, isAntiClockwise) {
        this.context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, isAntiClockwise);
        return this;
    }
    rect(x, y, width, height, newPath = true) {
        if (newPath) this.beginPath();
        this.context.rect(x, y, width, height);
        return this;
    }
    fill(color = '#000') {
        if (color) this.fillStyle(color);
        this.context.fill();
        return this;
    }
    stroke(color = '#000', width = 20) {
        if (color) this.strokeStyle(color);
        if (width !== undefined) this.lineWidth(width);
        this.context.stroke();
        return this;
    }
    drawFocusIfNeeded(path, element) {
        this.context.drawFocusIfNeeded(path, element);
    }
    scrollPathIntoView(path) {
        if (path) {
            this.context.scrollPathIntoView(path);
        } else {
            this.context.scrollPathIntoView();
        }
    }
    clip(...params) {
        this.context.clip(...params);
        return this;
    }
    isPointInPath(...params) {
        if (typeof params[0] === 'number') {
            this.context.isPointInPath(...params);
        } else {
            this.context.isPointInPath(...params);
        }
        return this;
    }
    isPointInStroke(...params) {
        if (params.length > 2) {
            this.context.isPointInStroke(...params);
        } else {
            this.context.isPointInStroke(...params);
        }
        return this;
    }
    getTransform() {
        return this.context.getTransform();
    }
    rotate(angle) {
        this.context.rotate(angle);
        return this;
    }
    scale(x, y) {
        this.context.scale(x, y);
        return this;
    }
    translate(x = 0, y = 0) {
        this.context.translate(x, y);
        return this;
    }
    transform(a, b, c, d, e, f) {
        this.context.transform(a, b, c, d, e, f);
        return this;
    }
    setTransform(...params) {
        if (params.length > 1) {
            this.setTransform(...params);
        } else {
            this.setTransform(...params);
        }
        return this;
    }
    resetTransform() {
        this.context.resetTransform();
        return this;
    }
    center() {
        const { width , height  } = this.canvas;
        this.translate(width / 2, height / 2);
        return this;
    }
    drawImage(...params) {
        switch(params.length){
            case 3:
                {
                    this.context.drawImage(...params);
                    break;
                }
            case 5:
                {
                    this.context.drawImage(...params);
                    break;
                }
            case 9:
                {
                    this.context.drawImage(...params);
                    break;
                }
            default:
                {
                    throw new Error('Wrong number of arguments.');
                }
        }
        return this;
    }
    createImageData(...params) {
        if (params.length === 1) {
            this.createImageData(params[0]);
        } else {
            this.createImageData(...params);
        }
        return this;
    }
    getImageData(sx, sy, sw, sh) {
        this.context.getImageData(sx, sy, sw, sh);
        return this;
    }
    putImageData(...params) {
        switch(params.length){
            case 3:
                {
                    this.context.putImageData(...params);
                    break;
                }
            case 7:
                {
                    this.context.putImageData(...params);
                    break;
                }
            default:
                {
                    throw new Error('Wrong number of arguments.');
                }
        }
        return this;
    }
    save() {
        this.context.save();
        return this;
    }
    restore() {
        this.context.restore();
        return this;
    }
    square(x, y, side, newPath = true) {
        this.rect(x, y, side, side, newPath);
        return this;
    }
    circle(x, y, radius = 10, newPath = true) {
        if (newPath) this.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        return this;
    }
}
class Game {
    paused;
    gameLoop;
    frameRate;
    tScale;
    constructor(frameRate1 = 50){
        this.frameRate = frameRate1;
        this.paused = false;
        this.gameLoop = null;
        this.tScale = 1;
    }
    processInput() {
    }
    update(_) {
    }
    render() {
    }
    start() {
        let last = performance.now();
        const loop = (now)=>{
            const { tScale , frameRate: frameRate1  } = this;
            const elapsed = (now - last) * tScale;
            const numTicks = elapsed / frameRate1;
            this.gameLoop = window.requestAnimationFrame(loop);
            this.processInput();
            for(let i = 0; i < numTicks; i += 1){
                last = last + frameRate1;
                this.update(elapsed / frameRate1);
            }
            this.render();
        };
        window.requestAnimationFrame(loop);
    }
    stop() {
        window.cancelAnimationFrame(this.gameLoop);
    }
    setFrameRate(frameRate) {
        this.frameRate = frameRate;
    }
    setSpeed(tScale) {
        this.tScale = tScale;
    }
}
function randomEntry(arr) {
    return arr[randomInt(arr.length)];
}
function zwidge(a, b) {
    return b ? `${a}‍${b}` : a;
}
class Emoji {
    static professions = {
        judge: (t, _, s)=>zwidge(`${s}${t}`, '⚖️')
        ,
        doctor: (t, _, s)=>zwidge(`${s}${t}`, '⚕️')
        ,
        student: (t, _, s)=>zwidge(`${s}${t}`, '🎓')
        ,
        farmer: (t, _, s)=>zwidge(`${s}${t}`, '🌾')
        ,
        cook: (t, _, s)=>zwidge(`${s}${t}`, '🍳')
        ,
        factoryWorker: (t, _, s)=>zwidge(`${s}${t}`, '🏭')
        ,
        officeWorker: (t, _, s)=>zwidge(`${s}${t}`, '💼')
        ,
        scientist: (t, _, s)=>zwidge(`${s}${t}`, '🔬')
        ,
        technologist: (t, _, s)=>zwidge(`${s}${t}`, '💻')
        ,
        singer: (t, _, s)=>zwidge(`${s}${t}`, '🎤')
        ,
        artist: (t, _, s)=>zwidge(`${s}${t}`, '🎨')
        ,
        pilot: (t, _, s)=>zwidge(`${s}${t}`, '✈️')
        ,
        astronaut: (t, _, s)=>zwidge(`${s}${t}`, '🚀')
        ,
        officer: (t, g, _)=>zwidge(`👮${t}`, g)
        ,
        fireFighter: (t, _, s)=>zwidge(`${s}${t}`, '🚒')
        ,
        detective: (t, g, _)=>zwidge(`🕵️${t}`, g)
        ,
        guard: (t, g, _)=>zwidge(`💂${t}`, g)
        ,
        zombie: (_, g, __)=>zwidge(`🧟`, g)
        ,
        fairy: (t, g, _)=>zwidge(`🧚${t}`, g)
        ,
        vampire: (t, g, _)=>zwidge(`🧛${t}`, g)
        ,
        merperson: (t, g, _)=>zwidge(`🧜${t}`, g)
        ,
        mage: (t, g)=>zwidge(`🧙${t}`, g)
        ,
        elf: (t, g, _)=>zwidge(`🧝${t}`, g)
    };
    static tones = {
        1: '🏻',
        2: '🏼',
        3: '🏼',
        4: '🏽',
        5: '🏾',
        6: '🏿'
    };
    static generics = {
        'female': '👩',
        'male': '👨',
        'other': '🧑'
    };
    static genders = {
        'female': '♀️',
        'male': '♂️',
        'other': ''
    };
    string;
    profession;
    tone;
    gender;
    generic;
    constructor(profession1 = randomEntry(Object.keys(Emoji.professions)), tone1 = randomEntry(Object.keys(Emoji.tones)), gender1 = randomEntry(Object.keys(Emoji.generics))){
        this.string = null;
        this.profession = profession1;
        this.tone = tone1;
        this.gender = gender1;
        this.generic = gender1;
    }
    setProfession(profession) {
        this.profession = profession;
        this.string = null;
    }
    setTone(tone) {
        this.tone = tone;
        this.string = null;
    }
    setGender(gender) {
        this.gender = gender;
        this.generic = gender;
        this.string = null;
    }
    toString() {
        if (!this.string) {
            const { profession: profession2 , tone: tone2 , gender: gender2 , generic ,  } = this;
            this.string = Emoji.professions[profession2](Emoji.tones[tone2], Emoji.genders[gender2], Emoji.generics[generic]);
        }
        return this.string;
    }
}
class Character {
    emoji;
    position;
    heading;
    speed;
    constructor(emoji1, position, heading1, speed1 = 1){
        this.emoji = emoji1;
        this.position = position;
        this.heading = heading1;
        this.speed = speed1;
    }
    setEmoji(emoji) {
        this.emoji = emoji;
    }
    setPosition(positionX, positionY) {
        this.position = [
            positionX,
            positionY
        ];
    }
    setHeading(heading) {
        this.heading = heading;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
function angleTo(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}
function sum(terms) {
    return terms.reduce((a, b)=>a + b
    );
}
function meanAngle(angles) {
    const nInverse = 1 / angles.length;
    return Math.atan2(nInverse * sum(angles.map(Math.sin)), nInverse * sum(angles.map(Math.cos)));
}
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
    'guard', 
];
class World extends Game {
    draw;
    characters;
    zombies;
    characterSize;
    halfCharacterSize;
    left;
    right;
    top;
    bottom;
    centerVertical;
    centerHorizontal;
    started;
    constructor(){
        super(20);
        const element = document.getElementById('app');
        element.addEventListener('click', ()=>{
            this.started = !this.started;
        });
        this.draw = new Draw(element);
        this.draw.resize(this.draw.root.offsetWidth, this.draw.root.offsetHeight);
        const { width , height  } = this.draw.canvas;
        this.characterSize = Math.max(width, height) / 20;
        this.halfCharacterSize = this.characterSize / 2;
        this.left = -this.halfCharacterSize;
        this.right = width + this.halfCharacterSize;
        this.top = -this.halfCharacterSize;
        this.bottom = height + this.halfCharacterSize;
        this.centerHorizontal = this.right / 2;
        this.centerVertical = this.bottom / 2;
        this.characters = new Array(100).fill(void 0).map(()=>this.createCharacter()
        );
        this.zombies = [
            this.createCharacter('zombie')
        ];
        this.started = false;
        this.prepareStage();
    }
    createCharacter(profession = PROFESSIONS[randomInt(PROFESSIONS.length)]) {
        const { draw: { canvas: { width: width1 , height: height1  }  }  } = this;
        return new Character(new Emoji(profession), [
            Math.random() * width1,
            Math.random() * height1, 
        ], Math.random() * Math.PI * 2, Math.random() * 0.5 + 0.5);
    }
    update() {
        if (this.started) {
            this.updateCharacters();
        }
    }
    updateHeadingZombie(character) {
        const { position: [x1, y1]  } = character;
        const { characters  } = this;
        let min;
        let targetX;
        let targetY;
        for(let i = 0; i < characters.length; i += 1){
            const neighbor = characters[i];
            const { position: [x2, y2]  } = neighbor;
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
    toroidalDistance(x1, y1, x2, y2) {
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
    toroidalAngleTo(x1, y1, x2, y2) {
        const [actualX] = [
            x2 - this.right,
            x2,
            x2 + this.right
        ].reduce(([memoX, memoD], x)=>{
            const dX = Math.abs(x - x1);
            if (memoD === null || dX < memoD) {
                return [
                    x,
                    dX
                ];
            } else {
                return [
                    memoX,
                    memoD
                ];
            }
        }, [
            0,
            null
        ]);
        const [actualY] = [
            y2 - this.bottom,
            y2,
            y2 + this.bottom
        ].reduce(([memoY, memoD], y)=>{
            const dY = Math.abs(y - y1);
            if (memoD === null || dY < memoD) {
                return [
                    y,
                    dY
                ];
            } else {
                return [
                    memoY,
                    dY
                ];
            }
        }, [
            0,
            null
        ]);
        return angleTo(x1, y1, actualX, actualY);
    }
    updateHeadingHuman(character) {
        const { position: [x1, y1]  } = character;
        const { zombies  } = this;
        const angles = [];
        for (const zombie of zombies){
            const { position: [x2, y2]  } = zombie;
            angles.push(this.toroidalAngleTo(x1, y1, x2, y2));
        }
        if (angles.length > 0) {
            character.setHeading(meanAngle(angles) + Math.PI);
        }
    }
    updateCharacterPosition(character) {
        const { left , right , top , bottom  } = this;
        const { position: [x, y] , heading: heading2 , speed: speed2  } = character;
        let nextX;
        let nextY;
        if (character.emoji.profession === 'zombie') {
            this.updateHeadingZombie(character);
        } else {
        }
        if (x < left) {
            nextX = right;
        } else if (x > right) {
            nextX = left;
        } else {
            nextX = x + Math.cos(heading2) * speed2;
        }
        if (y < top) {
            nextY = bottom;
        } else if (y > bottom) {
            nextY = top;
        } else {
            nextY = y + Math.sin(heading2) * speed2;
        }
        character.setPosition(nextX, nextY);
    }
    updateCharacters() {
        const { characters , zombies  } = this;
        zombies.forEach((zombie)=>this.updateCharacterPosition(zombie)
        );
        characters.forEach((character)=>this.updateCharacterPosition(character)
        );
    }
    render() {
        this.draw.clearRect();
        this.zombies.forEach((zombie)=>this.renderCharacter(zombie)
        );
        this.characters.forEach((character)=>this.renderCharacter(character)
        );
    }
    prepareStage() {
        this.draw.font({
            size: `${this.characterSize}px`
        });
    }
    renderCharacter(character) {
        const { halfCharacterSize  } = this;
        const [x, y] = character.position;
        this.draw.save().translate(x - halfCharacterSize, y + halfCharacterSize).fillText(character.emoji.toString(), 0, 0).restore();
    }
}
const world = new World();
world.start();
