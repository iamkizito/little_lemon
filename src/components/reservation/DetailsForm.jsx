import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { FormControl, FormLabel, FormErrorMessage, Select, Input, Button} from "@chakra-ui/react";



const DetailsForm = ({formData, setFormData, setStep}) => {
    const occasions = ['birthday', 'wedding', 'other']
    const {availableTimes, loading, error} = useAvailableTimes(new Date().toISOString().split('T')[0])

    const formik = useFormik({
        initialValues: {
            date: formData.date ? formData.date : new Date().toISOString().split('T')[0], 
            time: formData.time ? formData.time : '', 
            guest: formData.guest ? formData.guest : '1', 
            occasion: formData.occasion ? formData.occasion : '',
        },
        onSubmit: (values) => {
            setFormData(values)
            setStep(currentStep => currentStep + 1)
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Date Required"), 
            time: Yup.string().required("Time Required").oneOf(availableTimes, 'Invalid time selected'), 
            guest: Yup.number().required("Guest Required").min(1, 'At least one guest must be selected').max(10, 'Maximum of 10 guests allowed'), 
            occasion: Yup.string().required("Occasion Required").oneOf(occasions, 'Invalid occasion')
        }),
    });

    

    return (
        <form id="details_form" action=""  onSubmit={formik.handleSubmit} data-testid="details_form_component">

            <FormControl className="form_control" isInvalid={formik.touched.date && formik.errors.date}>
                <FormLabel htmlFor="date">Select a Date</FormLabel>
                <Input type="date" name="date" id="date" data-testid="date" value={formik.values.date} onChange={formik.handleChange}/>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.time && formik.errors.time}>
                <FormLabel htmlFor="time">Select preferred time</FormLabel>
                <Select name="time" id="time" data-testid="time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    <option value=""></option>
                    {availableTimes.map((availableTime, index) => {
                        return (
                            <option key={index} value={availableTime}>{availableTime}</option>
                        )
                    })}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.guest && formik.errors.guest}>
                <FormLabel htmlFor="guest">Number of guests</FormLabel>
                <Input type="number" name="guest" id="guest" data-testid="guest" min={1} max={10} value={formik.values.guest} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                <FormErrorMessage>{formik.errors.guest}</FormErrorMessage>
            </FormControl>

            <FormControl className="form_control" isInvalid={formik.touched.occasion && formik.errors.occasion}>
                <FormLabel htmlFor="occasion">Select Occasion</FormLabel>
                <Select name="occasion" id="occasion" data-testid="occasion" value={formik.values.occasion} onChange={formik.handleChange}  onBlur={formik.handleBlur}>
                    <option value=""></option>
                    {occasions.map((occasion, index) => {
                        return (
                            <option key={index} value={occasion}>{occasion[0].toUpperCase() + occasion.slice(1).toLowerCase()}</option>
                        )
                    })}
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>

            <div className="buttons">
                <Button className="button" type="submit" data-testid="submit">Next</Button>
            </div>

        </form>
    )
}

export default DetailsForm;





export const useAvailableTimes = (date) => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getAvailableTimes = () => {
            setLoading(true);
            setTimeout(() => {
                setAvailableTimes(['17:00', '18:00', '19:00']);
                setLoading(false);
            }, 1000);
        };

        getAvailableTimes();
    }, [date]);

    return {availableTimes, loading, error}
}
