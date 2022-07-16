export const calculateTheSumOfTheCategory = (arrayOfCategoryObjects) => {
    let resolt = 0
    arrayOfCategoryObjects.map((obj, index) => {
        resolt += parseInt(obj.amount)
    })
    return resolt
};

export const calculateTheSumOfTheMonth = (arrayOfCategoriesObjects) => {
    let resolt = 0
    arrayOfCategoriesObjects.map((obj, index) => {
        resolt += parseInt(obj.sum)
    })
    return resolt.toString()
};