import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function AdminPanel({ onBack }) {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get(`${API_URL}/queries`);
      setQueries(response.data.data || response.data);
    } catch (err) {
      setError('Failed to fetch queries');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${API_URL}/queries/${id}`, { status });
      fetchQueries();
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const deleteQuery = async (id) => {
    if (window.confirm('Are you sure you want to delete this query?')) {
      try {
        await axios.delete(`${API_URL}/queries/${id}`);
        fetchQueries();
      } catch (err) {
        console.error('Failed to delete query', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading queries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Admin Panel</h1>
              <p className="text-indigo-100 mt-1">Manage user queries and messages</p>
            </div>
            <button 
              onClick={onBack}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              ← Back to Site
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">{error}</div>
        ) : queries.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600 text-lg">No queries yet. Check back later!</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {queries.map((query) => (
                    <tr key={query._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{query.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{query.email}</td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs truncate">{query.message}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={query.status}
                          onChange={(e) => updateStatus(query._id, e.target.value)}
                          className={`px-2 py-1 rounded text-sm ${
                            query.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            query.status === 'read' ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {new Date(query.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => deleteQuery(query._id)}
                          className="text-red-600 hover:text-red-800 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}