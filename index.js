// Code your solution here
// function findMatching(drivers, query) {
//     return drivers.filter(driver => {

//       const lowercasedDriver = driver.toLowerCase();
//       const lowercasedQuery = query.toLowerCase();

//       return lowercasedDriver === lowercasedQuery;
//     });
//   }

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }