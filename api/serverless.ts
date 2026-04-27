export async function GET(req: Request, res: Response) {
    res.setHeader('Access-Control-Allow-Origin', "*"); // where you can access source from
    res.setHeader('Access-Control-Allow-Methods', "GET, OPTIONS"); // allowed methods
    res.setHeader('Access-Control-Allow-Headers', "Content-Type"); //type of headers allowed

    console.log(req)
    console.log(res)
    res.setHeader('Content-Type', 'text/html');
    res.write('<button>hi guys</button>'); // creates it on page
    return res.end(); // ends the response
}

export async function OPTIONS(req: Request, res: Response) {
    res.setHeader('Access-Control-Allow-Origin', "*"); // where you can access source from
    res.setHeader('Access-Control-Allow-Methods', "GET, OPTIONS"); // allowed methods
    res.setHeader('Access-Control-Allow-Headers', "Content-Type"); //type of headers allowed

    return res.statusCode(200);
}