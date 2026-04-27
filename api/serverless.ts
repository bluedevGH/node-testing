import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', "*"); // where you can access source from
    res.setHeader('Access-Control-Allow-Methods', "GET, OPTIONS"); // allowed methods
    res.setHeader('Access-Control-Allow-Headers', "Content-Type"); //type of headers allowed

    if (req.method === "OPTIONS") {
        return res.statusCode(200);
    }

    console.log(req)
    console.log(res)
    res.setHeader('Content-Type', 'text/plaintext');
    res.write('<button>hi guys</button>'); // creates it on page
    return res.end(); // ends the response
}