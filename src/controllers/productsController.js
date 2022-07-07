const fs = require('fs');
const path = require('path');
const { formatCurrencyBr } = require('../helpers/formatCurrencyBr');

const productsFilePath = path.join(__dirname, '..', 'data', 'productsDataBase.json');

const controller = {
	// Root - Show all products
	index: (request, response) => {
		// Do the magic
	},
	detail: (request, response) => {
		const { id } = request.params;

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const productFound = products
			.find((product) => product.id === +id);

		const finalDiscount = (productFound.price * productFound.discount) / 100;
		const finalPrice = productFound.price - finalDiscount;
		const finalPriceFormated = formatCurrencyBr(finalPrice)
		const price = formatCurrencyBr(productFound.price);

		const productFinal = {
			...productFound,
			price,
			finalPriceFormated
		};

		response.render('detail', { product: productFinal });
	},
	create: (request, response) => {
		response.render('product-create-form');
	},

	// Create -  Method to store
	store: (request, response) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const newProduct = {
			id: products.at(-1).id + 1,
			...request.body
		}

		products.push(newProduct);

		fs.writeFileSync(
			productsFilePath,
			JSON.stringify(products)
		);

		response.redirect('/');
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
		const { id } = request.params;

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const newProducts = products
			.filter((product) => product.id !== +id);

		fs.writeFileSync(
			productsFilePath,
			JSON.stringify(newProducts)
		);

		response.redirect('/');
	}
};

module.exports = controller;