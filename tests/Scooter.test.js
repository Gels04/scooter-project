const Scooter = require('../src/Scooter')
const User = require('../src/User')

const {describe, test, expect} = require("@jest/globals")

// //typeof scooter === object
// describe('scooter object', () => {
//   test('does something', () => {
//     // edit this to be a real test!
//     expect(false).toEqual(true);
//   }
// )
// })


let scooter1;
let jelly;
  beforeEach(() => {
    scooter1 = new Scooter("Paddington")
    jelly = new User("Jelly", "TrueJellybean", 500)
  })

//Method tests
describe('The Scooter class has the right properties', () => {
  // tests here!

  test("Scooter has a 'station' property", () => {
    expect(scooter1.station).toBe("Paddington")
  })
  test.skip("Scooter has a property of 'user', 'serial', 'nextSerial', 'charge' and 'isBroken'", () => {
    expect(Scooter).toHaveProperty("user");
    expect(scooter1).toHaveProperty("serial");
    expect(scooter1).toHaveProperty("nextSerial");
    expect(scooter1).toHaveProperty("charge");
    expect(scooter1).toHaveProperty("isBroken");
  })
});

describe("The Scooter properties works appropraiately", () => {
  test("serial number is initialised with 0", () => {
    expect(scooter1.serial).toBe(0);
  })
  test("nextSerial number is starts with one then increments every time new serial number is assigned", () => {
    expect(scooter1.nextSerial).toBe(scooter1.serial + 1);
  })

  test("All Scooters are docked", () => {
    expect(scooter1.station).toEqual(scooter1.station);
  })
  test("All Scooters are charged", () => {
    expect(scooter1.charge).toBe(100)
  })
  test("All Scooter are in good repair", () => {
    expect(scooter1.isBroken).toBe(false)
  })
})

describe("the Scooter rent() method works properly", () => {

  test("rent(user) checks out scooter if it isn't broken or below 20%", () => {
    scooter1.rent(jelly)
    expect(scooter1.station).toBe(null)
    expect(scooter1.user).toBe("Jelly")
    scooter1.charge = 15;
    expect(()=> {
      scooter1.rent(jelly).toThrow("Error: Scooter needs to charge");
    })
  })
})

describe("the dock(station) works properly", () => {
  test("dock(station) returns the scooter to the station", () => {
    scooter1.station = null;
    scooter1.user = "Jelly";
    scooter1.dock("Paddington")
    expect(scooter1.station).toBe("Paddington");
  })
  test("dock(station) clears the user once scooter is docked", () => {
    scooter1.station = null;
    scooter1.user = "Jelly";
    scooter1.dock("Paddington")
    expect(scooter1.user).toBe(null);
  })
})


  //rent method

  //dock method

  //requestRepair method

  //charge method

