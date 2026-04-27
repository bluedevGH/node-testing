export async function GET(req, res) {
    console.log(req)
    console.log(res)
    res.setHeader('Content-Type', 'text/html');
    res.write('<button>hi guys</button>'); // creates it on page
    res.end(); // ends the response
}