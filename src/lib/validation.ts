import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    salutation: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    address: yup.string().required("Required"),
    postalCode: yup.string().required("Required"),
    city: yup.string().required("Required"),
    country: yup.string().required("Required"),
    phoneNumber: yup.string().required("Required"),
    mobileNumber: yup.string().required("Required"),
    certificateEmail: yup.string().email("Invalid email").required("Required"),
    certificateSalutation: yup.string().required("Required"),
    certificateFirstName: yup.string().required("Required"),
  });
  