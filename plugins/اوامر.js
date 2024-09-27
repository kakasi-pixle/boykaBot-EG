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
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })
  const harley = 'https://i.imgur.com/yTymoYW.jpeg'
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `*• ──╾⊱﹝⚜️﹞⊰╼── •*
*مــرحــبــا بــك/ي* ${taguser}
╗──────¤مــعلـ🛖ـومــاتــك
> •▫️مــســتــواك : ${level}
> •▫️بــريــمــيــوم : ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''}
> •▫️رتــبــتــك : ${role}
*• ──╾⊱﹝🪐﹞⊰╼── •*
╗───¤مــعلــومــات ال🙂‍↕️بــوت
> إســم الــبــوت: شاورما
>الــمــطــور : كاكاشي
> مــدة الــتــشــغــيل : ${uptime}
*• ──╾⊱🪐⊰╼── •*
> Copyright © 2024 shawarma`,subtitle: "SHAWARMA",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: harley } }, { upload: conn.waUploadToServer }, {quoted: m}))},nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈الاوامر🪐⌋',
                                    sections: [
                                        {
                                            title: 'الاوامر',
                                            highlight_label: 'متدخل القناه🌚🪐',
                                            rows: [
                                                {
                                                    header: 'الاعضاء_يحوب',
                                                    title: 'استدعاء_قسم_الاعضاء #الاعضاء',
                                                    description: '',
                                                    id: '.م1'
                                                },
                                                {
                                                    header: 'الــمشرفين_يحوب',
                                                    title: 'استدعاء_قسم_المشرفين #المشرفين',
                                                    description: '',
                                                    id: '.م11'
                                                },
                                                {
                                                    header: 'الــدين_يحوب',
                                                    title: 'استدعاء_قسم_الدين #الدين',
                                                    description: '',
                                                    id: '.م2'
                                                },
                                                {
                                                    header: 'الــمطور_يحوب',
                                                    title: 'استدعاء_قسم_المطور #المطور',
                                                    description: '',
                                                    id: '.م3'
                                                },
                                                {
                                                    header: 'الــتنزيلات_يحوب',
                                                    title: 'استدعاء_قسم_التنزيلات #التنزيلات',
                                                    description: '',
                                                    id: '.م4'
                                                },
                                                {
                                                    header: 'الــالعاب_يحوب',
                                                    title: 'استدعاء_قسم_الالعاب #الالعاب',
                                                    description: '',
                                                    id: '.م5'
                                                },
                                                {
                                                    header: 'الــتحويلات_يحوب',
                                                    title: 'استدعاء_قسم_التحويلات #التحويلات',
                                                    description: '',
                                                    id: '.م6'
                                                },
                                                {
                                                    header: 'الــصوتيات_يحوب',
                                                    title: 'استدعاء_قسم_الصوتيات #الصوتيات',
                                                    description: '',
                                                    id: '.م7'
                                                },
                                                {
                                                    header: 'الــذكاء_يحوب',
                                                    title: 'استدعاء_قسم_الذكاء #الذكاء',
                                                    description: '',
                                                    id: '.م8'
                                                },
                                                {
                                                    header: 'الــدعم_يحوب',
                                                    title: 'استدعاء_قسم_الدعم #الدعم',
                                                    description: '',
                                                    id: '.م9'
                                                },
                                                {
                                                    header: 'الــبحث_يحوب',
                                                    title: 'استدعاء_قسم_ابحث #البحث',
                                                    description: '',
                                                    id: '.م12'
                                                },
                                                {
                                                    header: 'الــافلام_يحوب',
                                                    title: 'استدعاء_قسم_الافلام #الافلام',
                                                    description: '',
                                                    id: '.م13'
                                                },
                                                {
                                                    header: 'اتكلم_معايه_يحوب',
                                                    title: 'سكربت_بوت_جاهز_للتعديل_👨🏻‍💻',
                                                    description: '',
                                                    id: '.م10'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                     },
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"function clockString(ms) {
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
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })
  const harley = 'https://telegra.ph/file/c6931834b0cff16b54135.jpg'
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `*• ──╾⊱﹝⚜️﹞⊰╼── •*
*مــرحــبــا بــك/ي* ${taguser}
╗──────¤مــعلـ🛖ـومــاتــك
> •▫️مــســتــواك : ${level}
> •▫️بــريــمــيــوم : ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''}
> •▫️رتــبــتــك : ${role}
*• ──╾⊱﹝⚜️﹞⊰╼── •*
╗───¤مــعلــومــات الــ🤖بــوت
> إســم الــبــوت: ناروتو
> الــمــطــور : هــارلــي لايــت
> مــدة الــتــشــغــيل : ${uptime}
*• ──╾⊱﹝⚜️﹞⊰╼── •*
> Copyright © 2024 Harley`,subtitle: "HARLEY",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: harley } }, { upload: conn.waUploadToServer }, {quoted: m}))},nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🛡╎الــقــوائـــم╎🛡⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام نـاروتـو بـ🤖ـوت',
                                            highlight_label: 'بعبص براحتك يابرو 🤖',
                                            rows: [
                                                {
                                                    header: 'الــقـ👑ـســم الـاول',
                                                    title: 'استدعاء_قسم_الاعضاء #الاعضاء',
                                                    description: '',
                                                    id: '.م1'
                                                },
                                                {
                                                    header: 'الــقـ👨🏻‍💻ـســم الــثــانــي',
                                                    title: 'استدعاء_قسم_المشرفين #المشرفين',
                                                    description: '',
                                                    id: '.م11'
                                                },
                                                {
                                                    header: 'الــقـ🕋ـســم الــثــالــث',
                                                    title: 'استدعاء_قسم_الدين #الدين',
                                                    description: '',
                                                    id: '.م2'
                                                },
                                                {
                                                    header: 'الــقـ👑ـســم الــرابــع',
                                                    title: 'استدعاء_قسم_المطور #المطور',
                                                    description: '',
                                                    id: '.م3'
                                                },
                                                {
                                                    header: 'الــقـ🛡ـســم الــخــامــس',
                                                    title: 'استدعاء_قسم_التنزيلات #التنزيلات',
                                                    description: '',
                                                    id: '.م4'
                                                },
                                                {
                                                    header: 'الــقـ🕹ـســم الــســادس',
                                                    title: 'استدعاء_قسم_الالعاب #الالعاب',
                                                    description: '',
                                                    id: '.م5'
                                                },
                                                {
                                                    header: 'الــقـ🌀ـســم الــســابــع',
                                                    title: 'استدعاء_قسم_التحويلات #التحويلات',
                                                    description: '',
                                                    id: '.م6'
                                                },
                                                {
                                                    header: 'الــقـ🎧ـســم الــثــامـن',
                                                    title: 'استدعاء_قسم_الصوتيات #الصوتيات',
                                                    description: '',
                                                    id: '.م7'
                                                },
                                                {
                                                    header: 'الــقـ🤖ـســم الــتــاســع',
                                                    title: 'استدعاء_قسم_الذكاء #الذكاء',
                                                    description: '',
                                                    id: '.م8'
                                                },
                                                {
                                                    header: 'الــقـ🚨ـســم الــعــاشــر',
                                                    title: 'استدعاء_قسم_الدعم #الدعم',
                                                    description: '',
                                                    id: '.م9'
                                                },
                                                {
                                                    header: 'الــقـ🔍ـســم الــحــاديــة عــشــر',
                                                    title: 'استدعاء_قسم_ابحث #البحث',
                                                    description: '',
                                                    id: '.م12'
                                                },
                                                {
                                                    header: 'الــقـ📽️ـســم الــثــانــي عــشــر',
                                                    title: 'استدعاء_قسم_الافلام #الافلام',
                                                    description: '',
                                                    id: '.م13'
                                                },
                                                {
                                                    header: 'الــقـ👨🏻‍💻ـســم الــثــانــي عــشــر',
                                                    title: 'سكربت_بوت_جاهز_للتعديل_👨🏻‍💻',
                                                    description: '',
                                                    id: '.م10'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
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
handler.command = ['menu', 'مهام', 'اوامر','الاوامر']

export default handler;","merchant_url":"https://whatsapp.com/channel/0029VanZjKLKGGGQNpGyhs0w"}'
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
handler.command = ['menu', 'مهام', 'اوامر','الاوامر']

export default handler;
