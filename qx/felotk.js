/*        
          ➪：felo实时翻译-同传与语音字幕

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]

# >felo实时翻译-同传与语音字幕
#^https?:\/\/(translator|accounts).felo.me\/api\/user.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/felo.js

^https?:\/\/translator.felo.me\/api\/translation\/thirdToken\?token_channel url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/felotk.js

[mitm] 
hostname = accounts.felo.me,translator.felo.me
 
*
*
*/
;var encode_version = 'jsjiami.com.v5', godsk = '__0x11c4db',  __0x11c4db=['cm8KbcKU','ZMKfw5UHXA==','wpRkwrsAMQ==','wrTCjSrCtMKS','bDfDvcOkw6M=','w5DDosOIIHc=','wrzDtcKlwoZl','wqwuacKwdg==','wo8edg==','aQ7DssOiw6k=','wpBrTn/Dqw==','MUgwQUg=','UsOVw4s=','w5vDoHA+bg==','woBEI2jDvw==','wpdlwrApPQ==','wptBw4nDm8KU','W8Oow7Y=','w7PCucKh','GcOWwosrw4FYdDkcMGARwqI=','wr7CoWB2wr8=','USzChmjDoQ==','w4hLMXV6','woHDqRPCil4=','w7nDlsOcGFE=','w7fCgMKfC8OQO2c=','cRLChWTDvg==','RcKswp/CisOxUwk=','cR9bdw==','ZsOKw6PCk38=','wrgMZ1/DscO3w5w=','aQ/Cgw==','w55yEm58w5TCrA==','LxASwotlDcKHLsOs','Y8Ouw5DCug==','TsOPw5giwpA=','KcODDsOtw4Ao','wpJuwps=','wpN3w5s=','wq/CsQPCgcKCSA==','MMOtw5Y=','a8Kwwps=','wpUDdw==','W8Orw70=','wqXCoQPChcKCScOLwrYeCHDDgwBGw7rDqA==','ZcK+K8O5w54awoQrZH3Do17DrsOew4zDhMKAWwrCo8OdwoPDkBE/wqQJworDhx7DrVhtwrXCjyHCisKQDsOVw5bCt8K6w6cowpHCgDnCnsK9w4DCv8O4w4bCkMOJw5zCiGfDug0h','w5bCicO9w54=','TcOlw7IVwrU=','S2QNVcKa','wrJJBw==','bV5W','JcKebEfClA==','wpdUw4jDusKZ','TDbDmcOPw5U=','wpHDnTbDkMOu','wpXDng3CpWM=','w5DCp8Knwo3DvA==','w6taFA==','wr3Cv1o=','B8KcXg==','wrXCrgo=','TyvDiA==','E8OqwqrCuMO2Dhd8bw==','wq5Kw4HCqSs0w4nDmwxQwp42wonDiQ==','54mL5p6U5Y2m77+wZ8Kt5L+95a+75pyl5b+Z56mP77+36L+C6K+p5pSt5o6+5omV5LiH55iA5baV5L2t','w6V/JGph','XcKdw60UZw==','w7PDvjN3w5U=','wrrDqxfDpsO9','DcONwq/CjsOb','w6Mvw6zCp8KG','w7U5ZFkm','wo1zw4zCqi0=','w7wicF4W','aXknasKn','MFPDusOhLQ==','w49NEUxh','w4DDryVow6U=','wrhtIFHDoQ==','w7nCo8OMw7LDvQ==','SXdQwpFG','QibCqkXDvg==','OWTDj8OfLg==','wr0MbErDhg==','TSlkcnc=','wodPNMKMYQ==','UMKQwrfCjsOV','SBDCvkzDsQ==','acOtw5rCnWk=','w5cobWI7','w4szw5bCusK+','w7DCpsK1MMO6','A8K/Z8O8PQ==','wosKRVjDhA==','wr9UJ0HDkA==','SsOxwpt1Wg==','d8Odw6LCiA==','wpo3eH/Dmg==','ewrComls','A8Ofw4TDlA==','T8K/w4UsUg==','WsOjw6Aewrk=','wqIBdcKkVw==','A8K1SVnCjw==','Xx3ClFtk','U8O8w7gxwro=','PMOBwqPCjsOY','LSIcwqJG','wodSPsKHfMKkwqrDogPCksOo','wqPDlMK6wqdDXcON','wr1kDUTDkcOwJA==','AcK8aQ==','w5waw4nCgMKrw6sYw7ccKcOr','woBTIsKDXsKk','X8O8w4xKw6vCgypIVsKxw5E3w43DgMOxw4TCucOwL8Odw7bDjBMENH7CmcKLW3ksezPDk8OGIQs=','Ti9mTxc/w73DpMKSa8KlJnDCt8OFPFTCtyZgwrQbw4h4w5NSw7I8wrHCksOpOMKHwr/CqGg=','wr5DPcKZUsO3w6/DtVnCncOywprDiMKWFyPCsWh2GmsQNDx2AMOHw5bCu8OsF3nDg8Kqw6tsZk4yNkHDicKKesKgJMKnw5rDlgLCkDHDiQzDpsOsGMOXHcKKw4/DvTA8BMOawr7CowXClljDsWJjwo5nw4Zgwqk5FV1JDHrDgUHDucO8G8OxJx/DosOrTBpAci/DqjTCtMKiUnbCnMKyU8OFw6DCm8OUw61Tw5IzwpDCicKTwrrChHsSwr3DvsKowoZLPhtdwo3CqBsHBXNHw4rDuAjCs8OxwoDDtGTCiDUzw7fDl8K1wqVbNsO9VBDCuwnChcK+w7s0EsOzZ3nDqlM+KMKYw7jChEg1wpN6w7QtVQ==','wqlKE8KDVA==','w6INH8Kjw4LDhcOVw5U2Mi7CpVx2w4o=','ZsOKw6U=','V2QZRcKIXlfCjMOf','w5XClMO+w4PDhcKswrbDnjPCmsOUw6RJw54=','dHdr','wo5Ew6o=','54mm5p6h5Y2k772wwrHCk+S9keWusOacreW/qeeope+9nei8o+ish+aXpuaPseaKkOS4rOebiuW1meS+kw==','5Yu26ZmY54mi5pye5Y2177+8Q8Kc5L++5a6s5p+j5b+P56iu','wrBJRFHDtsKZRsKBw4QcwqDDnsKZwrrDt8OP','VsKrw6rDvmDDssKxXMOvKGcuwqdBwpRKNTrDlW7CtmnDsAEhBMKxS0DCvXMIb8KqwoVCw6HDpcKzwonChSRBJsK+IkZqwqBVw7XDqCYxwodjMULDnG9Dw48=','HnE9eA==','w551HXR9','wqtOwo8UAg==','QcKxwrI=','YhnCjw==','w6bDt18=','GH0+aUJ6','wpxEw5fDlMKZKDpi','w6kiw4o=','wptUw58=','RmNmcBFyw7rDmcKLVsKhaAI=','wqxYwo8PPA==','WcOaw5Y+woM=','ATsXwoxX','e8OYMcKzwrs=','U8OswqPCocO6','wq3CoXR3wpQ=','wpRZwo84NA==','w4fClkFZw58=','fcKIw5AsXw==','C8K5dcOAPg==','YsOyw7QkwpA=','w6Yfw5fCjMKt','NcOWw4PDpQ8=','VSTCqQ==','M8K7c8OwDQ==','wqE9ZsKWYQ==','w5bCjsOMw7nDtg==','d8Ojw5o1wrg=','w7AcRVYb','TMKzwpg=','RXo8WsKK','wpwzVcKoXA==','XsOnw53CuC8=','w7TChcOYw5fCpQ==','SMOFEsKxwqc=','w6nCnMOnw4TCow==','w7DDiMO3Amc=','w6IQw7/CicKf','TcOwBMKm','wr13w7LCsSI=','wpBLwr4TEw==','chtabQ==','woh/w57DlMKH','DsKGW1nCrA==','w6XDpjRSw4U=','eMOHw5/CvBo=','wqkkYEXDhA==','w7V6CG1U','wroTeUDDpw==','w53CiMOmw4zDog==','WsOUw7UQwow=','w5rDvn41Ug==','WMOlB8K+woc=','w6wUw6jCnMK5','woVOf1vDjw==','EsOtMsOXw6M=','cUgFUMKl','wrVXwpQLBA==','wqEmS8KOXw==','wpXDviTDu8O9','w7fCn8O5w7LDoQ==','IMOuwpTCkcOm','w5jCpcKiwqrDqQ==','w6XDgTlrw5zDu8O8','wovCn35OwrhHwrM=','woPCq8Okwp3Cs8KhHMKIXsK6GcO5wppowrLDk3w=','wrpZOnTDgg==','H8KtdcK1wqg=','w4wQw6fCmsK7','woTCn3c=','HnEyYw==','TyvDjsOGw78=','LcOWDsOq','wq0sXcKgQxoqUW4=','wrZSwp4CEw==','w4HCv8KWHcO5','wqBvwpMFLA==','wr5pw5jDssKV','wrDDqTbCrFI=','wrXDisKiwrxe','w6bCtGlLw7XDu2o=','AsOhwqzCqMO3','QcOywoBhb2TCgQ==','w6nCtGA=','WsO6GcKhwpFcw4k=','L2rDmsOH','wqDCuwPClcKZTMOB','VcOkwq3CssOZ','woHDpiHDosOgwqNG','wqbCph/CicKE','w4HDoGcKaMKYw5g=','w5TCr8K0woTDtcKpRMKbBA==','w6nDicOeAkoKwoY=','w4Ebw6PCgA==','w5rCtMORw7jDvQ==','fB1afl4=','w7DDocOlIE0=','dsOdw585wrw=','YgHDssOaw6o=','PsO7w6DDhzk=','asOFwqBhZw==','bxnCk1HDmg==','wo3DmSDDm8OH','wo91wrdgw5s=','T8O1w7Ipwoo=','UDpteGM=','wqYWTMK4wp4=','w63CgcOuw7jDgA==','HsOaM8O8w4c=','wokVcG/Dkw==','ccOfw4DCvmo=','wqQLQcKvwrY=','dMOZwqpzRw=='];(function(_0x1d497c,_0x2c1375){var _0x4ab9fa=function(_0x59d2c4){while(--_0x59d2c4){_0x1d497c['push'](_0x1d497c['shift']());}};var _0x2a8a49=function(){var _0x17f645={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1a177f,_0x1bbe1a,_0x2eb8d8,_0x1321f9){_0x1321f9=_0x1321f9||{};var _0x5d3e9c=_0x1bbe1a+'='+_0x2eb8d8;var _0x137fb8=0x0;for(var _0x137fb8=0x0,_0x4db53c=_0x1a177f['length'];_0x137fb8<_0x4db53c;_0x137fb8++){var _0x1f4dc7=_0x1a177f[_0x137fb8];_0x5d3e9c+=';\x20'+_0x1f4dc7;var _0x5bbfa0=_0x1a177f[_0x1f4dc7];_0x1a177f['push'](_0x5bbfa0);_0x4db53c=_0x1a177f['length'];if(_0x5bbfa0!==!![]){_0x5d3e9c+='='+_0x5bbfa0;}}_0x1321f9['cookie']=_0x5d3e9c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1e693b,_0x52167c){_0x1e693b=_0x1e693b||function(_0x17110f){return _0x17110f;};var _0x42d01c=_0x1e693b(new RegExp('(?:^|;\x20)'+_0x52167c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x28f642=function(_0x4ec078,_0x2fa710){_0x4ec078(++_0x2fa710);};_0x28f642(_0x4ab9fa,_0x2c1375);return _0x42d01c?decodeURIComponent(_0x42d01c[0x1]):undefined;}};var _0x154121=function(){var _0x224f32=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x224f32['test'](_0x17f645['removeCookie']['toString']());};_0x17f645['updateCookie']=_0x154121;var _0x4937b9='';var _0x4746fa=_0x17f645['updateCookie']();if(!_0x4746fa){_0x17f645['setCookie'](['*'],'counter',0x1);}else if(_0x4746fa){_0x4937b9=_0x17f645['getCookie'](null,'counter');}else{_0x17f645['removeCookie']();}};_0x2a8a49();}(__0x11c4db,0x15e));var _0x1934=function(_0x20cf96,_0x5bf362){_0x20cf96=_0x20cf96-0x0;var _0x2803e3=__0x11c4db[_0x20cf96];if(_0x1934['initialized']===undefined){(function(){var _0x27eaa1=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x231e37='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x27eaa1['atob']||(_0x27eaa1['atob']=function(_0x1f38b5){var _0x216522=String(_0x1f38b5)['replace'](/=+$/,'');for(var _0xf6323d=0x0,_0x1c6141,_0x4a6f34,_0x2cfbd6=0x0,_0x27a365='';_0x4a6f34=_0x216522['charAt'](_0x2cfbd6++);~_0x4a6f34&&(_0x1c6141=_0xf6323d%0x4?_0x1c6141*0x40+_0x4a6f34:_0x4a6f34,_0xf6323d++%0x4)?_0x27a365+=String['fromCharCode'](0xff&_0x1c6141>>(-0x2*_0xf6323d&0x6)):0x0){_0x4a6f34=_0x231e37['indexOf'](_0x4a6f34);}return _0x27a365;});}());var _0x5a0313=function(_0x1e8f81,_0xee841a){var _0x5e5d9d=[],_0xb17148=0x0,_0x27fb94,_0x31b743='',_0x4254b2='';_0x1e8f81=atob(_0x1e8f81);for(var _0x10f17f=0x0,_0x99575c=_0x1e8f81['length'];_0x10f17f<_0x99575c;_0x10f17f++){_0x4254b2+='%'+('00'+_0x1e8f81['charCodeAt'](_0x10f17f)['toString'](0x10))['slice'](-0x2);}_0x1e8f81=decodeURIComponent(_0x4254b2);for(var _0xa8652e=0x0;_0xa8652e<0x100;_0xa8652e++){_0x5e5d9d[_0xa8652e]=_0xa8652e;}for(_0xa8652e=0x0;_0xa8652e<0x100;_0xa8652e++){_0xb17148=(_0xb17148+_0x5e5d9d[_0xa8652e]+_0xee841a['charCodeAt'](_0xa8652e%_0xee841a['length']))%0x100;_0x27fb94=_0x5e5d9d[_0xa8652e];_0x5e5d9d[_0xa8652e]=_0x5e5d9d[_0xb17148];_0x5e5d9d[_0xb17148]=_0x27fb94;}_0xa8652e=0x0;_0xb17148=0x0;for(var _0x472e04=0x0;_0x472e04<_0x1e8f81['length'];_0x472e04++){_0xa8652e=(_0xa8652e+0x1)%0x100;_0xb17148=(_0xb17148+_0x5e5d9d[_0xa8652e])%0x100;_0x27fb94=_0x5e5d9d[_0xa8652e];_0x5e5d9d[_0xa8652e]=_0x5e5d9d[_0xb17148];_0x5e5d9d[_0xb17148]=_0x27fb94;_0x31b743+=String['fromCharCode'](_0x1e8f81['charCodeAt'](_0x472e04)^_0x5e5d9d[(_0x5e5d9d[_0xa8652e]+_0x5e5d9d[_0xb17148])%0x100]);}return _0x31b743;};_0x1934['rc4']=_0x5a0313;_0x1934['data']={};_0x1934['initialized']=!![];}var _0x48d9f5=_0x1934['data'][_0x20cf96];if(_0x48d9f5===undefined){if(_0x1934['once']===undefined){var _0x5eadbe=function(_0x3b6111){this['rc4Bytes']=_0x3b6111;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5eadbe['prototype']['checkState']=function(){var _0x20b9f4=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x20b9f4['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x5eadbe['prototype']['runState']=function(_0x4a70ac){if(!Boolean(~_0x4a70ac)){return _0x4a70ac;}return this['getState'](this['rc4Bytes']);};_0x5eadbe['prototype']['getState']=function(_0x40a999){for(var _0x295748=0x0,_0x51142a=this['states']['length'];_0x295748<_0x51142a;_0x295748++){this['states']['push'](Math['round'](Math['random']()));_0x51142a=this['states']['length'];}return _0x40a999(this['states'][0x0]);};new _0x5eadbe(_0x1934)['checkState']();_0x1934['once']=!![];}_0x2803e3=_0x1934['rc4'](_0x2803e3,_0x5bf362);_0x1934['data'][_0x20cf96]=_0x2803e3;}else{_0x2803e3=_0x48d9f5;}return _0x2803e3;};const _0x54ac8d=Object[_0x1934('0x0','&G)o')](Object[_0x1934('0x1','$dr5')]($request[_0x1934('0x2','[4%%')])[_0x1934('0x3','xln]')](([_0x3a9de2,_0x473245])=>[_0x3a9de2[_0x1934('0x4','hCAj')](),_0x473245]));Object[_0x1934('0x5','&G)o')](_0x54ac8d,{'authorization':_0x1934('0x6','y[2Z'),'deviceid':_0x1934('0x7','6GCl'),'cookie':_0x1934('0x8','&G)o')});setInterval(function(){var _0x58b55d={'HjBim':function _0x11e18f(_0x237d1d){return _0x237d1d();}};_0x58b55d[_0x1934('0x9','&G)o')](_0x3a63a9);},0xfa0);$done({'headers':_0x54ac8d});(function(_0x4444a7,_0x210145,_0x145339){var _0x44a547={'nxpnJ':_0x1934('0xa','(]8V'),'KSfbB':_0x1934('0xb','IBy^'),'BMFaE':function _0x189e60(_0x11e8c0,_0x1709c3){return _0x11e8c0!==_0x1709c3;},'rzopF':_0x1934('0xc','T^5p'),'EQdJC':function _0x180c27(_0x1759cd,_0x13471b){return _0x1759cd===_0x13471b;},'VypYB':_0x1934('0xd','OmLq'),'scdSI':_0x1934('0xe','SN)*'),'mGaFE':_0x1934('0xf','RD]4'),'HXNsg':function _0xd6afe9(_0x46da39,_0x37339f){return _0x46da39+_0x37339f;},'NjRcq':_0x1934('0x10','y[2Z'),'BltEx':_0x1934('0x11','chti'),'SrUiM':function _0x7911cd(_0x490e31,_0x43124f,_0x4decc1){return _0x490e31(_0x43124f,_0x4decc1);},'eSERY':_0x1934('0x12','chti'),'zcsgz':_0x1934('0x13','FOIg'),'zGUQh':function _0x4d8735(_0x3f44fc,_0x1d9a7b){return _0x3f44fc(_0x1d9a7b);},'XPLEg':_0x1934('0x14','6GCl'),'IAWgN':_0x1934('0x15','1h5#'),'jywVA':_0x1934('0x16','XnaK'),'oPoJH':function _0x2277aa(_0x5404ac,_0x263197){return _0x5404ac===_0x263197;},'tmDvl':_0x1934('0x17','q4Ak'),'axaUQ':function _0x100362(_0x579157,_0x3a4ed2){return _0x579157(_0x3a4ed2);},'VDDaG':function _0x83f382(_0x194724,_0x553617){return _0x194724===_0x553617;},'pgbgn':_0x1934('0x18','vJ%7'),'RfzRd':_0x1934('0x19','dF1)'),'DmOxi':function _0x173b8d(_0x133dd0){return _0x133dd0();},'RvyCM':function _0x21a19c(_0x5d1808,_0x2d1a8d,_0x2e82f8){return _0x5d1808(_0x2d1a8d,_0x2e82f8);},'rgQBg':function _0x44530c(_0x152ece,_0x2fb8be){return _0x152ece!==_0x2fb8be;},'PewMz':_0x1934('0x1a','6GCl'),'jtaxJ':_0x1934('0x1b','RD]4'),'wYGRd':function _0x17c484(_0x49a6f7,_0x358724){return _0x49a6f7===_0x358724;},'FnAMn':_0x1934('0x1c','hCAj'),'ZDxQR':_0x1934('0x1d','RD]4'),'zOkSO':_0x1934('0x1e','6GCl'),'dzWuE':function _0x534930(_0x22b490){return _0x22b490();}};var _0x34205e=_0x44a547[_0x1934('0x1f','XnaK')][_0x1934('0x20','8Aby')]('|'),_0x5da59f=0x0;while(!![]){switch(_0x34205e[_0x5da59f++]){case'0':try{_0x145339+=_0x44a547[_0x1934('0x21','H)#l')];_0x210145=encode_version;if(!(_0x44a547[_0x1934('0x22','XtSk')](typeof _0x210145,_0x44a547[_0x1934('0x23','KUYY')])&&_0x44a547[_0x1934('0x24','4V^v')](_0x210145,_0x44a547[_0x1934('0x25','XnaK')]))){if(_0x44a547[_0x1934('0x26','[jtH')](_0x44a547[_0x1934('0x27','uDAD')],_0x44a547[_0x1934('0x28','fMW2')])){_0x4444a7[_0x145339](_0x44a547[_0x1934('0x29','8Aby')]('删除',_0x44a547[_0x1934('0x2a','hCAj')]));}else{}}}catch(_0x5721d6){_0x4444a7[_0x145339](_0x44a547[_0x1934('0x2b','^#s9')]);}continue;case'1':var _0xa6b942=function(){var _0x4422a8=!![];return function(_0x18540e,_0x2bd413){var _0x4721e8=_0x4422a8?function(){var _0x5b2428={'UEgvv':function _0x8a942a(_0x5f3055,_0x416fb2){return _0x5f3055!==_0x416fb2;},'iiXSR':_0x1934('0x2c','vJ%7'),'YnIIc':function _0x326506(_0x590e2e,_0x1fa536){return _0x590e2e(_0x1fa536);}};if(_0x5b2428[_0x1934('0x2d','fMW2')](_0x5b2428[_0x1934('0x2e','z[qG')],_0x5b2428[_0x1934('0x2f','OmLq')])){if(ret){return debuggerProtection;}else{_0x5b2428[_0x1934('0x30','y[2Z')](debuggerProtection,0x0);}}else{if(_0x2bd413){var _0x3c167c=_0x2bd413[_0x1934('0x31','qVnC')](_0x18540e,arguments);_0x2bd413=null;return _0x3c167c;}}}:function(){var _0x4dc561={'gpAzd':function _0x438cd1(_0x36c7c6,_0x21f8bd){return _0x36c7c6===_0x21f8bd;},'Tgkmo':_0x1934('0x32','q4Ak')};if(_0x4dc561[_0x1934('0x33','T^5p')](_0x4dc561[_0x1934('0x34','z[qG')],_0x4dc561[_0x1934('0x35','FOIg')])){}else{return debuggerProtection;}};_0x4422a8=![];return _0x4721e8;};}();continue;case'2':(function(){_0x500b65[_0x1934('0x36','ikyW')](_0xa6b942,this,function(){var _0x2be754=new RegExp(_0x500b65[_0x1934('0x37','XtSk')]);var _0x5ed5dc=new RegExp(_0x500b65[_0x1934('0x38','ikyW')],'i');var _0x5dde92=_0x500b65[_0x1934('0x39','U*o8')](_0x3a63a9,_0x500b65[_0x1934('0x3a','hCAj')]);if(!_0x2be754[_0x1934('0x3b','XtSk')](_0x500b65[_0x1934('0x3c','7U#R')](_0x5dde92,_0x500b65[_0x1934('0x3d','XnaK')]))||!_0x5ed5dc[_0x1934('0x3e','94sd')](_0x500b65[_0x1934('0x3f','RD]4')](_0x5dde92,_0x500b65[_0x1934('0x40','0FRw')]))){if(_0x500b65[_0x1934('0x41','&U9d')](_0x500b65[_0x1934('0x42','FOIg')],_0x500b65[_0x1934('0x43','f1&Y')])){_0x500b65[_0x1934('0x44','1h5#')](_0x5dde92,'0');}else{if(fn){var _0x374e4a=fn[_0x1934('0x45','f1&Y')](context,arguments);fn=null;return _0x374e4a;}}}else{if(_0x500b65[_0x1934('0x46','OmLq')](_0x500b65[_0x1934('0x47','y[2Z')],_0x500b65[_0x1934('0x48','dF1)')])){var _0x50e168=firstCall?function(){if(fn){var _0x6123e5=fn[_0x1934('0x49','XtSk')](context,arguments);fn=null;return _0x6123e5;}}:function(){};firstCall=![];return _0x50e168;}else{_0x500b65[_0x1934('0x4a','hCAj')](_0x3a63a9);}}})();}());continue;case'3':var _0x47adac=_0x44a547[_0x1934('0x4b','chti')](_0x3e9808,this,function(){var _0x4fd0f1=function(){};var _0x37dc00=_0x500b65[_0x1934('0x4c','E4j$')](typeof window,_0x500b65[_0x1934('0x4d','T^5p')])?window:_0x500b65[_0x1934('0x4e','XnaK')](typeof process,_0x500b65[_0x1934('0x4f','z[qG')])&&_0x500b65[_0x1934('0x50','eMZm')](typeof require,_0x500b65[_0x1934('0x51','OmLq')])&&_0x500b65[_0x1934('0x52','m2Hj')](typeof global,_0x500b65[_0x1934('0x53','XNvN')])?global:this;if(!_0x37dc00[_0x1934('0x54','&U9d')]){_0x37dc00[_0x1934('0x55','4V^v')]=function(_0x3b3068){var _0x1b5098={'oXVTv':_0x1934('0x56','XNvN')};var _0x592942=_0x1b5098[_0x1934('0x57','[4%%')][_0x1934('0x58','xln]')]('|'),_0x307e2f=0x0;while(!![]){switch(_0x592942[_0x307e2f++]){case'0':return _0x145339;case'1':_0x145339[_0x1934('0x59','hCAj')]=_0x3b3068;continue;case'2':var _0x145339={};continue;case'3':_0x145339[_0x1934('0x5a','4V^v')]=_0x3b3068;continue;case'4':_0x145339[_0x1934('0x5b','6GCl')]=_0x3b3068;continue;case'5':_0x145339[_0x1934('0x5c','ga&v')]=_0x3b3068;continue;case'6':_0x145339[_0x1934('0x5d','E4j$')]=_0x3b3068;continue;case'7':_0x145339[_0x1934('0x5e','z[qG')]=_0x3b3068;continue;case'8':_0x145339[_0x1934('0x5f','XnaK')]=_0x3b3068;continue;}break;}}(_0x4fd0f1);}else{if(_0x500b65[_0x1934('0x60','liKw')](_0x500b65[_0x1934('0x61','XnaK')],_0x500b65[_0x1934('0x62','RD]4')])){}else{var _0x5e63db=_0x500b65[_0x1934('0x63','t7YI')][_0x1934('0x64','$dr5')]('|'),_0x5eae7e=0x0;while(!![]){switch(_0x5e63db[_0x5eae7e++]){case'0':_0x37dc00[_0x1934('0x65','[jtH')][_0x1934('0x66','m2Hj')]=_0x4fd0f1;continue;case'1':_0x37dc00[_0x1934('0x67','zlG)')][_0x1934('0x68','[jtH')]=_0x4fd0f1;continue;case'2':_0x37dc00[_0x1934('0x69','XtSk')][_0x1934('0x6a','Y(k!')]=_0x4fd0f1;continue;case'3':_0x37dc00[_0x1934('0x6b','B[N^')][_0x1934('0x6c','KUYY')]=_0x4fd0f1;continue;case'4':_0x37dc00[_0x1934('0x6d','eMZm')][_0x1934('0x6e','B[N^')]=_0x4fd0f1;continue;case'5':_0x37dc00[_0x1934('0x6f','dF1)')][_0x1934('0x70','XNvN')]=_0x4fd0f1;continue;case'6':_0x37dc00[_0x1934('0x71','U*o8')][_0x1934('0x72','hCAj')]=_0x4fd0f1;continue;}break;}}}});continue;case'4':var _0x500b65={'qPecY':_0x44a547[_0x1934('0x73','OmLq')],'oARCA':_0x44a547[_0x1934('0x74','94sd')],'znGsB':function _0x4f3a8a(_0x585892,_0x49600f){return _0x44a547[_0x1934('0x75','U*o8')](_0x585892,_0x49600f);},'JezfC':_0x44a547[_0x1934('0x76','y[2Z')],'yNYqh':function _0x781e0e(_0x594462,_0x427530){return _0x44a547[_0x1934('0x77','ga&v')](_0x594462,_0x427530);},'RkAre':_0x44a547[_0x1934('0x78','^#s9')],'rNgcj':function _0x2f0cb7(_0x588cc4,_0x1f96ef){return _0x44a547[_0x1934('0x79','zlG)')](_0x588cc4,_0x1f96ef);},'XQykO':_0x44a547[_0x1934('0x7a','vJ%7')],'cHcJv':function _0x1cfaab(_0x5b18f5,_0x278e4){return _0x44a547[_0x1934('0x7b','eMZm')](_0x5b18f5,_0x278e4);},'rGiiZ':_0x44a547[_0x1934('0x7c','E&g8')],'HgtpG':function _0x321125(_0x45b97e,_0x1fc807){return _0x44a547[_0x1934('0x7d','y[2Z')](_0x45b97e,_0x1fc807);},'borfF':function _0x20e4da(_0x4e188c,_0x59356c){return _0x44a547[_0x1934('0x7e','94sd')](_0x4e188c,_0x59356c);},'tYflW':_0x44a547[_0x1934('0x7f','(]8V')],'xqwLU':_0x44a547[_0x1934('0x80','OmLq')],'Damse':function _0x283bbc(_0x433a33){return _0x44a547[_0x1934('0x81','E4j$')](_0x433a33);},'rXmPG':function _0x49f4b8(_0x4f584d,_0x2e07c8,_0x2ababc){return _0x44a547[_0x1934('0x82','f1&Y')](_0x4f584d,_0x2e07c8,_0x2ababc);},'HZNSM':function _0x37490d(_0x4099fa,_0x453fb7){return _0x44a547[_0x1934('0x83','IBy^')](_0x4099fa,_0x453fb7);},'SBxpK':_0x44a547[_0x1934('0x84','(]8V')],'wwkjr':function _0x1d2eb3(_0x242b8c,_0x4f3a60){return _0x44a547[_0x1934('0x85','zlG)')](_0x242b8c,_0x4f3a60);},'iruKl':_0x44a547[_0x1934('0x86','T^5p')],'HxmXE':_0x44a547[_0x1934('0x87','uDAD')],'FjZLv':function _0x7936b(_0x2c2ace,_0x5977d4){return _0x44a547[_0x1934('0x88','XnaK')](_0x2c2ace,_0x5977d4);},'UPgeF':function _0x313c62(_0x44cfb3,_0x406749){return _0x44a547[_0x1934('0x89','B[N^')](_0x44cfb3,_0x406749);},'bOldZ':_0x44a547[_0x1934('0x8a','ga&v')],'DXaEx':_0x44a547[_0x1934('0x8b','U*o8')],'fvUMI':_0x44a547[_0x1934('0x8c','$dr5')]};continue;case'5':_0x44a547[_0x1934('0x8d','z[qG')](_0x47adac);continue;case'6':_0x145339='al';continue;case'7':var _0x3e9808=function(){var _0x4caf87=!![];return function(_0xd0e63b,_0x500825){var _0x28e411={'CWNKd':function _0x494f33(_0x4f8ac5,_0x57a0c9){return _0x4f8ac5!==_0x57a0c9;},'FWdMi':_0x1934('0x8e','z[qG')};if(_0x28e411[_0x1934('0x8f','ga&v')](_0x28e411[_0x1934('0x90','chti')],_0x28e411[_0x1934('0x91','6GCl')])){}else{var _0x58fe4d=_0x4caf87?function(){var _0x581e74={'yoyGi':function _0x453d32(_0x3533c8,_0x5a1900){return _0x3533c8===_0x5a1900;},'UEOHK':_0x1934('0x92','IBy^')};if(_0x500825){if(_0x581e74[_0x1934('0x93','dF1)')](_0x581e74[_0x1934('0x94','[4%%')],_0x581e74[_0x1934('0x95','XnaK')])){var _0x1b5e9b=_0x500825[_0x1934('0x96','RD]4')](_0xd0e63b,arguments);_0x500825=null;return _0x1b5e9b;}else{}}}:function(){var _0x46235a={'VQpKh':function _0x1e8fbf(_0x1c3241,_0x36c063){return _0x1c3241===_0x36c063;},'TLboz':_0x1934('0x97','y[2Z'),'uVMhi':_0x1934('0x98','XNvN'),'WvpkE':_0x1934('0x99','8Aby')};if(_0x46235a[_0x1934('0x9a','4V^v')](_0x46235a[_0x1934('0x9b','vJ%7')],_0x46235a[_0x1934('0x9c','1h5#')])){var _0x1d9adc=_0x46235a[_0x1934('0x9d','t7YI')][_0x1934('0x9e','U*o8')]('|'),_0xfe4709=0x0;while(!![]){switch(_0x1d9adc[_0xfe4709++]){case'0':that[_0x1934('0x9f','liKw')][_0x1934('0xa0','vJ%7')]=func;continue;case'1':that[_0x1934('0xa1','q4Ak')][_0x1934('0xa2','94sd')]=func;continue;case'2':that[_0x1934('0x67','zlG)')][_0x1934('0xa3','IBy^')]=func;continue;case'3':that[_0x1934('0xa4','f1&Y')][_0x1934('0xa5','vJ%7')]=func;continue;case'4':that[_0x1934('0xa6','1h5#')][_0x1934('0xa7','H)#l')]=func;continue;case'5':that[_0x1934('0x6f','dF1)')][_0x1934('0xa8','FOIg')]=func;continue;case'6':that[_0x1934('0xa4','f1&Y')][_0x1934('0xa9','8Aby')]=func;continue;}break;}}else{}};_0x4caf87=![];return _0x58fe4d;}};}();continue;}break;}}(window));function _0x3a63a9(_0x43ba24){var _0x135551={'sINuw':function _0x27604b(_0x4667f7,_0xdbd398){return _0x4667f7===_0xdbd398;},'meqMt':_0x1934('0xaa','E4j$'),'foefX':function _0xdb6f8f(_0x4d8573,_0x296ae6){return _0x4d8573===_0x296ae6;},'sTyAa':_0x1934('0xab','XnaK'),'CAnDx':_0x1934('0xac','RD]4'),'mlLqU':function _0x405404(_0x45ac8e){return _0x45ac8e();},'FDXXY':function _0x160443(_0x233101,_0x1bb2e9){return _0x233101!==_0x1bb2e9;},'heSJh':function _0x59678d(_0x55a3a,_0x4f3244){return _0x55a3a+_0x4f3244;},'GFNBe':function _0xced028(_0xea80c1,_0xb14036){return _0xea80c1/_0xb14036;},'aogvQ':_0x1934('0xad','B[N^'),'KWMkS':function _0x229188(_0x2d7fbf,_0x59a656){return _0x2d7fbf%_0x59a656;},'vSFwK':_0x1934('0xae','^#s9'),'MpZKj':_0x1934('0xaf','q4Ak'),'jUKad':function _0x3cb061(_0x220871,_0x4547d0){return _0x220871(_0x4547d0);},'cFSUb':_0x1934('0xb0','(]8V'),'dIDHE':_0x1934('0xb1','8Aby'),'eAszF':_0x1934('0xb2','B[N^'),'PiLtZ':_0x1934('0xb3','XtSk'),'hlugZ':_0x1934('0xb4','OmLq'),'ATqSD':function _0x4b7397(_0x4cee3b,_0x4acbf1){return _0x4cee3b+_0x4acbf1;},'bSnjQ':_0x1934('0xb5','y[2Z'),'tnsbb':_0x1934('0xb6','T^5p'),'Ubkkl':function _0x11f7ef(_0x7ddf5a){return _0x7ddf5a();},'yVBfM':_0x1934('0xb7','[4%%'),'ZEmSH':_0x1934('0xb8','SN)*'),'gJmLS':function _0x3cc5c1(_0xec9a38,_0x1df3c7){return _0xec9a38(_0x1df3c7);}};function _0xa42a1e(_0x487269){if(_0x135551[_0x1934('0xb9','0FRw')](typeof _0x487269,_0x135551[_0x1934('0xba','RD]4')])){if(_0x135551[_0x1934('0xbb','ga&v')](_0x135551[_0x1934('0xbc','eMZm')],_0x135551[_0x1934('0xbd','t7YI')])){var _0xb2a2f5=fn[_0x1934('0xbe','XNvN')](context,arguments);fn=null;return _0xb2a2f5;}else{var _0x27299c=function(){var _0x2d6ed1={'XbXwr':function _0x258a68(_0x3157cc,_0x8c39a8){return _0x3157cc===_0x8c39a8;},'SvYkq':_0x1934('0xbf','1h5#'),'uPdof':_0x1934('0xc0','4V^v'),'kIaSK':_0x1934('0xc1','xln]'),'KZiHZ':_0x1934('0xc2','B[N^'),'dUQcD':_0x1934('0xc3','ga&v'),'IJgjg':function _0x113ea4(_0x336768,_0x190499){return _0x336768!==_0x190499;},'mNEdt':_0x1934('0xc4','m2Hj'),'KsZJI':function _0x163bc8(_0x2f68ac,_0x392f54){return _0x2f68ac===_0x392f54;},'hXRHR':_0x1934('0xc5','7U#R'),'rPmQr':function _0x3c2f2b(_0x2ba84b,_0xb4fa4b){return _0x2ba84b+_0xb4fa4b;},'FArpV':_0x1934('0xc6','IBy^')};if(_0x2d6ed1[_0x1934('0xc7','1h5#')](_0x2d6ed1[_0x1934('0xc8','uDAD')],_0x2d6ed1[_0x1934('0xc9','&U9d')])){if(fn){var _0x32bfbe=fn[_0x1934('0x96','RD]4')](context,arguments);fn=null;return _0x32bfbe;}}else{while(!![]){if(_0x2d6ed1[_0x1934('0xca','eMZm')](_0x2d6ed1[_0x1934('0xcb','m2Hj')],_0x2d6ed1[_0x1934('0xcc','hCAj')])){c+=_0x2d6ed1[_0x1934('0xcd','qVnC')];b=encode_version;if(!(_0x2d6ed1[_0x1934('0xce','7U#R')](typeof b,_0x2d6ed1[_0x1934('0xcf','qVnC')])&&_0x2d6ed1[_0x1934('0xd0','T^5p')](b,_0x2d6ed1[_0x1934('0xd1','Y(k!')]))){w[c](_0x2d6ed1[_0x1934('0xd2','1h5#')]('删除',_0x2d6ed1[_0x1934('0xd3','&U9d')]));}}else{}}}};return _0x135551[_0x1934('0xd4','[4%%')](_0x27299c);}}else{if(_0x135551[_0x1934('0xd5','OmLq')](_0x135551[_0x1934('0xd6','SN)*')]('',_0x135551[_0x1934('0xd7','vJ%7')](_0x487269,_0x487269))[_0x135551[_0x1934('0xd8','Y(k!')]],0x1)||_0x135551[_0x1934('0xd9','f1&Y')](_0x135551[_0x1934('0xda','94sd')](_0x487269,0x14),0x0)){debugger;}else{if(_0x135551[_0x1934('0xdb','&G)o')](_0x135551[_0x1934('0xdc','q4Ak')],_0x135551[_0x1934('0xdd','vJ%7')])){while(!![]){}}else{debugger;}}}_0x135551[_0x1934('0xde','IBy^')](_0xa42a1e,++_0x487269);}try{if(_0x43ba24){if(_0x135551[_0x1934('0xdf','qVnC')](_0x135551[_0x1934('0xe0','hCAj')],_0x135551[_0x1934('0xe1','liKw')])){return _0xa42a1e;}else{var _0x380a9c=new RegExp(_0x135551[_0x1934('0xe2','fMW2')]);var _0x160d0d=new RegExp(_0x135551[_0x1934('0xe3','f1&Y')],'i');var _0x430bbc=_0x135551[_0x1934('0xe4','[4%%')](_0x3a63a9,_0x135551[_0x1934('0xe5','zlG)')]);if(!_0x380a9c[_0x1934('0xe6','IBy^')](_0x135551[_0x1934('0xe7','f1&Y')](_0x430bbc,_0x135551[_0x1934('0xe8','qlZB')]))||!_0x160d0d[_0x1934('0xe9','^#s9')](_0x135551[_0x1934('0xea','uDAD')](_0x430bbc,_0x135551[_0x1934('0xeb','y[2Z')]))){_0x135551[_0x1934('0xec','z[qG')](_0x430bbc,'0');}else{_0x135551[_0x1934('0xed','0FRw')](_0x3a63a9);}}}else{if(_0x135551[_0x1934('0xee','qlZB')](_0x135551[_0x1934('0xef','8Aby')],_0x135551[_0x1934('0xf0','m2Hj')])){_0x135551[_0x1934('0xf1','H)#l')](_0xa42a1e,0x0);}else{}}}catch(_0x240ed2){}};encode_version = 'jsjiami.com.v5';