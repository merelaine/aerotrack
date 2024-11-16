class AirportService{

    constructor(url)
    {
        this.url = url
    }


   async getAll()
    {
        const response = await axios.get(this.url)
    }


}



const air = new AirportService('/airports')