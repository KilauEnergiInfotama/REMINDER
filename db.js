const mysql = require("mysql2/promise");
var format = require("date-format");
const axios = require('axios').default;
var urlencode = require('urlencode');
const axiosRetry = require('axios-retry');
const logUpdate = require('log-update');
const frames = ['-', '\\', '|', '/'];
let index = 0;
/**
 * 
 * @returns {Promise<void>}
 * @constructor
 * @param {string} username
 * @param {string} password
 * 
 */

axiosRetry(axios, {
    retries: 10,
    shouldResetTimeout: true,
    retryCondition: (_error) => true // retry no matter what
});

const createConnection = async () => {
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "aaa"
    });
}



var _escapeString = function (val) {
    val = val.replace(/[\0\n\r\b\t\\'"\x1a]/g, function (s) {
        switch (s) {
            case "\0":
                return "\\0";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\b":
                return "\\b";
            case "\t":
                return "\\t";
            case "\x1a":
                return "\\Z";
            case "'":
                return "''";
            case '"':
                return '""';
            default:
                return "\\" + s;
        }
    });

    return val;
};





   async function insertData (finn) {

            const connection = await createConnection();
           
                const [duplikat] = await connection.execute(
                    `SELECT email_id FROM tb_email_reminder_${tabledate} WHERE email_id ='${email_id}' AND tgl_proses='${date}';`
                );
              

}

insertData();