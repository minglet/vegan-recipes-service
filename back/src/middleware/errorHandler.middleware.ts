import Logging from "../lib/Logging";

export default (err, req, res, next) => {
  Logging.error(err.message);
  return res.status(err.status).json(err);
};

//like

function ifErrorMessage(target) {
  if (target.errorMessage) {
    throw new Error(target.errorMessage);
  }
}

export {ifErrorMessage};
