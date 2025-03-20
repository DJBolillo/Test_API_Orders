const axios = require('axios');

const getOrderShipping = async (orderId) => {
    try {
        const response = await axios.get(`https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${orderId}/envio`, {
            headers: { 'Content-Type': 'application/json' }
        });
        // Mostrar los detalles del envio en caso de exito
        console.log("Información de envío obtenida exitosamente:", response.data);
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        //Mostrar los errores
        if (error.response) {
            console.error("Error en la API:", error.response.data);
            console.error("Código de estado:", error.response.status);
        } else if (error.request) {
            console.error("No se recibió respuesta del servidor.");
        } else {
            console.error("Error inesperado:", error.message);
        }
    }
};

// Obtener datos de envio
getOrderShipping("5nwGN5JdZ5UwtXuLCiME");
