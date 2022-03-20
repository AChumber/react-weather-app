import '@testing-library/jest-dom'
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockServer = setupServer(
    rest.get(`${process.env.REACT_APP_API_BASE_URL}/geo/1.0/direct`, (req, res, context) => {
        return res(
            context.status(200),
            context.json([
                {name: 'London', state: 'England', country: 'GB'},
                {name: 'London', state: 'CA', country: 'CA'},
                {name: 'London', state: 'Ohio', country: 'US'},
                {name: 'London', state: 'KY', country: 'US'},
                {name: 'London', state: 'CA', country: 'US'}
            ])
        )
    }),
    //Wildcard to catch any requests being tested to avoid them going to the actual server
    rest.get('*', (req,res,ctx) => {
        console.error(`Please add request handler for ${req.url.toString()}`);
        return res(
            ctx.status(500),
            ctx.json({ error: 'Please add to request handler in mock server' })
        )
    })
);
beforeAll(() => mockServer.listen());
afterAll(() => mockServer.close());
afterEach(() => mockServer.resetHandlers());

export { mockServer, rest };