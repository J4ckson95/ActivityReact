import React from 'react';

const TableRowCrud = ({ data, setProfileToEdit, delateProfile }) => {
    let { id, name, quirk } = data
    return (
        <tr>
            <td>{name}</td>
            <td>{quirk}</td>
            <td>
                <button onClick={() => setProfileToEdit(data)}>Editar</button>
                <button onClick={() => delateProfile(id)}>Eliminar</button>
            </td>
        </tr>
    );
}
export default TableRowCrud;