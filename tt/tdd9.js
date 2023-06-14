var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = 'ISID=e29833cd380e47dabfa5143461aea0d5; acw_tc=2f6fc13016867509087403403e1f29ea5f2349af53ae5c825626e57c9d0688; aliyungf_tc=0f881a347bde9c0d887e6e8a5e0581442488466d2c583f0dbdfb5830a3570da0';

$done({headers : modifiedHeaders});