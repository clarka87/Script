/*        
        ➪：脚本名称: 作业批改 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >作业批改-家长辅导作业工具（永久会员）
作业工具（永久会员）
^https?:\/\/appss.rhinoxlab.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg.js

[mitm] 
hostname = appss.rhinoxlab.com

*******************************/


let mikephie = JSON.parse($response.body);

if ($request.url.includes("/getAccountInfo")) {
    Object.assign(mikephie.result, {
        headImg: "https://i.ibb.co/f1cgnGT/IMG-1215.jpg",                  // 更新或添加字段
        type: "VIP",                          // 更新或添加字段
        freeFlag: "YES",                       // 更新或添加字段
        wordage: 8888888888,                  // 更新或添加字段
        email: "888@gmail.com",              // 更新或添加字段
        vipExpireTime: "2088-08-08 08:08:08", // 更新或添加字段
        vipExpireDays: 8888888888,           // 更新或添加字段
        remainTimeSeconds: 8888888,     // 更新或添加字段
        times: 8888888888,              // 更新或添加字段
        vipGroupInfos: [              // 更新数组
            {
                groupType: "TYPE_ONE",
                vipType: "VIP",
                autoPay: "YES"
            }
        ]
    });
}

$done({ body: JSON.stringify(mikephie) });