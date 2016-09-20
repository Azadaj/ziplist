/**
 * Implements the ziplist function for E27.
 * Created by Azad on 9/19/2016.
 */

const testList1 = ['a','b','c'];
const testList2 = [1, 3, 4];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
      resutList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(zipList(testList1, testList2));

function zipListEasyWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListEasyWay(testList1, testList2));