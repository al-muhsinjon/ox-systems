import { baseUrl } from "./baseUrl";

const auth = {
    async login(userName, password, subdomain) {
        const data = await fetch(`${baseUrl}/security/auth_check`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json",
            },
            body: `_username=${userName}&_password=${password}&_subdomain=${subdomain}`,
        })
        return data
    }
}

export default auth