
re();

function re() {
 var body = $response.body;
 body = body.replace('2021-12-27 23:59:59', '2022-12-27 23:59:59');
 console.log(body)
} 

