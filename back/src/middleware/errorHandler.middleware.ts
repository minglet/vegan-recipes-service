import Logging from "../lib/Logging";

export default (err, req, res, next) => {
  Logging.error(err.message);
  console.log(`에러다!: ${err}`)
  console.log(JSON.stringify(err));
  return res.status(err.status).json(err);
};
