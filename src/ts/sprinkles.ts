class Sprinkles {
  private selector: string;
  private options: object = {
    content: ['✨'],
    amount: 20,
    distance: 100,
  };

  constructor(selector: string, options: object) {
    this.selector = selector;
    this.options = options;
    this.init();
  }

  private init = () => {
    const targets = document.querySelectorAll(this.selector);
    targets.forEach((target: HTMLElement) => {
      this.wrapEl(target);
    });
  };

  private wrapEl = (el: HTMLElement) => {
    el.addEventListener('click', () => {
      let oldSprinkles = el.querySelector('[data-sprinkles]');

      if (oldSprinkles) {
        oldSprinkles.remove();
      }

      let sprinkleWrapper = document.createElement('div');
      sprinkleWrapper.dataset.sprinkles = '';

      [...Array((this.options as any).amount)].map(() => {
        let sprinkleContainer = document.createElement('div');
        sprinkleContainer.dataset.sprinkleContainer = '';

        let sprinkle = document.createElement('div');
        sprinkle.dataset.sprinkle = '';
        sprinkle.innerText = (this.options as any).content[
          Math.floor(Math.random() * (this.options as any).content.length)
        ];
        
        sprinkleContainer.appendChild(sprinkle);
        sprinkleWrapper.appendChild(sprinkleContainer);
      });

      el.appendChild(sprinkleWrapper);

      let sprinkles = [...(el.querySelectorAll('[data-sprinkle]') as any)];
      this.animate(sprinkles);
    });
  };

  private animate = (sprinkles: any) => {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        sprinkles.map((sprinkle: HTMLElement) => {
          sprinkle.style.transform = `
          translateX(${this.randomCoord()}px) 
          translateY(${this.randomCoord()}px) 
          scale(4)`;
          sprinkle.style.opacity = '0';
        });
      }),
    );
  };

  private randomCoord() {
    return (
      (Math.ceil(Math.random() * (this.options as any).distance) + 1) *
      (Math.round(Math.random()) ? 1 : -1)
    );
  }
}

export default Sprinkles;
