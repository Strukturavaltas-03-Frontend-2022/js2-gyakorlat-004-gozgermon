
function countOfWorkingDays(){
    const date1= new Date('2022-08-31T00:00:00');
    const date2= new Date('2022-01-01T00:00:00');


    return Math.ceil(((date1.getTime()-date2.getTime())/1000/60/60/24/7)*5)
}
console.log(countOfWorkingDays())

//export { countOfWorkingDays}



 export default countOfWorkingDays;
