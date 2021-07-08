var host = 'http://localhost';
export const config = {
    api_url: function(url:string){ return host+'/emr/api_emr/public/'+url}
}