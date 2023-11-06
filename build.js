const exe = require('@angablue/exe');

const build = exe({
    entry: './index.js',
    out: './KEI_Reminder.exe',
    pkg: [ '--public'], // Specify extra pkg arguments
    version: '2.4.2',
    target: 'node16-win-x64',
    icon: './icon/kei.ico', // Application icons must be in .ico format
    properties: {
        FileDescription: 'Abdul Muttaqin',
        ProductName: 'KEI REMINDER',
        LegalCopyright: 'Reminder https://imtaqin.id',
        OriginalFilename: 'KEI.exe'
    }
});

build.then(() => console.log('Build completed!'));