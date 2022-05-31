var host = 'http://simrsmandiri.com/emr/api';
var hostPublic = 'http://182.253.22.220';
export const config = {
    host: host,
    api_url: function (url: string) { return host + '/public/' + url },
    api_vclaim: function (url: string) { return host + '/emr/vclaim/public/' + url },
    api_public: function (url: string) { return hostPublic + '/vclaim/index.php' + url },
}