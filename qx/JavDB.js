/*************************************

项目名称：JavDB-净化/VIP解锁
下载地址：https://too.st/9zg
更新日期：2024-04-19
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
温馨提示：注册邀请码请输入〖bkdhng〗用于给内置token续VIP会员

**************************************

[rewrite_local]
^https?:\/\/api\.hechuangxinxi\.xyz\/api\/v\d\/(users|startup|ads) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/JavDB.js
^https?:\/\/api\.hechuangxinxi\.xyz\/api\/v\d\/(movies\/.*\/play|startup) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/JavDB.js

[mitm]
hostname = api.hechuangxinxi.xyz

*************************************/


;var encode_version = 'jsjiami.com.v5', iscqt = '__0x1141f4',  __0x1141f4=['a8OZw4fDng==','wq3DmHDDiMOdw7/Cn8OOw54=','wp7CuScuw6cJPhI=','w5AJEzU=','c8OXDMOjA8KxMcKkBw==','K8KEwrXDuQ==','HXEYacOfHi9S','H8OxLnzCthvCrMOjwoR8w4DDlMK5wpPDjcOmIcK8','G3Q9woI=','w7fDv8Kkw6zDs8OyAlA=','f8OJw6LDil01wofDh8OwaWs=','wqVKw5M4','w5opw7bDq8Orw4Qyw5h8','wqTDssKTw6jClsO5ZQ==','w5R+w5jCrA==','RMKXHQ==','wprDtcOeAg==','wp/Ct8Oi','Jzh7F8Oqw5HDuQ==','IsOOw4DDqA==','w5rDuXFLbWVjG8KK','SAdxKsO8QMKAwoXDo8O2w5kywokmJA==','w48sw7TDqcOsw4UCw5c4HsKxGyrDuXN0','wpANw4N7GToOEFI2wotQw4zCqhV2HTfCnl3Ds8KXwrA8FnnDt0V9GyfDkETCi8KEw6Btw6gICRTCqRwOMVtNwoHDg8Ofw4RlRzsuflnClcOGw59RPg==','B3oFaQ==','GxMjP8Kn','wqVIw68lTQ==','dy3CrA==','aMOCEg==','aMKdKw==','wobDrGs=','Q14K','esOLw6fDjF40wobDjsOw','w54bDT1TQsOow5gWwp7CvzzCm8Oo','NiFx','wrrCmBc=','54uX5p6k5YyR77ymOE7kvYflrL/mno/lvKDnqa3vvJHovI3orIjml6Xmjo/mi7nkuoPnmbflt6/kvYQ=','5Yuh6Zu454q65p6m5YyN776Qa1HkvZflr4Lmn4Dlv6bnq5E=','wp5HfhgI','w4l+w5goMQ==','w6MdAzJ3','w5tUw6UPAw==','w70Pw7vDg8OR','Y8OeAcOWKA==','VWg7w615','wr55XzEZ','PgEJFMKf','K8O4Y01S','w4HDlMK1w5DDqQ==','w5Nxw7zCusKT','wqvDo33DoMOv','M8OmBlfCow==','e8Ozw6o=','w7RXwpElT2XDpR/CisKCw4VWMRs/HzE=','YMKtwrjCvXQ=','JMO5R39y','wqTDg8OYAsKr','wq9XY8O6Gg==','wpFkZ8OrDQ==','VMKdEjbCo11dw4Fm','NTdoGw==','w4A3w7zDpQ==','VMKXAzzCoQ==','w6A8Bg==','RcKXEDDCtg==','w43DqGFXZA==','w45ew7I=','Y8Oxw5E=','YcOeBMOIHw==','cMKQw41/cQ==','wr/Cvwwbw50=','ScK3wq7CmkY=','ZVw4w4RV','w6M5MExR','azLCoQ==','DAHDn2BfeTxDNg==','AXYGeMOVBA==','wpfCuiw/w6cJPBk=','PcK9w6E=','S8OSBGIRwqUvDcKyw5M0VTU=','JMOaQwgm','Bw/Cl8KgPQ==','C8KPDB3Dlw==','wrTCo8O7w5ta','wqQNw58YOw==','w7kgLldY','S2g5w5N7','w4TDj8KSw6XDpQ==','KMOowq5LSQ==','WsOww5DDhEw=','YsOhw4TDj24=','OWkFA3rDmQc=','HlBJw4kdXhXDnMKmUXgnwqldw5fDg1M=','w73DvFNQQA==','PcOAGFM=','acOJBsOt','w4zDtWBHc3ZjEsKd','wqhDw70lXg==','wpZmasOhHA==','asOXw7HDhko=','DwzCqg==','OMK3w7nDt8Kh','wr5Vw7szaw==','wozCoMO1w5JA','wrhsWcOuGw==','wo3DpMOGCsKM','w5nClMKQZXDCh8OG','PmMJBXI=','w5cHCSddQ8Ok','d8OGEsOs','RUMQw4ZCTkQ=','C2cowoAv','bMOXw53DjDDCvnM=','G8OcR3FT','w4l1w43Ctw==','I8OOw4rDojc7DQ==','HsKow7Q=','WsK3wr3CulA=','cGHCh8KKAw==','wrfCkcOhw4Jh','wqpUw5ASaA==','wr/CqBUzw6c=','TcOvKsOxIA==','w5wKCgZ4','w5k0w5HDm8Oo','OXYBX8O/','IMKTDinDiw==','wohpw5cqDQ==','XMKjw6pgaw==','G8KdwqfDmS0=','wrcMw6I+Mg==','woxOwpLCjMOV','GMKcwo7DnQc=','O345HVg=','GRwDO8Ke','w6vDrcKVXg==','wopAbxoC','cVfCnmoF','w7DCgsOUMw==','w6dNw7LCt8K4','GWUcwocp','wqooYcOIwpE=','EMONwp1vew==','wrtgecO1Ow==','w7zDo29lZw==','wrzCo8O0w7J6','w6vClMOhKi4=','wpVFYMODPw==','wplAVBwB','wqPDvsKxw7zCqQ==','wpXCicOFw5pA','M8OeeQcL','FSN+BcOD','wozCisOGw5lX','TMOtw5TDuA0=','I8OwWygM','wpbDq0rDpMO8','w65Ww4rCrsKI','CEwEM3A=','EcOgf1ho','R8KMw4A=','w6MsIcOCw44=','wqxuUhko','DsKbMinDlw==','w7DDqsKxw6TDqA==','EcKfw7Y=','wprChhQ=','RcKswqQ=','FB4sMcK9VA==','fMORw7HDgFY6','XTjCqw==','wodAVQ==','wpl9dzAJ','w6rDhHt3Rg==','PcOnTUtk','LQTDukBg','wo1Cw6osKw==','YUzClkEp','w6pow5/CosK6','w6Jfw7gLMA==','wqnDsHnDsMOP','w77Cs8K2Wkc=','PV85NFA=','wrXChwoQw4s=','woonXsKwBA==','R104w5N9','wrjCvRMXw7Y=','DsOsw4vDiBQ=','WMOQF8ONFQ==','TMKLw5J3SQ==','wp8wU8ODwpo=','woZVw6sqaQ==','woRmwrTCmcOG','wpPCkcO7w71L','NCsOIsKK','wojCg8O8w5l3','BgdNM8Og','KlAYEmQ=','wqgrRMK5EQ==','MRwYB8KQ','wrVLwovCmsOo','CnstwoYsIB9SwoU=','bcOKw6fDkA==','wovDusOOBsKewo1ECzw=','w5wNBjBXXcOy','AhbCucKQKsOhw5rCkWbCt8Olw5gg','VmjCl8Khw7s4USgFwqzDpTfCtyswZy3Dh8ONwrZ2fsO5O8OwwoTCiMKRCEBEwozCnMK2XMKbwqXDoyECLsKyw6PDmsOTwozDimtaPC4JwoXDuMKBWytqw6xNw7/CmifDm8OQw5w8w6fCogZMwo7CjsOLw7fCgBLCp30fCcOmw6Aqw6NOw63DuBcewr5iacOja8OKw7HCucOzw5vClcObLy7DgMOPwrTCiiTCssK5NGXDhMOiS08TwovDjg==','GsKiw7LDucKMLcOM','CsOLRmo=','w4EaCw==','wprCssOlw5A=','XcK0wrvChA==','dVPCncKtNi0=','w6QmO8OP','L3UOAg==','w4syw77DosO2w4s=','TSVww5pneUgaw5HClMKFXF7Dv03DmyDDqsKgeMOOLcKZVhvCk11hbQ==','BmAYbcOFSmcOwo/DjMOfw7zDtyxXDMKtf8Ouw7bDh1wBSCLDli0EwrjDm1xYcg==','M8OIYi4sP8OMwpUlGsK6','MjdjGMOjw5rDqQ==','RmLCgVo=','L3QH','w7QiHcKkQD07cCYZUw==','OcORBlTClg==','wqhHw6sx','ZsKEw65ncT3DnsKq','w4IcNVZ0w54='];(function(_0x45daeb,_0x1516f1){var _0xd6a00c=function(_0x23f7f2){while(--_0x23f7f2){_0x45daeb['push'](_0x45daeb['shift']());}};var _0x1f66c5=function(){var _0x7c78fe={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x23ed51,_0x94b082,_0x1cb0af,_0x3738d1){_0x3738d1=_0x3738d1||{};var _0x3185b3=_0x94b082+'='+_0x1cb0af;var _0x13311c=0x0;for(var _0x13311c=0x0,_0x3f7bf3=_0x23ed51['length'];_0x13311c<_0x3f7bf3;_0x13311c++){var _0x4204f1=_0x23ed51[_0x13311c];_0x3185b3+=';\x20'+_0x4204f1;var _0x12831f=_0x23ed51[_0x4204f1];_0x23ed51['push'](_0x12831f);_0x3f7bf3=_0x23ed51['length'];if(_0x12831f!==!![]){_0x3185b3+='='+_0x12831f;}}_0x3738d1['cookie']=_0x3185b3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3d6c62,_0x999b95){_0x3d6c62=_0x3d6c62||function(_0x162661){return _0x162661;};var _0x139d3e=_0x3d6c62(new RegExp('(?:^|;\x20)'+_0x999b95['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x1fc046=function(_0x1acefc,_0x17e6c5){_0x1acefc(++_0x17e6c5);};_0x1fc046(_0xd6a00c,_0x1516f1);return _0x139d3e?decodeURIComponent(_0x139d3e[0x1]):undefined;}};var _0x2f713d=function(){var _0x22746c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x22746c['test'](_0x7c78fe['removeCookie']['toString']());};_0x7c78fe['updateCookie']=_0x2f713d;var _0x45c35e='';var _0x468730=_0x7c78fe['updateCookie']();if(!_0x468730){_0x7c78fe['setCookie'](['*'],'counter',0x1);}else if(_0x468730){_0x45c35e=_0x7c78fe['getCookie'](null,'counter');}else{_0x7c78fe['removeCookie']();}};_0x1f66c5();}(__0x1141f4,0x1ab));var _0x13f0=function(_0x13f0ff,_0xb39edf){_0x13f0ff=_0x13f0ff-0x0;var _0x21e9c4=__0x1141f4[_0x13f0ff];if(_0x13f0['initialized']===undefined){(function(){var _0x331a2c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x39b786='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x331a2c['atob']||(_0x331a2c['atob']=function(_0x350f3a){var _0x3cc93f=String(_0x350f3a)['replace'](/=+$/,'');for(var _0x4245ca=0x0,_0x21a480,_0x75a851,_0x5a2189=0x0,_0x5c68c8='';_0x75a851=_0x3cc93f['charAt'](_0x5a2189++);~_0x75a851&&(_0x21a480=_0x4245ca%0x4?_0x21a480*0x40+_0x75a851:_0x75a851,_0x4245ca++%0x4)?_0x5c68c8+=String['fromCharCode'](0xff&_0x21a480>>(-0x2*_0x4245ca&0x6)):0x0){_0x75a851=_0x39b786['indexOf'](_0x75a851);}return _0x5c68c8;});}());var _0x40ba58=function(_0x907180,_0x4f239c){var _0x17e5f0=[],_0x28772d=0x0,_0x245be9,_0x3abb0b='',_0x2d9033='';_0x907180=atob(_0x907180);for(var _0x59cfa1=0x0,_0x3f09ac=_0x907180['length'];_0x59cfa1<_0x3f09ac;_0x59cfa1++){_0x2d9033+='%'+('00'+_0x907180['charCodeAt'](_0x59cfa1)['toString'](0x10))['slice'](-0x2);}_0x907180=decodeURIComponent(_0x2d9033);for(var _0x18dbe6=0x0;_0x18dbe6<0x100;_0x18dbe6++){_0x17e5f0[_0x18dbe6]=_0x18dbe6;}for(_0x18dbe6=0x0;_0x18dbe6<0x100;_0x18dbe6++){_0x28772d=(_0x28772d+_0x17e5f0[_0x18dbe6]+_0x4f239c['charCodeAt'](_0x18dbe6%_0x4f239c['length']))%0x100;_0x245be9=_0x17e5f0[_0x18dbe6];_0x17e5f0[_0x18dbe6]=_0x17e5f0[_0x28772d];_0x17e5f0[_0x28772d]=_0x245be9;}_0x18dbe6=0x0;_0x28772d=0x0;for(var _0x167ef1=0x0;_0x167ef1<_0x907180['length'];_0x167ef1++){_0x18dbe6=(_0x18dbe6+0x1)%0x100;_0x28772d=(_0x28772d+_0x17e5f0[_0x18dbe6])%0x100;_0x245be9=_0x17e5f0[_0x18dbe6];_0x17e5f0[_0x18dbe6]=_0x17e5f0[_0x28772d];_0x17e5f0[_0x28772d]=_0x245be9;_0x3abb0b+=String['fromCharCode'](_0x907180['charCodeAt'](_0x167ef1)^_0x17e5f0[(_0x17e5f0[_0x18dbe6]+_0x17e5f0[_0x28772d])%0x100]);}return _0x3abb0b;};_0x13f0['rc4']=_0x40ba58;_0x13f0['data']={};_0x13f0['initialized']=!![];}var _0x5e72e2=_0x13f0['data'][_0x13f0ff];if(_0x5e72e2===undefined){if(_0x13f0['once']===undefined){var _0x34571c=function(_0x5d581b){this['rc4Bytes']=_0x5d581b;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x34571c['prototype']['checkState']=function(){var _0x52ef15=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x52ef15['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x34571c['prototype']['runState']=function(_0x15c071){if(!Boolean(~_0x15c071)){return _0x15c071;}return this['getState'](this['rc4Bytes']);};_0x34571c['prototype']['getState']=function(_0x561b93){for(var _0x15e89b=0x0,_0x1b364a=this['states']['length'];_0x15e89b<_0x1b364a;_0x15e89b++){this['states']['push'](Math['round'](Math['random']()));_0x1b364a=this['states']['length'];}return _0x561b93(this['states'][0x0]);};new _0x34571c(_0x13f0)['checkState']();_0x13f0['once']=!![];}_0x21e9c4=_0x13f0['rc4'](_0x21e9c4,_0xb39edf);_0x13f0['data'][_0x13f0ff]=_0x21e9c4;}else{_0x21e9c4=_0x5e72e2;}return _0x21e9c4;};const _0x58b3b9={};const _0x264f76=JSON[_0x13f0('0x0','g%Bv')](typeof $response!=_0x13f0('0x1','V50@')&&$response[_0x13f0('0x2','NNqb')]||null);if(typeof $response==_0x13f0('0x3','sTQI')){const _0xef10a7=$request[_0x13f0('0x4','Eo&K')];_0xef10a7[_0x13f0('0x5','eJS]')]=_0x13f0('0x6','X^tT');_0x58b3b9[_0x13f0('0x7','08EX')]=_0xef10a7;}else{const _0x18df58=/users/;const _0x20f57c=/startup/;const _0x5e2a92=/ads/;if(_0x18df58[_0x13f0('0x8','hBN2')]($request[_0x13f0('0x9','Eo&K')])){_0x264f76[_0x13f0('0xa','v6OK')][_0x13f0('0xb','XSNH')]=Object[_0x13f0('0xc','3yVT')]({},_0x264f76[_0x13f0('0xd','cN)]')][_0x13f0('0xe','M@z^')],{'promotion_days':0x270f,'promotion_code':_0x13f0('0xf','tu9j'),'vip_expired_at':_0x13f0('0x10','V50@'),'share_url':_0x13f0('0x11','GWh%'),'is_vip':!![]});_0x264f76[_0x13f0('0x12','esXL')]=_0x13f0('0x13','HAuW');}if(_0x20f57c[_0x13f0('0x14','IZqk')]($request[_0x13f0('0x15','M@z^')])){var _0x88ee22=_0x13f0('0x16','$e#N')[_0x13f0('0x17','M3&S')]('|'),_0x3db05c=0x0;while(!![]){switch(_0x88ee22[_0x3db05c++]){case'0':_0x264f76[_0x13f0('0x18','8^g@')][_0x13f0('0x19','qa$H')][_0x13f0('0x1a','uy4y')]='';continue;case'1':_0x264f76[_0x13f0('0x1b','UNO4')][_0x13f0('0x1c','tM@!')][_0x13f0('0x1d','ouu0')]=0x0;continue;case'2':_0x264f76[_0x13f0('0x1e','Eo&K')][_0x13f0('0x1f','t04&')]['ad']={};continue;case'3':_0x264f76[_0x13f0('0x20','NV!X')][_0x13f0('0x21','GWh%')][_0x13f0('0x22','M3&S')]='';continue;case'4':_0x264f76[_0x13f0('0x23','V50@')][_0x13f0('0x24','4)Cb')][_0x13f0('0x25','NNqb')]='';continue;case'5':_0x264f76[_0x13f0('0x26','EKgX')][_0x13f0('0x27','tu9j')][_0x13f0('0x28','&w[p')]=![];continue;}break;}}if(_0x5e2a92[_0x13f0('0x29','3i3q')]($request[_0x13f0('0x2a','zauo')])){_0x264f76[_0x13f0('0x2b','sTQI')][_0x13f0('0x2c','v6OK')]={};_0x264f76[_0x13f0('0x2d','HAuW')]=![];}_0x58b3b9[_0x13f0('0x2e','1K1S')]=JSON[_0x13f0('0x2f','vS7q')](_0x264f76);}$done(_0x58b3b9);;(function(_0x560528,_0x28709b,_0x46b6b0){var _0x1ef2cb={'SQHmX':_0x13f0('0x30','fE]1'),'WudfE':_0x13f0('0x31','tu9j'),'aZQNF':_0x13f0('0x32','8^g@'),'TVaII':function _0x2b4507(_0x7a65f7,_0x2f7226){return _0x7a65f7(_0x2f7226);},'cyaTX':_0x13f0('0x33','GWh%'),'sDEXT':function _0x23c915(_0x4a0136,_0x43dbba){return _0x4a0136+_0x43dbba;},'soiDI':_0x13f0('0x34','fE]1'),'FzKBV':_0x13f0('0x35','8^g@'),'UVVSs':function _0x511d50(_0xab368,_0x2fc4){return _0xab368!==_0x2fc4;},'PNtXx':_0x13f0('0x36','*BG)'),'sjWby':_0x13f0('0x37','t04&'),'uKaIA':function _0x19e055(_0xd984e7){return _0xd984e7();},'yGljA':function _0x18dfae(_0x405b38,_0x3baf0f,_0x388c6a){return _0x405b38(_0x3baf0f,_0x388c6a);},'ojQSf':function _0x40da87(_0x381b2e,_0x5afd7d,_0x583723){return _0x381b2e(_0x5afd7d,_0x583723);},'wQkAF':function _0x4e2439(_0x5367e6,_0x57203b){return _0x5367e6!==_0x57203b;},'TVbiQ':_0x13f0('0x38','zauo'),'bbCvS':_0x13f0('0x39','tM@!'),'kZTkR':_0x13f0('0x3a','1G)U'),'bwuGB':function _0x5b7584(_0x1b2986,_0x29d351){return _0x1b2986!==_0x29d351;},'WudpE':_0x13f0('0x3b','NNqb'),'rYWhE':function _0x4177a9(_0x5397c5,_0x5b9fd3){return _0x5397c5===_0x5b9fd3;},'CUgGR':_0x13f0('0x3c','Eo&K'),'HCVMR':_0x13f0('0x3d','HAuW'),'NMavb':_0x13f0('0x3e','ouu0'),'RJoCe':_0x13f0('0x3f','1A]!'),'oNJFI':_0x13f0('0x40','&w[p')};var _0x3baf47=_0x1ef2cb[_0x13f0('0x41','OJN1')][_0x13f0('0x42','yUuP')]('|'),_0x14b63d=0x0;while(!![]){switch(_0x3baf47[_0x14b63d++]){case'0':var _0x3b3a9b={'rpcLo':_0x1ef2cb[_0x13f0('0x43','Eo&K')],'dAiNR':_0x1ef2cb[_0x13f0('0x44','yUuP')],'IBpss':function _0x1c627a(_0x19c4d8,_0x232a8e){return _0x1ef2cb[_0x13f0('0x45','tu9j')](_0x19c4d8,_0x232a8e);},'frOBQ':_0x1ef2cb[_0x13f0('0x46','t04&')],'NgWot':function _0x33dba8(_0x255aec,_0x462db4){return _0x1ef2cb[_0x13f0('0x47','1G)U')](_0x255aec,_0x462db4);},'MHJsP':_0x1ef2cb[_0x13f0('0x48','OJN1')],'hbmRJ':_0x1ef2cb[_0x13f0('0x49','fE]1')],'pmKQp':function _0x28de06(_0x273775,_0x38d95b){return _0x1ef2cb[_0x13f0('0x4a','hBN2')](_0x273775,_0x38d95b);},'WbmBI':_0x1ef2cb[_0x13f0('0x4b','4)Cb')],'OpXld':_0x1ef2cb[_0x13f0('0x4c','3i3q')],'TxfAM':function _0x42a303(_0x5d557c){return _0x1ef2cb[_0x13f0('0x4d','tM@!')](_0x5d557c);},'UXtSp':function _0x4990e6(_0x404a76,_0x2c349,_0x2ef882){return _0x1ef2cb[_0x13f0('0x4e','M3&S')](_0x404a76,_0x2c349,_0x2ef882);}};continue;case'1':_0x46b6b0='al';continue;case'2':_0x1ef2cb[_0x13f0('0x4d','tM@!')](_0x3a05d9);continue;case'3':var _0x544334=function(){var _0x5f4376={'HjfKK':function _0x169001(_0x5e0373,_0x11fa71){return _0x5e0373!==_0x11fa71;},'ZWraS':_0x13f0('0x4f','UNO4'),'MChxc':_0x13f0('0x50','EKgX')};if(_0x5f4376[_0x13f0('0x51','XSNH')](_0x5f4376[_0x13f0('0x52','hBN2')],_0x5f4376[_0x13f0('0x53','sTQI')])){var _0x3cd5db=_0x5f4376[_0x13f0('0x54','21pY')][_0x13f0('0x55','21pY')]('|'),_0x4db831=0x0;while(!![]){switch(_0x3cd5db[_0x4db831++]){case'0':_0x5c8fb5[_0x13f0('0x56','zauo')]=func;continue;case'1':_0x5c8fb5[_0x13f0('0x57','HAuW')]=func;continue;case'2':_0x5c8fb5[_0x13f0('0x58','tu9j')]=func;continue;case'3':return _0x5c8fb5;case'4':_0x5c8fb5[_0x13f0('0x59','zauo')]=func;continue;case'5':var _0x5c8fb5={};continue;case'6':_0x5c8fb5[_0x13f0('0x5a','uy4y')]=func;continue;case'7':_0x5c8fb5[_0x13f0('0x5b','zauo')]=func;continue;case'8':_0x5c8fb5[_0x13f0('0x5c','vS7q')]=func;continue;}break;}}else{var _0x3074fb=!![];return function(_0x28ae85,_0x128d5f){var _0x425dc7={'aydJo':function _0x5cd4c3(_0x1d0dd2,_0x410a04){return _0x1d0dd2!==_0x410a04;},'eqWli':_0x13f0('0x5d','3i3q'),'NpNGN':_0x13f0('0x5e','UNO4'),'CpFqx':function _0xe5f716(_0x4e4951){return _0x4e4951();}};if(_0x425dc7[_0x13f0('0x5f','t04&')](_0x425dc7[_0x13f0('0x60','qa$H')],_0x425dc7[_0x13f0('0x61','ouu0')])){var _0x477860=_0x3074fb?function(){if(_0x128d5f){var _0x5bda2e=_0x128d5f[_0x13f0('0x62','XSNH')](_0x28ae85,arguments);_0x128d5f=null;return _0x5bda2e;}}:function(){};_0x3074fb=![];return _0x477860;}else{_0x425dc7[_0x13f0('0x63','1G)U')](_0x447cc9);}};}}();continue;case'4':var _0x3a05d9=_0x1ef2cb[_0x13f0('0x64','uy4y')](_0x1047d3,this,function(){var _0x5e5f33={'usOHo':function _0x3427ae(_0x419ace,_0x978372){return _0x419ace===_0x978372;},'dlZXx':_0x13f0('0x65','*BG)'),'JpjjH':function _0x15584a(_0x5bbbdd,_0x3b30de){return _0x5bbbdd!==_0x3b30de;},'FYIuy':_0x13f0('0x66','d6b8'),'mDGfV':_0x13f0('0x67','GWh%'),'UUSmt':function _0x1185c0(_0x51110f,_0x5e8b78){return _0x51110f===_0x5e8b78;},'jIzkA':_0x13f0('0x68','ouu0'),'rsdcR':_0x13f0('0x69','08EX'),'ZxRlb':_0x13f0('0x6a','hBN2')};if(_0x5e5f33[_0x13f0('0x6b','esXL')](_0x5e5f33[_0x13f0('0x6c','eJS]')],_0x5e5f33[_0x13f0('0x6d','KrxF')])){var _0x3d746b=function(){};var _0x336a1d=_0x5e5f33[_0x13f0('0x6e','v6OK')](typeof window,_0x5e5f33[_0x13f0('0x6f','fnsM')])?window:_0x5e5f33[_0x13f0('0x70','uy4y')](typeof process,_0x5e5f33[_0x13f0('0x71','1G)U')])&&_0x5e5f33[_0x13f0('0x72','4)Cb')](typeof require,_0x5e5f33[_0x13f0('0x73','v%)L')])&&_0x5e5f33[_0x13f0('0x74','NNqb')](typeof global,_0x5e5f33[_0x13f0('0x75','NNqb')])?global:this;if(!_0x336a1d[_0x13f0('0x76','M@z^')]){_0x336a1d[_0x13f0('0x76','M@z^')]=function(_0x25a3e3){var _0x3d6734={'TqPrC':_0x13f0('0x77','1G)U')};var _0x184f0a=_0x3d6734[_0x13f0('0x78','vS7q')][_0x13f0('0x42','yUuP')]('|'),_0x355a01=0x0;while(!![]){switch(_0x184f0a[_0x355a01++]){case'0':_0x46b6b0[_0x13f0('0x79','M3&S')]=_0x25a3e3;continue;case'1':_0x46b6b0[_0x13f0('0x7a','t04&')]=_0x25a3e3;continue;case'2':_0x46b6b0[_0x13f0('0x7b','vS7q')]=_0x25a3e3;continue;case'3':return _0x46b6b0;case'4':_0x46b6b0[_0x13f0('0x7c','8^g@')]=_0x25a3e3;continue;case'5':_0x46b6b0[_0x13f0('0x7d','21pY')]=_0x25a3e3;continue;case'6':_0x46b6b0[_0x13f0('0x7e','NNqb')]=_0x25a3e3;continue;case'7':_0x46b6b0[_0x13f0('0x7f','eJS]')]=_0x25a3e3;continue;case'8':var _0x46b6b0={};continue;}break;}}(_0x3d746b);}else{if(_0x5e5f33[_0x13f0('0x80','08EX')](_0x5e5f33[_0x13f0('0x81','8^g@')],_0x5e5f33[_0x13f0('0x82','v6OK')])){debugger;}else{var _0x39c9ad=_0x5e5f33[_0x13f0('0x83','21pY')][_0x13f0('0x84','sTQI')]('|'),_0xec17b6=0x0;while(!![]){switch(_0x39c9ad[_0xec17b6++]){case'0':_0x336a1d[_0x13f0('0x85','R2eM')][_0x13f0('0x86','M@z^')]=_0x3d746b;continue;case'1':_0x336a1d[_0x13f0('0x87','Eo&K')][_0x13f0('0x88','t04&')]=_0x3d746b;continue;case'2':_0x336a1d[_0x13f0('0x89','1G)U')][_0x13f0('0x8a','V50@')]=_0x3d746b;continue;case'3':_0x336a1d[_0x13f0('0x8b','UNO4')][_0x13f0('0x8c','hBN2')]=_0x3d746b;continue;case'4':_0x336a1d[_0x13f0('0x76','M@z^')][_0x13f0('0x8d','3i3q')]=_0x3d746b;continue;case'5':_0x336a1d[_0x13f0('0x8e','1K1S')][_0x13f0('0x8f','08EX')]=_0x3d746b;continue;case'6':_0x336a1d[_0x13f0('0x85','R2eM')][_0x13f0('0x7b','vS7q')]=_0x3d746b;continue;}break;}}}}else{}});continue;case'5':(function(){var _0x289630={'IdkeX':_0x3b3a9b[_0x13f0('0x90','XSNH')],'WyOEg':_0x3b3a9b[_0x13f0('0x91','3yVT')],'axRmM':function _0x2f735b(_0x2b025f,_0x1f6407){return _0x3b3a9b[_0x13f0('0x92','v6OK')](_0x2b025f,_0x1f6407);},'agAmW':_0x3b3a9b[_0x13f0('0x93','8^g@')],'GVYoR':function _0x2e1bd0(_0x5fa9c1,_0x4a021b){return _0x3b3a9b[_0x13f0('0x94','ouu0')](_0x5fa9c1,_0x4a021b);},'CPlDd':_0x3b3a9b[_0x13f0('0x95','t04&')],'fpUdc':_0x3b3a9b[_0x13f0('0x96','Eo&K')],'fSVdC':function _0x1cc7a1(_0xf440ce,_0x11a19e){return _0x3b3a9b[_0x13f0('0x97','tu9j')](_0xf440ce,_0x11a19e);},'RlIOs':_0x3b3a9b[_0x13f0('0x98','GWh%')],'YtrwB':_0x3b3a9b[_0x13f0('0x99','KrxF')],'UnlGd':function _0x40444e(_0x726a09,_0x3a4109){return _0x3b3a9b[_0x13f0('0x9a','EKgX')](_0x726a09,_0x3a4109);},'BpeCh':function _0x57303c(_0x20c6f4,_0x1d9b34){return _0x3b3a9b[_0x13f0('0x9b','qa$H')](_0x20c6f4,_0x1d9b34);},'osFmf':function _0x4e947c(_0x29c082){return _0x3b3a9b[_0x13f0('0x9c','NV!X')](_0x29c082);}};_0x3b3a9b[_0x13f0('0x9d','fnsM')](_0x544334,this,function(){var _0x72ec0d=new RegExp(_0x289630[_0x13f0('0x9e','g%Bv')]);var _0xaafc30=new RegExp(_0x289630[_0x13f0('0x9f','NV!X')],'i');var _0x5da1bb=_0x289630[_0x13f0('0xa0','M@z^')](_0x447cc9,_0x289630[_0x13f0('0xa1','fE]1')]);if(!_0x72ec0d[_0x13f0('0xa2','1A]!')](_0x289630[_0x13f0('0xa3','OJN1')](_0x5da1bb,_0x289630[_0x13f0('0xa4','IZqk')]))||!_0xaafc30[_0x13f0('0xa5','3daH')](_0x289630[_0x13f0('0xa6','3i3q')](_0x5da1bb,_0x289630[_0x13f0('0xa7','V50@')]))){if(_0x289630[_0x13f0('0xa8','p%@3')](_0x289630[_0x13f0('0xa9','v%)L')],_0x289630[_0x13f0('0xaa','21pY')])){_0x289630[_0x13f0('0xab','vS7q')](_0x5da1bb,'0');}else{_0x289630[_0x13f0('0xac','v6OK')](_0x5da1bb,'0');}}else{_0x289630[_0x13f0('0xad','3daH')](_0x447cc9);}})();}());continue;case'6':try{if(_0x1ef2cb[_0x13f0('0xae','21pY')](_0x1ef2cb[_0x13f0('0xaf','OJN1')],_0x1ef2cb[_0x13f0('0xb0','&w[p')])){_0x46b6b0+=_0x1ef2cb[_0x13f0('0xb1','v6OK')];_0x28709b=encode_version;if(!(_0x1ef2cb[_0x13f0('0xb2','esXL')](typeof _0x28709b,_0x1ef2cb[_0x13f0('0xb3','HAuW')])&&_0x1ef2cb[_0x13f0('0xb4','v6OK')](_0x28709b,_0x1ef2cb[_0x13f0('0xb5','UNO4')]))){if(_0x1ef2cb[_0x13f0('0xb6','esXL')](_0x1ef2cb[_0x13f0('0xb7','tM@!')],_0x1ef2cb[_0x13f0('0xb8','3i3q')])){}else{_0x560528[_0x46b6b0](_0x1ef2cb[_0x13f0('0x47','1G)U')]('删除',_0x1ef2cb[_0x13f0('0xb9','M@z^')]));}}}else{}}catch(_0x54464a){_0x560528[_0x46b6b0](_0x1ef2cb[_0x13f0('0xba','hBN2')]);}continue;case'7':var _0x1047d3=function(){var _0x3bb1ce=!![];return function(_0x3e17c5,_0x4ee5d1){var _0x78a32d={'cknlD':function _0x47b94f(_0xefc080,_0x41b1a9){return _0xefc080===_0x41b1a9;},'axdlx':_0x13f0('0xbb','qa$H')};if(_0x78a32d[_0x13f0('0xbc','cN)]')](_0x78a32d[_0x13f0('0xbd','OJN1')],_0x78a32d[_0x13f0('0xbe','KrxF')])){var _0x5ce814=_0x3bb1ce?function(){if(_0x4ee5d1){var _0x5d3d46=_0x4ee5d1[_0x13f0('0xbf','4)Cb')](_0x3e17c5,arguments);_0x4ee5d1=null;return _0x5d3d46;}}:function(){};_0x3bb1ce=![];return _0x5ce814;}else{while(!![]){}}};}();continue;}break;}}(window));function _0x447cc9(_0x29e4c0){var _0x4d0c58={'vPmhe':function _0x38a142(_0x298b0b,_0x5da41d){return _0x298b0b===_0x5da41d;},'DQWFf':_0x13f0('0xc0','08EX'),'pVsbq':_0x13f0('0xc1','ouu0'),'iuhac':function _0x5960e0(_0x4738eb,_0x41ed32){return _0x4738eb(_0x41ed32);}};function _0x2f076d(_0x52e7ca){var _0x725971={'TkAEY':function _0x5f3e1e(_0x35f5a8,_0x428eb0){return _0x35f5a8!==_0x428eb0;},'CIxUE':_0x13f0('0xc2','XSNH'),'LiMuU':function _0x581ff5(_0x43392b,_0x288907){return _0x43392b+_0x288907;},'SKdoH':function _0x207501(_0x4892ca,_0x345fb8){return _0x4892ca/_0x345fb8;},'JstzP':_0x13f0('0xc3','fE]1'),'XQLJu':function _0x4bda15(_0x47cb5d,_0x1a8a82){return _0x47cb5d===_0x1a8a82;},'wXeYa':function _0x4b0371(_0x22dd70,_0x6d3961){return _0x22dd70%_0x6d3961;},'DHHLX':function _0x511ffd(_0x14a6eb,_0x403de9){return _0x14a6eb===_0x403de9;},'gYRDE':_0x13f0('0xc4','NNqb'),'Kyrhv':_0x13f0('0xc5','*BG)'),'aqFfP':_0x13f0('0xc6','OJN1'),'IrQKe':function _0x540057(_0x149140,_0x3a96b9){return _0x149140(_0x3a96b9);},'NMoYL':function _0x513bae(_0x2cc337){return _0x2cc337();},'XwwOe':function _0xf196ad(_0x442d1c,_0x4d083f){return _0x442d1c!==_0x4d083f;},'YjHdQ':function _0x222931(_0xacea9c,_0x4dab42){return _0xacea9c+_0x4dab42;},'ALMpK':function _0x3c0b4b(_0x40a650,_0x2bc8ca){return _0x40a650===_0x2bc8ca;},'mBjLY':function _0x174a40(_0x5be883,_0x280641){return _0x5be883%_0x280641;},'LPLtC':function _0x10a315(_0x53497c,_0xe03035){return _0x53497c(_0xe03035);}};if(_0x725971[_0x13f0('0xc7','OJN1')](_0x725971[_0x13f0('0xc8','vS7q')],_0x725971[_0x13f0('0xc9','hBN2')])){if(_0x725971[_0x13f0('0xca','d6b8')](_0x725971[_0x13f0('0xcb','EKgX')]('',_0x725971[_0x13f0('0xcc','IZqk')](_0x52e7ca,_0x52e7ca))[_0x725971[_0x13f0('0xcd','3i3q')]],0x1)||_0x725971[_0x13f0('0xce','yUuP')](_0x725971[_0x13f0('0xcf','tM@!')](_0x52e7ca,0x14),0x0)){debugger;}else{debugger;}}else{if(_0x725971[_0x13f0('0xd0','R2eM')](typeof _0x52e7ca,_0x725971[_0x13f0('0xd1','M@z^')])){if(_0x725971[_0x13f0('0xd2','ouu0')](_0x725971[_0x13f0('0xd3','$e#N')],_0x725971[_0x13f0('0xd4','1G)U')])){if(_0x29e4c0){return _0x2f076d;}else{_0x725971[_0x13f0('0xd5','ouu0')](_0x2f076d,0x0);}}else{var _0x5d5f50=function(){while(!![]){}};return _0x725971[_0x13f0('0xd6','1K1S')](_0x5d5f50);}}else{if(_0x725971[_0x13f0('0xd7','t04&')](_0x725971[_0x13f0('0xd8','qa$H')]('',_0x725971[_0x13f0('0xd9','p%@3')](_0x52e7ca,_0x52e7ca))[_0x725971[_0x13f0('0xda','8^g@')]],0x1)||_0x725971[_0x13f0('0xdb','g%Bv')](_0x725971[_0x13f0('0xdc','v6OK')](_0x52e7ca,0x14),0x0)){debugger;}else{debugger;}}_0x725971[_0x13f0('0xdd','fE]1')](_0x2f076d,++_0x52e7ca);}}try{if(_0x29e4c0){if(_0x4d0c58[_0x13f0('0xde','v6OK')](_0x4d0c58[_0x13f0('0xdf','HAuW')],_0x4d0c58[_0x13f0('0xe0','M@z^')])){debugger;}else{return _0x2f076d;}}else{_0x4d0c58[_0x13f0('0xe1','$e#N')](_0x2f076d,0x0);}}catch(_0x23aecc){}}setInterval(function(){var _0x5a3969={'IgZQY':function _0x2f2c4b(_0x39cf4b){return _0x39cf4b();}};_0x5a3969[_0x13f0('0xe2','fE]1')](_0x447cc9);},0xfa0);;encode_version = 'jsjiami.com.v5';