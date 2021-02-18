export const $ = (selector, all = false) => {
  const $element = all
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  return {
    show() {
      all
        ? $element.forEach(($elem) => ($elem.style.display = 'block'))
        : ($element.style.display = 'block');

      return this;
    },
    hide() {
      all
        ? $element.forEach(($elem) => ($elem.style.display = 'none'))
        : ($element.style.display = 'none');

      return this;
    },
    addEventListener(eventName, cb) {
      all
        ? $element.forEach(($elem) => $elem.addEventListener(eventName, cb))
        : $element.addEventListener(eventName, cb);

      return this;
    },
    get value() {
      return all ? $element.map(($elem) => $elem.value) : $element.value;
    },
    set value(value) {
      all
        ? $element.forEach(($elem) => ($elem.value = value))
        : ($element.value = value);

      return this;
    },
    get innerHTML() {
      return all
        ? $element.map(($elem) => $elem.innerHTML)
        : $element.innerHTML;
    },
    set innerHTML(text) {
      all
        ? $element.forEach(($elem) => ($elem.innerHTML = text))
        : ($element.innerHTML = text);

      return this;
    },
  };
};
