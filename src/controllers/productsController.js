const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Root - Show all products
	index: (request, response) => {
		// Do the magic
	},
	detail: (request, response) => {
		const { id } = request.params;

		const productFound = products
			.find((product) => product.id === +id);

		response.render('detail', { product: productFound })
	},

	// Create - Form to create
	create: (request, response) => {
		// Do the magic
	},

	// Create -  Method to store
	store: (request, response) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (request, response) => {
		// Do the magic
	},
	// Update - Method to update
	update: (request, response) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy: (request, response) => {
		// Do the magic
	}
};

module.exports = controller;