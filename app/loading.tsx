export default function LoadingPage() {
  return (
    <div
      aria-label="Učitavanje"
      role="status"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-gold" />
    </div>
  );
}
