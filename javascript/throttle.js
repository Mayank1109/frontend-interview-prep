const throttle = (fn, limit) => {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
};

const printHandler = (val) => {
  console.log("Printing", val);
};

const print = throttle(printHandler, 500);

print(1);
print(2);
print(3);
print(4);
print(5);
print(6);
