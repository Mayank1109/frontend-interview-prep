const debounce = (fn, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const printHandler = (ans) => {
  console.log("Printing:", ans);
};

const prints = debounce(printHandler, 1000);

prints(1);
prints(2);
prints(3);
prints(4);
prints(6);
prints(5);
