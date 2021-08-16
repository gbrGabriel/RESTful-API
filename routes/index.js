module.exports = app => {

    app.get('/', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Projeto RESTful API</h1><h2>by:Gabriel Silva - gbrDev</h2><p><a target="_blank" href="https://www.linkedin.com/in/gbrgabriel">Linkedin</a><br><a target="_blank" href="https://github.com/gbrGabriel">Github</a></p>');

    });

};


