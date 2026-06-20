import { FileText, MoreVertical, Trash2, Eye, User } from "lucide-react";

function DocumentCard({ document, onView, onDelete }) {
  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        p-4
        hover:shadow-md
        transition-all
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="
            h-10
            w-10
            rounded-xl
            bg-red-50
            flex
            items-center
            justify-center
          "
        >
          <FileText size={18} className="text-red-500" />
        </div>

        <button className="text-slate-400 hover:text-slate-600">
          <MoreVertical size={18} />
        </button>
      </div>

      <h3
        className="
          mt-4
          font-medium
          text-sm
          text-slate-800
          truncate
        "
      >
        {document.name}
      </h3>

      <div className="mt-3 text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <User size={12} />
          {document.uploadedBy}
        </div>

        <div className="mt-1">{document.size}</div>
      </div>

      <div
        className="
    mt-6
    pt-4
    border-t
    border-slate-100
    flex
    items-center
    justify-between
  "
      >
        <span
          className="
            text-xs
            text-slate-500
          "
        >
          Updated {document.updated}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onView(document)}
            className="
              text-blue-600
              hover:text-blue-700
            "
          >
            <Eye size={16} />
          </button>

          <button
            onClick={() => onDelete(document.id)}
            className="
              text-red-500
              hover:text-red-600
            "
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentCard;
