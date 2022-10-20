import Logging from "../lib/Logging";

export default (err, req, res, next) => {
  Logging.error(err.message);
  console.log(`에러다!: ${err}`)
  console.log(JSON.stringify(err));
  return res.status(err.status).json(err);
};

function errorMiddleware(error, req, res, next) {
  // 터미널에 노란색으로 출력됨.
  console.log("\x1b[33m%s\x1b[0m", error);
  res.status(400).send(error.message);
}

const ifErrorMessage = (target) => {
  if (target.errorMessage) {
    throw new Error(target.errorMessage);
  }
};

export { errorMiddleware, ifErrorMessage};
