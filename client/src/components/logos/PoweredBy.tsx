
import { cn } from "@/lib/utils";
import { BestWritingLogo, CraftledLogo } from "./index";

export function PoweredBy() {
  return (
    <div className="w-full py-12">
      <h3 className="text-center text-sm font-medium text-muted-foreground mb-8">
        Powering experiences for
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 px-6">
        <CraftledLogo className="h-5 w-auto" />
        <BestWritingLogo className="h-7 w-auto" />
      </div>
    </div>
  );
}
