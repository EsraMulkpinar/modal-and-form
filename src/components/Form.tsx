"use client";
import { useForm } from "react-hook-form";
import { ParticipantFormData, FormProps } from "@/types/formTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { schema } from "@/lib/validation";

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
        </div>
        <div className="flex-col gap-3 text-primary text-lg font-semibold px-4 py-6">Informationen für Zertifikatskurse erforderlich</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Certificate Email" {...register("certificateEmail")} error={errors.certificateEmail?.message} />
        <Input label="Certificate Salutation" {...register("certificateSalutation")} error={errors.certificateSalutation?.message} />
        <Input label="Certificate First Name" {...register("certificateFirstName")} error={errors.certificateFirstName?.message} />
      </div>
      <div className="flex items-center p-4">
        <input  className=" border-secondary w-5 h-5 rounded" type="checkbox" {...register("newsletter")} />
        <label htmlFor="newsletter" className="mx-2 text-secondary text-lg font-fontLato" >Also follow techtrain Newsletter.</label>
      </div>
      <div className="flex justify-start">
        <Button onClick={() => {}} variant="secondary" type="submit">Save</Button>
      </div>
    </form>
  );
}
