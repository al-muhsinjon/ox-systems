import { baseUrl } from "./baseUrl";

const posts = {
    async products() {
        const data = await fetch(`${baseUrl}/variations`, {
            method: "GET",
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODA0MDA4MzUsImV4cCI6MTY4MTQzNzYzNSwicm9sZXMiOlt7fV0sImlkIjoxMTcyMTF9.cD3DBTEyXrdrVZpKHtekC3OtnQVaBOk2F9asbqrG0FG5FBC6mbykqa1ketaCFYdxw37tcx70W_am6TCJhHk5Ok__pn3zZlQaLJvLIIjtpk3XFiwzNhvh0y3B9XgOS3BGle9Z4C1p7lA9H4obWnRTEgIiW2IsAHA0jSMIuNk2fEi_Uf2FX1J4JT3WaJqK6mwMz9BrN1dxVUM8Thx85R9uKhQxMjjwM3SXwA66mTb-zWelIsS0lSIRnnRYb4Px8jneskrVnjj4DUAB4Mx5af2zr6VsVGTUZ75s0KPzeQ-Jbe9pBbhWu9HKIrQSFB3daFKbPiI3a9RFvrfgnH7450otbHfbQ982ilYCK4nf8CuZ0pjdJKUfYi8VU9zvhKutm3lO3HcPwGVVi_BPdczczHkKywNgQ1_ghAdquStmFtlT3tXToQCP6Cb3eDpiRQojuEO978rkEfKhvGufZrHe0kUfVIM8k_U3CJ2VJO0bRuqRl4jcCBn7TKphfLEAq3bKyde00_zahojQa3XGy9C9X6nSHatWY4sxRJdmoWZmVn-zryhRH5SSKp_K-gebMzHP5boz_AkCvzwxBpYi4d3LbCF7xSwPBbIWQg4EaLwC_oR2BFUcCpFtO_eoRNAWOh-uGKizLSgXhcEv7_LIA0fWs1IqtKk5e6oICWgYI7v8Pwbf-G4`,
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        })
        return data

    }
}

export default posts