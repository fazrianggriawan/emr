var host = 'http://simrsmandiri.com';
var hostPublic = 'http://182.253.22.220';
export const config = {
    api_url: function (url: string) { return host + '/emr/api/public/' + url },
    api_vclaim: function (url: string) { return host + '/emr/vclaim/public/' + url },
    api_public: function (url: string) { return hostPublic + '/vclaim/index.php' + url },
}