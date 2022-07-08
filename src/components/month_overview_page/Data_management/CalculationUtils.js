export const calculateTheSumOfTheCategory = (arrayOfCategoryObjects) => {
    let resolt = 0
    arrayOfCategoryObjects.map((obj, index) => {
        resolt += parseInt(obj.amount)
    })
    return resolt
}

