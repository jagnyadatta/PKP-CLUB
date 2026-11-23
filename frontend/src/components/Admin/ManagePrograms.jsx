import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Calendar, Trophy, Heart, Search, X, Loader, Upload, CheckCircle } from "lucide-react";
import { BASE_URL } from "../../utils/constant";
import { useAuth } from "../../context/AuthContext";
import { StickerBadge, DiyaIcon, CricketIcon } from "../Cartoon/CartoonDoodles";
import { FestivalPhotoPlaceholder, SportsPhotoPlaceholder, ServicePhotoPlaceholder } from "../Cartoon/EmptyPhotoPlaceholder";

const ManagePrograms = () => {
  const { token } = useAuth();
  const [activeType, setActiveType] = useState("festival");
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    type: "festival",
    category: "cultural",
    date: "",
    year: "2024",
    location: "",
    venue: "",
    teams: "",
    result: "",
    winner: "",
    runnerUp: "",
    manOfMatch: "",
    description: "",
    duration: "",
    participants: "",
    tag: "",
    badgeColor: "bg-amber-400 text-stone-900"
  });
  const [formImage, setFormImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/api/programs?type=${activeType}`);
      const data = await res.json();
      if (data.success) {
        setPrograms(data.data || []);
      }
    } catch (err) {
      console.error("Error fetching programs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, [activeType]);

  const handleOpenAdd = () => {
    setFormData({
      name: "",
      type: activeType,
      category: activeType === "festival" ? "cultural" : activeType === "sport" ? "cricket" : "social",
      date: "",
      year: new Date().getFullYear().toString(),
      location: "",
      venue: "",
      teams: "",
      result: "",
      winner: "",
      runnerUp: "",
      manOfMatch: "",
      description: "",
      duration: "",
      participants: "",
      tag: "",
      badgeColor: "bg-amber-400 text-stone-900"
    });
    setFormImage(null);
    setShowAddModal(true);
  };

  const handleOpenEdit = (program) => {
    setSelectedProgram(program);
    setFormData({
      name: program.name || "",
      type: program.type || activeType,
      category: program.category || "",
      date: program.date || "",
      year: program.year || "",
      location: program.location || "",
      venue: program.venue || "",
      teams: program.teams || "",
      result: program.result || "",
      winner: program.winner || "",
      runnerUp: program.runnerUp || "",
      manOfMatch: program.manOfMatch || "",
      description: program.description || "",
      duration: program.duration || "",
      participants: program.participants || "",
      tag: program.tag || "",
      badgeColor: program.badgeColor || "bg-amber-400 text-stone-900"
    });
    setFormImage(null);
    setShowEditModal(true);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });
      if (formImage) {
        submitData.append("image", formImage);
      }

      const res = await fetch(`${BASE_URL}/api/programs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: submitData
      });
      const data = await res.json();
      if (data.success) {
        setShowAddModal(false);
        fetchPrograms();
      } else {
        alert("Failed to create: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Error creating program");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedProgram) return;
    setSubmitting(true);
    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });
      if (formImage) {
        submitData.append("image", formImage);
      }

      const res = await fetch(`${BASE_URL}/api/programs/${selectedProgram._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: submitData
      });
      const data = await res.json();
      if (data.success) {
        setShowEditModal(false);
        fetchPrograms();
      } else {
        alert("Failed to update: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Error updating program");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedProgram) return;
    try {
      const res = await fetch(`${BASE_URL}/api/programs/${selectedProgram._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setShowDeleteModal(false);
        fetchPrograms();
      } else {
        alert("Failed to delete: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting program");
    }
  };

  const filtered = programs.filter((p) =>
    p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.date?.includes(searchTerm)
  );

  return (
    <div className="max-w-7xl mx-auto font-cartoon">
      
      {/* Title */}
      <div className="text-center mb-8">
        <div className="inline-block mb-2">
          <StickerBadge text="କାର୍ଯ୍ୟକ୍ରମ ପରିଚାଳନା" color="amber" rotate="-rotate-1" />
        </div>
        <h1 className="heading-font text-3xl sm:text-4xl font-black text-[#2B231D] mb-2">
          Manage Programs & Activities (କାର୍ଯ୍ୟକ୍ରମ ପରିଚାଳନା)
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
          Manage culture festivals, sports tournaments, and community service activities.
        </p>
      </div>

      {/* Program Type Tabs */}
      <div className="card-cartoon bg-white p-4 shadow-cartoon mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {[
            { id: "festival", label: "Culture & Festivals (ପର୍ବପର୍ବାଣି)", icon: Calendar },
            { id: "sport", label: "Sports & Tournaments (କ୍ରୀଡ଼ା)", icon: Trophy },
            { id: "service", label: "Community Service (ସେବା କାର୍ଯ୍ୟ)", icon: Heart }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveType(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-400 text-stone-900 border-[#2B231D] shadow-cartoon-sm"
                    : "bg-[#FAF7F0] text-stone-700 border-[#2B231D]/20 hover:border-[#2B231D]"
                }`}
              >
                <Icon className="w-4 h-4 text-stone-900" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleOpenAdd}
          className="btn-cartoon-amber text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New {activeType === "festival" ? "Festival" : activeType === "sport" ? "Tournament" : "Activity"}</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="card-cartoon bg-white p-4 mb-6 shadow-cartoon flex items-center gap-3">
        <Search className="w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search by name, category, or date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-sm font-semibold focus:outline-none bg-transparent"
        />
      </div>

      {/* Program Grid */}
      {loading ? (
        <div className="py-16 text-center">
          <div className="w-12 h-12 border-3 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="font-bold text-stone-700">Loading programs...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="card-cartoon bg-white p-12 text-center shadow-cartoon max-w-md mx-auto">
          <Calendar className="w-12 h-12 text-stone-400 mx-auto mb-3" />
          <h3 className="heading-font text-xl font-bold text-stone-900">No programs found</h3>
          <p className="text-stone-600 text-xs mt-1">Click "Add New" above to create one.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item._id} className="card-cartoon bg-white p-5 flex flex-col justify-between shadow-cartoon hover:shadow-cartoon-lg transition-all">
              <div>
                {/* Photo or Empty 2D Cartoon Placeholder */}
                <div className="h-40 rounded-2xl border-2 border-[#2B231D] overflow-hidden mb-3 bg-amber-50 relative">
                  {item.image && item.image.startsWith("http") ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : activeType === "festival" ? (
                    <FestivalPhotoPlaceholder />
                  ) : activeType === "sport" ? (
                    <SportsPhotoPlaceholder />
                  ) : (
                    <ServicePhotoPlaceholder />
                  )}
                  {item.tag && (
                    <span className="absolute top-2 left-2 text-[10px] bg-amber-300 text-stone-900 font-black px-2 py-0.5 rounded border border-[#2B231D] shadow-xs">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="heading-font text-xl font-black text-stone-900 mb-1">{item.name}</h3>
                <p className="text-xs text-amber-800 font-bold mb-2">
                  📅 {item.date || item.year} • 📍 {item.location || item.venue || "ପାଇକରାପୁର"}
                </p>
                {item.teams && (
                  <p className="text-xs text-stone-700 font-semibold mb-1">
                    👥 <strong>Teams:</strong> {item.teams}
                  </p>
                )}
                {item.result && (
                  <p className="text-xs text-emerald-800 font-bold mb-2 bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                    🏆 <strong>Result:</strong> {item.result}
                  </p>
                )}
                <p className="text-xs text-stone-600 line-clamp-3 mb-3">{item.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-3 border-t-2 border-stone-100 text-xs font-bold">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="flex-1 bg-amber-100 hover:bg-amber-200 text-stone-900 py-1.5 rounded-lg border border-[#2B231D] flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedProgram(item);
                    setShowDeleteModal(true);
                  }}
                  className="flex-1 bg-rose-100 hover:bg-rose-200 text-rose-900 py-1.5 rounded-lg border border-[#2B231D] flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {(showAddModal || showEditModal) && (
        <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#FFFDF7] rounded-3xl border-3 border-[#2B231D] p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-[8px_8px_0px_#2B231D]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-stone-200 mb-4">
              <h3 className="heading-font text-2xl font-black text-stone-900">
                {showAddModal ? `Add New ${activeType === "festival" ? "Festival" : activeType === "sport" ? "Sport Event" : "Service"}` : `Edit ${formData.name}`}
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setShowEditModal(false);
                }}
                className="p-1 rounded-lg border border-[#2B231D] hover:bg-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={showAddModal ? handleCreate : handleUpdate} className="space-y-4 text-xs font-bold">
              <div>
                <label className="block text-stone-800 mb-1">Title / Name (ନାମ) *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-800 mb-1">Category (ବର୍ଗ)</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="religious, cultural, cricket..."
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  />
                </div>
                <div>
                  <label className="block text-stone-800 mb-1">Date / Duration (ତାରିଖ)</label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g. ମାର୍ଚ୍ଚ ୧୫, ୨୦୨୪"
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-800 mb-1">Location / Venue (ସ୍ଥାନ)</label>
                  <input
                    type="text"
                    value={formData.location || formData.venue}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value, venue: e.target.value })}
                    placeholder="e.g. ମା ବରୁଣାଇ ମୈଦାନ"
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  />
                </div>
                <div>
                  <label className="block text-stone-800 mb-1">Tag / Ribbon</label>
                  <input
                    type="text"
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    placeholder="e.g. ମହାମେଳଣ, ବାର୍ଷିକ"
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  />
                </div>
              </div>

              {activeType === "sport" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-800 mb-1">Teams</label>
                    <input
                      type="text"
                      value={formData.teams}
                      onChange={(e) => setFormData({ ...formData, teams: e.target.value })}
                      placeholder="ପାଇକରାପୁର vs ବ୍ରାହ୍ମଣଦେଓ"
                      className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-800 mb-1">Result (ଫଳାଫଳ)</label>
                    <input
                      type="text"
                      value={formData.result}
                      onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                      placeholder="ପାଇକରାପୁର ବିଜୟୀ"
                      className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-stone-800 mb-1">Description (ବିବରଣୀ)</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  placeholder="Enter program description..."
                />
              </div>

              {/* Optional Photo Upload */}
              <div>
                <label className="block text-stone-800 mb-1">Photo (Optional upload - leave blank for clean cartoon placeholder)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormImage(e.target.files[0])}
                  className="w-full text-xs"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setShowEditModal(false);
                  }}
                  className="flex-1 btn-cartoon-white py-2.5 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 btn-cartoon-amber py-2.5 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {submitting && <Loader className="w-4 h-4 animate-spin" />}
                  <span>{showAddModal ? "Create Program" : "Save Changes"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedProgram && (
        <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#FFFDF7] rounded-3xl border-3 border-[#2B231D] p-6 max-w-md w-full shadow-[8px_8px_0px_#2B231D] text-center">
            <Trash2 className="w-12 h-12 text-rose-600 mx-auto mb-3" />
            <h3 className="heading-font text-2xl font-black text-stone-900 mb-2">Delete Program</h3>
            <p className="text-stone-700 text-sm mb-6 font-semibold">
              Are you sure you want to delete <strong>{selectedProgram.name}</strong>?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 btn-cartoon-white text-xs font-bold py-2.5"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManagePrograms;
