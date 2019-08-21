import 'dotenv/config';
const request = require("request")
const generateToken = require("../generateToken");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

<<<<<<< HEAD
//hello
//hi
=======
//abc
>>>>>>> way2
module.exports = {
    get: (req, res) => {
        generateToken((result, err) => {
            if (!err && result) {

                res.json(result);
            }
        });
    },

}