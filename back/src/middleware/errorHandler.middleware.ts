import Logging from "../lib/Logging";

export default (err, req, res, next) => {
  Logging.error(err.message);
  return res.status(err.status).json(err);
};
