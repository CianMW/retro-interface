import { app } from "../app.js";
import supertest from "supertest";
import jest from "jest"
// Using modules cross-env is needed with node env variable set in the "test" script
const request = supertest(app)

// Manual Mock Testing : 
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
//   })
// );


// Is run before each test, can be used to reset/disable 
beforeEach(() => {
})

describe("Testing the testing environment", () => {

    it("should check that true is true", () => {
        expect(true).toBe(true);
    });


})


describe("testing the app endpoints", () => {


    // If using a databese express-mongoose, you can use the following code to test the database:
        {/*
            beforeAll(done => {
                console.log("This gets run before all tests in this suite")
            
                mongoose.connect(process.env.MONGO_URL_TEST!).then(() => {
                    console.log("Connected to the test database")
                    done()
                })
            })

        */}
    it("should check that the app is running", async () => {
        const response = await request.get("/test");
        expect(response.status).toBe(200);

    })
})