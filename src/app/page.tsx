import AddParticipant from "./addParticipant";
import LanguageSwitcher from "@/components/LanguageSwitcher";
export default function Home() {
  return (
    <div className="">
        <LanguageSwitcher />
      <main className="min-h-screen flex items-center justify-center">
      <AddParticipant />
    </main>
    </div>
   
  );
}
