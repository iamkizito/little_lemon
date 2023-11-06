import { useFormik } from "formik";
import * as Yup from 'yup';
import { FormControl, FormLabel, FormErrorMessage, Button, Input, Checkbox} from "@chakra-ui/react";


const PaymentForm = ({formData, setFormData, setStep, paths}) => {

    const handleBack = () => {
        setStep(currentStep => currentStep - 1)
        console.log('clicked')
    }

    const formik = useFormik({
        initialValues: {
            name: formData.name ? formData.name : '', 
            number: formData.number ? formData.number : '', 
            expiry: formData.expiry ? formData.expiry : '', 
            cvv: formData.cvv ? formData.cvv : '',
            remember: formData.remember ? formData.remember : false,
        },
        onSubmit: (values) => {
            setFormData(values)
            setStep(currentStep => currentStep + 1)
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Card Name Required"), 
            number: Yup.string().required("Card Number Required"), 
            expiry: Yup.string().required("Expiry date Required"), 
            cvv: Yup.string().required("CVV Required").min(3, 'minimum of 3 characters').max(5, 'maximum of 5 characters'),
            remember: Yup.bool(),
        }),
    });

    

    return (
        <form id="payment_form"  onSubmit={formik.handleSubmit} data-testid="payment_form_component">

            <FormControl className="form_control" isInvalid={formik.touched.name && formik.errors.name}>
                <FormLabel htmlFor="name">Card Name {formik.getFieldMeta('name').required && <span>*</span>}</FormLabel>
                <Input type="text" name="name" id="name" data-testid="name" value={formik.values.name} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.number && formik.errors.number}>
                <FormLabel htmlFor="number">Card Number {formik.getFieldMeta('number').required && <span>*</span>}</FormLabel>
                <Input type="text" name="number" id="number" data-testid="number" value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.expiry && formik.errors.expiry}>
                <FormLabel htmlFor="expiry">Expiry date {formik.getFieldMeta('expiry').required && <span>*</span>}</FormLabel>
                <Input type="date" name="expiry" id="expiry" data-testid="expiry" value={formik.values.expiry} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                <FormErrorMessage>{formik.errors.expiry}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.cvv && formik.errors.cvv}>
                <FormLabel htmlFor="cvv">CVV {formik.getFieldMeta('cvv').required && <span>*</span>}</FormLabel>
                <Input type="text" name="cvv" id="cvv" data-testid="cvv" value={formik.values.cvv} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                <FormErrorMessage>{formik.errors.cvv}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.remember && formik.errors.remember}>
                <Checkbox id="remember" data-testid="remember" isChecked={formik.values.remember} onChange={formik.handleChange}>
                    Remember {formik.getFieldMeta('remember').required && <span>*</span>}
                </Checkbox>
                <FormErrorMessage>{formik.errors.remember}</FormErrorMessage>
            </FormControl>

            <div className="buttons">
                <Button className="back button" data-testid="back" onClick={handleBack}>Back</Button>
                <Button className="next button" type="submit" data-testid="submit">Next</Button>
            </div>

        </form>
    )
}

export default PaymentForm;



