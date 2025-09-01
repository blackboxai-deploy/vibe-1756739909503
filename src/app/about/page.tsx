'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const timeline = [
    {
      year: '2024',
      title: 'AWS Certified Data Engineer',
      description: 'Achieved the latest AWS Data Engineer - Associate certification, demonstrating expertise in modern data engineering practices.',
      type: 'certification'
    },
    {
      year: '2023-2024',
      title: 'Senior Data Engineer - Tech Innovations Inc.',
      description: 'Led migration of legacy data infrastructure to AWS, managing 50+ TB of enterprise data. Designed serverless analytics platform serving 1M+ daily users.',
      type: 'experience'
    },
    {
      year: '2023',
      title: 'AWS Solutions Architect Professional',
      description: 'Earned advanced certification in AWS architecture design, focusing on scalable and resilient cloud solutions.',
      type: 'certification'
    },
    {
      year: '2021-2023',
      title: 'Data Engineer - CloudFirst Solutions',
      description: 'Built real-time streaming platforms using Kinesis and Lambda. Implemented ML pipelines with SageMaker for automated customer insights.',
      type: 'experience'
    },
    {
      year: '2022',
      title: 'AWS Big Data - Specialty Certification',
      description: 'Specialized certification in AWS big data services including EMR, Glue, Redshift, and analytics services.',
      type: 'certification'
    },
    {
      year: '2019-2021',
      title: 'Data Analyst - DataCorp Analytics',
      description: 'Started career in data analytics, developing expertise in SQL, Python, and cloud platforms. Built foundational skills in data pipeline development.',
      type: 'experience'
    },
    {
      year: '2019',
      title: 'Master\'s in Computer Science',
      description: 'Specialized in Data Engineering and Machine Learning. Thesis on "Scalable Real-time Stream Processing Architectures".',
      type: 'education'
    }
  ];

  const expertise = [
    {
      area: 'Data Architecture',
      description: 'Design scalable, cost-effective data architectures using AWS services',
      skills: ['Data Lake Design', 'Data Warehouse Architecture', 'Hybrid Cloud Solutions', 'Cost Optimization']
    },
    {
      area: 'Stream Processing',
      description: 'Build real-time data processing systems for immediate insights',
      skills: ['Amazon Kinesis', 'Apache Kafka', 'Event-Driven Architecture', 'Real-time Analytics']
    },
    {
      area: 'ETL/ELT Pipelines',
      description: 'Create robust data transformation and integration workflows',
      skills: ['AWS Glue', 'Apache Airflow', 'Data Quality', 'Pipeline Orchestration']
    },
    {
      area: 'Machine Learning',
      description: 'Implement ML pipelines and automated model deployment',
      skills: ['Amazon SageMaker', 'MLOps', 'Feature Engineering', 'Model Monitoring']
    }
  ];

  const philosophies = [
    {
      title: 'Data-Driven Excellence',
      description: 'Every decision should be backed by data. I build systems that not only store and process data efficiently but also make it accessible for informed decision-making at all levels.',
      icon: '📊'
    },
    {
      title: 'Scalability First',
      description: 'Design with tomorrow in mind. All architectures are built to scale seamlessly from startup to enterprise levels without major redesigns or performance bottlenecks.',
      icon: '🚀'
    },
    {
      title: 'Security & Compliance',
      description: 'Data security is non-negotiable. I implement comprehensive security frameworks that protect sensitive data while maintaining compliance with industry regulations.',
      icon: '🔒'
    },
    {
      title: 'Cost Optimization',
      description: 'Smart spending on cloud resources. I optimize architectures to deliver maximum performance while minimizing costs through right-sizing and intelligent resource management.',
      icon: '💡'
    }
  ];

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return '🏆';
      case 'experience':
        return '💼';
      case 'education':
        return '🎓';
      default:
        return '📅';
    }
  };

  const getTimelineColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'border-orange-500 bg-orange-50';
      case 'experience':
        return 'border-blue-500 bg-blue-50';
      case 'education':
        return 'border-purple-500 bg-purple-50';
      default:
        return 'border-slate-500 bg-slate-50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                About <span className="text-orange-400">Me</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                I'm a passionate AWS data engineer with 6+ years of experience transforming 
                raw data into actionable insights. My expertise spans the entire AWS data ecosystem, 
                from building scalable data lakes to implementing real-time streaming analytics.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-300">
                  <span className="text-orange-400 mr-3">📍</span>
                  San Francisco, CA (Remote Available)
                </div>
                <div className="flex items-center text-slate-300">
                  <span className="text-orange-400 mr-3">🏆</span>
                  4 AWS Certifications
                </div>
                <div className="flex items-center text-slate-300">
                  <span className="text-orange-400 mr-3">💼</span>
                  50+ Projects Delivered
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-8 backdrop-blur">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1674e183-e263-4192-848e-498d2f306688.png"
                  alt="AWS Data Engineer Professional Portrait"
                  className="w-full rounded-lg shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNmMWY1ZjkiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxODAiIHI9IjYwIiBmaWxsPSIjOTRhM2I4Ii8+PHBhdGggZD0iTTEwMCA0MDBjMC04MCA0NC43LTEwMCAxMDAtMTAwczEwMCAyMCAxMDAgMTAwIiBmaWxsPSIjOTRhM2I4Ii8+PHRleHQgeD0iNTAlIiB5PSI0NjAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5NGEzYjgiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTZweCI+UHJvZmlsZSBQaG90bzwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized skills that drive successful data engineering projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{item.area}</CardTitle>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {item.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Philosophy</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide every project and decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophies.map((philosophy, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{philosophy.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{philosophy.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{philosophy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The path that led to becoming an AWS data engineering expert
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${getTimelineColor(item.type)} z-10`}></div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{getTimelineIcon(item.type)}</span>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                        {item.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Ready to transform your data infrastructure? I'd love to discuss your project and explore how we can achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 px-8">
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8">
              Send Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;