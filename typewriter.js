const sentence = "hello there from lighthouse labs";
for (let i=0; i< sentence.length; i++) {
  let time = i*50
  setTimeout(() => {
  process.stdout.write(sentence[i]);
  }, time)
}
 setTimeout(() => {
   process.stdout.write('\n')
  }, 50*(sentence.length+1))