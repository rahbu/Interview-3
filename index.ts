import './style.css';

import { of, map } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// 1. Build a stopwatch webpage that shows a number and has three buttons: 'reset', 'start', and 'stop'.

// 2. Implement the reset, start, and stop functionality for our page using as much rxjs as possible.
