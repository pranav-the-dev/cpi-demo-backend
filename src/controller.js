const express = require('express');
const mysql = require('mysql2');

const databaseConnection = require('../database');

const fetchAllUser = ((req, res) => {
  try {
    let sqlQuery = "SELECT * FROM student";

    databaseConnection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      res.send(apiResponse(results));
    });
  } catch (error) {
    console.log("🚀 ~ file: controller.js ~ line 19 ~ fetchAllUser ~ error", error)
  }
});


const fetchUserById = (req, res) => {
  let sqlQuery = "SELECT * FROM student WHERE id=" + req.params.id;

  databaseConnection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
}


const insertUser = (req, res) => {
  try {
    const data = {
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password
    }

    const insertQuery = "INSERT INTO student SET ?";
    databaseConnection.query(insertQuery, data, (err, results) => {
      if (err) throw err;
      return res.send(apiResponse(results));
    });
  }
  catch (error) {
    console.log(error);
  }
}


const updateUser = (req, res) => {

  const data = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  }

  let sqlQuery = "UPDATE student SET name='" + data.name + "', address='" + data.address + "', phone='" + data.phone + "', email='" + data.email + "', password='" + data.password + "' WHERE id=" + req.params.id;

  databaseConnection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
}

const deleteUserById = (req, res) => {
  let sqlQuery = "DELETE FROM student WHERE id=" + req.params.id + "";

  databaseConnection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
}

function apiResponse(results) {
  return JSON.stringify({ "status": 200, "error": null, "response": results });
}

function errorResponse(error) {
  return JSON.stringify({ "status": 500, "error": error });
}

module.exports = {
  fetchAllUser: fetchAllUser,
  insertUser: insertUser,
  updateUser: updateUser,
  deleteUserById: deleteUserById,
  fetchUserById: fetchUserById
}
