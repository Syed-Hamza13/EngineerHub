import { useRef, useState } from "react";

import {
  Upload,
  Search,
  Filter,
} from "lucide-react";

import DocumentCard from "./DocumentCard";
// import UploadDocumentModal from "./UploadDocumentModal";

function DocumentsTab() {
  

    

  const [documents, setDocuments] =
    useState([
      {
        id: 1,
        name:
          "Quantum_Entanglement_Simulation.pdf",
        uploadedBy:
          "Dr. Aris Thorne",
        size: "2.4 MB",
        updated: "Oct 12, 2023",
        aiInsight:
          "Identifies a potential bottleneck in the quantum simulation pipeline.",
      },
      {
        id: 2,
        name:
          "Architecture_Spec_Final_2023.docx",
        uploadedBy:
          "Sarah Chen",
        size: "128 KB",
        updated: "Oct 11, 2023",
        aiInsight:
          "No AI analysis available yet.",
      },
      {
        id: 3,
        name:
          "Competitor_Landscape_Analysis.pdf",
        uploadedBy:
          "Marcus Wei",
        size: "4.1 MB",
        updated: "Oct 08, 2023",
        aiInsight:
          "Mentions three major competitors using similar architectures.",
      },
      {
        id: 4,
        name:
          "Experiment_Logs_Set_A.csv",
        uploadedBy:
          "System Logger",
        size: "15 MB",
        updated: "Oct 07, 2023",
        aiInsight:
          "Anomalous spikes detected during testing.",
      },
    ]);

    const fileInputRef = useRef(null);

const handleUploadClick = () => {
  fileInputRef.current?.click();
};

const handleFilesSelected = (e) => {
  const files = Array.from(e.target.files);

  console.log(files);

  // Future API Upload
};

  const handleDelete = (id) => {
    setDocuments((prev) =>
      prev.filter(
        (doc) => doc.id !== id
      )
    );
  };

  const handleView = (doc) => {
    console.log(doc);
  };

  return (
    <>
      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-2xl
          p-6
        "
      >
        {/* Top Area */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-4
            gap-6
          "
        >
          {/* Upload */}
          <div
            className="
              lg:col-span-3
              border-2
              border-dashed
              border-blue-200
              rounded-2xl
              h-52
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              hover:bg-blue-50/40
              transition
            "
           onClick={handleUploadClick}
          >
            <Upload
              className="
                text-blue-600
                mb-3
              "
              size={30}
            />

            <h3
              className="
                font-medium
                text-slate-800
              "
            >
              Upload Research Papers
            </h3>

            <p
              className="
                text-sm
                text-slate-500
                mt-2
              "
            >
              Drag & Drop PDF,
              DOCX, PPT, TXT
              or Images
            </p>
          </div>
          <input
  ref={fileInputRef}
  type="file"
  multiple
  accept="
    .pdf,
    .doc,
    .docx,
    .ppt,
    .pptx,
    .txt,
    image/*
  "
  className="hidden"
  onChange={handleFilesSelected}
/>

          {/* Stats */}
          <div
            className="
              border
              border-slate-200
              rounded-2xl
              p-5
            "
          >
            <h3
              className="
                text-xs
                font-semibold
                text-slate-500
                uppercase
                mb-5
              "
            >
              Repository Stats
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span>
                  Total Documents
                </span>
                <strong>142</strong>
              </div>

              <div className="flex justify-between">
                <span>
                  Storage Used
                </span>
                <strong>2.4 GB</strong>
              </div>

              <div className="flex justify-between">
                <span>
                  AI Tokens
                </span>
                <strong className="text-violet-600">
                  842k
                </strong>
              </div>

            </div>
          </div>
        </div>

        {/* Search */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-3
            mt-6
          "
        >
          <div className="relative flex-1">

            <Search
              size={18}
              className="
                absolute
                left-3
                top-3
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search documents..."
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                pl-10
                pr-4
                py-3
              "
            />
          </div>

          <div className="relative">

            <Filter
              size={18}
              className="
                absolute
                left-3
                top-3
                text-slate-400
              "
            />

            <select
              className="
                border
                border-slate-200
                rounded-xl
                pl-10
                pr-10
                py-3
              "
            >
              <option>
                All Formats
              </option>
              <option>
                PDF
              </option>
              <option>
                DOCX
              </option>
              <option>
                PPT
              </option>
              <option>
                Images
              </option>
            </select>
          </div>
        </div>

        {/* Documents Grid */}
        <div
          className="
            mt-6
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-4
          "
        >
          {documents.map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
              onView={handleView}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      
    </>
  );
}

export default DocumentsTab;