const axios = require('axios');

const getOrderDiscounts = async (orderId) => {
    try {
        const response = await axios.get(`https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${orderId}/descuentos`, {
            headers: { 'Content-Type': 'application/json' }
        });
        //Mostrar los descuentos encontrados
        console.log("Descuentos de la orden obtenidos exitosamente:", response.data);
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        //Mostrar los diferentes errores
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

// Obtener información de descuento de una orden
getOrderDiscounts("5nwGN5JdZ5UwtXuLCiME");
