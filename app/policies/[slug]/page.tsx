import { notFound } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { POLICIES, type PolicySlug } from "@/lib/policies";

export function generateStaticParams() {
  return Object.keys(POLICIES).map((slug) => ({ slug }));
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = POLICIES[slug as PolicySlug];
  if (!policy) notFound();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="max-w-[720px] mx-auto px-6 py-16 md:py-20">
        <a href="/" className="text-[12.5px] text-gold font-semibold hover:underline">
          ← Back to Shop
        </a>
        <h1 className="font-heading font-medium text-[36px] md:text-[44px] mt-4 mb-1.5">{policy.title}</h1>
        <p className="text-[12px] text-[#9b9188] mb-9">{policy.updated}</p>

        <div className="flex flex-col gap-4">
          {policy.body.map((paragraph, i) => (
            <p key={i} className="text-[14.5px] text-[#5c5650] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
