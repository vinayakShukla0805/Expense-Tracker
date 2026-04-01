import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
  console.log("Hi Vinayak Shukla is developing this");
  res.send("this is the root");
})

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});