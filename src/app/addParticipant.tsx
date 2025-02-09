"use client";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Modal from "@/components/Modal";
import { useState, useEffect } from "react";
import { ParticipantFormData } from "@/types/formTypes";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "participantData";

export default function AddParticipant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [savedData, setSavedData] = useState<ParticipantFormData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      setSavedData(JSON.parse(storedData));
      setIsEditMode(true);
    }
  }, []);

  const handleSave = (data: ParticipantFormData) => {
    setSavedData(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setIsEditMode(true);
    setIsModalOpen(false);
  };
  const t = useTranslations("");
  return (
    <div className="flex flex-col gap-6 bg-white rounded-2xl px-10 py-6 w-full md:w-1/2 shadow-md">
      <div className="flex md:flex-row flex-col md:justify-between justify-start  md:items-center py-6">
        <h2 className="text-2xl font-semibold font-fontLato">
          {isEditMode ? t("edit") : t("add")} {t("participant")}
        </h2>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              setIsModalOpen(true);
              setIsEditMode(false);
            }}
            variant="primary"
          >
            {isEditMode ? t("edit") : t("add")}
          </Button>
        </div>
      </div>

      {savedData && (
        <div className="bg-gray-100 p-4 rounded-lg w-full">
          <h3 className="text-md font-semibold">{t("preview")}</h3>
          <p>
            <strong>{t("email")}:</strong> {savedData.email}
          </p>
          <p>
            <strong>{t("name")}:</strong> {savedData.firstName}{" "}
            {savedData.lastName}
          </p>
          <p>
            <strong>{t("address")}:</strong> {savedData.address},{" "}
            {savedData.city}, {savedData.country}
          </p>
          <p>
            <strong>{t("phone")}:</strong> {savedData.phoneNumber}
          </p>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t("title")}
      >
        <Form defaultValues={savedData || undefined} onSubmit={handleSave} />
      </Modal>
    </div>
  );
}
