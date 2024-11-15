import { Building2, Users, BookOpen, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About CircuitMind Technology
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <Bot className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are a startup dedicated to providing hands-on training in
            robotics and AI, blending theory with practical application to
            prepare students for technological challenges. We proudly partner
            with multiple schools and colleges to bring our innovative programs
            to a wider audience. We offer a robotics program which offers
            WorkShops, Projects, Lab Setup and Certifications.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Mission Card */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <Building2 className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <CardTitle className="text-xl font-bold text-gray-900">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              At CircuitMind Technology, our mission is to provide high-quality
              educational services to students of all ages. We believe that
              education is the key to success, and we strive to help our
              students achieve their full potential.
            </p>
          </CardContent>
        </Card>

        {/* Approach Card */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <BookOpen className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <CardTitle className="text-xl font-bold text-gray-900">
              Our Approach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We take a personalized approach to education, tailoring our
              services to meet the unique needs of each student. Our experienced
              educators work closely with students to help them succeed, whether
              they need help with a specific subject or are looking for guidance
              in their academic journey.
            </p>
          </CardContent>
        </Card>

        {/* Team Card */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <Users className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <CardTitle className="text-xl font-bold text-gray-900">
              Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our team is made up of passionate educators who are dedicated to
              helping students succeed. With years of experience in the field,
              our educators have the knowledge and expertise needed to provide
              top-notch educational services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
