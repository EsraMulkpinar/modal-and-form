"use client";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Modal from "@/components/Modal";
import { useState, useEffect } from "react";
import { ParticipantFormData } from "@/types/formTypes";

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

  return (
    <div className="flex flex-col gap-6 bg-white rounded-2xl px-10 py-6 w-1/2 shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Add Participant</h2>
        <Button onClick={() => setIsModalOpen(true)} variant="primary">
          {isEditMode ? "Edit" : "Add"}
        </Button>
      </div>

      {savedData && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-md font-semibold">Preview:</h3>
          <p><strong>Email:</strong> {savedData.email}</p>
          <p><strong>Name:</strong> {savedData.firstName} {savedData.lastName}</p>
          <p><strong>Address:</strong> {savedData.address}, {savedData.city}, {savedData.country}</p>
          <p><strong>Phone:</strong> {savedData.phoneNumber}</p>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Participant Info"
      >
        <Form defaultValues={savedData || undefined} onSubmit={handleSave} />
      </Modal>
    </div>
  );
}
