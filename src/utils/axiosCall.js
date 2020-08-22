import axios from 'axios';
axios.defaults.withCredentials = false;

export const axiosCall = async (pmethod,purl,preqObj) => {
  if(pmethod === "post"){
    return axios[pmethod](purl,preqObj,axiosConfig())
  }
  else if(pmethod === "get"){
    let lconfig = axiosConfig();
    lconfig.params = preqObj;
    return axios[pmethod](purl, lconfig)
  }
};
const axiosConfig = () => {
    return {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "authorization":`bearer token here`
           }
      };
}

