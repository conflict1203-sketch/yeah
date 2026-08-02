customizeValue();

function customizeValue() {
    var body = $request.body;
    if (body) {
        body = body.replace(/"gd"\s*:\s*\d+/g, '"gd":98888');
        
        body = body.replace(/"sm"\s*:\s*\d+/g, '"sm":30');
        
        body = body.replace(/"cs"\s*:\s*\d+/g, '"cs":666');
    }
    $done(body);
}


