import { baseUrl } from "./baseUrl";

const posts = {
    async products(token) {
        const data = await fetch(`${baseUrl}/variations`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        })
        return data

    }
}

export default posts