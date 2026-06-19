import { useState } from "react";
import { X, Users } from "lucide-react";

function CreateTeamModal({
  isOpen,
  onClose,
  onCreateTeam,
}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    domain: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreateTeam(formData);

    setFormData({
      name: "",
      description: "",
      domain: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        <div className="px-6 py-5 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users className="text-blue-600" />
            <h2 className="text-xl font-semibold">
              Create New Team
            </h2>
          </div>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">
              Team Name
            </label>

            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-3"
              placeholder="AI Research Team"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Description
            </label>

            <textarea
              rows="4"
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Describe your team..."
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Domain
            </label>

            <select
              value={formData.domain}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  domain: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="">
                Select Domain
              </option>

              <option>Artificial Intelligence</option>
              <option>Cyber Security</option>
              <option>Blockchain</option>
              <option>Data Science</option>
              <option>Cloud Computing</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg"
            >
              Create Team
            </button>

          </div>
        </form>

      </div>
    </div>
  );
}

export default CreateTeamModal;