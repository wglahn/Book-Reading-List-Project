import React, {useState, useContext} from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from "../components/Button";
import TextField from '@mui/material/TextField';
import { AppContext } from '../context/AppContext' 
// import { CancelToken } from 'apisauce';
// import { postUser } from '../api/apiUser';
// import { putUser } from '../api/apiUser';
import useRegisterUser from '../hooks/useRegisterUser'
import useDeleteUser from '../hooks/useDeleteUser';

const FormSchema = Yup.object({
    first_name:Yup.string().required("Required"),
    last_name:Yup.string().required("Required"),
    email: Yup.string().email("Must be a valid e-mail format").required(),
    password: Yup.string().required()
})

export default function RegisterForm() {
    const [formData, setFormData] = useState({})
    const [deleteUser, setDeleteUser] = useState({})
    const {user} = useContext(AppContext)
    
    const initialValues={
        first_name:user?.first_name ?? '',
        last_name:user?.last_name ?? '',
        email:user?.email ?? '',
        password:user?.password ?? ''
        
    }
    
    useRegisterUser(formData, user?.token??'')
    useDeleteUser(deleteUser)

    const handleSubmit=async (values)=>{
        setFormData(values);
    }

    const handleDelete=()=>{
        setDeleteUser(formData)
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true

    })

  return (
    <form onSubmit={formik.handleSubmit}>
    <TextField
        fullWidth
        id="first_name"
        name="first_name"
        type="text"
        sx={{ mb: 2, mt: 2 }}
        label="First Name"
        placeholder="First Name"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
        helperText={formik.touched.first_name && formik.errors.first_name}
    />
    <TextField
        fullWidth
        id="last_name"
        name="last_name"
        type="text"
        sx={{ mb: 2, mt: 2 }}
        label="Last Name"
        placeholder="Last Name"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
        helperText={formik.touched.last_name && formik.errors.last_name}
    />
    <TextField
        fullWidth
        id="email"
        name="email"
        type="email"
        sx={{ mb: 2, mt: 2 }}
        label="Email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
    />
    <TextField
        id="password"
        name="password"
        type="password"
        fullWidth
        sx={{mb:2}}
        label="Password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
    />

<Button type="submit" sx={{ width: "100%" }}>Submit</Button>
<Button color="error" onClick={()=>handleDelete()} sx={{width:"100%", my:1}}>Delete User</Button>

</form>
  )
}