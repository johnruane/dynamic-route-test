export default (req, res) => {
  const {
    query: { search },
  } = req;

  res.status(200).json({ searchTerm: search });
}
