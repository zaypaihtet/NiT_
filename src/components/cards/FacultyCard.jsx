const FacultyCard = ({ member }) => (
  <div className="min-w-[300px] bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
    <img
      src={member.profileImage}
      alt={member.name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-200 hover:border-yellow-400 transition"
    />
    <h3 className="text-xl font-bold #000080 mb-1">{member.name}</h3>
    <p className="text-yellow-600 font-medium mb-1">{member.title}</p>
    {member.expertise && member.expertise.length > 0 && (
      <div
        className="flex flex-wrap gap-1 justify-center mt-2"
        data-testid={`faculty-expertise-${member.id}`}
      >
        {member.expertise?.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
);
export default FacultyCard;
