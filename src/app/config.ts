var host = 'http://localhost/emr/api_emr/public';
export const config = {
    api_url: function(url:string){ return host+'/'+url}
}