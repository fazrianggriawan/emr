var host        = 'http://192.168.107.3';
var public_host = 'http://182.253.22.220';

export const config = {
    host: host,
    api_url: function (url: string) { return host + '/bihealth_api/public/' + url },
    api_vclaim: function (url: string) { return host + '/bihealth_vclaim/public/' + url },
    api_upload: function (url: string) { return host + ':8080/' + url },
    api_public: function (url: string) { return public_host + '/vclaim/index.php/' + url },
}