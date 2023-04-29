function superbowlWin(arrayObjs){
    let output = arrayObjs.find(
    function(element){
        if(element.result === `W`){
            return element
        }
    })
if(output){
    return output.year
}
else{
    return undefined
}
}