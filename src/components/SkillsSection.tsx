'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'AWS Data Services',
      skills: [
        { name: 'Amazon S3', level: 95, years: '5+ years' },
        { name: 'AWS Glue', level: 90, years: '4+ years' },
        { name: 'Amazon Redshift', level: 88, years: '3+ years' },
        { name: 'Amazon EMR', level: 85, years: '3+ years' },
        { name: 'Amazon Kinesis', level: 82, years: '2+ years' },
        { name: 'AWS Lambda', level: 92, years: '4+ years' }
      ]
    },
    {
      title: 'Programming & Tools',
      skills: [
        { name: 'Python', level: 95, years: '6+ years' },
        { name: 'SQL', level: 98, years: '8+ years' },
        { name: 'Apache Spark', level: 88, years: '4+ years' },
        { name: 'Apache Airflow', level: 85, years: '3+ years' },
        { name: 'Docker', level: 80, years: '3+ years' },
        { name: 'Terraform', level: 75, years: '2+ years' }
      ]
    },
    {
      title: 'Analytics & ML',
      skills: [
        { name: 'Amazon Athena', level: 90, years: '3+ years' },
        { name: 'Amazon QuickSight', level: 85, years: '2+ years' },
        { name: 'Amazon SageMaker', level: 78, years: '2+ years' },
        { name: 'TensorFlow', level: 72, years: '2+ years' },
        { name: 'Pandas/NumPy', level: 88, years: '5+ years' },
        { name: 'Jupyter', level: 90, years: '4+ years' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Data Engineer - Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'Active'
    },
    {
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services', 
      date: '2023',
      status: 'Active'
    },
    {
      title: 'AWS Certified Big Data - Specialty',
      issuer: 'Amazon Web Services',
      date: '2022',
      status: 'Active'
    },
    {
      title: 'Apache Spark Developer Certification',
      issuer: 'Databricks',
      date: '2023',
      status: 'Active'
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-orange-500';
    return 'bg-slate-500';
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Deep expertise across the AWS data ecosystem with proven hands-on experience 
            in building scalable, production-ready data solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.years}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Progress 
                        value={skill.level} 
                        className="flex-1 h-2"
                        // Custom progress bar styling would be applied here
                      />
                      <span className="text-slate-300 text-sm font-medium w-12">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Professional Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {cert.title}
                    </h3>
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-slate-400 text-sm">Obtained: {cert.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">6+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-slate-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
            <div className="text-slate-300">AWS Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">4</div>
            <div className="text-slate-300">AWS Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;