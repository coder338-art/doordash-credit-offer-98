import { createFileRoute } from "@tanstack/react-router";
import giftCardImage from "../assets/gift-card.png";

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
    <main className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
        <div className="w-full max-w-[280px]">
          <img
            src={giftCardImage}
            alt="Gift card illustration"
            width={1024}
            height={1024}
            className="h-auto w-full"
            priority={true}
          />
        </div>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Get a $500 DoorDash Credit
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Complete the steps below to participate and receive your reward once
          verified.
        </p>

        <ol className="mt-8 w-full space-y-4 text-left">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <span className="pt-0.5 text-base leading-snug text-card-foreground">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <button
          type="button"
          className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Get Started
        </button>

        <p className="mt-4 text-sm text-muted-foreground">
          Available in selected countries - US, UK, AU, CA
        </p>

        <p className="mt-10 max-w-xs text-xs leading-relaxed text-muted-foreground">
          This promotion is not affiliated with or endorsed by DoorDash unless
          otherwise stated by the offer provider.
        </p>
      </div>
    </main>
  );
}
