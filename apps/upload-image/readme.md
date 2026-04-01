
* Upload image 
    ====file upload using multer
    - what is multer
        According to the documentation-
        Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of the busboy for maximum efficiency.

    - multer() have properties
        - destination
        - limits
    - install module multer
        > npm install multer --save
    - create route
        const storage = multer.diskStorage({
        <!-- where to store images -->
        destination: function (req, file, callback) {
            callback(null, './public/');
        },
        <!-- Filename determines what a file should be named in the folder. -->
        filename: function (req, file, callback) {
            callback(null, file.originalname);
            }
        });
        const upload = multer({
            storage : storage,
            limits : {
                fieldSize : 1024*1024*3
            }
        }) 
        app.post("/upload",upload.single("fileupload"), (req, res) => {
            console.log(req.file)
            res.send(req.file)
        })
        app.post("/upload",(req,res)=>{

        })
