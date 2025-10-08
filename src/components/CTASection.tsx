// src/components/CTASection.tsx
import "../styles/globals.css";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div
        className="max-w-4xl mx-auto rounded-3xl p-16 text-center relative overflow-hidden border border-slate-800 shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,255,150,0.08), rgba(255,0,100,0.05))",
        }}
      >
        {/* soft background glow */}
        <div
          className="absolute inset-0 blur-3xl opacity-30 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(0,255,150,0.15), transparent 70%)",
          }}
        />

        {/* heading */}
        <h2 className="text-5xl md:text-6xl font-display font-bold text-white">
          Start Chatting Now
        </h2>

        {/* subtext */}
        <p className="mt-6 text-slate-300 max-w-xl mx-auto">
          Pick any AI companion above, or just dive right in and meet them all.
          Your next conversation is one click away.
        </p>

        {/* button */}
        <div className="mt-12">
          <button className="btn-neon text-lg font-semibold px-12 py-4 rounded-full">
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
}
