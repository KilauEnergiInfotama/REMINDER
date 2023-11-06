const {
    createLogger: createLogger,
    format: format,
    transports: transports
} = require("winston"), {
    combine: combine,
    timestamp: timestamp,
    label: label,
    prettyPrint: prettyPrint
} = format, logger = createLogger({
    level: "info",
    format: combine(label({
        app: "Reminder App!"
    }), timestamp(), prettyPrint()),
    defaultMeta: {
        app: "Reminder app"
    },
    transports: [new transports.File({
        filename: "log/error.log",
        level: "error"
    }), new transports.File({
        filename: "log/service.log"
    })]
});

function loggerinfo(e, r) {
    logger.log({
        level: "info",
        tanggal: e,
        jam: r,
        service: "Service Started",
        message: "Get Email From API"
    })
}

function loggersucces(tgl, jam, jumlah) {
    logger.log({
        level: "info",
        tanggal: tgl,
        jam: jam,
        service: "Success",
        message: "Succes Get Email From API",
        jumlah: jumlah
    })
}

function loggererr(tgl, jam, resason) {
    logger.log({
        level: "error",
        tanggal: tgl,
        jam: jam,
        service: "Service Started",
        message: "ERROR Get Email From API" + resason
    })
}
module.exports = {
    loggerinfo: loggerinfo,
    loggersucces: loggersucces,
    loggererr: loggererr
};