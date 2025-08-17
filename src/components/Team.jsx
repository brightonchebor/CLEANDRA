import React from 'react';
import { Users } from 'lucide-react';
import chebor from "../assets/chebor.png"
import viki from "../assets/viki.png"
import manu from "../assets/manu.png"
import stereo from "../assets/stereo.png"

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Emmanuel Kiboi",
      position: "Chairperson",
      currentRole: "Managing Director (CEO)",
      image: manu
    },
    {
      id: 2,
      name: "Elvis Walela",
      position: "Treasurer",
      currentRole: "Director of Finance & Administration",
      image: stereo
    },
    {
      id: 3,
      name: "Brighton Chebor",
      position: "Secretary",
      currentRole: "Director of Human Resources & Training",
      image: chebor
    },
    {
      id: 4,
      name: "Victor Wanyama",
      position: "Organizing Secretary",
      currentRole: "Director of Operations & Strategy",
      image: viki
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            {/* <Users className="h-8 w-8 text-yellow-600" /> */}
            <h2 className="text-4xl font-bold text-gray-900">Our <span className="text-yellow-600">Team</span> </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals behind Cleandra Solutions who ensure 
            exceptional service delivery and company excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
              {/* Member Image */}
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.currentRole}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Leadership Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our leadership team brings together decades of experience in operations, 
              finance, human resources, and strategic planning. Each member is committed 
              to upholding our values of excellence, integrity, and customer satisfaction 
              in every aspect of our cleaning services.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-15 blur-xl"></div>
    </section>
  );
};

export default Team;