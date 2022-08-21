export default getSecondsOfThisYearUntilNow;

function getSecondsOfThisYearUntilNow(){
    const date1= new Date('2022-08-31T00:00:00');
    const date2= new Date('2022-01-01T00:00:00');
    return Math.round((date1.getTime()-date2.getTime())/1000)
}
console.log(getSecondsOfThisYearUntilNow())

//export { getSecondsOfThisYearUntilNow}


