import { Cliente } from '../models/cliente';
import { Consulta } from '../models/consulta';
import { DetalleVentaLente } from '../models/detalle_venta';
import { FormulaOptica } from '../models/formula';
import { Lente } from '../models/lente';
import { Venta } from '../models/venta';
import { faker } from '@faker-js/faker';


async function createFakeData() {
    // Crear clientes falsos
    for (let i = 0; i < 10; i++) {
        await Cliente.create({
            nombre: faker.person.fullName(),
            documento: faker.string.numeric(10),
            telefono: faker.phone.number(),
            correo: faker.internet.email(),
            direccion: faker.location.streetAddress(),
        });
    }

    // Crear consultas falsas
    const clientes = await Cliente.findAll();
    for (let i = 0; i < 10; i++) {
        await Consulta.create({
            fechaConsulta: faker.date.past(),
            motivo: faker.lorem.sentence(),
            diagnostico: faker.lorem.words(3),
            observaciones: faker.lorem.paragraph(),
            clienteId: clientes[faker.number.int({ min: 0, max: clientes.length - 1 })].id
        });
    }

    // Crear fórmulas ópticas falsas
    const consultas = await Consulta.findAll();
    for (let i = 0; i < 10; i++) {
        await FormulaOptica.create({
            ojoDerEsfera: faker.string.alpha(3),
            ojoDerCilindro: faker.string.alpha(3),
            ojoDerEje: faker.string.numeric(3),
            ojoIzqEsfera: faker.string.alpha(3),
            ojoIzqCilindro: faker.string.alpha(3),
            ojoIzqEje: faker.string.numeric(3),
            consultaId: consultas[faker.number.int({ min: 0, max: consultas.length - 1 })].id
        });
    }

    // Crear lentes falsos
    const lente = await Consulta.findAll();
    for (let i = 0; i < 10; i++) {
        await Lente.create({
            nombrecomercial: faker.string.alpha(3),
            tipoLente: faker.string.alpha(3),
            material: faker.string.numeric(3),
            color: faker.string.alpha(3),
            precioUnitario: Number(faker.commerce.price()),
        });
    }

    // Crear ventas falsas
    const venta = await Consulta.findAll();
    for (let i = 0; i < 10; i++) {
        await Venta.create({
            fechaVenta: faker.date.past(),
            totalVenta: Number(faker.commerce.price()),
            formaPago: faker.string.alpha(3),
            consultaId: consultas[faker.number.int({ min: 0, max: consultas.length - 1 })].id
        });
    }

    // Crear detalles de ventas de lentes falsos
    for (let i = 0; i < 10; i++) {
        await DetalleVentaLente.create({
            cantidad: faker.number.int({ min: 1, max: 5 }),
            subtotal: Number(faker.commerce.price()),
            idVenta: faker.number.int({ min: 1, max: 10 }),
            idLente: faker.number.int({ min: 1, max: 10 }),
        });
    }
}

createFakeData().then(() => {
    console.log('Datos falsos creados exitosamente');
}).catch((error) => {
    console.error('Error al crear datos falsos:', error);
});
