import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {

    if (!text) throw "*يرجى كتابة نص للسؤال، على سبيل المثال: 'ما هو آخر الأنبياء؟'*";

    try {
        await conn.sendMessage(m.chat, { text: "*انتظر لحظة بينما أفكر في إجابتك... 🧠*" }, { quoted: m });

        const kurosakiApi = `https://api-kurosaki-dev0.osc-fr1.scalingo.io/api/ai/gpt4?q=${encodeURIComponent(text)}`;
        var response = await fetch(kurosakiApi);
        var res = await response.json();

        if (res.status) {
            if (res.kurosaki) {
                await conn.sendFile(m.chat, 'https://telegra.ph/file/895df0945dc4deaa47ac9.jpg', 'image.png', res.kurosaki, m, { caption: res.kurosaki });
            } else {
                await conn.sendMessage(m.chat, "لم يتم العثور على نتيجة مناسبة لإجابتك. حاول مرة أخرى.", { quoted: m });
            }
        } else {
            await conn.sendMessage(m.chat, "حدث خطأ أثناء محاولة الحصول على الإجابة. الرجاء المحاولة لاحقاً.", { quoted: m });
        }
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, "فشل، الرجاء المحاولة في وقت لاحق.", { quoted: m });
    }
};

handler.command = ['مادارا', 'بوت'];
handler.tags = ['ai'];
handler.help = ['gpt4 <النص> - للحصول على إجابة باستخدام GPT-4'];
export default handler;
