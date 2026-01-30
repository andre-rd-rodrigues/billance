module.exports = {
	globDirectory: 'dist',
	globPatterns: [
		'**/*.{html,json,png,ico,js}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};