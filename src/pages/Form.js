import React from 'react';
import { Grid, Typography, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';

const Form = (props) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        enableReinitialize: true,
        onSubmit: (values, { setSubmitting }) => {
            alert(JSON.stringify(values))
        }
    }
    )

    return (
        <Grid container style={{
            backgroundColor: 'white'
        }}>
            <Grid item xs={8} sm={6} md={4}
                style={{ textAlign: 'center', height: 'auto', border: '1px solid #000', borderRadius: '20px', margin: '20px auto', padding: '10px' }}
            >
                <Typography
                    variant="h1"
                    style={{ fontSize: 24, color: '#000000', marginBottom: 20 }}
                >
                    Login
                </Typography>

                <form>
                    <TextField
                        id="outlined-basic"
                        label="E-mail address"
                        variant="outlined"
                        style={{ marginBottom: 20 }}
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        style={{ marginBottom: 20 }}
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <br />
                    <Button onClick={() => props.userSearch(formik.values.email, formik.values.password)} variant="outlined" type="button" >Login</Button>
                </form>
            </Grid>
        </Grid>


    );
}
export { Form };