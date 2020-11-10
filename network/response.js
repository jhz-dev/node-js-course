exports.success = (req, res, message, status) => {
    res.status(status || 200).send(message)
}

exports.error = (req, res, error, status) => {
    res.status(status || 500).send({ error });
}