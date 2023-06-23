const { Users } = require('../models');
const axios = require('axios');
const cheerio = require('cheerio');

class UserServices {
    
    static async getAll(){
        try {
            const respuesta = await axios.get('https://www.bcv.org.ve/');
        const html = respuesta.data;

    // Cargar el contenido HTML en Cheerio
        const $ = cheerio.load(html);

    // Extraer el valor del elemento con el id "dolar"
        const dolar = $('#dolar .centrado strong').text();
            console.log('El valor diario es:',dolar );
            const dolarp = dolar.replace(",", ".")
            const dolarf = Number(dolarp)
            const dolarfinish = {value: dolarf, name: dolar};

            return dolarfinish;

        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = UserServices;
