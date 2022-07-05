const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (request, response) => {
		response.render('index');
	},
	search: (request, response) => {
		// Do the magic
	},
};

module.exports = controller;
