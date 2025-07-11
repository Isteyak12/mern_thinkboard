export function getAllNotes(req, res) {
  res.status(200).send("fetched the notes!");
}

export function createNote(req, res) {
  res.status(201).json("created the notes!");
}

export function updateNote(req, res) {
  res.status(200).json("updated the notes!");
}

export function deleteNote(req, res) {
  res.status(200).json("deleted the notes!");
}
