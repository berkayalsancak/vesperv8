// Ziyaretçinin ülkesine göre dil seçer. Hiçbir veri saklanmaz, IP okunmaz: yalnızca Vercel'in verdiği ülke kodu kullanılır.
const PH='kırık ışığın arşivi';
const T={
tr:['Kayıt 1013. Bu belge bir kez okundu, sonra unutuldu.','Gözün arkasındaki oda','Bakmayı bilmeyen sadece görür.'],
en:['Record 1013. This document was read once, then forgotten.','The room behind the eye','Those who cannot look only see.'],
de:['Eintrag 1013. Dieses Dokument wurde einmal gelesen, dann vergessen.','Der Raum hinter dem Auge','Wer nicht zu schauen weiß, sieht nur.'],
fr:['Dossier 1013. Ce document a été lu une fois, puis oublié.','La pièce derrière l’œil','Celui qui ne sait pas regarder ne fait que voir.'],
es:['Registro 1013. Este documento se leyó una vez y luego se olvidó.','La habitación detrás del ojo','Quien no sabe mirar, solo ve.'],
pt:['Registro 1013. Este documento foi lido uma vez e depois esquecido.','O quarto atrás do olho','Quem não sabe olhar apenas vê.'],
it:['Registro 1013. Questo documento è stato letto una volta, poi dimenticato.','La stanza dietro l’occhio','Chi non sa guardare, vede soltanto.'],
nl:['Dossier 1013. Dit document is één keer gelezen en daarna vergeten.','De kamer achter het oog','Wie niet kan kijken, ziet alleen maar.'],
pl:['Zapis 1013. Ten dokument przeczytano raz, a potem zapomniano.','Pokój za okiem','Kto nie umie patrzeć, tylko widzi.'],
ru:['Запись 1013. Этот документ прочитали один раз и забыли.','Комната за глазом','Кто не умеет смотреть, тот лишь видит.'],
ar:['السجل 1013. قُرئت هذه الوثيقة مرة واحدة ثم نُسيت.','الغرفة خلف العين','من لا يُحسن النظر يكتفي بالرؤية.'],
ja:['記録1013。この文書は一度だけ読まれ、そして忘れられた。','目の奥の部屋','見ることを知らぬ者は、ただ目に映すだけ。'],
zh:['记录1013。这份文件被读过一次，随后被遗忘。','眼睛背后的房间','不懂得观看的人，只是看见。'],
ko:['기록 1013. 이 문서는 한 번 읽히고 잊혔다.','눈 뒤에 있는 방','볼 줄 모르는 자는 그저 눈에 담을 뿐이다.']};
const M={};
const set=(l,s)=>s.split(' ').forEach(c=>M[c]=l);
set('tr','TR');set('de','DE AT CH LI LU');set('fr','FR MC SN CI');set('es','ES MX AR CO CL PE VE EC UY PY BO CR PA GT CU DO');
set('pt','PT BR AO MZ');set('it','IT SM');set('nl','NL SR BE');set('pl','PL');set('ru','RU BY KZ KG');
set('ar','SA AE EG IQ JO KW QA OM BH LB SY YE LY DZ MA TN SD PS');set('ja','JP');set('zh','CN TW HK SG');set('ko','KR KP');
module.exports=(req,res)=>{
  const q=String((req.query&&req.query.lang)||'').toLowerCase();
  const l=T[q]?q:(M[String(req.headers['x-vercel-ip-country']||'').toUpperCase()]||'en');
  const t=T[l];
  res.setHeader('Content-Type','text/html; charset=utf-8');
  res.setHeader('Cache-Control','private, no-store');
  res.setHeader('Vary','x-vercel-ip-country');
  res.status(200).send(`<!doctype html><html lang="${l}" dir="${l==='ar'?'rtl':'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${PH}</title><meta name="description" content="${PH}. ${t[0]}"><style>body{margin:0;background:#0b0b0c;color:#d8d3c4;font:18px/1.8 Georgia,serif;text-align:center;padding:48px 20px}img{max-width:min(520px,100%);margin:28px 0}</style></head><body><h1>${PH}</h1><p>${t[0]}</p><img src="/arsiv.png" alt="${t[1]}"><p>${t[2]}</p><!-- kırmızı kanal, en düşük bit --></body></html>`);
};
