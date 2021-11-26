import { Timer, Time, TimerOptions } from 'timer-node';
const timer = new Timer({ label: 'test-timer' });

const timer = new Timer({
    label: 'test-timer',
    startTimestamp: 1563074001233 // 2019-07-14 03:13:21.233Z
  });
  
  console.log(timer.isStarted()); // true
  console.log(timer.time()); // { d: 619, h: 16, m: 26, s: 11, ms: 207 }

  timer.start();

  console.log(timer.startedAt()); 