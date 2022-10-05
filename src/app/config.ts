// var host = 'http://36.94.176.218/bihealth_api';
var host = 'http://localhost/bihealth_api';
var hostVclaim = 'http://localhost/bihealth_vclaim';
var hostPublic = 'http://182.253.22.220';
var hostFileUpload = 'http://localhost:8080';
export const config = {
    host: host,
    api_url: function (url: string) { return host + '/public/' + url },
    api_vclaim: function (url: string) { return hostVclaim + '/public/' + url },
    api_public: function (url: string) { return hostPublic + '/vclaim/index.php/' + url },
    api_upload: function (url: string) { return hostFileUpload + '/' + url },
}