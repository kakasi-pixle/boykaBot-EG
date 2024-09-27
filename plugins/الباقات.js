function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  const harley = 'https://i.imgur.com/3vGxxsm.jpeg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `
*مــرحــبــا بــك/ي* @${mentionId.split('@')[0]}
╮──────────────────⟢ـ
┆ الالعاب المتوافره
┆ 1 :كوتشينه 
┆ 2 :لعبه الشايب
┆ 4 : دومينو
╯──────────────────⟢ـ
*اسم البوت بتاعك (شاورما عمك)*

> Copyright © 2024 shawarma`,subtitle: "shawarma",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: harley } }, { upload: conn.waUploadToServer }, {quoted: m}))},nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '♪ الــبــاقــات ♪',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي سورس بويكا بـ🤖ـوت',
                                            highlight_label: 'ســــورس بــويــكــا',
                                            rows: [
                                                {
                                                    header: 'بعدين عشان كسلت',
                                                    title: 'اوف احح',
                                                    description: ' بعدين عشان كسلت',
                                                    id: '.مجاني'
                                                },
                                                {
                                                    header: 'بعدين عشان كسلت',
                                                    title: ' بعدين عشان كسلت',
                                                    description: ' بعدين عشان كسلت',
                                                    id: '.بعدين عشان كسلت'
                                                },
                                                {
                                                    header: 'بعدين عشان كسلت',
                                                    title:'ـة',
                                                    description: '.بعدين عشان كسلت',
                                                    id: '.ش3'
                                                },
                                                {
                                                    header: 'لعبه كوتشينه عاديه',
                                                    title: 'كوتشينه عاديه',
                                                    description: 'كوتشينه',
                                                    id: '.كوتشينه'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                },
                {
              name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈👾╎الـمـطـور╎👾⌋","url":"https://api.whatsapp.com/send?phone=+201550680822","merchant_url":"https://api.whatsapp.com/send?phone=+201550680822}'
                     },
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029VanZjKLKGGGQNpGyhs0w","merchant_url":"https://whatsapp.com/channel/0029VanZjKLKGGGQNpGyhs0w"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['كوتشينه']

export default handler;
