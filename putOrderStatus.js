const axios = require('axios');

const updateOrderShippingStatus = async (orderId, nuevoEstadoEnvio, ubicacionActual) => {
    try {
        const response = await axios.put(`https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${orderId}/status`, 
        { nuevoEstadoEnvio, ubicacionActual }, 
        {
            headers: { 'Content-Type': 'application/json' }
        });
        // Mostrar que los detalles del envio fueron modificados correctamente
        console.log("Estado de envío actualizado exitosamente:", response.data);
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        // Mostrar posibles errores en caso de ocurrencia
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

// Intentar poner de Pendiente a Entregado
updateOrderShippingStatus("QSarC37AuQ9KQZ5BykoL", "Entregado","Calle 20 Tepic");
