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
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../assets/styles/registerPage.css'

const RegisterPage = () => {

    return (
        <Main id="register_page" data-testid="register_page_component">                
            <SectionContainer className="container">
                <div className="form_area">
                    <div className="title">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <h1>Sign Up</h1>
                    </div>
                    <RegisterForm/>
                    <div className="login_redirect">
                        <Link to={paths.login}>Already have an Acccount? Login</Link>
                    </div>
                </div>
            </SectionContainer>              
        </Main>
    )
}

export default RegisterPage;


const RegisterForm = () => {

    const [formData, setFormData] = useState(null)

    const {response, loading, error} = useSubmitData(formData)
    const navigate = useNavigate()
    const toast = useToast()

    useEffect(() => {
        if (response == null) {
            return
        }
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        navigate(paths.login)
    }, [response])

    const formik = useFormik({
        initialValues: {  
            email: '', 
            password: '', 
            confirmPassword: '', 
            terms: false,
        },
        onSubmit: (values) => {
            setFormData(values)
            formik.resetForm()
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is Required").email('Invalid email address'), 
            password: Yup.string().required("Password is Required").min(8, 'minimum of 8 characters'), 
            confirmPassword: Yup.string().required("Confirm Password is Required").oneOf([Yup.ref('password')], "passwwords does not match"),
            terms: Yup.bool(),
        }),
    });

    return (
        <form action="" id="register_form" onSubmit={formik.handleSubmit} data-testid="register_form_component">

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

            <FormControl className="form_control" isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}>
                <FormLabel htmlFor="confirmPassword">Confirm Password {formik.getFieldMeta('confirmPassword').required && <span>*</span>}</FormLabel>
                <Input type="password" name="confirmPassword" id="confirmPassword" data-testid="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.terms && formik.errors.terms}>
                <Checkbox id="terms" data-testid="terms" isChecked={formik.values.terms} onChange={formik.handleChange}>
                    Accept Terms and Conditions {formik.getFieldMeta('terms').required && <span>*</span>}
                </Checkbox>
                <FormErrorMessage>{formik.errors.terms}</FormErrorMessage>
            </FormControl>

            <Button className="button" type="submit" data-testid="submit" disabled={loading}>
                {loading && <Spinner/>} Register
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
                    message: 'Account created'
                })
                setLoading(false)
            }, 2000)
        }
        postData()
    }, [formData])

    return {response, loading, error}
}