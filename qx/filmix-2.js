/*************************************

项目名称：Filmix
下载地址：https://too.st/8Go
更新日期：2024-03-08
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/appv2\.filmix\.com\.cn\/api\/v\d\/users url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix-2.js

[mitm]
hostname = appv2.filmix.com.cn

*************************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "year_total_match" : 9,
  "hash_version" : 0,
  "created_at" : "2024-03-08T12:27:47.759205+08:00",
  "userprofile_id" : "_d371b7f768661f4ccaca1e6eac2f1278",
  "vip_start_time" : "2024-06-13T17:57:17+08:00",
  "year_reset_time" : "2088-08-08T08:08:08+08:00",
  "token" : "aaff0c12a53257b29d6e1cbab698447672b7d846",
  "year_total_match_max" : 10084,
  "updated_at" : "2024-06-13T18:05:56.543849+08:00",
  "app_account_token" : "a4c5606d-15ab-49a8-b1c6-33c918ffcbc0",
  "week_total_match" : 33,
  "week_reset_time" : "2024-06-14T17:00:02.800985+08:00",
  "is_need_refresh" : false,
  "is_vip" : true,
  "user" : {
    "username" : "Mikephie",
    "id" : 1265,
    "email" : "",
    "is_active" : true
  },
  "vip_end_time" : "2088-08-08T08:08:08+08:00" 
}
 
$done({body : JSON.stringify(mikephie)});