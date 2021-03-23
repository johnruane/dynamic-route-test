export default (req, res) => {
  const {
    query: { text },
  } = req;

  res.status(200).json({ searchTerm: text });
}
