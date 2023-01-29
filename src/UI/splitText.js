import gsap from "gsap";

function wrapLetеer(el) {
  el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
    return `<span class="word">` +
      m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='leter'>$&</span>") +
      `</span>`;
  });
  return el
}

export const emergenceText = (text) => {
  const split = wrapLetеer(text);
  split.querySelectorAll(".leter").forEach((el, idx) => {
    gsap.from(el, 1, {
      opacity: 0,
      delay: idx * 0.2,
      scale: 1,
    })
  })
}

export const splitText = (text) => {
  const split = wrapLetеer(text);
  split.querySelectorAll(".leter").forEach((el, idx) => {
    gsap.from(el, 1.5, {
      opacity: 0,
      scale: 0.1,
      x: "random(-600, 600)",
      y: "random(-200, 200)",
      z: "random(-300, 300)",
      delay: idx * 0.02,
      repeat: 0,
    });
  });
}

export const dropText = (text) => {
  text.innerHTML = text.textContent.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="dropWord">$2</span>')
  text.querySelectorAll(".dropWord").forEach((el, idx) => {
    gsap.from(el, 1, {
      scale: 3,
      opacity: 0,
      delay: idx * 1,
    })
  })
}
