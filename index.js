const selector__find__input = () => {
  let init = document.createElement("input");
  init.classList.add("selector__base__style", "selector__find__input");
  init.placeholder = "جستجو...";
  return init;
};
const selector__division = () => {
  let init = document.createElement("div");
  init.classList.add("selector__base__style", "selector__division");
  init.addEventListener("click", (e) => {
    if (e.target === init) {
      init.remove();
    }
  });
  return init;
};
const selector__body__division = () => {
  let init = document.createElement("div");
  init.classList.add("selector__base__style", "selector__body__division");
  return init;
};
const selector__list__division = () => {
  let init = document.createElement("div");
  init.classList.add("selector__base__style", "selector__list__division");
  return init;
};
const selector__input__target__button = () => {
  let init = document.createElement("button");
  init.classList.add("selector__base__style", "selector__input__target__button");
  init.append("جستجو!");
  return init;
};
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("select").forEach((selector) => {
    selector.classList.add("selector__base__style");
    selector.addEventListener("click", () => {
      let selector__option__list = selector.querySelectorAll("option");
      let selector__parameter = selector__division();
      let selector__body__parameter = selector__body__division();
      let selector__find__parameter = selector__find__input();
      let selector__list__parameter = selector__list__division();
      let selector__input__target__parameter = selector__input__target__button();
      selector__option__list.forEach((option) => {
        let selector__button = document.createElement("button");
        selector__button.classList.add(
          "selector__base__style",
          "selector__button"
        );
        selector__button.value = option.value;
        selector__button.append(option.innerText);
        selector__list__parameter.append(selector__button);
        selector__button.addEventListener("click", () => {
          selector__option__list.forEach((opt) => {
            if (opt.value === selector__button.value) {
              opt.selected = true;
              selector__parameter.remove();
            }
          });
        });
      });
      selector__body__parameter.append(
        selector__find__parameter,
        selector__list__parameter,
        selector__input__target__parameter
      );
      selector__parameter.append(selector__body__parameter);
      document.body.append(selector__parameter);
      selector__find__parameter.addEventListener("input", () => {
        selector__list__parameter
          .querySelectorAll("button")
          .forEach((button) => {
            button.style.setProperty("display", "none");
          });
        selector__list__parameter
          .querySelectorAll("button")
          .forEach((button) => {
            if (button.innerText.includes(selector__find__parameter.value)) {
              button.style.setProperty("display", "flex");
            }
          });
      });
      selector__input__target__parameter.addEventListener("click", () => {
        selector__find__parameter.focus();
      })
    });
  });
});
