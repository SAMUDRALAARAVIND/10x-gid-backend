const express = require("express")
const cors = require("cors")
const port = 8080
const app = express() 
const fileUpload = require("express-fileupload")


app.use(cors())
app.use(express.json())
app.use(fileUpload())


app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})

/* Create a post */

app.post("/add", (req, resp) => {
    
})

app.post("/api", (req, resp) => {
    const { username, address, description }  = req.body
    console.log({ username, address, description })
    const {image_file} = req.files
    image_file.mv("./upload/"+image_file.name, (err) => {
        if(err) {
            resp.json({message: err})
        }
        else {
            resp.json({message: "Upload success"})
        }
    })
})