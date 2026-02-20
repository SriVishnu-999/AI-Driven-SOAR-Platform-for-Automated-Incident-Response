const axios=require("axios");
exports.enrichIOC=async(ip)=>{
try{
const vt=await axios.get(
`https://www.virustotal.com/api/v3/ip_addresses/${ip}`,
{headers:{"x-apikey":process.env.VT_API_KEY}}
);
const vtScore=vt.data.data.attributes.last_analysis_stats.malicious||0;
const abuse=await axios.get(
"https://api.abuseipdb.com/api/v2/check",
{headers:{"Key":process.env.ABUSE_API_KEY,"Accept":"application/json"},
params:{ipAddress:ip,maxAgeInDays:90}}
);
const abuseScore=abuse.data.data.abuseConfidenceScore||0;
return{vtScore,abuseScore,combinedScore:vtScore+abuseScore};
}catch(err){
console.log("Enrichment error:",err.message);
return{vtScore:0,abuseScore:0,combinedScore:0};
}};