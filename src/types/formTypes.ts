export interface ParticipantFormData {
    email: string;
    salutation: string;
    firstName: string;
    lastName: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    phoneNumber: string;
    mobileNumber: string;
    certificateEmail: string;
    certificateSalutation: string;
    certificateFirstName: string;
    newsletter?: boolean;
  }
  
export interface FormProps {
    defaultValues?: ParticipantFormData;
    onSubmit: (data: ParticipantFormData) => void;
  }