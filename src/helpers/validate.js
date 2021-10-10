export const validate = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.noUnknown().validate(body, { strict: true });
    next();
    return next();
  }
  catch (error) {
    return res.status(400).json({ error });
  }
}