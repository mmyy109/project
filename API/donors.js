// api/donors.js
let donors = []; // במקום בסיס נתונים אמיתי, לשם הדוגמה

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(donors);
  } else if (req.method === "POST") {
    const { name, amount, institution, username } = req.body;
    donors.push({ name, amount, institution, username });
    res.status(201).json({ message: "Donor added", donors });
  } else if (req.method === "DELETE") {
    donors = donors.filter((_, index) => index !== parseInt(req.query.index));
    res.status(200).json(donors);
  }
}
