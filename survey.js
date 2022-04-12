const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//this is so ugly
answerArray = [];
rl.question('What\'s your name? ', (answer) => {
  answerArray.push(answer);
  rl.question('What\'s an activity you like doing?', (answer) => {
    answerArray.push(answer);
    rl.question('What do you listen to while doing that?', (answer) => {
      answerArray.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        answerArray.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          answerArray.push(answer);
          rl.question('Which sport is your absolute favourite?', (answer) => {
            answerArray.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              answerArray.push(answer);
              console.log(answerArray.join(". "))
              rl.close();
            })
          })
        })
      })
    })
  })
});

