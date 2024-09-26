import { Briefcase, MapPin, Heart, ChevronRight } from 'lucide-react';

const ProfileCardVertical = ({ profile }) => (
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

export default ProfileCardVertical;
