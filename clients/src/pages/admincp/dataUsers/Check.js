import React from 'react';
import { useFormik } from 'formik';

function Check() {

    const formik = useFormik({
        initialValues: {
            username: "",
            email: ""
        }
    });

    const handleChangeEmail = e => {
        formik.setFieldValue("email",e.target.value);
        formik.errors.email = "121212";
    }
    console.log(formik);
    return (
        <div>
            <form>
                <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
                <input type="text" name="email" value={formik.values.email} onChange={handleChangeEmail} />
                <button>GUI</button>
            </form>
        </div>
    )
}

export default Check;
