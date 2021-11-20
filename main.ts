import { serve } from 'https://deno.land/std@0.59.0/http/server.ts';

const PORT = 80
const server = serve({ port: PORT });

console.log(`🦖 Rar! http://localhost:${PORT}`);

const BUNDLE_NAME = 'bundle.js';
const BUNDLE = await Deno.readTextFile(`./lib/${BUNDLE_NAME}`);

const HTML = `
<!DOCTYPE html>
<html>
  <head>
    <title>Rex</title>
    <meta charset="utf-8"/>
    <style type="text/css">
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
}
    </style>
  </head>
  <body>
    <div id="app" style="width: 100%; height: 100%"></div>
    <script src="/${BUNDLE_NAME}"></script>
  </body>
</html>
`;

for await (const req of server) {
  if (req.url === '/bundle.js') {
    const headers = new Headers();
    headers.set('content-type', 'text/javascript');
    headers.set('charset', 'utf-8');
    
    req.respond({
      headers,
      body: BUNDLE,
    });
  } else {
    req.respond({ body: HTML })
  }
}
