//bell function to make beep with ('\x07') (I substituted '.' because it wasn't making any noise)
const beep = () => process.stdout.write('.');

// use process.argv.slice(2) to extract the user-supplied command-line arguments and exclude the first two elements, paths to node.js and then to script being run (ex.path the timer.js)
const timerArgs = process.argv.slice(2)

// For each time value, a setTimeout function will call beep() after the specified time in seconds (time * 1000, converts seconds to milliseconds).
const timer = (time) => {
  setTimeout(() => {
    beep();
  }, time * 1000);
};

// loop through to make sure that time is a valid number of seconds
for (const seconds of timerArgs) {
  const time = Number(seconds);
  if (time >= 0 && !isNaN(time)) {
    timer(time);
  } else {
    console.log(`Edge case: ${seconds}`);
  }
}
