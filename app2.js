const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');

/*------------------------------------------
--------------------------------------------
parse application/json
--------------------------------------------
--------------------------------------------*/
app.use(bodyParser.json());

/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'cpiDemo', /* MySQL User */
    password: 'cpiDemo', /* MySQL Password */
    database: 'cpiDemo' /* MySQL Database */
});

/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected with App...');
});

/**
 * Get All Items
 *
 * @return response()
 */
app.get('/api/items', (req, res) => {
    let sqlQuery = "SELECT * FROM student";

    let query = conn.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Get Single Item
 *
 * @return response()
 */
app.get('/api/items/:id', (req, res) => {
    let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;

    let query = conn.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Create New Item
 *
 * @return response()
 */
app.post('/api/items', (req, res) => {
    let data = { title: req.body.title, body: req.body.body };

    let sqlQuery = "INSERT INTO items SET ?";

    let query = conn.query(sqlQuery, data, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Update Item
 *
 * @return response()
 */
app.put('/api/items/:id', (req, res) => {
    let sqlQuery = "UPDATE items SET title='" + req.body.title + "', body='" + req.body.body + "' WHERE id=" + req.params.id;

    let query = conn.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Delete Item
 *
 * @return response()
 */
app.delete('/api/items/:id', (req, res) => {
    let sqlQuery = "DELETE FROM items WHERE id=" + req.params.id + "";

    let query = conn.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results) {
    return JSON.stringify({ "status": 200, "error": null, "response": results });
}

/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});