export async function getUserDatas(req, res) {
  try {
    const ip = req.headers["cf-connecting-ip"];
    req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      "";
    return res.json({ ip });
  } catch (e) {
    return e;
  }
}
