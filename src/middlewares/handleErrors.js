const pageNotFound = (req, res) => {
  const { url } = req;
  return res.status(404).json({
    message: `Page ${url} Not Found`,
  });
};

const handleError = (err, _req, res, _next) => {
  const { message, status } = err;
  return res.status(status || 500).json({
    error: status || 500,
    message,
  });
};

const handleAsyncError = (fn) => async (req, res, next) => {
  try {
    return await fn(req, res);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  pageNotFound,
  handleError,
  handleAsyncError,
};
