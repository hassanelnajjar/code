exports.getAllGenres = (req, res, next) => {
	res.status(200).send("Hello Get Router");
};

exports.getGenre = (req, res, next) => {
	const { id } = req.params;
	res.status(200).send("Hello Single Genre :" + id);
};
