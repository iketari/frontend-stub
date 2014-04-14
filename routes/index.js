
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { 
		title: 'Технопарк',
		development: ('production' != process.env.NODE_ENV)
	});
};
