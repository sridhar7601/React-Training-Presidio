import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatCard from '../Cards/StatCard';
import ProfileCard from '../Cards/ProfileCardVertical';
import { useProfileContext } from '../contexts/ProfileContext';
import { Users, Heart } from 'lucide-react';

const LandingPage = () => {
  const { profiles } = useProfileContext();
  const [stats, setStats] = useState({
    totalProfiles: 0,
    groomCount: 0,
    brideCount: 0,
  });
  const [recentProfiles, setRecentProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (profiles.length > 0) {
      setStats({
        totalProfiles: profiles.length,
        groomCount: profiles.filter(profile => profile.type === 'groom').length,
        brideCount: profiles.filter(profile => profile.type === 'bride').length,
      });
      setRecentProfiles(profiles.slice(-5).reverse());
    }
  }, [profiles]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Welcome to MatchMaker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard icon={<Users className="h-8 w-8" />} title="Total Profiles" value={stats.totalProfiles} />
        <StatCard icon={<Heart className="h-8 w-8" />} title="Grooms" value={stats.groomCount} />
        <StatCard icon={<Users className="h-8 w-8" />} title="Total Matches" value={"99"} />
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

export default LandingPage;
