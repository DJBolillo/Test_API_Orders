const axios = require('axios');

const applyOrderDiscount = async (orderId, codigo, porcentaje, vigencia) => {
    try {
        const response = await axios.put(`https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${orderId}/descuento`, 
        { 
            cupón: { 
                codigo, 
                porcentaje, 
                vigencia 
            } 
        }, 
        {
            headers: { 'Content-Type': 'application/json' }
        });
        // Mostrar que detalles que el descuento fue aplicado correctamente
        console.log("Descuento aplicado exitosamente:", response.data);
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        // Mostrar los diferentes tipos de errores que puedan pasar
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

// Aplicar un descuento del 100% (Ojala encontrar esas ofertas ) a una orden
applyOrderDiscount("QSarC37AuQ9KQZ5BykoL", "OFERTA100", 100, "2025-03-20");
