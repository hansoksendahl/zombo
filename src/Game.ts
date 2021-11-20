export default class Game {
  paused: boolean;
  gameLoop: number | null;
  frameRate: number;
  tScale: number;

  constructor(frameRate = 50) {
    this.frameRate = frameRate;
    this.paused = false;
    this.gameLoop = null;
    this.tScale = 1;
  }
  
  processInput() { /* no-op */ }
  
  update(_: number) { /* no-op */ }
  
  render() { /* no-op */ }
  
  start() {
    let last = performance.now();
    
    const loop = (now: number) => {
      const { tScale, frameRate } = this;
      const elapsed = (now - last) * tScale;
      const numTicks = elapsed / frameRate;
      this.gameLoop = window.requestAnimationFrame(loop);
      
      this.processInput();
      
      for (let i = 0; i < numTicks; i += 1) {
        last = last + frameRate;
        this.update(elapsed / frameRate);
      }
      
      this.render();
    }
    
    window.requestAnimationFrame(loop);
  }
  
  stop() {
    window.cancelAnimationFrame(this.gameLoop!);
  }
  
  setFrameRate(frameRate: number) {
    this.frameRate = frameRate;
  }
  
  setSpeed(tScale: number) {
    this.tScale = tScale;
  }
}