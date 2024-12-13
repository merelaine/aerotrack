import axios from 'axios'

export class AirportService{

    constructor(url)
    {
        this.url = url
    }


   async getAll()
    {
        const response = await axios.get(this.url)
        return response
    }
}

