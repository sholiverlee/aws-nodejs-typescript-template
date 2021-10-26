import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../handler';


describe('Handler Test', () => {
    
    it('should be status 200', async () => {
        const event = {} as APIGatewayProxyEvent;
        const observed = await handler(event);

        expect(observed.statusCode).toEqual(200);
        expect(typeof observed.body).toBe('string');
    });

   
})
