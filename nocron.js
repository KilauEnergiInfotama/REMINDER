
var CronJob = require('cron').CronJob;
const axios = require('axios');
const fs = require('fs');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const db = require('./db.js');
const format = require('date-format');
const { urlencoded } = require('express');

var CronJob = require('cron').CronJob;
const spinnies = require("spinnies");
const { loggersucces, loggerinfo, loggererr } = require("./logger.js")
const fruits = { 
    interval: 150,
    frames: [
        " 🧑⚽️       🧑 ",
        "🧑  ⚽️      🧑 ",
        "🧑   ⚽️     🧑 ",
        "🧑    ⚽️    🧑 ",
        "🧑     ⚽️   🧑 ",
        "🧑      ⚽️  🧑 ",
        "🧑       ⚽️🧑  ",
        "🧑      ⚽️  🧑 ",
        "🧑     ⚽️   🧑 ",
        "🧑    ⚽️    🧑 ",
        "🧑   ⚽️     🧑 ",
        "🧑  ⚽️      🧑 "
    ]
  }
console.clear();
const spinner = new spinnies({spinner: fruits});
var options =
{
    whileControl: (oldPage, newPage) => oldPage === newPage,
    lapse: 5000
}
let data = 'CiAgX19fX18gICAgICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgCiB8ICBfXyBcICAgICAgICAgICAgICAoXykgICAgICAgICB8IHwgICAgICAgICAgCiB8IHxfXykgfF9fXyBfIF9fIF9fXyAgXyBfIF9fICAgX198IHwgX19fIF8gX18gCiB8ICBfICAvLyBfIFwgJ18gYCBfIFx8IHwgJ18gXCAvIF9gIHwvIF8gXCAnX198CiB8IHwgXCBcICBfXy8gfCB8IHwgfCB8IHwgfCB8IHwgKF98IHwgIF9fLyB8ICAgCiB8X3wgIFxfXF9fX3xffCB8X3wgfF98X3xffCB8X3xcX18sX3xcX19ffF98ICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg=';
let buff = new Buffer.from(data, 'base64');
let text = buff.toString('ascii');
function setTerminalTitle(title)
{
  process.stdout.write(
    String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
  );
}

console.log(text + "\n\n");
setInterval(function() {
var jam = format('hh:mm:ss', new Date());
var Tanngal = format('dd/MM/yyyy', new Date());
    spinner.add('jam', {text: "Tanngal ["+Tanngal+"]  | Jam : "+ jam});
    setTerminalTitle('Reminder Apps - ' + format("dd/MM/yyyy hh:mm:ss", new Date()));
}, 100);
/**
 * 描述
 * @author Abdul Muttaqin
 * @date 2022-04-11
 * @param {any} 'log'
 * @param {any} {text:"Welcometoreminderapps..."}
 * @returns {any}
 */
spinner.add('log', { text: "Welcome to reminder apps ..." });

/**
 *  Function Monitoring Web Mega
 * @author Abdul Muttaqin
 * @date 2022-04-11
 * @returns {any}
 */


 spinner.add('service', { text: "Job Started ..." });

// CRONJOB 
const job = new CronJob('0 11-21 * * *', async function () {
  
    try {
        apiWa('6287772488902,6282208225129,6283142622052,6285162772731', "Aplikasi Reminder Dimulai");
        // statements
        spinner.update('service', { text: "start" });
        startApp();
        spinner.succeed('service', { text: "ALL DONE" });
     //   loggersucces('Service Started');
    } catch (e) {
        // statements
      // apiWa('6289614737919,6287772488902,6282208225129', "Terjadi error " + e);
    }

});

async function getData() {
try {
    // statements

    var date = format("yyMMdd_(jam_hh)", new Date());
    const response = await axios.get('http://msapi.bankmega.com/email_gtw/email_gateway.php?token=3a7fd845c56b168fea4e67175b024bb9&request_type=get_email');

    fs.writeFileSync('./data_json/data_reminder_' + date + '.json', JSON.stringify(response.data), { encoding: 'utf8', flag: 'w' }, (err) => {
        if (err) throw err;
        console.log('File has been created');
    });

    return;
    } catch(e) {
    // statements
    console.log(" server api error ");
}
}


//  pase json file
async function getDataFromFile() {
try {
    // statements
  var date = format("yyMMdd_(jam_hh)", new Date());
    const data = await fs.readFileSync('./data_json/data_reminder_' + date + '.json');
    return JSON.parse(data);
    } catch(e) {
    // statements
    console.log(e);
}
  
}
//create function save data to mysql2
async function updateData(status, id) {
    const update = await axios.get("http://139.255.97.90:39064/read_reminder/update_status.php?status=" + status + "&id=" + id);
    return update.data;
}

// create function nodemailer send email
async function sendEmail(jml, dtberhasil, duplikat, gagal) {
    spinner.add('senemail', { text: "sendemail" })
    const transporter = nodemailer.createTransport({
        host: '202.158.93.229',
        port: 58228,
        auth: {
            user: 'ebilling@bankmega.com',
            pass: 'E_billin9',
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const mailOptions = {
        from: 'ebilling@bankmega.com',
        to: ['ari@ptkei.co.id', 'abdulmuttaqin456@gmail.com', 'fauzan@ptkei.co.id'],
        subject: 'Report Reminder API',
        html: `<!doctype html>
        <html>
        
        <head>
            <meta charset='utf-8'>
            <title></title>
        </head>
        
        <body>
            <p>&nbsp;</p>
            <p><span style='font-size:1.3em; font-weight:bold;'><span style='font-family:Georgia, serif;'><strong> Dear Team
                        </strong></span></span></p>
            <p>&nbsp;</p>
            <p><span style='font-size:1.0em;'><span style='font-family:Georgia, serif;'>Berikut Kami Sampaikan list data yang
                        kami ambil dari API Reminder</span></span></p>
            <table width='400' height='82' cellspacing='1' cellpadding='1' border='0'>
                <tbody>
                    <tr>
                        <td>-</td>
                        <td><span style='font-size:1.0em;'><span style='font-family:Georgia, serif;'>Data Berhasil
                                    Diambil</span></span></td>
                        <td>=</td>
                        <td><span style='font-size:1.0em;'><span style='font-family:Georgia, serif;'>${jml}
                                    </span></span></td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td><span style='font-size:1.0em;'><span style='font-family:Georgia, serif;'>Data Berhasil
                                    Diproses</span></span></td>
                        <td>=</td>
                        <td><span style='font-size:1.0em;'><span style='font-family:Georgia, serif;'> ${dtberhasil}
                                    </span></span></td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td><span style='font-size:1.0em;'><span style='font-family:Georgia, serif;'>Data Yang sudah Ada /
                                    Duplikat</span></span></td>
                        <td>=</td>
                        <td><span style='font-size:1.0em;'><span style='font-family:Georgia, serif;'> ${duplikat}
                                    </span></span></td>
                    </tr>
                </tbody>
            </table>
            <p>&nbsp;</p>
            <p><span style='font-size:1.0em;'><span style='font-family:Tahoma;'>Demikian Info Yang dapat Kami
                        berikan</span></span></p>
            <p>&nbsp;</p>
            <p><span style='font-size:1.0em;'><span style='font-family:Tahoma;'>Terima Kasih</span></span></p>
            <p>&nbsp;</p>
            <p><span style='font-size:1.0em;'><span style='font-family:Tahoma;'>Regards,</span></span></p>
            <p><span style='font-size:1.0em;'><span style='font-family:Tahoma;'><strong>Server Apps
                            Reminder</strong></span></span></p>
        </body>
        
        </html>
        `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            spinner.fail('senemail', { text: error });
        } else {
            spinner.succeed('senemail', { text: "\n Email sent:" + info.response + "\n" });
        }
    });
    return;
}


// create axios with get data
async function apiWa(number, total,jmlberhasil, jmlgagal) {
    try {
        
   
    const potong = number.split(',');
    var token = "EAARsFE9Vte8BAK17PZBsq4B2UZB8Hvxc6rtlZAoeZB9cJxRzkNetFok0SFzAFHi1PnW7YelB8hgmCmW4eW96pC4sFq86ZCaZAZCrLikHZBZBjABqfTkMokTfGvsIkoun724ZBO8o0rXjkM8bcCsT2mDuSFHy1jGcAZAfOzXr9yvZCosaK1Ske8HAvlLHvILWpFs0nGlMjAnvnFygFAZDZD";
    for (i in potong) {
        axios.post("https://graph.facebook.com/v13.0/107443598758403/messages",{
            "messaging_product":"whatsapp",
            "recipient_type":"individual",
            "to":potong[i],
            "type":"template",
            "template":{
               "name":"hello",
               "language":{
                  "code":"en"
               },
               "components":[
                  {
                     "type":"header",
                     "parameters":[
                        {
                           "type":"image",
                           "image":{
                              "link":"https://i.postimg.cc/MGQD4K74/302244239-1110944686441214-4051824005469838365-n.png"
                           }
                        }
                     ]
                  },
                  {
                     "type":"body",
                     "parameters":[
                        {
                           "type":"text",
                           "text": total+"."
                        },
                        {
                           "type":"text",
                           "text": jmlberhasil+"."
                        },
                        {
                           "type":"text",
                           "text":jmlgagal+"."
                        }
                     ]
                  },
                  {
                     "type":"button",
                     "sub_type":"quick_reply",
                     "index":"0",
                     "parameters":[
                        {
                           "type":"payload",
                           "payload":"Check Data"
                        }
                     ]
                  }
               ]
            }
         }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }

      }).then((result)=>{
		  console.log(result.data)
	  })
      
    }
} catch (error) {
        
}
}


async function startApp() {
try {
    // statements

    var date = format("yyMMdd_(jam_hh)", new Date());
    var gettime = format('hh:mm:ss', new Date());
    console.log('start app');
    //check if file exist
    if (fs.existsSync('./data_json/data_reminder_' + date + '.json')) {
        console.log('file exist');
    } else {
        await getData();
    }
    const data = await getDataFromFile();
    const data_email = data.data;
    loggerinfo(date,gettime)
    const result = await db.insertData(data_email);
    let msg = `
 *Dear Team*

Berikut Kami Sampaikan list data yang kami ambil dari API Reminder

-	Data Berhasil Diambil	= ${data_email.length}
-	Data Berhasil Diproses	=	${result.jmlberhasil} 
-	Data Yang sudah Ada / Duplikat	= ${result.jumlahdplkt}  

Demikian Info Yang dapat Kami berikan

Terima Kasih

Regards,

Server Apps Reminder`;
    await sendEmail(data_email.length, result.jmlberhasil, result.jumlahdplkt);
     await apiWa('6287772488902,6282208225129,6283142622052,6285162772731',data_email.length,result.jmlberhasil, result.jumlahdplkt);
     loggersucces(date,gettime,result.jmlberhasil)
} catch(e) {
    // statements
    var date = format("yyMMdd", new Date());
    var gettime = format('hh:mm:ss', new Date());
    console.log("terjadi kesalahan : "+e);
    loggererr(date,gettime , e)
}
}



// start all
// job.start();


// monitoringMega()
// monitoringMegaBussiness()
startApp()
 