const StatCard = ({ icon, title, value }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="mr-4 text-blue-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
  
  export default StatCard;
  