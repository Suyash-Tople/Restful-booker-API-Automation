import {test, expect} from '../fixtures/ApiFixture';
import { BookingResponse, BookingPayload } from '../src/models/Booking';
import testData from '../src/data/bookingData.json';

test.describe('Hotel Reservation State Engine: ', () =>{

    test('Should create a booking', async({booking})=>{
        const response = await booking.createBooking(testData.validBooking);
        expect(response.status()).toBe(200);

        const responseBody: BookingResponse = await response.json();
        expect(responseBody.booking.firstname).toBe(testData.validBooking.firstname);
        expect(responseBody.bookingid).toBeGreaterThan(0);
    });

    test('Should get a booking', async({booking}) => {
        const response = await booking.createBooking(testData.validBooking);
        expect(response.status()).toBe(200); 

        const responseBody: BookingResponse = await response.json();
        const getBookingResponse = await booking.getBooking(responseBody.bookingid);
        const getResponseBody = await getBookingResponse.json();

        expect(getBookingResponse.status()).toBe(200);
        expect(getResponseBody).toMatchObject(testData.validBooking);
    });

    test('Should update a booking', async({booking, sessionToken}) => {
        const createBooking = await booking.createBooking(testData.validBooking);
        expect(createBooking.status()).toBe(200);
        
        const createBookingResponse = await createBooking.json();

        const updateBooking = await booking.updateBooking(createBookingResponse.bookingid, testData.updateBooking, sessionToken);
        expect(updateBooking.status()).toBe(200);
        const updateBookingResponse = await updateBooking.json();
        expect(updateBookingResponse).toMatchObject(testData.updateBooking); 
    });

    test('Should Delete a booking', async({booking, sessionToken}) =>{
        const createBooking = await booking.createBooking(testData.validBooking);
        const createBookingResponse = await createBooking.json();
        expect(createBooking.status()).toBe(200);
        expect(createBookingResponse.booking).toMatchObject(testData.validBooking);

        const deleteBooking = await booking.deleteBooking(createBookingResponse.bookingid, sessionToken);
        expect(deleteBooking.status()).toBe(201);
    });
})