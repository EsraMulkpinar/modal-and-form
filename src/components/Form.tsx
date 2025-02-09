"use client";
import { useForm } from "react-hook-form";
import { ParticipantFormData, FormProps } from "@/types/formTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { schema } from "@/lib/validation";
import { useTranslations } from "next-intl";
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

  const t = useTranslations("");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label={t("email")} {...register("email")} error={errors.email?.message} />
        <Input label={t("salutation")} {...register("salutation")} error={errors.salutation?.message} />
        <Input label={t("firstName")} {...register("firstName")} error={errors.firstName?.message} />
        <Input label={t("lastName")} {...register("lastName")} error={errors.lastName?.message} />
        <Input label={t("address")} {...register("address")} error={errors.address?.message} />
        <Input label={t("postalCode")} {...register("postalCode")} error={errors.postalCode?.message} />
        <Input label={t("city")} {...register("city")} error={errors.city?.message} />
        <Input label={t("country")} {...register("country")} error={errors.country?.message} />
        <Input label={t("phoneNumber")} {...register("phoneNumber")} error={errors.phoneNumber?.message} />
        <Input label={t("mobileNumber")} {...register("mobileNumber")} error={errors.mobileNumber?.message} />
      </div>
      <div className="flex-col gap-3 text-primary text-lg font-semibold px-4 py-6">{t("certificateInfo")}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label={t("certificateEmail")} {...register("certificateEmail")} error={errors.certificateEmail?.message} />
        <Input label={t("certificateSalutation")} {...register("certificateSalutation")} error={errors.certificateSalutation?.message} />
        <Input label={t("certificateFirstName")} {...register("certificateFirstName")} error={errors.certificateFirstName?.message} />
      </div>
      <div className="flex md:items-center items-start p-4">
        <input className="border-secondary w-5 h-5 rounded" type="checkbox" {...register("newsletter")} />
        <label htmlFor="newsletter" className="mx-2 text-secondary text-lg font-fontLato">{t("newsletter")}</label>
      </div>
      <div className="flex justify-start">
        <Button onClick={() => {}} variant="secondary" type="submit">{t("save")}</Button>
      </div>
    </form>
  );
}
