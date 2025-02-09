"use client";

import { useForm } from "react-hook-form";
import { ParticipantFormData } from "@/types/formTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/Input";
import Button from "@/components/Button";

const schema = yup.object().shape({
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

interface FormProps {
  defaultValues?: ParticipantFormData;
  onSubmit: (data: ParticipantFormData) => void;
}

export default function Form({ defaultValues, onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ParticipantFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const newsletter = watch("newsletter");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="E-Mail Address" {...register("email")} error={errors.email?.message} />
        <Input label="Salutation" {...register("salutation")} error={errors.salutation?.message} />
        <Input label="First Name" {...register("firstName")} error={errors.firstName?.message} />
        <Input label="Last Name" {...register("lastName")} error={errors.lastName?.message} />
        <Input label="Address" {...register("address")} error={errors.address?.message} />
        <Input label="Postal Code" {...register("postalCode")} error={errors.postalCode?.message} />
        <Input label="City" {...register("city")} error={errors.city?.message} />
        <Input label="Country" {...register("country")} error={errors.country?.message} />
        <Input label="Phone Number" {...register("phoneNumber")} error={errors.phoneNumber?.message} />
        <Input label="Mobile Number" {...register("mobileNumber")} error={errors.mobileNumber?.message} />
        <Input label="Certificate Email" {...register("certificateEmail")} error={errors.certificateEmail?.message} />
        <Input label="Certificate Salutation" {...register("certificateSalutation")} error={errors.certificateSalutation?.message} />
        <Input label="Certificate First Name" {...register("certificateFirstName")} error={errors.certificateFirstName?.message} />
      </div>
      <div className="flex items-center mt-4">
        <input type="checkbox" {...register("newsletter")} />
        <label htmlFor="newsletter" className="ml-2">Also follow techtrain Newsletter.</label>
      </div>
      <Button onClick={() => {}} variant="primary" type="submit">Save</Button>
    </form>
  );
}
