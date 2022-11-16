const tmdbApiKey = process.env.TMDBAPIKEY || '178c59eb9584e9acb9bbcc362f5434f7';
const omdbApiKey = process.env.OMDBAPIKEY || '5d032ed4';

const dbUrl = process.env.DBURL || 'mongodb+srv://irannapatil:IrannaPatil@cluster0.d3croyn.mongodb.net/?retryWrites=true&w=majority';

module.exports = {
	tmdbApiKey: tmdbApiKey,
	omdbApiKey: omdbApiKey,
	dbUrl: dbUrl
};
