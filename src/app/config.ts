var host = 'http://localhost';
var hostSalak = 'http://localhost';
var hostSalakOnline = 'http://rssalakbogor.online';
export const config = {
    api_url: function(url:string){ return host+'/emr/api_emr/public/'+url},
    api_url_salak: function(url:string){ return hostSalak+'/api_emr_salak/'+url},
    api_url_salak_online: function(url:string){ return hostSalakOnline+'/emr/api/'+url},
}