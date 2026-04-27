const http = require('http');

function hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh() {
    const server = http.createServer(async (req, res) => {
        console.log(req.method) // logs what type of reuqest is made
        res.setHeader('Content-Type', 'text/html');
        res.write('<button>hi guys</button>'); // creates it on page
        res.end(); // ends the response
    });

    server.listen((5000), async () => { // terminal
        console.log('hi frank');
    });
}

