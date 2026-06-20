function UploadDocumentModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/40
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-6
          w-full
          max-w-md
        "
      >
        <h2
          className="
            text-xl
            font-semibold
            mb-4
          "
        >
          Upload Document
        </h2>

        <input
          type="file"
          className="
            w-full
            border
            border-slate-200
            rounded-lg
            p-3
          "
        />

        <div
          className="
            flex
            justify-end
            gap-3
            mt-6
          "
        >
          <button
            onClick={onClose}
            className="
              px-4
              py-2
              rounded-lg
              border
            "
          >
            Cancel
          </button>

          <button
            className="
              px-4
              py-2
              rounded-lg
              bg-blue-600
              text-white
            "
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadDocumentModal;