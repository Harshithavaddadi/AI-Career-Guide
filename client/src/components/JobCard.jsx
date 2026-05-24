import React, { useState } from "react";

import { MapPin, BriefcaseBusiness } from "lucide-react";

const JobCard = ({
  title,
  company,
  location,
  description,
  applyLink,
  fullDescription,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #7C3AED, #06B6D4);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #06B6D4, #38BDF8);
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #7C3AED #1e293b;
        }
      `}</style>

      {/* Job Card */}
      <div className="bg-slate-800 shadow-sm border border-slate-700 hover:shadow-md hover:border-violet-500 transition-all duration-300 transform hover:-translate-y-1 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-violet-400 mb-1 tracking-tight">
            {title}
          </h3>
          <p className="text-slate-200 font-medium">{company}</p>
          <p className="text-sm text-slate-400 mb-3">{location}</p>

          {description && (
            <p className="text-slate-300 text-sm leading-relaxed">
              {description.slice(0, 100)}
              {description.length > 100 ? "..." : ""}
            </p>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center text-sm font-semibold text-violet-400 bg-violet-950 hover:bg-violet-900 px-5 py-2 rounded-lg transition-all duration-200"
          >
            View Details
          </button>

          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 active:scale-95 px-5 py-2 rounded-lg shadow-sm transition-all duration-200"
          >
            Apply Now
            <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-6"
          onClick={closeModal}
        >
          <div
            className="bg-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Header */}
            <div className="border-b border-slate-700 px-8 py-6 flex-shrink-0">
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 text-slate-400 hover:text-slate-200 hover:bg-slate-700 rounded-full w-8 h-8 flex items-center justify-center text-2xl font-light transition-all duration-200 focus:outline-none"
              >
                ×
              </button>

              <h2 className="text-3xl font-bold text-violet-400 mb-3 pr-8">
                {title}
              </h2>
              <div className="flex items-center gap-4 text-slate-300">
                <span>
                  <BriefcaseBusiness size={20} />
                </span>

                <p className="font-semibold text-slate-200">{company}</p>
                <span className="text-slate-500">•</span>
                <p className="text-sm flex items-center gap-1">
                  <span>
                    <MapPin size={20} />
                  </span>
                  {location}
                </p>
              </div>
            </div>

            {/* Scrollable Content with Custom Scrollbar */}
            <div className="overflow-y-auto flex-1 px-8 py-6 custom-scrollbar">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold text-slate-100 mb-3">
                  Job Description
                </h3>
                <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                  {fullDescription ||
                    description ||
                    "Detailed job information not available."}
                </p>
              </div>
            </div>

            {/* Fixed Footer */}
            <div className="border-t border-slate-700 px-8 py-5 flex justify-end gap-3 flex-shrink-0 bg-slate-900 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="text-sm font-semibold text-slate-300 bg-slate-700 hover:bg-slate-600 border border-slate-600 px-6 py-2.5 rounded-lg transition-all duration-200"
              >
                Close
              </button>
              <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 active:scale-95 px-6 py-2.5 rounded-lg shadow-md transition-all duration-200 inline-flex items-center gap-2"
              >
                Apply Now
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobCard;
