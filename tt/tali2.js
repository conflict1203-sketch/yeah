
let obj = JSON.parse($response.body);
obj = {
  "vipList" : [
    {
      "code" : "vip",
      "promotedAt" : 1653482728,
      "expire" : 3736329314,
      "name" : "会员"
    }
  ],
  "identity" : "vip",
  "icon" : "https://gw.alicdn.com/imgextra/i1/O1CN01p5OON61LmDrgkaaGT_!!6000000001341-2-tps-40-40.png"
};
$done({
	'body': JSON.stringify(obj)
})

