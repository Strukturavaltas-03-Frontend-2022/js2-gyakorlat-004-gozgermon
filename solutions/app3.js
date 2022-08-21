
function customDateFormats(localDate)
{
const returnObj={
    short:"",
    long:""
}
returnObj.short=localDate.toLocaleString("hu-HU",{dateStyle:"medium", timeStyle:"short"}), 
returnObj.long=localDate.toLocaleString("hu-HU",{dateStyle:"long", timeStyle:"medium"})

return returnObj
}

console.log(customDateFormats(new Date()).short)
console.log(customDateFormats(new Date()).long)

//export { customDateFormats}

export default customDateFormats;