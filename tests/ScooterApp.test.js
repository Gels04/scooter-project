const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const {describe, test, expect} = require("@jest/globals")

let scooter1;
let scooterApp1; 
  beforeEach(() => {
    scooterApp1 = new ScooterApp();
    scooter1 = new Scooter("Paddington")
  })

describe("ScooterApp has the correct properties", () => {
    test("ScooterApp has a stations property", () => {
        expect(scooterApp1).toHaveProperty("stations")
        expect(scooterApp1.stations.length).toBe(scooterApp1.stations.length >= 3);
    })
    test("ScooterApp has a registeredUsers() method that returns an object whose keys are usernames", () => {
        expect(ScooterApp.registeredUsers).toEqual({username: "Jelly"});
    })
})

// describe("ScooterApp has the appropriate methods and works correctly", () => {
//     test("registerUser() adds user to the registeredUser property object if not registered and is >=18", () => {
//         expect(ScooterApp.registerUser("Jelly", "TreuJellybean", 500)).toBe()
//     })
// })



// ScooterApp tests here

// register user

// log in

// log out

// rent scooter

// dock scooter
