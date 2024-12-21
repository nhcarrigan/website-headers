/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { readFile } from "node:fs/promises";
import http from "node:http";
import { join } from "node:path";

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const server = http.createServer(async(request, response) => {
  if (request.url === "/") {
    const file = await readFile(join(process.cwd(), "index.html"), "utf-8");
    // eslint-disable-next-line @typescript-eslint/naming-convention
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  }

  if (request.url === "/prod/index.js") {
    const file = await
    readFile(join(process.cwd(), "prod", "index.js"), "utf-8");
    // eslint-disable-next-line @typescript-eslint/naming-convention
    response.writeHead(200, { "Content-Type": "application/javascript" });
    response.end(file);
  }
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
