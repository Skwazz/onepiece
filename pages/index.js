import Image from "next/image";

export default function Home() {
  return (
    <div>
      <body className="bg-cover bg-center h-screen ">
        <Image
          src="/logo_3.png"
          alt="picture of a card"
          width={400}
          height={20}
          className="flex mx-auto"
        />

        <h1 className="flex justify-center text-[2.5rem] mx-auto ">
          !ברוכים הבאים לאתר הוואן פיס של הציידים
        </h1>
        <p className="flex justify-center text-[2rem] mx-auto">
          !האתר כרגע בבנייה אבל מביא קצת משהו להראות לכם תודה רבה ליורה על הרקע
          המגניב
        </p>
      </body>
    </div>
  );
}
