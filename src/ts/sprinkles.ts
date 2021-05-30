export class Sprinkles {
  selector: string;
  options: object;
  constructor(selector: string, options: object) {
    this.selector = selector;
    this.options = options;

    let els = document.querySelectorAll(this.selector);

    els.forEach((el) => {
      el.addEventListener("click", () => {
        // Clear old instance

        if (el.querySelector("[data-sprinkles]")) {
          el.querySelector("[data-sprinkles]").remove();
        }

        // Sprinkles wrapper

        let sprinkles = document.createElement("div");
        sprinkles.dataset.sprinkles = "";

        // Create sprinkle wrapper inside

        for (let i = 0; i < (this.options as any).amount; i++) {
          let sprinkleContainer = document.createElement("div");
          sprinkleContainer.dataset.sprinkleContainer = "";

          let sprinkle = document.createElement("div");
          sprinkle.dataset.sprinkle = "";
          sprinkle.innerText = (this.options as any).content[
            Math.floor(Math.random() * (this.options as any).content.length)
          ];

          sprinkleContainer.appendChild(sprinkle);
          sprinkles.appendChild(sprinkleContainer);
        }
        el.appendChild(sprinkles);

        // Get all sprinkles

        let allSprinkles = el.querySelectorAll("[data-sprinkle]");

        // Animate

        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            allSprinkles.forEach((sprinkle: HTMLElement) => {
              sprinkle.style.transform = `translateX(${this.randomCoord()}px) translateY(${this.randomCoord()}px) scale(4)`;
              sprinkle.style.opacity = "0";
            });
          })
        );
      });
    });
  }

  public randomCoord() {
    return (
      (Math.ceil(Math.random() * (this.options as any).distance) + 1) *
      (Math.round(Math.random()) ? 1 : -1)
    );
  }
}
