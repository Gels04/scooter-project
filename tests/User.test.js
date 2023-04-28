const User = require('../src/User')

const {describe, test, expect} = require("@jest/globals")

let jelly;
  beforeEach(() => {
    jelly = new User("Jelly", "TrueJellybean", 500)
  })


describe("the User class has the correct properitites", () => {
    test("jelly is a object created from the User class", () => {
        expect(jelly instanceof User).toBe(true);
    })
    test("User has a username", () => {
        expect(jelly.username).toBe("Jelly")
    })
    test("User has a password", () => {
        expect(jelly.password).toBe("TrueJellybean");
    })
    test("User has an age", () => {
        expect(jelly.age).toBe("500");
    })
    test("User is NOT logged in when they register (create an object from User class)", () => {
        expect(jelly.loggedIn).toBe(false);
    })
})

describe("User methods working appropriately", () => {
    test("when User logs in correctly, User is logged 'in'", () => {
        expect(jelly.login("TrueJellybean")).toBe(jelly.loggedIn = true);
    })
    test("when User logs in incorrectly, login(password) throws an Error", () => {
        expect(() => {
            jelly.login("truejellybean")}).toThrow("Error: incorrect password");
    })
    test("when User logs out, User is logged 'out'", () => {
        expect(jelly.logout()).toBe(jelly.loggedIn = false);
    })
})
// User tests here

// test username

// test password

// test age

// test login

// test logout
