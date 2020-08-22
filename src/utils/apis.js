import { env } from "./env_config";

const profileConfig = {
  dev:{
    base:"https://jsonplaceholder.typicode.com"
  },
  prod:{
  }
}

const urlPrefixBase = (url) =>{
    return profileConfig[env].base + url;
  }

export const apiURL = {
  ENV : env,
  FETCH_DAT_LIST : urlPrefixBase("/users"),
}