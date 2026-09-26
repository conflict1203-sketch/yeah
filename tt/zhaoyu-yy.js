main();

function main() {
    var body = $response.body;

    var newUserData = '{"smh":true,"pv":"北京","nk":"H","lld":3,"rt":1785304380586,"ss":0,"lst":1789836344276,"wn":698,"usg":[12],"st":1790416361855,"sid":2,"lp":[],"sfr":[[1,53,1020]],"sg":{"iosBetterMode":false,"soundVolume":0,"showDamageNum":true,"musicVolume":0},"afu":false,"apsc":0,"sgf":[[12, 5], [13, 6], [14, 9]],"wdg":true,"ld":3,"cld":25,"srd":850,"ls":275,"wd":11,"mgc":"2-99","au":"resources/img/mainUI/avatar/avatar1.png","sac":0,"pau":false,"ws":0,"op":true,"cs":469,"lrt":1790375841558,"eq":[19,18,18,29,8,30,29,18,43,43,43,8,-1,-1,-1],"wf":[[21,0],[1,0],[11,1],[3,1],[23,4],[35,3],[14,3],[13,3],[36,45],[6,36],[26,34],[39,39],[27,37],[28,38],[7,27],[8,15],[42,19],[9,24],[29,16],[22,1],[16,42],[43,15],[24,5],[18,18],[2,0],[25,4],[37,44],[12,0],[33,0],[30,21],[17,45],[5,39],[34,3],[32,0],[38,34],[19,15],[44,19],[45,2]],"lts":460,"ga":17,"mg":[4,8,2,0,10,1,3,5,9,7,11,6],"sm":30,"hfb":true,"adr":0,"aul":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"ot":1790352224364,"ps":[],"ssc":0,"wfr":true,"pap":true,"rc":1,"hfs":true,"nwi":[],"rr":0,"gd":10021174,"fds":0}';

    var udIndex = body.indexOf('"userData"');
    if (udIndex !== -1) {
        var braceStart = body.indexOf('{', udIndex);
        if (braceStart !== -1) {
            var depth = 0;
            var i = braceStart;
            while (i < body.length) {
                if (body[i] === '{') depth++;
                else if (body[i] === '}') {
                    depth--;
                    if (depth === 0) break;
                }
                i++;
            }
            body = body.substring(0, braceStart) + newUserData + body.substring(i + 1);
        }
    }

    $done(body);
}
