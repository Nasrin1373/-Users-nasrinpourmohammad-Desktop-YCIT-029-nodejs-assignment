const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "John Smith",
    age: 25,
  },
];

// This route gets *ALL* the users
app.get("/api/users", (req, res) => {
  res.json(data);
});

// This route gets *SINGLE*  user
app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const user = data.filter(u => u.id === id)[0]
    if (user){
        res.json(user)
    }else{
        res.status(404).send({error:"User does not exist"})
    }
 
  });

app.post("/api/users", (req, res) => {
    
  });


app.put("/api/users", (req, res) => {
    
  });


app.delete("/api/users", (req, res) => {
   
  });
// Add a new route to get a *SINGLE* user (you can use either path param or query param)
// /api/users/1      <-- path param (req.params.id)
// /api/users?id=1   <-- query param (req.query.id) If you go with query param, just modify the existing endpoint above instead of creating a new endpoint

// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)

app.listen(3004, () => {
  console.log("Example app listening on port 3000!");
});