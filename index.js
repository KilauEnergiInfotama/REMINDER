var CronJob = require('cron').CronJob;
const axios = require('axios');
const fs = require('fs');
const mysql = require("mysql2/promise");
const nodemailer = require('nodemailer');
const format = require('date-format');
var path = require('path');
var CronJob = require('cron').CronJob;
const spinnies = require("spinnies");
const axiosRetry = require('axios-retry');
var urlencode = require('urlencode');
var token = "EAAJaYcrkSjIBALBXWQGkTVe9JL64qMTgo6s5NQGqHPyiUhwUEGUIeT59blZBep2t2qp6FeEDtI8YnNrZCpZBOstFVgZCWhA0V4y6bXjTUDGQRdRfC6lG3Srfc2STwNsRzPZATlynRBiNZAjKUH36B1CGnZAcZCt2PNCrbCkIXFiATL3oX5DeJ2ALgseSbLK93KOnFAMZCKi61rwZDZD";

axiosRetry(axios, {
    retries: 10,
    shouldResetTimeout: true,
    retryCondition: (_error) => true // retry no matter what
});
const { Sequelize} = require('sequelize');
const sequelize = new Sequelize({
  host: 'localhost', // use the service name defined in docker-compose.yml
  database: 'rmd',
  username: 'fdciabdul',
  password: 'mana123',
  dialect: 'postgres'
});


const { Model, DataTypes } = require('sequelize');

class TbEmailReminder2311 extends Model {}

TbEmailReminder2311.init({
  tb_email_reminder_2311_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tgl_proses: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  jenis_surat_email: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  crdacct_nbr: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  limit_nominal: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  min_pembayaran: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  total_tagihan: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  jatuh_tempo: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  cycle: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  outstd: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  card_no: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  flag_ever: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  t_date: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  selisih: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  jml: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  channel: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  priority: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  flag_err: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  created_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  modified_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  status_read: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  read_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  email_id: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  customer_name: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  body_message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  subject: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  keterangan: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  aging: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  stmt_clsba: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  fin_account: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  date_payment: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  kanwil: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  age_report: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  hp: {
    type: DataTypes.STRING(25),
    allowNull: true,
  },
  date_submit: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  pic: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  f_bucket: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  f_ratio: {
    type: DataTypes.STRING(50),
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'TbEmailReminder2311',
  tableName: 'tb_email_reminder_2311',
  timestamps: false
});



// Ensure the table is created
sequelize.sync();
const {
    loggersucces,
    loggerinfo,
    loggererr
} = require("./logger.js")
const fruits = {
    interval: 100,
    frames: [
        "←",
        "↖",
        "↑",
        "↗",
        "→",
        "↘",
        "↓",
        "↙"
    ]
};
const spinner = new spinnies({
    spinner: fruits,
    color: 'yellow',
    succeedColor: 'green',
    failColor: 'red',
    spinnerColor: 'blueBright'
});



spinner.add('db', {text: "Database initialization .."});

spinner.add('log', {
    text: "Welcome to reminder apps ..."
});
spinner.add('service', {
    text: "Job Started ..."
});
const job = new CronJob('0 11-21 * * *', async function () {

    
    spinner.update('service', {
        text: "start"
    });
    startApp();
    spinner.succeed('service', {
        text: "ALL DONE"
    });
}
,
null,
true,
'Asia/Jakarta'
);

async function getData() {
    try {
        var date = format("yyMMdd_(jam_hh)", new Date());
        const response = await axios.get('http://msapi.bankmega.com/email_gtw/email_gateway.php?token=3a7fd845c56b168fea4e67175b024bb9&request_type=get_email');
        fs.writeFileSync('./data_json/data_reminder_' + date + '.json', JSON.stringify(response.data), {
            encoding: 'utf8',
            flag: 'w'
        }, (err) => {
            if (err) throw err;
            spinner.succeed('service', {
                text: 'File has been created'
            });
        });
        return;
    } catch (e) {
        spinner.fail('service', {
            text: " server api error "
        });
    }
}
async function getDataFromFile() {
    try {
        var date = format("yyMMdd_(jam_hh)", new Date());
        const data = await fs.readFileSync('./data_json/data_reminder_' + date + '.json');
        return JSON.parse(data);
    } catch (e) { }
}

function displayTimeWithEmoji() {
    // Get the current time
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Convert hours, minutes, and seconds to emoji representation
    var hourEmoji = convertNumberToEmoji(hours);
    var minuteEmoji = convertNumberToEmoji(minutes);
    var secondEmoji = convertNumberToEmoji(seconds);
  
    // Display the time with emoji
    return hourEmoji + ' : ' + minuteEmoji + ' : ' + secondEmoji;
  }
  
  function convertNumberToEmoji(number) {
    var emojiDigits = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    var digits = number.toString().split('');
    var emojiRepresentation = '';
  
    for (var i = 0; i < digits.length; i++) {
      var digit = parseInt(digits[i]);
      emojiRepresentation += emojiDigits[digit];
    }
  
    return emojiRepresentation;
  }
  
  // Call the function to display the time with emoji
  function estimasiWaktu(jumlahData) {
    var waktuPerData = 2; // Waktu yang dibutuhkan untuk memproses satu data (dalam menit)
    var totalWaktu = (jumlahData / 1000) * waktuPerData; // Menghitung estimasi waktu total dalam menit
  
    // Memeriksa berbagai kasus estimasi waktu
    if (totalWaktu < 1) {
      return 'Kurang dari 1 menit';
    } else if (totalWaktu === 1) {
      return 'Sekitar 1 menit';
    } else if (totalWaktu < 60) {
      return 'Sekitar ' + totalWaktu.toFixed(2) + ' menit';
    } else {
      var jam = Math.floor(totalWaktu / 60); // Menghitung jumlah jam dari total waktu
      var menit = totalWaktu % 60; // Menghitung sisa menit dari total waktu
  
      if (jam === 1 && menit === 0) {
        return 'Sekitar 1 jam';
      } else if (jam === 1) {
        return 'Sekitar 1 jam ' + menit.toFixed(0) + ' menit';
      } else if (jam > 1 && menit === 0) {
        return 'Sekitar ' + jam + ' jam';
      } else {
        return 'Sekitar ' + jam + ' jam ' + menit.toFixed(0) + ' menit';
      }
    }
  }
  
  
async function startApp() {
    try {
        var date = format("yyMMdd_(jam_hh)", new Date());
        var gettime = format('hh:mm:ss', new Date());
        var tabledate = format("yyMM", new Date());

        if (fs.existsSync('./data_json/data_reminder_' + date + '.json')) {
            spinner.fail('service', {
                text: 'file exist'
            });
        } else {
            await getData();
        }
        const data = await getDataFromFile();
        const data_email = data.data;
        await apiWaProgress('6287772488902,6282208225129,6283142622052,6285162772731',displayTimeWithEmoji(),data_email.length,data_email.length,estimasiWaktu(data_email.length))
        loggerinfo(date, gettime)
        const result = await insertData(data_email);
        await sendEmail(data_email.length, result.jmlberhasil, result.jumlahdplkt);
        await apiWa('6287772488902,6282208225129,6283142622052,6285162772731', data_email.length, result.jmlberhasil, result.jumlahdplkt);
        loggersucces(date, gettime, result.jmlberhasil);
       // spinner.remove('service');
    } catch (e) {
        var date = format("yyMMdd", new Date());
        var gettime = format('hh:mm:ss', new Date());
        console.log(e)
        spinner.fail('service', {
            text: "terjadi kesalahan : " + e
        });
        loggererr(date, gettime, e)
    }
}


axiosRetry(axios, {
    retries: 10,
    shouldResetTimeout: true,
    retryCondition: (_error) => true // retry no matter what
});



async function sendEmail(jml, dtberhasil, duplikat, gagal) {
    spinner.add('senemail', {
        text: "sendemail"
    })
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
            spinner.fail('senemail', {
                text: error
            });
        } else {
            spinner.succeed('senemail', {
                text: "Email sent:" + info.response
            });
        }
    });
    return;
}
async function apiWa(number, total, jmlberhasil, jmlgagal) {
    try {
        const potong = number.split(',');
             for (i in potong) {
            axios.post("https://graph.facebook.com/v13.0/102177836209575/messages", {
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": potong[i],
                "type": "template",
                "template": {
                    "name": "reminder",
                    "language": {
                        "code": "en_US"
                    },
                    "components": [
                        {
                            "type": "header",
                            "parameters": [
                                {
                                    "type": "image",
                                    "image": {
                                        "link": "https://www.ptkei.co.id/kei_1000x1000.jpg"
                                    }
                                }
                            ]
                        },
                        {
                            "type": "body",
                            "parameters": [
                                {
                                    "type": "text",
                                    "text": total + "."
                                },
                                {
                                    "type": "text",
                                    "text": jmlberhasil + "."
                                },
                                {
                                    "type": "text",
                                    "text": jmlgagal + "."
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
            }).then((result) => {
                spinner.succeed('service', {
                    text: result.data.messages[0].id
                })
              //  spinner.remove('service');
            })
        }
    } catch (error) { 
        console.log(error)
    }
}

async function apiWaProgress(number, jam, totalemail, totalidemail,estimasi) {
    try {
        const potong = number.split(',');
              for (i in potong) {
            axios.post("https://graph.facebook.com/v13.0/102177836209575/messages", {
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": potong[i],
                "type": "template",
                "template": {
                    "name": "progress_get",
                    "language": {
                        "code": "en_US"
                    },
                    "components": [
                        {
                            "type": "body",
                            "parameters": [
                                {
                                    "type": "text",
                                    "text": jam
                                },
                                {
                                    "type": "text",
                                    "text": totalemail + "."
                                },
                                {
                                    "type": "text",
                                    "text": totalidemail + "."
                                },
                                {
                                    "type": "text",
                                    "text": estimasi + "."
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
            }).then((result) => {
                spinner.succeed('service', {
                    text: result.data.messages[0].id
                })
              //  spinner.remove('service');
            })
        }
    } catch (error) { 
        console.log(error.response.data)
    }
}


const insertData = async (data_email) => {
  const date = format("yyyyMMdd", new Date());
  const tabledate = format("yyMM", new Date());
  const flags = {}; // Object to keep track of flag value

  try {
    let jumlahdplkt = 0;
    let jmlberhasil = 0;
    let jmlgagalinsert = 0;
    let fin_dup = [];

    for (const data of data_email) {
      const { email_id, email_address, fin_account, customer_name, body_message, subject, cycle, send_time } = data;

      // Initialize flag value for each email id if not exists
      if (!flags[email_id]) {
        flags[email_id] = 0;
      }

      // Skip if flag value is 3
      if (flags[email_id] >= 3) {
        continue;
      }

      fin_dup.push(fin_account);

      const emailCount = await TbEmailReminder2311.count({
        where: {
          email_id: email_id,
          tgl_proses: date
        }
      });

      const finCount = await TbEmailReminder2311.count({
        where: {
          fin_account: fin_account,
          tgl_proses: date
        }
      });

      if (emailCount > 0 || finCount >= 3) {
        jumlahdplkt++;
        // Here you should implement your spinner logic or any other feedback mechanism you have
      } else {
        try {
          await sequelize.transaction(async (transaction) => {
            const emailReminder = await TbEmailReminder2311.create({
              // ... Add other fields as necessary
              tgl_proses: date,
              cycle,
              email: email_address,
              created_date: send_time,
              email_id,
              customer_name,
              body_message,
              subject,
              keterangan: 'API REMINDER',
              fin_account
              // ... Add other fields as necessary
            }, { transaction });

            if (emailReminder) {
              jmlberhasil++;
              // Implement axios call as necessary
            } else {
              jmlgagalinsert++;
              flags[email_id]++;
            }
          });
        } catch (error) {
          console.log(error);
          jmlgagalinsert++;
          flags[email_id]++;
        }
      }
    }

    return { jmlberhasil, jumlahdplkt, jmlgagalinsert };
  } catch (error) {
    console.log(error);
    // Handle or throw the error as per your requirement
  }
};

  startApp();
job.start();