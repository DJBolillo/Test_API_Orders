//Todo lo necesario para poder obtener todas las ordenes

//Utilizar la libreria de axios
const axios = require('axios')


const getOrders = async ()=> {
    try {
        //Get para poder obtener las ordenes
        const response = await axios.get('https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders');
        console.log(response.data); // Obtener la respuesta con los datos en consola
        console.log("Response code:"+response.status)//Mandar el codigo de respuesta a consola
    } catch (error) {
        console.log("Error inesperado ",error.message); //En caso de errores mostrar que ocurrió
        
    }
};

//Llamar la función con para obtener las ordenes
getOrders()

