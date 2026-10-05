import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;

  return (
    <div className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Eyebrow tone="on-light">Product Specification</Eyebrow>
          <h1 className="font-heading text-3xl sm:text-4xl text-[var(--color-green-900)] capitalize">
            {slug.replace(/-/g, " ")}
          </h1>
          <p className="text-base text-[var(--color-ink-600)] leading-relaxed">
            This module is currently in active design and pilot validation. Full product documentation and dashboard access will launch alongside our upcoming CFA partner deployments.
          </p>
          <div className="pt-4">
            <Button href="/" variant="secondary" tone="on-light">
              ← Return to Main Page
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
