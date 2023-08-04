import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MWyaJjA3zry2dHwopOBgowpiLH5ShA-Ui44UWDrlJK9feyOFmY8ynInLRN9tyays_Ejjdyw4iRm1a-k5R69o8rEEs2-dh778OJzMhxghMEtasBMHOPmBYFRdBXrJZHYx'
    }
})



