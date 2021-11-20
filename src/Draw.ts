import randomInt from './utils/randomInt.ts';

interface DrawFont {
  style?: string;
  variant?: string;
  weight?: string;
  size?: string;
  lineHeight?: string;
  family?: string;
}

export default class Draw {
  root: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;


  get randomXY() {
    return [randomInt(this.canvas.width), randomInt(this.canvas.height)];
  }
  
  constructor(root: HTMLElement) {
    this.root = root;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d')!;
    
    this.root.appendChild(this.canvas);
  }
  
  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
    
    return this;
  }
  
  // Drawing Rectangles

  clearRect(
    x = 0,
    y = 0,
    width: number = this.canvas.width,
    height: number = this.canvas.height
  ) {
    this.context.clearRect(x, y, width, height);
    
    return this;
  }
  
  fillRect(
    x = 0,
    y = 0,
    width: number = this.canvas.width,
    height: number = this.canvas.height
  ) {
    this.context.fillRect(x, y, width, height);
    
    return this;
  }

  strokeRect(
    x = 0,
    y = 0,
    width: number = this.canvas.width,
    height: number = this.canvas.height,
  ) {
    this.context.strokeRect(x, y, width, height);

    return this;
  }

  // Drawing Text

  fillText(text: string, x: number, y: number, maxWidth?: number) {
    this.context.fillText(text, x, y, maxWidth);

    return this;
  }

  strokeText(text: string, x: number, y: number, maxWidth?: number) {
    this.context.strokeText(text, x, y, maxWidth);

    return this;
  }

  measureText(text: string) {
    return this.context.measureText(text);
  }

  // Line Styles

  lineWidth(width = 1.0) {
    this.context.lineWidth = width;

    return this;
  }
  
  lineCap(cap: CanvasLineCap = 'round') {
    this.context.lineCap = cap;
    
    return this;
  }

  lineJoin(join: CanvasLineJoin = 'miter') {
    this.context.lineJoin = join;

    return this;
  }

  miterLimit(limit: number) {
    this.context.miterLimit = limit;

    return this;
  }

  getLineDash() {
    return this.context.getLineDash()
  }

  setLineDash(lineDash: number[]) {
    this.context.setLineDash(lineDash);

    return this;
  }

  lineDashOffset(offset: number) {
    this.context.lineDashOffset = offset;

    return this;
  }

  // Text Styles

  font(font: DrawFont) {
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

  textAlign(align: CanvasTextAlign) {
    this.context.textAlign = align;

    return this;
  }

  textBaseline(baseline: CanvasTextBaseline) {
    this.context.textBaseline = baseline;

    return this;
  }

  direction(direction: CanvasDirection) {
    this.context.direction = direction;

    return this;
  }

  // Fill and Stroke Styles

  fillStyle(color = '#000') {
    this.context.fillStyle = color;

    return this;
  }

  strokeStyle(color = '#000') {
    this.context.strokeStyle = color;

    return this;
  }

  // Gradients and Patterns

  createLinearGradient() {
    // TODO define
  }

  createRadialGradient() {
    // TODO define
  }

  createPattern() {
    // TODO define
  }

  // Shadows

  shadowBlur(blur: number) {
    this.context.shadowBlur = blur;

    return this;
  }

  shadowColor(color: string) {
    this.context.shadowColor = color;

    return this;
  }

  shadowOffsetX(offset: number) {
    this.context.shadowOffsetX = offset;

    return this;
  }

  shadowOffsetY(offset: number) {
    this.context.shadowOffsetY = offset;

    return this;
  }

  shadow(
    offsetX: number,
    offsetY: number,
    blur: number,
    color: string,
  ) {
    this.shadowOffsetX(offsetX);
    this.shadowOffsetY(offsetY);
    this.shadowBlur(blur);
    this.shadowColor(color);
  }

  // Paths

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

  lineTo(
    x: number,
    y: number,
  ) {
    this.context.lineTo(x, y);
    
    return this;
  }

  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ) {
    this.context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

    return this;
  }

  quadraticCurveTo(
    cpx: number,
    cpy: number,
    x: number,
    y: number,
  ) {
    this.context.quadraticCurveTo(cpx, cpy, x, y);

    return this;
  }

  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
  ) {
    this.context.arc(x, y, radius, startAngle, endAngle);

    return this;
  }

  arcTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number,
  ) {
    this.context.arcTo(x1, y1, x2, y2, radius);

    return this;
  }

  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    isAntiClockwise?: boolean,
  ) {
    this.context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, isAntiClockwise);

    return this;
  }

  rect(
    x: number,
    y: number,
    width: number,
    height: number,
    newPath = true
  ) {
    if (newPath) this.beginPath();
    
    this.context.rect(x, y, width, height);
    
    return this;
  }

  // Drawing Paths

  fill(color: string | void = '#000') {
    if (color) this.fillStyle(color);

    this.context.fill();
    
    return this;
  }
  
  stroke(color: string | void = '#000', width: number | void = 20) {
    if (color) this.strokeStyle(color);
    if (width !== undefined) this.lineWidth(width);
    this.context.stroke();
    
    return this;
  }

  drawFocusIfNeeded(path: Path2D, element: HTMLElement) {
    this.context.drawFocusIfNeeded(path, element);
  }

  scrollPathIntoView(path?: Path2D) {
    if (path) {
      this.context.scrollPathIntoView(path);
    } else {
      this.context.scrollPathIntoView();
    }
  }

  clip(fillRule: CanvasFillRule): Draw
  clip(path: Path2D, fillRule: CanvasFillRule): Draw
  clip(...params: unknown[]) {
    this.context.clip(...params as [CanvasFillRule]);

    return this;
  }

  isPointInPath(
    x: number,
    y: number,
    fillRule?: CanvasFillRule,
  ): Draw
  isPointInPath(
    path: Path2D,
    x: number,
    y: number,
    fillRule?: CanvasFillRule,
  ): Draw
  isPointInPath(...params: unknown[]) {
    if (typeof params[0] === 'number') {
      this.context.isPointInPath(...params as [number, number, CanvasFillRule?]);
    } else {
      this.context.isPointInPath(...params as [Path2D, number, number, CanvasFillRule?])
    }
    
    return this;
  }

  isPointInStroke(
    x: number,
    y: number,
  ): Draw
  isPointInStroke(
    path: Path2D,
    x: number,
    y: number,
  ): Draw
  isPointInStroke(...params: unknown[]) {
    if (params.length > 2) {
      this.context.isPointInStroke(...params as [Path2D, number, number])
    } else {
      this.context.isPointInStroke(...params as [number, number])
    }

    return this;
  }

  // Transformations

  /**
   * Retrieves the current transformation matrix being applied to the context.
   */
  getTransform() {
    return this.context.getTransform();
  }

  /**
   * Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation angle and is expressed in radians.
   * @param angle 
   */
  rotate(angle: number) {
    this.context.rotate(angle);

    return this;
  }

  /**
   * Adds a scaling transformation to the canvas units by x horizontally and by y vertically.
   * @param x 
   * @param y 
   */
  scale(x: number, y: number) {
    this.context.scale(x, y);

    return this;
  }
  
  /**
   * Adds a translation transformation by moving the canvas and its origin x horzontally and y vertically on the grid.
   * @param x 
   * @param y 
   */
  translate(x = 0, y = 0) {
    this.context.translate(x, y);
    
    return this;
  }

  /**
   * Multiplies the current transformation matrix with the matrix described by its arguments.
   * @param a 
   * @param b 
   * @param c 
   * @param d 
   * @param e 
   * @param f 
   */
  transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ) {
    this.context.transform(a, b, c, d, e, f);

    return this;
  }

  /**
   * Resets the current transform to the identity matrix, and then invokes the transform() method with the same arguments.
   * @param a number | DOMMatrix
   * @param b number
   * @param c number
   * @param d number
   * @param e number
   * @param f number
   */
  setTransform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ): Draw
  setTransform(matrix: DOMMatrix): Draw
  setTransform(...params: unknown[]) {
    if (params.length > 1) {
      this.setTransform(...params as [number, number, number, number, number, number])
    } else {
      this.setTransform(...params as [DOMMatrix]);
    }

    return this;
  }

  /**
   * Resets the current transform by the identity matrix.
   */
  resetTransform() {
    this.context.resetTransform();

    return this;
  }

  center() {
    const { width, height } = this.canvas;
    this.translate(width / 2, height / 2);
    
    return this;
  }

  // Drawing Images

  drawImage(
    image: CanvasImageSource,
    dx: number,
    dy: number,
  ): Draw
  drawImage(
    image: CanvasImageSource,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number,
  ): Draw
  drawImage(
    image: CanvasImageSource,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number,
  ): Draw
  drawImage(...params: unknown[]) {
    switch (params.length) {
      case 3: {
        this.context.drawImage(...params as [CanvasImageSource, number, number]);
        break;
      }
      case 5: {
        this.context.drawImage(...params as [CanvasImageSource, number, number, number, number]);
        break;
      }
      case 9: {
        this.context.drawImage(...params as [CanvasImageSource, number, number, number, number, number, number, number, number]);
        break;
      }
      default: {
        throw new Error('Wrong number of arguments.');
      }
    }

    return this;
  }

  // Pixel Manipulation

  createImageData(imagedata: ImageData): Draw
  createImageData(width: number, height: number): Draw
  createImageData(...params: unknown[]) {
    if (params.length === 1) {
      this.createImageData(params[0] as ImageData);
    } else {
      this.createImageData(...params as [number, number])
    }

    return this;
  }

  getImageData(
    sx: number,
    sy: number,
    sw: number,
    sh: number,
  ) {
    this.context.getImageData(sx, sy, sw, sh);

    return this;
  }

  putImageData(
    imageData: ImageData,
    dx: number,
    dy: number,
  ): Draw
  putImageData(
    imageData: ImageData,
    dx: number,
    dy: number,
    dirtyX: number,
    dirtyY: number,
    dirtyWidth: number,
    dirtyHeight: number,
  ): Draw
  putImageData(...params: unknown[]) {
    switch (params.length) {
      case 3: {
        this.context.putImageData(...params as [ImageData, number, number]);
        break;
      }
      case 7: {
        this.context.putImageData(...params as [ImageData, number, number, number, number, number, number]);
        break;
      }
      default: {
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

  // Drawing shapes
  
  square(
    x: number,
    y: number,
    side: number,
    newPath = true
  ) {
    this.rect(x, y, side, side, newPath);
    
    return this;
  }
  
  circle(
    x: number,
    y: number,
    radius = 10,
    newPath = true
  ) {
    if (newPath) this.beginPath();
    
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    
    return this;
  }
  
}