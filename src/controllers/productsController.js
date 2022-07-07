const fs = require('fs');
const path = require('path');
const { formatCurrencyBr } = require('../helpers/formatCurrencyBr');

const productsFilePath = path.join(__dirname, '..', 'data', 'productsDataBase.json');
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


		const finalDiscount = (productFound.price * productFound.discount) / 100;
		const finalPrice = productFound.price - finalDiscount;
		const finalPriceFormated = formatCurrencyBr(finalPrice)
		const price = formatCurrencyBr(productFound.price);

		const productFinal = {
			...productFound,
			price,
			finalPriceFormated
		};

		response.render('detail', { product: productFinal })
	},

	// Create - Form to create
	create: (request, response) => {
		response.render('product-create-form')
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
		const { id } = request.params;
		console.log(productsFilePath);
		const newProducts = products
			.filter((product) => product.id !== +id);

		console.log(JSON.stringify(newProducts));
		console.log(newProducts);

		fs.writeFileSync(
			productsFilePath,
			JSON.stringify(newProducts)
		);

		response.redirect('/');
	}
};

module.exports = controller;