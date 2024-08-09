var { body } = $response; 
$done({ 
    body: JSON.stringify({ 
        "success": true, 
        "res": { 
            "version": 0, 
            "list": [ 
            ] 
        } 
    })