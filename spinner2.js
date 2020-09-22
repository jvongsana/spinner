process.stdout.write('hello from spinner1.js... \rheyyy\n');
let timer = 100;
let animation = ['|' , '/', '-', '\\', '|', '/', '-', '\\', '|'];
let position = 0;

const spinner = setInterval(() => {
  if (position === animation.length) {
    clearInterval(spinner);
    return '\n';
  }
  process.stdout.write(`\r${animation[position]}`);
  timer += 200;
  position += 1;
}, timer);