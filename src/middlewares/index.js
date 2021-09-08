export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};

// export const checkUser = async (req, res, next) => {
//   if (req.session.user?.id) {
//     return next();
//   }
//   return res.sendStatus(401);
// };
