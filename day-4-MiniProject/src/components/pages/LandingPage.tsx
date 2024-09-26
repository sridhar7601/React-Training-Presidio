import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Heart, MapPin, Briefcase, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [stats, setStats] = useState({
    totalProfiles: 0,
    totalLikes: 0,
    groomCount: 0,
    brideCount: 0,
  });
  const [recentProfiles, setRecentProfiles] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    fetch('http://localhost:3001/profiles')
      .then(response => response.json())
      .then(data => {
        setStats({
          totalProfiles: data.length,
          totalLikes: data.reduce((sum, profile) => sum + profile.likeCount, 0),
          groomCount: data.filter(profile => profile.type === 'groom').length,
          brideCount: data.filter(profile => profile.type === 'bride').length,
        });
        setRecentProfiles(data.slice(-5).reverse());
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Welcome to MatchMaker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard icon={<Users className="h-8 w-8" />} title="Total Profiles" value={stats.totalProfiles} />
        <StatCard icon={<Heart className="h-8 w-8" />} title="Past Matches" value={stats.totalLikes} />
        <StatCard icon={<Users className="h-8 w-8" />} title="Grooms" value={stats.groomCount} />
        <StatCard icon={<Users className="h-8 w-8" />} title="Brides" value={stats.brideCount} />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Profiles</h2>
        <div className="space-y-4">
          {recentProfiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-6">
        {/* Use button and navigate onClick */}
        <button
          onClick={() => navigate('/home')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
        >
          View Profiles
        </button>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
    <div className="mr-4 text-blue-500">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const ProfileCard = ({ profile }) => (
  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{profile.name}</h3>
      <div className="flex items-center text-sm text-gray-600 mt-1">
        <Briefcase className="h-4 w-4 mr-1" />
        <span>{profile.occupation}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600 mt-1">
        <MapPin className="h-4 w-4 mr-1" />
        <span>{profile.location}</span>
      </div>
    </div>
    <div className="flex items-center">
      <div className="flex items-center mr-4">
        <Heart className="h-5 w-5 text-red-500 mr-1" />
        <span className="text-gray-700">{profile.likeCount}</span>
      </div>
      <ChevronRight className="h-6 w-6 text-gray-400" />
    </div>
  </div>
);

export default LandingPage;
