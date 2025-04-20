const sentence = "Learn languages faster, smarter, and fun with Learnify’s real-time practice system";

export default function AnimatedHeadline() {
  const words = sentence.split(" ");

  return (
    <h1 className="max-w-[480px] text-center animate-colorCycle text-xl font-bold text-cyan-800 lg:text-3xl">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fadeIn"
          style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
        >
          {word}&nbsp;
        </span>
      ))}
    </h1>
  );
}
