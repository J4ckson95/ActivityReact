import React, { useState, useEffect } from 'react';

const formInitial = {
    name: "",
    quirk: "",
    id: null

}

const FormCrud = ({ createProfile, editProfile, profileToEdit, setProfileToEdit }) => {
    const [form, setForm] = useState(formInitial);

    useEffect(() => {
        console.log(profileToEdit);
        if (profileToEdit) {
            setForm(profileToEdit)
        } else {
            setForm(formInitial)
        }
    }, [profileToEdit]);

    const HandleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.quirk) {
            alert("Datos incompletos")
            return
        }
        if (form.id === null) {
            createProfile(form)
        } else {
            editProfile(form)
        }
        HandleReset();
    }
    const HandleReset = () => {
        setForm(formInitial)
        setProfileToEdit(null)

    }
    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={HandleSubmit}>
                <input type='text' name='name' placeholder='Nombre' onChange={HandleChange} value={form.name} ></input>
                <input type='text' name='quirk' placeholder='Poder' onChange={HandleChange} value={form.quirk}></input>
                <input type='submit' value="Enviar"></input>
                <input type='reset' value="Resetear" onClick={HandleReset}></input>
            </form>
        </div>
    );
}
export default FormCrud