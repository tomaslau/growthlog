
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { PoweredBy } from "@/components/logos/PoweredBy";

export default function Home() {
  return (
    <div>
      <MarketingTopNav />
      <main>
        <PoweredBy />
      </main>
      <MarketingFooter />
    </div>
  );
}
