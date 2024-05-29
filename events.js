import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Please turnoff the motor');
  setTimeout(()=>{
    console.log('Please turnoff the motor, It is gentle remainder.')

  },3000);
});

console.log("this is running")
myEmitter.emit('Waterfull');