# Fetch Examples

To show how to use the `fetch()` API on the browser we need a server.
We provide this in the form of `QuizServer.js`.

Usage instructions:

1. Delete `counterDB` and `QuizDB` files for a fresh start.
2. Run `node createTestDB.js` to create fresh database files.
3. Run `node QuizServer.js` to start the server.
4. Change the servers IP address and port by changing these two lines in the
`QuizServer.js` file:

```javascript
const host = '127.0.0.2';
const port = '5555';
```

**File Locations**: all `fetch()` examples are contained as `<script>`s within
the HTML files in the `public` directory.

**URLs to visit**:

http://127.0.0.2:5555/SimpleGet1.html

http://127.0.0.2:5555/SimpleGet2.html

http://127.0.0.2:5555/sampleFetchPost.html

http://127.0.0.2:5555/sampleFetchPost2.html

http://127.0.0.2:5555/errorGet1.html

http://127.0.0.2:5555/errorGet2.html

http://127.0.0.2:5555/errorGet3.html
