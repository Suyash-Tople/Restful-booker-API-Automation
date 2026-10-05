import {test, expect} from '../fixtures/ApiFixture';
import { BookingResponse, BookingPayload } from '../src/models/Booking';
import testData from '../src/data/bookingData.json';

test.describe("Testing Negative test cases: ", async() =>{

    test("Should reject modification request without authentication cookie", async({booking}) =>{
        const invalidToken = 'abc';
        const response = await booking.updateBooking(1, testData.updateBooking, invalidToken);
        expect(response.status()).toBe(403);
    });

    test("Should fail gracefully when fetching a non-existent transaction record (404)", async({booking}) =>{
        const ghostId = 9999999;
        const response = await booking.getBooking(ghostId);
        expect(response.status()).toBe(404);
    });

    test("Should fail for incorrect username and password", async({auth}) => {
        const username = "admin";
        const password = ""
        const response = await auth.loginWithInvalidCredentials(username, password);
        const responseBody = await response.json();
        expect(response.status()).toBe(200);
        expect(responseBody).toEqual({reason: 'Bad credentials'});
    });
})
