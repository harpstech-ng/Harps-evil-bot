const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })

module.exports = {
  // ========== HARPS TECH CORE SETTINGS ==========
  SESSION_ID: process.env.SESSION_ID || '',
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348141612736", // PUT YOUR NUMBER
  OWNER_NAME: process.env.OWNER_NAME || "HARPS TECH CEO",
  BOT_NAME: process.env.BOT_NAME || "HARPS TECH BOT v3.0",
  SUDO: process.env.SUDO || "2348141612736", // Your number = admin
  MODS: process.env.MODS || "", // Add other admins here
  
  // ========== BOT BEHAVIOR ==========
  WORKTYPE: process.env.WORKTYPE || "public", // public = anyone can use
  PREFIX: process.env.PREFIX || "!",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || true,
  BOT_PRESENCE: process.env.BOT_PRESENCE || "available",
  TIMEZONE: process.env.TIMEZONE || "Africa/Lagos",
  
  // ========== BRANDING & DESIGN ==========
  CAPTION: process.env.CAPTION || "© Powered by HARPS TECH | WhatsApp: 08141612736",
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "HARPS TECH",
  STICKER_AUTHOR: process.env.STICKER_AUTHOR || "🔥 PREMIUM BOT 🔥",
  MENU_IMAGE: process.env.MENU_IMAGE || "https://i.imgur.com/your-banner.jpg", // Put your banner link here
  AUDIO_DATA: process.env.AUDIO_DATA || "HARPS TECH;🔥",
  
  // ========== SHARP MENU DESIGNS ==========
  STARTUP_MSG: process.env.STARTUP_MSG || "on",
  ERROR_MSG: process.env.ERROR_MSG || true,
  CMD_REACT: process.env.CMD_REACT || "on",
  REACT: process.env.REACT || true,
  
  WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || `╭━━━━━✦ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝙷𝙰𝚁𝙿𝚂 𝚃𝙴𝙲𝙷 ✦━━━━━╮
┃ 
┃ ➺ 𝙷𝙴𝙻𝙾 @user! 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 @gname 🔥
┃ ➺ 𝙼𝙴𝙼𝙱𝙴𝚁𝚂: @count
┃ 
┃ ➺ 𝚃𝚈𝙿𝙴 !𝚖𝚎𝚗𝚞 𝚃𝙾 𝚂𝙴 379+ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂
┃ ➺ 𝙽𝙴𝙳 𝙷𝙴𝙻𝙿? 𝙳𝙼 @${OWNER_NUMBER.split('@')[0]}
┃
┗━━━━━━━━━━━━━━━`,
  
  GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || `╭━━━━━✦ 𝙶𝙾𝙾𝙳𝙱𝚈𝙴 𝙵𝚁𝙾𝙼 𝙷𝙰𝚁𝙿𝚂 𝚃𝙴𝙲𝙷 ✦━━━━━╮
┃ 
┃ ➺ @user 𝙷𝙰𝚂 𝙻𝙴𝙵𝚃 @gname 😢
┃ ➺ 𝙼𝙴𝙼𝙱𝙴𝚁𝚂 𝙻𝙴𝙵𝚃: @count
┃ 
┃ ➺ 𝚆𝙴 𝙷𝙾𝙿𝙴 𝚃𝙷𝙴𝚈 𝙷𝙰𝙳 𝙰 𝙽𝙸𝙲𝙴 𝚃𝙸𝙼𝙴
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  
  // ========== SECURITY & ANTI-BAN ==========
  ANTIDELETE: process.env.ANTIDELETE || "on",
  ANTIDELETE_INCHAT: process.env.ANTIDELETE_INCHAT || "on",
  ANTI_EDIT: process.env.ANTI_EDIT || "on",
  REJECT_CALL: process.env.REJECT_CALL || "on", // Reject calls to avoid ban
  WARNCOUNT: process.env.WARNCOUNT || "3",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  
  // ========== DATABASE & OTHER ==========
  MONGODB_URI: process.env.MONGODB_URI || "", // For economy plugin
  STATUS_VIEW: process.env.STATUS_VIEW || true,
  SAVE_STATUS: process.env.SAVE_STATUS || false,
  STATUS_EMOJI: process.env.STATUS_EMOJI || "⚡",
  LANG_CODE: process.env.LANG_CODE || "en",
  VV_CMD: process.env.VV_CMD || "👀",
  SAVE_CMD: process.env.SAVE_CMD || "📥",
}
