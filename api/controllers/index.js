export function ping(req, res) {
  res.status(200).json({
    message: "Ping successfully",
  });
}
