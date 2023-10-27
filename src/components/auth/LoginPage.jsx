import { useEffect, useState } from "react";
import { Input, FormControl, FormLabel, FormErrorMessage, Button, Checkbox } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import paths from "../../paths";
import { Link } from "react-router-dom";
import SectionContainer from "../SectionContainer";
import Main from "../Main";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../assets/styles/loginPage.css'

const LoginPage = ({setActive}) => {
    useEffect(() => {
        setActive('login')
    }, [])

    return (
        <Main id="login_page" data-testid="login_page_component">
            <SectionContainer className="container">
                <div className="form_area">
                    <div className="title">
                        <div className="icon">
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </div>
                        <h1>Log in to your Account</h1>
                    </div>
                    <LoginForm/>
                    <div className="register_redirect">
                        <Link to={paths.register}>Dont have an Acccount? Register</Link>
                    </div>
                </div>
            </SectionContainer>
        </Main>
        
    )
}

export default LoginPage;



const LoginForm = () => {

    const [formData, setFormData] = useState(null)

    const {response, loading, error} = useSubmitData(formData)
    const navigate = useNavigate()
    const toast = useToast()

    useEffect(() => {
        if (response == null) {
            return
        }
        toast({
            title: 'Login Successful',
            description: "You've been looged in successfully.",
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
        navigate(paths.home)
    }, [response])

    const formik = useFormik({
        initialValues: {  
            email: '', 
            password: '', 
        },
        onSubmit: (values) => {
            setFormData(values)
            formik.resetForm()
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is Required").email('Invalid email address'), 
            password: Yup.string().required("Password is Required").min(8, 'minimum of 8 characters'), 
        }),
    });

    return (
        <form action="" id="login_form"  onSubmit={formik.handleSubmit} data-testid="login_form_component">

            <FormControl className="form_control" isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email {formik.getFieldMeta('email').required && <span>*</span>}</FormLabel>
                <Input type="email" name="email" id="email" data-testid="email" value={formik.values.email} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.password && formik.errors.password}>
                <FormLabel htmlFor="password">Password {formik.getFieldMeta('password').required && <span>*</span>}</FormLabel>
                <Input type="password" name="password" id="password" data-testid="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Button className="button" type="submit" data-testid="submit" disabled={loading}>
                {loading && <Spinner/>} Log in
            </Button>
        </form>
    )
}
  


const useSubmitData = (formData) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (formData == null) {
            return
        }

        const postData = () => {
            setLoading(true)
            setTimeout(() => {
                setResponse({
                    status: 'success',
                    message: 'Login successful'
                })
                setLoading(false)
            }, 2000)
        }

        postData()
    }, [formData])

    return {response, loading, error}
}