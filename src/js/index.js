// jshint esversion: 6

const pressed = [];

const secretCode = 'frankie';

window.addEventListener('keyup', e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // Will trim the code down

  if (pressed.join('').includes(secretCode)) {
    console.log('Hooray You did it!!!!');
    cornify_add();
  }
  console.log(pressed);
});
