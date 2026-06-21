function TechnicalAreaSection({
  areas,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-4">
        Technical Areas
      </h3>

      <div className="flex flex-wrap gap-2">
        {areas.map((area) => (
          <span
            key={area}
            className="
              px-3
              py-2
              rounded-xl
              bg-violet-50
              text-violet-600
              text-sm
              font-medium
            "
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechnicalAreaSection;