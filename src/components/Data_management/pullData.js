import React from "react";
import axios from "axios";
import { gapi } from "gapi-script";
import { calculateTheSumOfTheCategory } from "./CalculationUtils";

const pullFileData = async (file_id, sheet_name) => {
  const accessToken = await gapi.auth.getToken().access_token;
  const options = { headers: { Authorization: "Bearer " + accessToken } };
  const response = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${file_id}/values/${sheet_name}`,
    options
  );
  return response.data.values;
}; //This function returns array. each array is representing a line from the google Sheet file.

const makeObjs = (array_Of_Arrays) => {
  const result = array_Of_Arrays.map((array) => {
    return {
      category: array[0],
      billName: array[1],
      amount: array[2],
      date: array[3],
      month: array[3][3] + array[3][4],
      year: array[3][6] + array[3][7] + array[3][8] + array[3][9],
    };
  });

  return result;
}; //this function returns array of objects, each object is represnting trnsxtion.

const generateArrayOfSubCategoriesSummationData = (array) => {
  let resolt = [];
  array.forEach((bill, index) => {
    const temp = array.filter((obj) => obj.billName === bill.billName);
    if (
      resolt.find((el) => el.name === temp[0].billName) === undefined ||
      resolt.length === 0
    ) {
      resolt.push({
        category: temp[0].category,
        name: temp[0].billName,
        sum: calculateTheSumOfTheCategory(temp),
      });
    }
  });
  return resolt;
}; //This function returns an array. Each element in the array is an object,
//which contains the name of the sub-category, and the total amount of transactions of that sub-category.

const sortToCategories = (array) => {
  let sortedArray = [];
  array.forEach((element, index) => {
    const tempSorted = array.filter((el) => el.category === element.category);
    if (
      sortedArray.find(
        (obj) => obj.data[0].category === tempSorted[0].category
      ) === undefined ||
      sortedArray.length === 0
    ) {
      sortedArray.push({
        category: tempSorted[0].category,
        data: [...tempSorted],
        sub_categories_data:
          generateArrayOfSubCategoriesSummationData(tempSorted),
        sum: calculateTheSumOfTheCategory(tempSorted),
        month: tempSorted[0].date[3] + tempSorted[0].date[4],
        year:
          tempSorted[0].date[6] +
          tempSorted[0].date[7] +
          tempSorted[0].date[8] +
          tempSorted[0].date[9],
      });
    }
  });
  return sortedArray;
}; //This function returns an array. Each element in the array is an object,
//This function returns an array. Each member in the array is an object, which contains:
// - Category name,
// - An array of objects that each object contains all the transactions of the category,
// - An array of objects that each object contains the category name and all its sub-categories. That each sub-category is a supplier. And to each supplier the total amount of money spent on that supplier,
// - The total amount of transactions of the same category,
// - The month in which all the withdrawals made from the database were made
// - The year in which all withdrawals made from the database were made

const sortDuplicatesAndUnvalidDates = (arrayOfDates) => {
  const resolt = [];
  arrayOfDates.map((date) => {
    if (resolt.find((el) => el === date) === undefined && date.length === 4) {
      resolt.push(date);
    }
  });
  return resolt;
}; // This function returns an array of all the years which transactions took place. (used in the year dropdown.)

export const getMonth = async (file_id, sheet_name, month, year) => {
  const response = await pullFileData(file_id, sheet_name);
  const myRange = response.map(
    (line) => line[3][6] + line[3][7] + line[3][8] + line[3][9]
  );

  const Month = response.filter((row) => {
    if (
      row[3][3] +
        row[3][4] +
        row[3][5] +
        row[3][6] +
        row[3][7] +
        row[3][8] +
        row[3][9] ===
      month + "/" + year
    ) {
      return row;
    }
  });
  const rowDataAsArrayOfObjects = makeObjs(Month);
  const data = {
    range: sortDuplicatesAndUnvalidDates(myRange).sort(),
    data: sortToCategories(rowDataAsArrayOfObjects),
  };
  return data;
}; // This function returns an object.
// The object contains:
// - An array of objects that each object contains information about a particular category.
// - An array of years in which transactions were acquired.

const month = (arrayOfBillsObjects, month) => {
  const resolt = arrayOfBillsObjects.filter((bill) => {
    if (bill.month === month) {
      return bill;
    }
  });
  return {
    month: month,
    bills: resolt,
    sum: calculateTheSumOfTheCategory(resolt),
  };
}; //return object that contain:
// - month: The month that those transactions pulled from.
// - bills: Array of transactions as objects.
// - sum: The sum of the the transactions.

export const getYearBillData = async (file_id, sheet_name, billName, year) => {
  const response = await pullFileData(file_id, sheet_name);
  const Year = response.filter((row) => {
    if (row[3][6] + row[3][7] + row[3][8] + row[3][9] === year) {
      return row;
    }
  });
  const billData = Year.filter((bill) => bill[1] === billName);
  const data = makeObjs(billData);

  const sortMonths = () => {
    const resolt = [];
    data.map((bill) => {
      if (resolt.find((el) => el.bills[0].month == bill.month) === undefined) {
        resolt.push(month(data, bill.month));
      }
    });
    return resolt;
  };

  return {
    data: data,
    arrayOfMonthsData: sortMonths(),
  };
}; // Return object that contain:
// - data: Array of objects each object is a transaction.
// - arrayOfMonthsData: Array of arrays that each array contains transactions of a specific business in each month..
