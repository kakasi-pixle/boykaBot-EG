import { canLevelUp, xpRange } from '../src/libraries/levelling.js';
import { levelup } from '../src/libraries/canvas.js';


const handler = async (m, { conn }) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.rpg_levelup

  const name = conn.getName(m.sender);
  const usertag = '@' + m.sender.split('@s.whatsapp.net')[0];
  const user = global.db.data.users[m.sender];
  let { role } = global.db.data.users[m.sender]
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const { min, xp, max } = xpRange(user.level, global.multiplier);
    const message = `
╮ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ╭ـ
˼🤴🏼˹┆ الـاسـم┆⌟${name}⌜
˼🔮˹┆الـمـسـتـوي┆⌟${user.level}⌜
˼🎖️˹┆رتـبــتـك┆⌟${role}⌜
˼🚀˹┆رصــيـدك┆⌟${user.exp}⌜
╯ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ╰ـ
> ˼📯˹ مــلـاحـــظـــة ⇅ ↶
╮ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ╭ـ
> 🧶 تحتاج الي ⌟${user.exp - min}/${xp}⌜ نقطة لي الارتفاع في المستوي 
╯ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ╰ـ
> 𝐁𝐎𝐀𝐘𝐊𝐀-𝐁𝐎𝐓 © 𝐁𝐘 𝐇𝐀𝐑𝐋𝐄𝐘`.trim();
    return conn.sendMessage(m.chat, {text: message, mentions: [m.sender]}, {quoted: m});
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const levelUpMessage = `${tradutor.texto2[0]} ${name}! ${tradutor.texto2[1]} ${user.level}`;
    const levelUpDetails = `
👑 𝐁𝐎𝐀𝐘𝐊𝐀-𝐁𝐎𝐓 - 𝐇𝐀𝐑𝐋𝐄𝐘
*╭━⊰ ${name}⁩ ⊱━დ*
*┃ الـمـسـتـوي السابق: ${before}*
*┃ الـمـسـتـوي الحالي: ${user.level}*
*┃ رتـبــتـك:* *‎${role}*
> 𝐁𝐎𝐀𝐘𝐊𝐀-𝐁𝐎𝐓 © 𝐁𝐘 𝐇𝐀𝐑𝐋𝐄𝐘
*╰━⊰ 🎖️ مستوى جديد 🎖️ ⊱━━დ*

*_لقد وصلت إلى مستوى جديد!!!_*`.trim();
    try {
      const levelUpImage = await levelup(levelUpMessage, user.level);
      conn.sendFile(m.chat, levelUpImage, 'levelup.jpg', levelUpDetails, m);
    } catch (e) {
      conn.sendMessage(m.chat, {text: levelUpDetails, mentions: [m.sender]}, {quoted: m});
    }
  }
};
handler.help = ['levelup'];
handler.tags = ['xp'];
handler.command = ['لفل', 'lvl', 'رانك', 'level'];
export default handler;
