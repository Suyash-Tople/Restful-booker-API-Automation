import {test as base, expect, request} from '@playwright/test'
import {AuthClient} from '../src/api/AuthClient'
import { BookingClient } from '../src/api/BookingClient'

type ApiFixtures = {
    auth : AuthClient,
    booking : BookingClient,
    sessionToken : string
}

export const test = base.extend<ApiFixtures>({
    
    auth: async({request}, use) => {
        const authClient = new AuthClient(request);
        await use(authClient);
    },

    booking: async({request}, use) => {
        const bookingClient = new BookingClient(request)    
        await use(bookingClient);
    },

    sessionToken: async({auth}, use) =>{
        const token = await auth.generateToken();
        await use(token);
    },
});

export{expect}