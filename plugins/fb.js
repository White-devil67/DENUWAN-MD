const _0x459e87=_0x1d3e;(function(_0x555d0f,_0x2b95f4){const _0x1c8e4d=_0x1d3e,_0x1cb21f=_0x555d0f();while(!![]){try{const _0x56ad2c=parseInt(_0x1c8e4d(0x190))/0x1*(-parseInt(_0x1c8e4d(0x17b))/0x2)+-parseInt(_0x1c8e4d(0x188))/0x3+parseInt(_0x1c8e4d(0x180))/0x4+parseInt(_0x1c8e4d(0x191))/0x5*(parseInt(_0x1c8e4d(0x17d))/0x6)+-parseInt(_0x1c8e4d(0x17e))/0x7+parseInt(_0x1c8e4d(0x181))/0x8*(-parseInt(_0x1c8e4d(0x197))/0x9)+-parseInt(_0x1c8e4d(0x17c))/0xa*(-parseInt(_0x1c8e4d(0x189))/0xb);if(_0x56ad2c===_0x2b95f4)break;else _0x1cb21f['push'](_0x1cb21f['shift']());}catch(_0x4ce38b){_0x1cb21f['push'](_0x1cb21f['shift']());}}}(_0x1ee1,0x8598a));const {fetchJson}=require(_0x459e87(0x186)),config=require('../config'),{cmd,commands}=require(_0x459e87(0x19a));function _0x1d3e(_0x1a0a6b,_0x2d6f11){const _0x1ee101=_0x1ee1();return _0x1d3e=function(_0x1d3e41,_0x1da83b){_0x1d3e41=_0x1d3e41-0x179;let _0x2280ca=_0x1ee101[_0x1d3e41];return _0x2280ca;},_0x1d3e(_0x1a0a6b,_0x2d6f11);}let baseUrl;((async()=>{const _0x262482=_0x459e87;let _0x4c1864=await fetchJson(_0x262482(0x18d));baseUrl=_0x4c1864[_0x262482(0x194)];})()),cmd({'pattern':'fb','desc':_0x459e87(0x179),'category':'download','react':'🔎','filename':__filename},async(_0x1ad3f1,_0x7b7738,_0x18bd0d,{from:_0x447dce,quoted:_0x52d4e4,body:_0x2a49ab,isCmd:_0x49ad38,command:_0x196804,args:_0xb38ec4,q:_0x592891,isGroup:_0x1353be,sender:_0x1fdaaa,senderNumber:_0x55010a,botNumber2:_0x1d5e6c,botNumber:_0x394289,pushname:_0x54c0a6,isMe:_0x1eb5a0,isOwner:_0x22d281,groupMetadata:_0x22819f,groupName:_0x21f507,participants:_0x1e67cb,groupAdmins:_0x3518fd,isBotAdmins:_0x4f76a4,isAdmins:_0x2f664e,reply:_0x491dbe})=>{const _0x5565e8=_0x459e87;try{if(!_0x592891||!_0x592891['startsWith'](_0x5565e8(0x187)))return _0x491dbe(_0x5565e8(0x182));const _0xb07eb1=await fetchJson(baseUrl+_0x5565e8(0x183)+_0x592891);let _0x296739=_0x5565e8(0x18f);const _0x597370=await _0x1ad3f1[_0x5565e8(0x192)](_0x447dce,{'image':{'url':'https://unitedcamps.in/Images/file_4270.jpg'},'caption':_0x296739},{'quoted':_0x7b7738});_0x1ad3f1['ev']['on'](_0x5565e8(0x18a),async _0x32d085=>{const _0x351c3d=_0x5565e8,_0x104b68=_0x32d085['messages'][0x0];if(!_0x104b68[_0x351c3d(0x18c)]||!_0x104b68[_0x351c3d(0x18c)][_0x351c3d(0x184)])return;const _0x5cd912=_0x104b68[_0x351c3d(0x18c)][_0x351c3d(0x184)]['text'][_0x351c3d(0x185)]();if(_0x104b68[_0x351c3d(0x18c)][_0x351c3d(0x184)][_0x351c3d(0x17a)]&&_0x104b68[_0x351c3d(0x18c)][_0x351c3d(0x184)][_0x351c3d(0x17a)][_0x351c3d(0x18e)]===_0x597370[_0x351c3d(0x17f)]['id'])switch(_0x5cd912){case'1':await _0x1ad3f1[_0x351c3d(0x192)](_0x447dce,{'video':{'url':_0xb07eb1[_0x351c3d(0x196)]['hd']},'mimetype':'video/mp4','caption':_0x351c3d(0x193)},{'quoted':_0x7b7738});break;case'2':await _0x1ad3f1[_0x351c3d(0x192)](_0x447dce,{'video':{'url':_0xb07eb1[_0x351c3d(0x196)]['sd']},'mimetype':_0x351c3d(0x198),'caption':_0x351c3d(0x193)},{'quoted':_0x7b7738});break;default:_0x491dbe(_0x351c3d(0x195));}});}catch(_0x2938f5){console[_0x5565e8(0x199)](_0x2938f5),await _0x1ad3f1['sendMessage'](_0x447dce,{'react':{'text':'❌','key':_0x7b7738['key']}}),_0x491dbe(_0x5565e8(0x18b));}});function _0x1ee1(){const _0x103f4d=['473192YQPCJD','Please\x20provide\x20a\x20valid\x20Facebook\x20video\x20URL!','/api/fdown?url=','extendedTextMessage','trim','../lib/functions','https://','3091629pAlnFc','154anbylj','messages.upsert','An\x20error\x20occurred\x20while\x20processing\x20your\x20request.','message','https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json','stanzaId','\x20*DENUWAN-MD\x20FB\x20DOWNLOADER...⚙️*\x0a\x0a*Reply\x20This\x20Message\x20With\x20Option*\x0a\x0a*1\x20Download\x20FB\x20Video\x20In\x20HD*\x0a\x0a*2\x20Download\x20FB\x20Video\x20In\x20SD*\x0a\x0a>\x20*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳\x20𝙱𝚈\x20𝙳𝙴𝙽𝚄𝚆𝙰𝙽-𝙼𝙳*','4NdkKYI','5vAWIjo','sendMessage','>\x20*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳\x20𝙱𝚈\x20𝙳𝙴𝙽𝚄𝚆𝙰𝙽-𝙼𝙳*','api','Invalid\x20option.\x20Please\x20select\x20a\x20valid\x20option🔴','data','135mBxYKO','video/mp4','error','../command','Download\x20fb\x20videos','contextInfo','325650UVFSqz','1632450ZBuRVg','3886482MFkwwF','3205279aQdAyT','key','2564032vPzszb'];_0x1ee1=function(){return _0x103f4d;};return _0x1ee1();}
