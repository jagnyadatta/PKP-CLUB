// components/Admin/ManageMembers.jsx
import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Search, Filter, MoreVertical, Eye, User, Phone, Mail } from 'lucide-react';
import { BASE_URL } from '../../utils/constant';

const ManageMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  // Mock data - Replace with actual API call
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Simulate API call
          const response = await fetch(`${BASE_URL}/api/members/all`);
          const result = await response.json();
        //   console.log(result.data);
          setMembers(result?.data);
          setLoading(false);
      } catch (error) {
        console.error('Error fetching members:', error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const roles = ['all', 'President', 'Vice-President', 'Secretary', 'Treasurer', 'Puja Secretary', 'Assistant Secretary', 'Sport Secretary', 'Cultural Secretary', 'Member'];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.phone.includes(searchTerm);
    const matchesRole = filterRole === 'all' || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleDelete = async (memberId) => {
    try {
      // Simulate API call
      setMembers(prev => prev.filter(member => member._id !== memberId));
      setShowDeleteModal(false);
      setSelectedMember(null);
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  const handleEdit = (member) => {
    setSelectedMember(member);
    setShowEditModal(true);
  };

  const handleView = (member) => {
    setSelectedMember(member);
    setShowViewModal(true);
  };

  const handleUpdateMember = (updatedMember) => {
    setMembers(prev => prev.map(member => 
      member._id === updatedMember._id ? updatedMember : member
    ));
    setShowEditModal(false);
    setSelectedMember(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-sky-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Manage Members
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View, edit, and manage all club members. Search and filter to find specific members.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-sky-600">{members.length}</div>
            <div className="text-sm text-gray-600">Total Members</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-green-600">
              {members.filter(m => m.role === 'President' || m.role === 'Secretary').length}
            </div>
            <div className="text-sm text-gray-600">Leadership</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">
              {members.filter(m => m.category === 'committee').length}
            </div>
            <div className="text-sm text-gray-600">Committee</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">
              {members.filter(m => m.category === 'member').length}
            </div>
            <div className="text-sm text-gray-600">General Members</div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, role, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 appearance-none"
                >
                  {roles.map(role => (
                    <option key={role} value={role}>
                      {role === 'all' ? 'All Roles' : role}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Members Grid/Table */}
        {filteredMembers.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No members found</h3>
            <p className="text-gray-600">
              {searchTerm || filterRole !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'No members have been added yet'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard 
                key={member._id} 
                member={member} 
                onEdit={handleEdit}
                onDelete={(member) => {
                  setSelectedMember(member);
                  setShowDeleteModal(true);
                }}
                onView={handleView}
              />
            ))}
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && selectedMember && (
          <DeleteModal
            member={selectedMember}
            onConfirm={() => handleDelete(selectedMember._id)}
            onCancel={() => {
              setShowDeleteModal(false);
              setSelectedMember(null);
            }}
          />
        )}

        {/* Edit Modal */}
        {showEditModal && selectedMember && (
          <EditModal
            member={selectedMember}
            onSave={handleUpdateMember}
            onCancel={() => {
              setShowEditModal(false);
              setSelectedMember(null);
            }}
          />
        )}

        {/* View Modal */}
        {showViewModal && selectedMember && (
          <ViewModal
            member={selectedMember}
            onClose={() => {
              setShowViewModal(false);
              setSelectedMember(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

// Member Card Component
const MemberCard = ({ member, onEdit, onDelete, onView }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image and Actions */}
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Role Badge */}
        <div className="absolute top-3 left-3 bg-sky-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {member.role}
        </div>

        {/* Action Menu */}
        <div className="absolute top-3 right-3">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-white/90 backdrop-blur-sm rounded-full p-1 hover:bg-white transition-colors duration-200"
          >
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-8 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10 min-w-32">
              <button
                onClick={() => {
                  onView(member);
                  setShowMenu(false);
                }}
                className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <Eye className="w-4 h-4 mr-2" />
                View
              </button>
              <button
                onClick={() => {
                  onEdit(member);
                  setShowMenu(false);
                }}
                className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </button>
              <button
                onClick={() => {
                  onDelete(member);
                  setShowMenu(false);
                }}
                className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate">{member.name}</h3>
        <p className="text-sky-600 text-sm font-medium mb-2">{member.role}</p>
        <p className="text-gray-600 text-sm mb-3">{member.experience}</p>
        
        {/* Contact Info */}
        <div className="space-y-1 text-xs text-gray-500">
          <div className="flex items-center">
            <Phone className="w-3 h-3 mr-2" />
            <span>{member.phone}</span>
          </div>
          {member.email && (
            <div className="flex items-center">
              <Mail className="w-3 h-3 mr-2" />
              <span className="truncate">{member.email}</span>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => onView(member)}
            className="flex-1 bg-sky-50 text-sky-600 py-2 rounded-lg text-sm font-medium hover:bg-sky-100 transition-colors duration-200"
          >
            View
          </button>
          <button
            onClick={() => onEdit(member)}
            className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

// Delete Confirmation Modal
const DeleteModal = ({ member, onConfirm, onCancel }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl p-6 max-w-md w-full">
      <div className="text-center">
        <Trash2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Delete Member</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <strong>{member.name}</strong>? This action cannot be undone.
        </p>
        
        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Edit Modal Component
const EditModal = ({ member, onSave, onCancel }) => {
  const [formData, setFormData] = useState(member);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onSave(formData);
      setLoading(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Member</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="President">President</option>
                <option value="Secretary">Secretary</option>
                <option value="Vice-President">Vice-President</option>
                <option value="Member">Member</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              placeholder="e.g., 5+ years leadership"
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-sky-500 text-white py-3 rounded-xl font-medium hover:bg-sky-600 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// View Modal Component
const ViewModal = ({ member, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl p-6 max-w-md w-full">
      <div className="text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-sky-100"
        />
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-sky-600 text-lg font-semibold mb-6">{member.role}</p>
        
        <div className="space-y-3 text-left">
          <div className="flex items-center text-gray-600">
            <Phone className="w-5 h-5 mr-3 text-sky-500" />
            <span>{member.phone}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Phone className="w-5 h-5 mr-3 text-green-500" />
            <span>WhatsApp: {member.whatsapp}</span>
          </div>
          
          {member.email && (
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-3 text-red-500" />
              <span>{member.email}</span>
            </div>
          )}
          
          <div className="flex items-center text-gray-600">
            <User className="w-5 h-5 mr-3 text-purple-500" />
            <span>{member.experience}</span>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 bg-sky-500 text-white py-3 rounded-xl font-medium hover:bg-sky-600 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default ManageMembers;