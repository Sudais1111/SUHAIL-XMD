const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923139783801";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_02_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMTY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU4LFxuICAgICAgICA3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJNTN3T0lNeVdobDI3ditqamRibjI5K091MDJ3Mm11aU1vRGFqWW4vQk1VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItc2hESVVuTVNDRzRpTEt2bDE0eEl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyMDQ1NjA4LTljM2MtNDVhZi04MDc1LThmN2QzYzdiZDkwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAxNCxcbiAgICAgIDM2LFxuICAgICAgMTc5LFxuICAgICAgMjMwLFxuICAgICAgMjQ4LFxuICAgICAgODIsXG4gICAgICAxMjQsXG4gICAgICAxNjMsXG4gICAgICAyMTQsXG4gICAgICA1MyxcbiAgICAgIDE3OSxcbiAgICAgIDEwNCxcbiAgICAgIDEzOSxcbiAgICAgIDE4MixcbiAgICAgIDE4NixcbiAgICAgIDI0MCxcbiAgICAgIDcsXG4gICAgICAxODUsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAyNDYsXG4gICAgICAxMzksXG4gICAgICAxOTksXG4gICAgICAzNixcbiAgICAgIDE2MSxcbiAgICAgIDE1MyxcbiAgICAgIDI3LFxuICAgICAgMjA5LFxuICAgICAgMjQsXG4gICAgICAxMDEsXG4gICAgICA4NCxcbiAgICAgIDEwNCxcbiAgICAgIDI5LFxuICAgICAgMjQsXG4gICAgICA4NSxcbiAgICAgIDE2OCxcbiAgICAgIDg0LFxuICAgICAgMTUxLFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc2SkZDR0czXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMzk3ODM4MDE6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwODUxNjg4NzM4ODIxMjoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJRHp3NndGRUpLYys3Y0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlNUkFtUGRUWG5BWDB6eUkzbUNBTXo2cEdEZS8rc1FCQzB0YTJJd1R3aFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0czMExic1ZPSUg2WUNwU0pGZS9pc0E2MlRTMVRGZlRsWHhPVXZDdDRlenhYdzBlSEdmMzU3T0FBVVhOemFUa0FmQ0hSc1h4OGF0ZCt2L3pKVUl1QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVjFiK0VObUJ4emF4Z0tPRVZ3cUR1T3NKamxUQ1FqelNuS1MyU1A4TFYzZzU4ZE5NeWYvSVM5WWZmZ2lra0J6V0ZMVEdlZFFxdmVnbHBMV1IwY09VREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTM5NzgzODAxOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk3NDkzNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
