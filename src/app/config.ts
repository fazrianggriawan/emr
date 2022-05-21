var host = 'http://localhost';
var hostSalak = 'http://localhost';
var hostSalakOnline = 'http://rssalakbogor.online';
var hostPublic = 'http://182.253.22.220';
export const config = {
    api_url: function (url: string) { return host + '/emr/api_emr/public/' + url },
    api_url_salak: function (url: string) { return hostSalak + '/api_emr_salak/' + url },
    api_url_salak_online: function (url: string) { return hostSalakOnline + '/emr/api/' + url },
    api_public: function (url: string) { return hostPublic + '/vclaim/index.php' + url },
    api_vclaim: function (url: string) { return 'http://localhost/vclaim/public/' + url },
}