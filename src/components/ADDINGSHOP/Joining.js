import React, { useState, useEffect } from 'react';
import {
    Container, Typography, Grid, TextField, Button, Checkbox,
    FormControlLabel, FormGroup, FormControl, FormLabel, LinearProgress,
    Stepper, Step, StepLabel, Box
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const steps = ['Owner Details', 'Bike Service Details', 'Review & Submit'];
const productOptions = ['Bike Service', 'Car Service', 'Scooter Service', 'Other'];

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        ownerName: '', mobileNumber: '', email: '', aadharNumber: '',
        productTypes: [], agreeTerms: false, bikeServiceImages: [],
        bikeServiceName: '', bikeServiceAddress: ''
    });

    const [activeStep, setActiveStep] = useState(0);
    const [errors, setErrors] = useState({});
    const [completedSteps, setCompletedSteps] = useState([false, false, false]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;

        if (type === 'checkbox') {
            if (name === 'productTypes') {
                setFormData(prevData => ({
                    ...prevData,
                    productTypes: checked
                        ? [...prevData.productTypes, value]
                        : prevData.productTypes.filter(item => item !== value)
                }));
            } else if (name === 'agreeTerms') {
                setFormData({ ...formData, agreeTerms: checked });
            }
        } else if (name === 'bikeServiceImages') {
            setFormData({ ...formData, [name]: files });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateStep = (step) => {
        let newErrors = {};
        switch (step) {
            case 0:
                if (!formData.ownerName) newErrors.ownerName = "Owner Name is required.";
                if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile Number is required.";
                if (!formData.email) newErrors.email = "Email is required.";
                if (!formData.aadharNumber) newErrors.aadharNumber = "Aadhar Number is required.";
                break;
            case 1:
                if (!formData.productTypes.includes('Bike Service')) newErrors.bikeService = "Bike Service must be selected.";
                if (!formData.bikeServiceName) newErrors.bikeServiceName = "Bike Service Name is required.";
                if (!formData.bikeServiceAddress) newErrors.bikeServiceAddress = "Bike Service Address is required.";
                if (formData.bikeServiceImages.length === 0) newErrors.bikeServiceImages = "At least one bike service image is required.";
                break;
            case 2:
                if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions.";
                break;
            default:
                break;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateStep(activeStep)) {
            if (activeStep < steps.length - 1) {
                setActiveStep(prevStep => prevStep + 1);
            } else {
                // Final step - handle form submission
                console.log('Submitting form:', formData);

                // Save form data to local storage
                const savedData = JSON.parse(localStorage.getItem('bikeServiceCenters')) || [];
                savedData.push(formData);
                localStorage.setItem('bikeServiceCenters', JSON.stringify(savedData));

                // Redirect to the /home page
                navigate('/home');
            }
        }
    };

    const handleNext = () => {
        if (validateStep(activeStep)) {
            setActiveStep(prevStep => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(prevStep => prevStep - 1);
        }
    };

    useEffect(() => {
        const newCompletedSteps = [false, false, false];

        // Section 1 (Owner Details)
        newCompletedSteps[0] = formData.ownerName && formData.mobileNumber && formData.email && formData.aadharNumber;

        // Section 2 (Bike Service Details)
        newCompletedSteps[1] = formData.productTypes.includes('Bike Service') &&
            formData.bikeServiceName && formData.bikeServiceAddress && formData.bikeServiceImages.length > 0;

        // Section 3 (Review & Submit)
        newCompletedSteps[2] = formData.agreeTerms;

        setCompletedSteps(newCompletedSteps);
    }, [formData]);

    return (
        <Container maxWidth="md" style={{ marginTop: 20 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Register your Bike Service Center
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel
                            optional={completedSteps[index] && <CheckCircleIcon color="success" />}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box my={2}>
                <LinearProgress
                    variant="determinate"
                    value={(completedSteps.filter(Boolean).length / steps.length) * 100}
                />
            </Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    {activeStep === 0 && (
                        <>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Owner Name"
                                    name="ownerName"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                    error={!!errors.ownerName}
                                    helperText={errors.ownerName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    type="tel"
                                    label="Mobile Number"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    error={!!errors.mobileNumber}
                                    helperText={errors.mobileNumber}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    type="email"
                                    label="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Aadhar Number"
                                    name="aadharNumber"
                                    value={formData.aadharNumber}
                                    onChange={handleChange}
                                    error={!!errors.aadharNumber}
                                    helperText={errors.aadharNumber}
                                />
                            </Grid>
                        </>
                    )}
                    {activeStep === 1 && (
                        <>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">What kinds of products are included in your repair services?</FormLabel>
                                    <FormGroup>
                                        {productOptions.map(option => (
                                            <FormControlLabel
                                                control={<Checkbox checked={formData.productTypes.includes(option)} onChange={handleChange} name="productTypes" value={option} />}
                                                label={option}
                                                key={option}
                                            />
                                        ))}
                                    </FormGroup>
                                </FormControl>
                                {errors.productTypes && <Typography color="error">{errors.productTypes}</Typography>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Bike Service Name"
                                    name="bikeServiceName"
                                    value={formData.bikeServiceName}
                                    onChange={handleChange}
                                    error={!!errors.bikeServiceName}
                                    helperText={errors.bikeServiceName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Bike Service Address"
                                    name="bikeServiceAddress"
                                    value={formData.bikeServiceAddress}
                                    onChange={handleChange}
                                    error={!!errors.bikeServiceAddress}
                                    helperText={errors.bikeServiceAddress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleChange}
                                    name="bikeServiceImages"
                                    id="bikeServiceImages"
                                />
                                {errors.bikeServiceImages && <Typography color="error">{errors.bikeServiceImages}</Typography>}
                            </Grid>
                        </>
                    )}
                    {activeStep === 2 && (
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox checked={formData.agreeTerms} onChange={handleChange} name="agreeTerms" />}
                                label="I agree to the terms and conditions."
                            />
                            {errors.agreeTerms && <Typography color="error">{errors.agreeTerms}</Typography>}
                        </Grid>
                    )}
                </Grid>
                <Box mt={3} display="flex" justifyContent="space-between">
                    {activeStep > 0 && (
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default UserRegistration;
