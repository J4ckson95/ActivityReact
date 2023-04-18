import React from 'react';
import TableRowCrud from './TableRowCrud';

const TableCrud = ({ data, setProfileToEdit, delateProfile }) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Poder</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length == 0 ? <tr> <td colSpan="3">Sin datos</td></tr> : data.map((element, index) => <TableRowCrud key={index} data={element} setProfileToEdit={setProfileToEdit} delateProfile={delateProfile} ></TableRowCrud>)}
                </tbody>
            </table>
        </div>
    );
}

export default TableCrud;