export default function StatCard({ value, label }) {
  return (
    <div className="border-b border-gov-border p-7 text-center last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <strong className="block text-3xl font-extrabold text-gov-green">{value}</strong>
      <span className="text-sm text-gov-muted">{label}</span>
    </div>
  );
}
