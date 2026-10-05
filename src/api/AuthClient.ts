import {APIRequestContext, APIResponse} from '@playwright/test';

export class AuthClient {
    constructor(private readonly request: APIRequestContext) {}

    async generateToken(): Promise<string> {
        const response = await this.request.post('/auth', {
            data:{
                username: "admin",
                password: "password123"
            }
        });
        const responseBody = await response.json();
        return responseBody.token;
    }

    async loginWithInvalidCredentials(user: string, pass: string): Promise<APIResponse> {
    return await this.request.post('/auth', {
      data: { username: user, password: pass }
    });
  }
}