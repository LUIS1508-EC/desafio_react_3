import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Formulario = ({ colaboradores, setColaboradores, setAlerta }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    const nuevoId = () => {
        return colaboradores.length + 1
    }

    const enviar = (e) => {
        e.prevent.Default();

        if (nombre === '' || correo === '' || edad === '' || cargo === '' || telefono === '') {
            setAlerta({
                error: true,
                mensaje: 'Debes completar todos los campos',
                color: 'danger',

            })

        } else {
            setAlerta({
                error: true,
                mensaje: "Colabrorador agregado correctamente",
                color: "success",

            })
            setNombre("");
            setCorreo("");
            setEdad("");
            setCargo("");
            setTelefono("");
            const colaborador = { nombre, correo, edad, cargo, telefono };
            setColaboradores([...colaboradores, colaborador]);

        }
    };

    return (



        <Form onSubmit={enviar}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <input type="text" placeholder="Nombre del colaborador" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e) => setNombreCorreo(e.target.value)}></input>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <input type="number" placeholder="Edad del colaborador" value={edad} onChange={(e) => setEdad(e.target.value)}></input>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <input type="text" placeholder="Cargo del colaborador" value={cargo} onChange={(e) => setCargo(e.target.value)}></input>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <input type="text" placeholder="Teléfono del colaborador" value={telefono} onChange={(e) => setNombre(e.target.value)}></input>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Agregar Colaborador
            </Button>
        </Form>

    )
}

export default Formulario