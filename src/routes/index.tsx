import { createFileRoute } from "@tanstack/react-router";
import giftCardAsset from "../assets/gift-card.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "$500 DoorDash Credit Offer" },
      {
        name: "description",
        content:
          "Complete a few simple steps to participate and receive a $500 DoorDash credit once verified. Available in selected countries.",
      },
      { property: "og:title", content: "$500 DoorDash Credit Offer" },
      {
        property: "og:description",
        content:
          "Complete a few simple steps to participate and receive a $500 DoorDash credit once verified.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const steps = [
  "Click the button below",
  "Enter your email & basic info",
  "Complete 3 to 5 required deals",
  "Receive your reward once verified",
];

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-6 sm:px-8">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
        <div className="w-full max-w-[200px]">
          <img
            src={giftCardAsset.url}
            alt="Gift card illustration"
            width={351}
            height={241}
            className="h-auto w-full"
            loading="eager"
          />
        </div>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Get a $500 DoorDash Credit
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Complete the steps below to participate and receive your reward once
          verified.
        </p>

        <ol className="mt-4 w-full space-y-2 text-left">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <span className="pt-0.5 text-sm leading-snug text-card-foreground">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <a
          href="https://linkthem.net/aff_c?offer_id=455&aff_id=177168"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Get Started
        </a>

        <p className="mt-3 text-xs text-muted-foreground">
          Available in selected countries - US, UK, AU, CA
        </p>

        <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
          This promotion is not affiliated with or endorsed by DoorDash unless
          otherwise stated by the offer provider.
        </p>
      </div>
    </main>
  );
}
