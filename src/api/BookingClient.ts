import {APIRequestContext, APIResponse} from '@playwright/test';
import {BookingPayload} from '../models/Booking.ts'

export class BookingClient {
    constructor(private readonly request: APIRequestContext) {}

    async createBooking(payload: BookingPayload): Promise<APIResponse> {
        return await this.request.post('/booking', {
            data: payload
        });
    };

    async getBooking(bookingId: number): Promise<APIResponse>{
        return await this.request.get(`/booking/${bookingId}`);
    }

    async updateBooking(bookingId: number, payload: BookingPayload, token: string): Promise<APIResponse>{
        return await this.request.put(`/booking/${bookingId}`,{
            headers:{
                'Cookie'    : `token=${token}`,   
            },
            data: payload,
        });
    }

    async deleteBooking(bookingId: number, token: string): Promise<APIResponse>{
        return await this.request.delete(`/booking/${bookingId}`, {
            headers: {
                'Cookie' : `token=${token}`
            }
        });
    }
}