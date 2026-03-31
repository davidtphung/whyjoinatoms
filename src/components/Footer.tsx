export default function Footer() {
  return (
    <footer className="border-t border-border-default py-8 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-text-dim">
          &copy; 2026 David T Phung &middot; NLT143
        </p>
        <p className="text-xs text-text-dim">
          Built by{" "}
          <a
            href="https://x.com/davidtphung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            David T Phung
          </a>
        </p>
      </div>
    </footer>
  );
}
