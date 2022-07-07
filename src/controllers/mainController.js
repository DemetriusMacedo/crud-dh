const fs = require('fs');
const path = require('path');

const { formatCurrencyBr } = require('../helpers/formatCurrencyBr');

const productsFilePath = path.join(__dirname, '..', 'data', 'productsDataBase.json');

const mainController = {
	index: (_, response) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const productWithFinalPrice = products.map((product) => {
			const finalDiscount = (product.price * product.discount) / 100;
			const finalPrice = product.price - finalDiscount;
			const finalPriceFormated = formatCurrencyBr(finalPrice);

			return {
				...product,
				finalPriceFormated
			}
		});

		const productsVisited = productWithFinalPrice.filter(
			(product) => product.category === 'visited'
		);

		const ProductsInSale = productWithFinalPrice.filter(
			(product) => product.category === 'in-sale'
		);

		response.render('index', { productsVisited, ProductsInSale });
	},
	search: (request, response) => {
		// Do the magic
	},
};

module.exports = mainController;
