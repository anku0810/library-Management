import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1417@anku",
  database: "library_db",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM admin_books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  console.log("bookpage");
  const q = "INSERT INTO admin_books(title, author, subject, publish_date) VALUES (?,?,?,?)";

  const values = [
    req.body.title,
    req.body.author,
    req.body.subject,
    req.body.publish_date,
  ];

  db.query(q, values, (err, data) => {
    if (err) {
      return res.send(err);
    }
    else{
    // return res.json(data);
    console.log(res.json(data));
    }
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM admin_books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE admin_books SET title = ?,  author = ?, subject = ?,  publish_date = ?  WHERE id = ?";

  const values = [
    req.body.title,
    req.body.author,
    req.body.subject,
    req.body.publish_date,
    
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Connected to Database");
});