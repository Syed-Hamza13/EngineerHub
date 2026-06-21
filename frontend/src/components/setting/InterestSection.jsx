function InterestSection({
  interests,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-4">
        Interests
      </h3>

      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="
              px-3
              py-2
              rounded-xl
              bg-orange-50
              text-orange-600
              text-sm
              font-medium
            "
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}

export default InterestSection;