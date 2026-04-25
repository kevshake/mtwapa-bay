import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button, Input, Label, SectionEyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Member Login — Mtwapa Bay",
  description: "Sign in to your Mtwapa Bay member account.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-dusk flex">
      {/* Left — branding panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 relative overflow-hidden p-12">
        <Image
          src="/hero-attachment.jpg"
          alt="Mtwapa Bay residence"
          fill
          className="object-cover object-center"
          sizes="50vw"
          priority
        />
        <div className="absolute inset-0 bg-dusk/70" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mtwapa Bay"
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="font-display text-xl text-white tracking-wide">
              Mtwapa Bay
            </span>
          </Link>
        </div>

        <div className="relative z-10">
          <p className="font-display text-3xl text-white leading-snug mb-4">
            Africa&apos;s Most Extraordinary
            <br />
            Private Residences
          </p>
          <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
            Member access to exclusive listings, private viewings, and
            advisory services across East Africa&apos;s most distinguished addresses.
          </p>
        </div>
      </div>

      {/* Right — login form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-20 bg-cream">
        {/* Mobile logo */}
        <div className="lg:hidden mb-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mtwapa Bay"
              width={52}
              height={52}
              className="object-contain"
            />
            <span className="font-display text-xl text-dusk tracking-wide">
              Mtwapa Bay
            </span>
          </Link>
        </div>

        <div className="max-w-sm w-full mx-auto">
          <SectionEyebrow className="mb-3">Members Portal</SectionEyebrow>
          <SectionHeading as="h1" size="sm" className="mb-8">
            Sign In
          </SectionHeading>

          <form className="space-y-5">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-dusk/50">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-ocean" />
                Remember me
              </label>
              <button type="button" className="hover:text-ocean transition-colors">
                Forgot password?
              </button>
            </div>

            <Button type="submit" variant="primary" className="w-full mt-2">
              Sign In
            </Button>
          </form>

          <p className="mt-10 text-xs text-dusk/40 leading-relaxed">
            Not a member?{" "}
            <Link href="/#contact" className="text-ocean hover:opacity-70 transition-opacity">
              Request access via our advisory team.
            </Link>
          </p>

          <div className="mt-8 pt-8 border-t border-sand">
            <Link
              href="/"
              className="text-[10px] tracking-[0.2em] uppercase text-mist hover:text-dusk transition-colors flex items-center gap-2"
            >
              <span>←</span> Back to Mtwapa Bay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
