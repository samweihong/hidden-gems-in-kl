import { useState } from "react";

export default function QuestionBox({
  question,
  answers: [a1, a2, a3],
  correctAnswer,
  onComplete,
}) {
  const [message, setMessage] = useState("");

  function handleClick(answer) {
    return () => {
      if (message) return;
      if (answer === correctAnswer) setMessage("Correct!");
      else setMessage("Wrong answer. The answer should be " + correctAnswer);
      setTimeout(onComplete, 2500);
    };
  }

  return (
    <div className="h-[576px] w-[1024px] px-[200px] py-[100px]">
      <div className="h-full w-full rounded-3xl bg-red-100 p-8 text-center">
        <h1 className="mb-5 font-serif text-3xl">{question}</h1>
        <div className="flex flex-col gap-2">
          <div>
            <button
              className="rounded-md border-2 border-black bg-secondary-200 p-2 font-sans text-xl"
              onClick={handleClick("A")}
            >
              A. {a1}
            </button>
          </div>
          <div>
            <button
              className="rounded-md border-2 border-black bg-secondary-200 p-2 font-sans text-xl"
              onClick={handleClick("B")}
            >
              B. {a2}
            </button>
          </div>
          <div>
            <button
              className="rounded-md border-2 border-black bg-secondary-200 p-2 font-sans text-xl"
              onClick={handleClick("C")}
            >
              C. {a3}
            </button>
          </div>
          <p className="mt-2 font-serif text-xl">{message}</p>
        </div>
      </div>
    </div>
  );
}
