var express =  require('express')
var multer = require ('multer')
var upload = multer({dest: 'uploads/'})
var uploadIPFS = require( './upload-ipfs.js')
var app= express()

app.get('/', async (req, res) => {
    res.sendFile(__dirname+'/prueba.html');
});

const PATH = 'uploads/';

app.post ('/file', upload.single('doc'), async function (req,res,next){
  try{
    console.log(req.file);
    const file = req.file;

    if(!file){
      res.status(400).send({
        status: false,
        data: 'No file is selected.'
      });
    } else{
      var HASH = await uploadIPFS(PATH + req.file.filename);
      console.log(HASH);

      res.send({
        status: true,
        message: 'File is uploaded.',
        data:{
          name: file.originalname,
          mimetype: file.mimetype,
          size: file.size
        }
      });
    }
  } catch (err){
    res.status(500).send(err);
  }
})

const port = 8888;

app.listen(port,() => 
console.log('Server is listening on port ${port}.')
);
