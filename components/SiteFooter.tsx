import { BrandLockup } from "@/components/BrandLockup";
import type { SiteContent } from "@/content/site-content";

export function SiteFooter({ footer }: Pick<SiteContent, "footer">) {
  return (
    <footer className="site-footer">
      <div className="footer-grid frame">
        <div><p className="footer-brand"><BrandLockup showDescriptor={false} /></p><p>{footer.descriptor}</p><p>{footer.location}</p></div>
        <p>© {new Date().getFullYear()} paribus</p>
      </div>
    </footer>
  );
}
