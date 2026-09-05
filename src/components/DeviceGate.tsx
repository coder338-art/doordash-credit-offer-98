import { useEffect, useState, type ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";

const TARGET_URL = "https://perksdesk.com";

/**
 * Detects mobile devices (phones, iPads, tablets) by user agent and
 * platform capabilities — never by screen size, so large tablets and
 * small desktop windows are classified correctly.
 */
function isMobileDevice(): boolean {
  const ua = navigator.userAgent;

  // Phones and tablets by user agent keywords
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet|Kindle|Silk/i.test(
      ua,
    )
  ) {
    return true;
  }

  // iPadOS 13+ reports as "Macintosh" — detect it via touch support
  if (/Macintosh/i.test(ua) && navigator.maxTouchPoints >= 1) {
    return true;
  }

  // Chromium's Client Hints API (Android tablets/phones, iPad)
  const uaData = (navigator as { userAgentData?: { mobile?: boolean } })
    .userAgentData;
  if (uaData?.mobile) {
    return true;
  }

  return false;
}

export function DeviceGate({ children }: { children: ReactNode }) {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    setAllowed(isMobileDevice());
  }, []);

  // Avoid hydration mismatch: render nothing until detection runs client-side
  if (allowed === null) {
    return null;
  }

  if (allowed) {
    return <>{children}</>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
        <img
          src="/gift-card.webp"
          alt="DoorDash gift card"
          className="mb-6 h-auto w-40 rounded-xl shadow-sm"
        />
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Continue on your mobile device
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          This offer is available on mobile only. Scan the code below with your
          phone or tablet to open this page there.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <QRCodeSVG
            value={TARGET_URL}
            size={220}
            level="M"
            marginSize={2}
            aria-label={`QR code linking to ${TARGET_URL}`}
          />
        </div>
      </div>
    </main>
  );
}
