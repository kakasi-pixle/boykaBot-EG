import { ar, en } from '../lib/multi-language/_default.js' 

let handler = m => m
handler.before = async function (m, { conn }) {
let idioma  = global.db.data.users[m.sender].midLanguage
let MID_GB
  
if (idioma == "ar") {
MID_GB = ar
} else if (idioma == "ar") {
MID_GB = ar
} else {
MID_GB = mid || ar
}
global.mid = MID_GB	
}
export default handler
