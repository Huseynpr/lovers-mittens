import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

export default function TrackOrderPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="max-w-[720px] mx-auto px-6 py-16 md:py-20">
        <a href="/" className="text-[12.5px] text-gold font-semibold hover:underline">
          ← Back to Shop
        </a>
        <h1 className="font-heading font-medium text-[36px] md:text-[44px] mt-4 mb-1.5">Track Your Order</h1>
        <p className="text-[12px] text-[#9b9188] mb-9">Last updated November 2026</p>

        <div className="flex flex-col gap-4">
          <p className="text-[14.5px] text-[#5c5650] leading-relaxed">
            Once your order ships, we email you a tracking number and link automatically — no account or sign-in
            needed. Check your inbox (and spam folder) for a message from hello@loversmittens.com.
          </p>
          <p className="text-[14.5px] text-[#5c5650] leading-relaxed">
            You can also look up your tracking number directly at{" "}
            <a href="https://www.17track.net" target="_blank" rel="noopener noreferrer" className="text-gold font-semibold hover:underline">
              17track.net
            </a>{" "}
            — it works with every carrier we use and shows the full delivery journey in one place.
          </p>
          <div className="flex items-center gap-2.5 bg-gold/10 border border-gold/30 rounded-2xl px-4 py-3.5 mt-2">
            <Icon name="shipping" size={18} className="text-evergreen shrink-0" />
            <p className="text-[13.5px] text-[#5c5650] m-0">
              Haven&apos;t received a tracking number within 2 business days of ordering? Email{" "}
              <a href="mailto:hello@loversmittens.com" className="text-evergreen font-semibold hover:underline">
                hello@loversmittens.com
              </a>{" "}
              with your order number and we&apos;ll look into it right away.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
