function errorHandler(error, req, res, next) {
  // 터미널에 노란색으로 출력됨.
  console.log('\x1b[33m%s\x1b[0m', error.stack);

  // 에러는 해당 http status 코드의 JSON 형태로 프론트에 전달됨

  const statusCode = error.status || 500;
  res.status(statusCode).json({ statusCode, reason: error.message });
}

export { errorHandler };
