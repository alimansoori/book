const next = require('next');
const express = require('express');
const cors = require('cors');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = app.getRequestHandler();
app.use(cors);

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req,res) => {
            return handler(req, res);
        });

        server.listen(port, err => {
            if (err) {throw err}
            console.log(process.env.NODE_ENV);

            console.log(`Ready on ${port}`);
        });
    }).catch(ex => {
        console.error(ex.stack);
        process.exit(1);
});