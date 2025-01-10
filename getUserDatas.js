export async function getUserDatas(req, res) {
  try {
    const cfIp = req.headers["cf-connecting-ip"] || "";
    const realIp = req.headers["x-real-ip"] || "";
    const forwardedFor = req.headers["x-forwarded-for"] || "";
    const remoteAddress = req.socket.remoteAddress || "";
    return res.json({ cfIp, realIp, forwardedFor, remoteAddress });
  } catch (e) {
    return e;
  }
}
