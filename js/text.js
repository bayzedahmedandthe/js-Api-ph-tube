// function getaTimeString(time){
// const hour = parseInt(time / 3600);
// let remainingSecend = time % 3600;
// const minute = parseInt(remainingSecend /60);
// remainingSecend = parseInt(remainingSecend % 60);
// return `${hour}  hour ${minute} minute ${remainingSecend} secend ago`;
// }
// const result = getaTimeString(7865);
// console.log(result);

function getTimeString(time){
const hour = parseInt(time / 3600);
letReaminingSecend = time % 3600;
const minute = parseInt(letReaminingSecend / 60);
const secend = parseInt(letReaminingSecend % minute)



return`${hour} hour ${minute} minute ${secend} secend ago`;
}
const result = getTimeString(7865);
console.log(result);