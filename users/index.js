const express = require("express");
const axios = require("axios");
const app = express();
const bodyparser = require("body-parser");

const PORT = 4001;

const allUsers = [
  {
    userId: 11,
    username: "Vikash",
    phone: "9876543210",
    contacts: [],
  },
  {
    userId: 12,
    username: "purav",
    phone: "9876543210",
    contacts: [],
  },
  {
    userId: 13,
    username: "max",
    phone: "9876543210",
    contacts: [],
  },
];

app.use(bodyparser.json());
// app.get("/", (req, res) => {
//   res.status(200);
//   res.send("Welcome to User Module");
// });

app.post("/singup", async (req, res) => {
  // console.log("heee");
  const request = req.body;

  const response = await axios.get(`http://localhost:3002/users`);
  // console.log(response);
  const filterUser = response?.data?.filter((row) => row.name == request.name);

  if (filterUser.length > 0) {
    return res.status(400).json("user already exits");
  }

  request.token = "";
  axios
    .post("http://localhost:3002/users", request)
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch();
});

app.post("/login", async (req, res) => {
    // console.log("heee");
    const request = req.body;
  
    const response = await axios.get(`http://localhost:3002/users`);
    // console.log(response);
    const filterUser = response?.data?.find((row) => {        
       return row.name == request.name && row.password == request.password
    } );
  
    console.log(filterUser);
    if (filterUser) {
      return res.status(200).json("login successful");
    }
    return res.status(401).json("authentication fail");
   
  });

app.get("/all", async(req, res) => {
    try {
        const users = await axios.get(`http://localhost:3002/users`);
        res.status(200).json(users.data);
    } catch (error) {
        res.status(404).json("Something went wrong");
    }

  
});

app.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const userId = req.params.id;
  let userData = allUsers.find((row) => row.userId == userId);

  //   await axios
  //     .get(`http://localhost:4000/contacts/${userId}`)
  //     .then((response) => {
  //       // console.log(response);
  //       if (response && response?.status == 200) {
  //         const contacts = response.data;
  //         userData["contacts"].push(contacts);
  //         res.status(200).json(userData);
  //       }
  //     })
  //     .catch((error) => {
  //       res.json("something went wrong");
  //     });

  try {
    const response = await axios.get(`http://localhost:4000/contact/${userId}`);
    userData["contacts"] = response.data;
    res.status(200).json(userData);
  } catch (error) {
    res.json("something went wrong");
  }
});

app.listen(PORT, () => {
  console.log("user listening on PORT: ", PORT);
});
