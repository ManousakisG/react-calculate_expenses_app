const path =require('path');
const express =require('express');
const app=express();
const publicPath = path.join(__dirname, '..', 'public'); //join current directory with public directory
const port =process.env.PORT || 3000; //Heroku remote 
app.use(express.static(publicPath)); //use public directory

app.get('*', (req, res) => { // if something then give index.html
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => { //port 3000 is available in all OS.
    console.log('Server is up!!');
});

//Express framework