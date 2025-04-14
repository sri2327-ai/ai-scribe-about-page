
import type { Metadata } from "next";
import Privacy from "@/components/Privacy/Section1";

export const metadata: Metadata = {
  title: "S10.AI Privacy Policy",
  description: "Privacy",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Privacy />
    </main>
  );
}
