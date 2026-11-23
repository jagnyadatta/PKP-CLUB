// components/Admin/ManageMembers.jsx
import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Search, Filter, Eye, User, Phone, CheckCircle, ExternalLink, X } from 'lucide-react';
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { BASE_URL } from '../../utils/constant';
import { useAuth } from '../../context/AuthContext';
import { StickerBadge, DiyaIcon } from '../Cartoon/CartoonDoodles';
import { MemberPhotoPlaceholder } from '../Cartoon/EmptyPhotoPlaceholder';

const ManageMembers = () => {
  const { token } = useAuth();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  // Fetch members from backend
  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/members/all`);
      const result = await response.json();
      setMembers(result?.data || []);
    } catch (error) {
      console.error('Error fetching members:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const roles = [
    'all',
    'President',
    'Vice-President',
    'Secretary',
    'Treasurer',
    'Puja Secretary',
    'Assistant Secretary',
    'Sport Secretary',
    'Cultural Secretary',
    'Member'
  ];

  const filteredMembers = members.filter(member => {
    const nameMatch = member.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const roleMatch = member.role?.toLowerCase().includes(searchTerm.toLowerCase());
    const phoneMatch = member.phone?.includes(searchTerm);
    const matchesSearch = nameMatch || roleMatch || phoneMatch;
    const matchesRole = filterRole === 'all' || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleDelete = async (memberId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/members/delete/${memberId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      const result = await response.json();
      
      if (result.success) {
        setMembers(prev => prev.filter(member => member._id !== memberId));
        setShowDeleteModal(false);
        setSelectedMember(null);
      } else {
        alert('Failed to delete member: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error deleting member:', error);
      alert('Failed to delete member. Please check backend connection.');
    }
  };

  const handleEdit = (member) => {
    setSelectedMember({ ...member });
    setShowEditModal(true);
  };

  const handleView = (member) => {
    setSelectedMember(member);
    setShowViewModal(true);
  };

  const handleUpdateMember = async (updatedMember) => {
    try {
      const response = await fetch(`${BASE_URL}/api/members/update/${updatedMember._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedMember),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setMembers(prev => prev.map(member => 
          member._id === updatedMember._id ? (result.data || updatedMember) : member
        ));
        setShowEditModal(false);
        setSelectedMember(null);
      } else {
        alert('Failed to update member: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error updating member:', error);
      alert('Failed to update member. Please check backend connection.');
    }
  };

  const formatInstagramUrl = (handle) => {
    if (!handle) return '';
    if (handle.startsWith('http://') || handle.startsWith('https://')) return handle;
    const clean = handle.replace('@', '').trim();
    return `https://instagram.com/${clean}`;
  };

  if (loading) {
    return (
      <div className="py-16 text-center font-cartoon">
        <div className="w-12 h-12 border-3 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
        <p className="font-bold text-stone-700">Loading members...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto font-cartoon">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block mb-2">
          <StickerBadge text="ସଦସ୍ୟ ତାଲିକା" color="amber" rotate="rotate-1" />
        </div>
        <h1 className="heading-font text-3xl sm:text-4xl font-black text-[#2B231D] mb-2">
          Manage Members (ସଦସ୍ୟ ପରିଚାଳନା)
        </h1>
        <p className="text-stone-600 max-w-xl mx-auto text-sm sm:text-base">
          View, edit, and manage all club members. Search and filter by role or phone.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card-cartoon bg-white p-4 shadow-cartoon-sm text-center">
          <div className="font-odia text-3xl font-black text-amber-700">{members.length}</div>
          <div className="text-xs sm:text-sm font-bold text-stone-600">Total Members</div>
        </div>
        <div className="card-cartoon bg-white p-4 shadow-cartoon-sm text-center">
          <div className="font-odia text-3xl font-black text-emerald-700">
            {members.filter(m => m.role === 'President' || m.role === 'Secretary').length}
          </div>
          <div className="text-xs sm:text-sm font-bold text-stone-600">Leadership</div>
        </div>
        <div className="card-cartoon bg-white p-4 shadow-cartoon-sm text-center">
          <div className="font-odia text-3xl font-black text-sky-700">
            {members.filter(m => m.category === 'committee').length}
          </div>
          <div className="text-xs sm:text-sm font-bold text-stone-600">Committee</div>
        </div>
        <div className="card-cartoon bg-white p-4 shadow-cartoon-sm text-center">
          <div className="font-odia text-3xl font-black text-purple-700">
            {members.filter(m => m.category === 'member').length}
          </div>
          <div className="text-xs sm:text-sm font-bold text-stone-600">General Members</div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="card-cartoon bg-white p-5 mb-8 shadow-cartoon">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by name, role, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
            />
          </div>

          <div className="w-full sm:w-64">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="w-full px-4 py-2.5 border-2 border-[#2B231D] rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 bg-[#FAF7F0] shadow-cartoon-sm"
            >
              {roles.map(role => (
                <option key={role} value={role}>
                  {role === 'all' ? 'All Roles (ସମସ୍ତ ପଦବୀ)' : role}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Members Grid View */}
      {filteredMembers.length === 0 ? (
        <div className="card-cartoon bg-white p-12 text-center shadow-cartoon max-w-md mx-auto">
          <User className="w-14 h-14 text-stone-400 mx-auto mb-3" />
          <h3 className="heading-font text-2xl font-bold text-stone-900 mb-1">No members found</h3>
          <p className="text-stone-600 text-sm">
            {searchTerm || filterRole !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'No members added yet'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member._id || member.id}
              className="card-cartoon bg-white p-5 hover:-translate-y-1 hover:shadow-cartoon-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                {/* Image or 2D Cartoon Placeholder */}
                <div className="w-20 h-24 rounded-2xl border-2 border-[#2B231D] overflow-hidden bg-amber-50 shadow-cartoon-sm flex-shrink-0">
                  {member.image && member.image.startsWith('http') && !member.image.includes('pexels.com') ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <MemberPhotoPlaceholder />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="heading-font text-lg font-black text-stone-900 truncate">
                    {member.name}
                  </h3>
                  <p className="text-amber-800 text-xs font-bold mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-stone-600 text-xs mt-1 truncate">
                    {member.experience || 'Community Member'}
                  </p>
                  <p className="text-stone-700 text-xs font-semibold mt-1">
                    📞 {member.phone}
                  </p>

                  {/* Social icons on card */}
                  <div className="flex items-center gap-1.5 mt-2">
                    {member.whatsapp && (
                      <span className="text-emerald-700 text-xs" title="WhatsApp Active">💬</span>
                    )}
                    {member.facebook && (
                      <span className="text-sky-700 text-xs" title="Facebook">📘</span>
                    )}
                    {member.instagram && (
                      <a
                        href={formatInstagramUrl(member.instagram)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-700 transition-colors"
                        title="Instagram Profile"
                      >
                        <FaInstagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t-2 border-stone-100 text-xs font-bold">
                <button
                  onClick={() => handleView(member)}
                  className="bg-sky-100 hover:bg-sky-200 text-sky-900 py-1.5 rounded-lg border border-[#2B231D] flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View</span>
                </button>
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-amber-100 hover:bg-amber-200 text-stone-900 py-1.5 rounded-lg border border-[#2B231D] flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedMember(member);
                    setShowDeleteModal(true);
                  }}
                  className="bg-rose-100 hover:bg-rose-200 text-rose-900 py-1.5 rounded-lg border border-[#2B231D] flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedMember && (
        <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#FFFDF7] rounded-3xl border-3 border-[#2B231D] p-6 max-w-md w-full shadow-[8px_8px_0px_#2B231D] text-center font-cartoon">
            <Trash2 className="w-12 h-12 text-rose-600 mx-auto mb-3" />
            <h3 className="heading-font text-2xl font-black text-stone-900 mb-2">Delete Member</h3>
            <p className="text-stone-700 text-sm mb-6 font-semibold">
              Are you sure you want to delete <strong>{selectedMember.name}</strong>?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedMember(null);
                }}
                className="flex-1 btn-cartoon-white text-xs sm:text-sm font-bold py-2.5"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(selectedMember._id || selectedMember.id)}
                className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 rounded-xl border-2 border-[#2B231D] shadow-cartoon-sm cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedMember && (
        <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#FFFDF7] rounded-3xl border-3 border-[#2B231D] p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-[8px_8px_0px_#2B231D]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-stone-200 mb-4">
              <h3 className="heading-font text-2xl sm:text-3xl font-black text-stone-900">
                Edit Member ({selectedMember.name})
              </h3>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedMember(null);
                }}
                className="p-1 rounded-lg border border-[#2B231D] hover:bg-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUpdateMember(selectedMember);
            }} className="space-y-4 font-cartoon">
              
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">Name</label>
                <input
                  type="text"
                  value={selectedMember.name || ''}
                  onChange={(e) => setSelectedMember({ ...selectedMember, name: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">Role</label>
                  <select
                    value={selectedMember.role}
                    onChange={(e) => setSelectedMember({ ...selectedMember, role: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-bold bg-white"
                  >
                    {roles.filter(r => r !== 'all').map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">Phone</label>
                  <input
                    type="text"
                    value={selectedMember.phone || ''}
                    onChange={(e) => setSelectedMember({ ...selectedMember, phone: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">WhatsApp</label>
                  <input
                    type="text"
                    value={selectedMember.whatsapp || ''}
                    onChange={(e) => setSelectedMember({ ...selectedMember, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  />
                </div>
                {/* Requirement 6: Instagram Profile Field */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1 flex items-center gap-1">
                    <FaInstagram className="w-3.5 h-3.5 text-pink-600" />
                    <span>Instagram Profile</span>
                  </label>
                  <input
                    type="text"
                    value={selectedMember.instagram || ''}
                    onChange={(e) => setSelectedMember({ ...selectedMember, instagram: e.target.value })}
                    placeholder="username or URL"
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">Facebook</label>
                  <input
                    type="text"
                    value={selectedMember.facebook || ''}
                    onChange={(e) => setSelectedMember({ ...selectedMember, facebook: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">Category</label>
                  <select
                    value={selectedMember.category || 'member'}
                    onChange={(e) => setSelectedMember({ ...selectedMember, category: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-bold bg-white"
                  >
                    <option value="president">President</option>
                    <option value="secretary">Secretary</option>
                    <option value="committee">Committee</option>
                    <option value="member">General Member</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">Experience / Responsibility</label>
                <input
                  type="text"
                  value={selectedMember.experience || ''}
                  onChange={(e) => setSelectedMember({ ...selectedMember, experience: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-[#2B231D] rounded-xl text-sm font-semibold bg-white"
                />
              </div>

              <div className="flex space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setSelectedMember(null);
                  }}
                  className="flex-1 btn-cartoon-white text-xs sm:text-sm font-bold py-2.5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-cartoon-amber text-xs sm:text-sm font-bold py-2.5 cursor-pointer"
                >
                  Save Changes
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {showViewModal && selectedMember && (
        <div className="fixed inset-0 bg-[#2B231D]/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#FFFDF7] rounded-3xl border-3 border-[#2B231D] p-6 max-w-md w-full shadow-[8px_8px_0px_#2B231D] text-center font-cartoon">
            <div className="w-28 h-32 rounded-2xl border-3 border-[#2B231D] overflow-hidden mx-auto mb-4 bg-amber-50 shadow-cartoon-sm">
              {selectedMember.image && selectedMember.image.startsWith('http') && !selectedMember.image.includes('pexels.com') ? (
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <MemberPhotoPlaceholder />
              )}
            </div>
            
            <h3 className="heading-font text-2xl font-black text-stone-900 mb-1">
              {selectedMember.name}
            </h3>
            <span className="bg-amber-300 text-stone-900 text-xs font-bold px-3 py-1 rounded-full border border-[#2B231D] inline-block mb-4">
              {selectedMember.role}
            </span>

            <div className="space-y-2 text-left bg-white p-4 rounded-xl border-2 border-[#2B231D] text-xs sm:text-sm font-bold text-stone-700 mb-6 shadow-xs">
              <p>📞 Phone: {selectedMember.phone}</p>
              {selectedMember.whatsapp && <p>💬 WhatsApp: {selectedMember.whatsapp}</p>}
              {selectedMember.instagram && (
                <p className="flex items-center gap-1.5 text-pink-600">
                  <FaInstagram className="w-4 h-4" />
                  <span>Instagram: </span>
                  <a
                    href={formatInstagramUrl(selectedMember.instagram)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-800"
                  >
                    {selectedMember.instagram}
                  </a>
                </p>
              )}
              {selectedMember.facebook && <p>📘 Facebook: {selectedMember.facebook}</p>}
              {selectedMember.experience && <p>🏆 Experience: {selectedMember.experience}</p>}
              <p>🏷️ Category: {selectedMember.category}</p>
            </div>

            <button
              onClick={() => {
                setShowViewModal(false);
                setSelectedMember(null);
              }}
              className="w-full btn-cartoon-amber text-sm font-bold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageMembers;
