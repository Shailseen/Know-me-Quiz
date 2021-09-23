var readlinesync = require('readline-sync');
var quesone = readlinesync.question('Can you tell your name? ');
// console.log(quesone);
var scr=0;
var allques = {
  asksnack: "Which one snack i like Samosa/Litti? ",
  askcartoon: "Which one animated program i like Ninja hattori/Doraemon? ",
  askbike: "what type of bike i love Sport/Cruiser? ",
  askcity: "In which city i'm belong Patna/Assam? ",
  askgames: "Which games i like to play Cricket/Soccer? ",
}
var allans = ["samosa","doraemon","cruiser","patna","cricket"];
console.log("Hey!",quesone,"Did you know SHAILESH KUMAR? YES/NO " );
var answait = readlinesync.question();
function right()
{
  console.log("You are right!");
  scr = scr + 1;
  console.log("Current score = ",scr);
  console.log("~~~~~~~~~~~~~~~~~~~~");
}
function wrong()
{
  console.log("Wrong!");
  console.log("Current score = ",scr);
  console.log("~~~~~~~~~~~~~~~~~~~~");
}
if(answait.toLowerCase() === 'no')
{
  console.log("Okay! see you next time");
}
else if(answait.toLowerCase() === 'yes')
{
  if(allans[0] === readlinesync.question(allques.asksnack).toLowerCase())
    right();
  else
    wrong();
  if(allans[1] === readlinesync.question(allques.askcartoon).toLowerCase())
    right();
  else
    wrong();
  if(allans[2] === readlinesync.question(allques.askbike).toLowerCase())
    right();
  else
    wrong();
   if(allans[3] === readlinesync.question(allques.askcity).toLowerCase())
    right();
  else
    wrong();
   if(allans[4] === readlinesync.question(allques.askgames).toLowerCase())
    right();
  else
    wrong();
  console.log("Your total score = ",scr);
}
else
{
  console.log("You have entered an invalid keyword!");
}
