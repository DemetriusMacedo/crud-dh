const formatCurrencyBr = (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

module.exports = { formatCurrencyBr };