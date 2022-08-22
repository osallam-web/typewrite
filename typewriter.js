const sentence = "hello there from lighthouse labs";


for (const char of sentence) {
  setTimeout(() => {
  //console.log(char);
    process.stdout.write(char); // avoid adding a white line in node
  }, 500)
}

setTimeout(() => {
  process.stdout.write('\n'); // move labber cursoer down on terminal
}, 1000)
