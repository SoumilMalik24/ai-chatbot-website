import CompanionCard from "./CompanionCard";

const companions = [
    {
        name: "Raghav",
        role: "Tech Enthusiast",
        bio: "Loves exploring gadgets and coding hacks.",
        avatar: "avatars/raghav.jpg",
        highlight: true,
    },
    {
        name: "Muskan",
        role: "Motivator",
        bio: "Always ready with positive energy to cheer you up.",
        avatar: "/avatars/muskan.jpg",
        highlight: true,
    },
    {
        name: "Aarav",
        role: "Creative Thinker",
        bio: "Enjoys brainstorming ideas and solving problems creatively.",
        avatar: "/avatars/aarav.jpg",
        highlight: true,
    },
    {
        name: "Simran",
        role: "Good Listener",
        bio: "Here to listen and support you whenever needed.",
        avatar: "/avatars/simran.jpg",
        highlight: true,
    },
];

export default function CompanionGrid(){
    return(
        <section id="friends" className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-display text-white text-center mb-12">
                Choose Your AI Companion
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {companions.map((c, i) => (
                    <CompanionCard key={i} {...c} />
                ))}
            </div>
        </section>
    );
}