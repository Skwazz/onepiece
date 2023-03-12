import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-contain bg-center h-screen w-screen">
        <Image
          src="/logo_3.png"
          alt="picture of a card"
          width={400}
          height={20}
          className="flex mx-auto"
        />

        <div className="flex justify-center text-[2.5rem] mx-auto ">
          !ברוכים הבאים לאתר הוואן פיס של הציידים
        </div>
        <div className="flex justify-center text-[2rem] mx-auto">
          !האתר כרגע בבנייה אבל מביא קצת משהו להראות לכם תודה רבה ליורה על הרקע
          המגניב
        </div>
      </div>
    </div>
  );
}
