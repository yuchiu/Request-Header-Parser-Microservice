const getIP = require('ipware')().get_ip;

module.exports = (app) => {
    app.get('/',
            function (req, res) {
                res.render("index")
            }
        )    
        app.get('/whoami',
                function (req, res) {
                    let ipaddress = getIP(req)
                    let language = req.headers["accept-language"].slice(0,5)
                    let begin = req.headers["user-agent"].indexOf('(')
                    let end = req.headers["user-agent"].indexOf(')')
                    let software = req.headers["user-agent"].slice(begin+1, end)

                    res.send({
                        ipaddress:ipaddress,
                        language:language,
                        software:software
                    })
                }
            )
}