import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Promo = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image src="/unlimited.svg" alt="Pro" height={26} width={26} />

          <h3 className="text-lg font-bold">Upgrade to Pro</h3>
        </div>

        <p className="text-muted-foreground">Get unlimited hearts and more!</p>
      </div>

      <Button className="w-full bg-emerald-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200" size="lg" asChild>
        <Link href="/shop">Upgrade today</Link>
      </Button>
    </div>
  );
};
