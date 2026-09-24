const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  if (request.method==='GET')
  {
    
    const urlParsed = url.parse(request.url, true);
    const queryString = urlParsed.query;
    const name = queryString.name || 'Unknown';
    const age = queryString.age || 'Unknown';
    response.write('GET request data\n');
    response.write(`name: ${name}\n`);
    response.write(`age: ${age}\n`);
    response.end();
  }
else if (request.method === 'POST') {
        let postData = '';

        // Collect chunks of data
        request.on('data', (chunk) => {
            postData += chunk.toString();
        });

        // Process final data when stream ends
        request.on('end', () => {
            console.log('Received Body:', postData);
            const parsedData = JSON.parse(postData);
            response.writeHead(200, { 'Content-Type': 'text/json' });
            response.end(JSON.stringify({
                data: parsedData
            }));
        });
    } 
  });
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
