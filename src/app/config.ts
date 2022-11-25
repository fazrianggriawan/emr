var host         = 'http://192.168.107.4';
var public_host  = 'http://182.253.22.220';
var host_nas     = 'http://192.168.107.4:8080';
var host_farmasi = 'http://192.168.107.3';

export const config = {
    host: host,
    api_url: function (url: string) { return host + '/bihealth_api/public/' + url },
    api_farmasi: function (url: string) { return host_farmasi + '/bihealth_api/public/' + url },
    api_vclaim: function (url: string) { return host + '/bihealth_vclaim/public/' + url },
    api_upload: function (url: string) { return host_nas + '/' + url },
    api_public: function (url: string) { return public_host + '/vclaim/index.php/' + url },
}