import React from "react"
import axios from 'axios'
import { gapi } from 'gapi-script'
import { calculateTheSumOfTheCategory } from "./CalculationUtils";

const pullFileData = async (file_id, sheet_name) => {
    let accessToken = await gapi.auth.getToken().access_token;
    const options = {headers: {'Authorization': 'Bearer ' + accessToken}}
    const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${file_id}/values/${sheet_name}`, options);
    return response.data.values
};

const makeObjs = (array_Of_Arrays)=> {
    const result = array_Of_Arrays.map((array)=> {
        return {
            category: array[0],
            billName: array[1],
            amount: array[2],
            date: array[3]
        }
    })
    
    return result
}

const generateArrayOfSubCategoriesSummationData =  (array) => {
  let resolt = [] 
  array.forEach((bill, index) => {
      const temp = array.filter( obj => obj.billName === bill.billName )  
      if(resolt.find((el) => el.name === temp[0].billName) === undefined || resolt.length === 0) {
          resolt.push({
              category: temp[0].category,
              name: temp[0].billName,
              sum: calculateTheSumOfTheCategory(temp)
          })
      }
  })
  return resolt
}

const sortToCategories = (array) => {
    let fff = [{billName: '10bis', amount: '50'}, {billName: 'wolt', amount: '50'}, {billName: 'wolt', amount: '50'}]
    let sortedArray = []
    array.forEach((element, index) => {
      const tempSorted = array.filter((el) => el.category === element.category);
      if (sortedArray.find((obj) => obj.data[0].category ===  tempSorted[0].category) === undefined || sortedArray.length === 0) {
        sortedArray.push({
          category: tempSorted[0].category,
          data: [...tempSorted], 
          sub_categories_data: generateArrayOfSubCategoriesSummationData(tempSorted),
          sum: calculateTheSumOfTheCategory(tempSorted),
          month: tempSorted[0].date[3] + tempSorted[0].date[4],
          year: tempSorted[0].date[6] + tempSorted[0].date[7] + tempSorted[0].date[8] + tempSorted[0].date[9]

        })
      }
    });
    return sortedArray
  };

  export const getMonth  = async (file_id, sheet_name, month, year) => {
    const response = await pullFileData(file_id, sheet_name);
    const myMonth = response.filter((row) => {
         if (
         row[3][3] + row[3][4] 
         + row[3][5]
         + row[3][6] + row[3][7] 
         + row[3][8] + row[3][9] 
         === month + '/' + year ) {
             return row
         }
    })
    const rowDataAsArrayOfObjects = makeObjs(myMonth)
    return sortToCategories(rowDataAsArrayOfObjects)
 };