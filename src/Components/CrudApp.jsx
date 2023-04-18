import React, { useState } from 'react';
import FormCrud from './FormCrud';
import TableCrud from './TableCrud';

const DB = [{
    id: 1, name: "Todoroki Enji", quirk: "Hell Flame"
}, {
    id: 2, name: "Hakamada Tsunagu", quirk: "Fiber Master"
}, {
    id: 3, name: "Toyomitsu Taishirō", quirk: "Absorción de grasa"
}, {
    id: 4, name: "Haimawari Kōichi", quirk: "Deslizamiento"
}, {
    id: 5, name: "Oguro Iwao", quirk: "Overclock"
}]

const CrudApp = () => {
    const [data, setData] = useState(DB);
    const [profileToEdit, setProfileToEdit] = useState(null);

    const createProfile = (profile) => {
        profile.id = Date.now()
        setData([...data, profile])

    }
    const editProfile = (data) => { }
    const delateProfile = (id) => { }
    return (
        <div>
            <h2>Crud App</h2>
            <FormCrud createProfile={createProfile} editProfile={editProfile} profiletoedit={profileToEdit} setProfiletoEdit={setProfileToEdit}></FormCrud>
            <TableCrud data={data} delateProfile={delateProfile} setProfileToEdit={setProfileToEdit}></TableCrud>
        </div>
    );
}

export default CrudApp;