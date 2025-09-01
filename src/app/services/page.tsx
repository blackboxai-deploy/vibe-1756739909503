'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ServicesPage = () => {
  const services = [
    {
      title: 'Data Lake Architecture',
      description: 'Design and implement scalable data lakes using AWS S3, Glue, and Lake Formation for unified data storage and governance.',
      features: [
        'S3-based data lake design',
        'AWS Glue data catalog integration',
        'Lake Formation security policies',
        'Multi-format data ingestion',
        'Cost optimization strategies'
      ],
      technologies: ['Amazon S3', 'AWS Glue', 'Lake Formation', 'Athena', 'IAM'],
      deliverables: [
        'Architecture documentation',
        'Data governance framework',
        'Cost analysis report',
        'Implementation roadmap'
      ],
      timeline: '4-8 weeks',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a874f2ff-cf56-4f49-8caf-db48c296d75d.png'
    },
    {
      title: 'Real-time Data Streaming',
      description: 'Build robust streaming data pipelines using Amazon Kinesis, Lambda, and DynamoDB for real-time analytics and processing.',
      features: [
        'Kinesis Data Streams setup',
        'Lambda-based stream processing',
        'Real-time analytics dashboards',
        'Auto-scaling configurations',
        'Error handling and recovery'
      ],
      technologies: ['Amazon Kinesis', 'AWS Lambda', 'DynamoDB', 'CloudWatch', 'API Gateway'],
      deliverables: [
        'Streaming pipeline implementation',
        'Monitoring and alerting setup',
        'Performance optimization guide',
        'Documentation and training'
      ],
      timeline: '3-6 weeks',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/271eb0bb-20e9-4189-9fc7-7a4445963baf.png'
    },
    {
      title: 'ETL Pipeline Development',
      description: 'Create efficient ETL processes using AWS Glue, Step Functions, and Apache Airflow for automated data transformation.',
      features: [
        'AWS Glue job development',
        'Step Functions orchestration',
        'Data quality validation',
        'Incremental processing logic',
        'Pipeline monitoring'
      ],
      technologies: ['AWS Glue', 'Step Functions', 'Apache Airflow', 'S3', 'CloudWatch'],
      deliverables: [
        'ETL pipeline code',
        'Data lineage documentation',
        'Quality assurance framework',
        'Operational runbooks'
      ],
      timeline: '2-5 weeks',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/12c4e012-e37a-4cc6-8f8d-bffdfa5496b2.png'
    },
    {
      title: 'Cloud Data Migration',
      description: 'Seamlessly migrate on-premises data systems to AWS cloud infrastructure with minimal downtime and data integrity.',
      features: [
        'Migration strategy planning',
        'Data mapping and validation',
        'AWS DMS implementation',
        'Cutover coordination',
        'Post-migration optimization'
      ],
      technologies: ['AWS DMS', 'AWS SCT', 'DataSync', 'Database Migration Service', 'S3'],
      deliverables: [
        'Migration assessment report',
        'Detailed migration plan',
        'Data validation results',
        'Go-live support'
      ],
      timeline: '6-12 weeks',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fee2ef43-48ae-4426-9a32-1f64c1df81f0.png'
    },
    {
      title: 'ML Pipeline Automation',
      description: 'Build end-to-end machine learning pipelines using SageMaker, Glue, and automated model training and deployment.',
      features: [
        'SageMaker pipeline setup',
        'Automated model training',
        'Feature engineering workflows',
        'Model deployment automation',
        'A/B testing framework'
      ],
      technologies: ['Amazon SageMaker', 'AWS Glue', 'Lambda', 'S3', 'CodePipeline'],
      deliverables: [
        'ML pipeline implementation',
        'Model monitoring dashboard',
        'Feature store setup',
        'MLOps best practices guide'
      ],
      timeline: '4-10 weeks',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d225f6b-b43e-4d84-a5a5-9b74533a7776.png'
    },
    {
      title: 'Data Governance & Security',
      description: 'Implement comprehensive data governance frameworks with AWS security best practices and compliance requirements.',
      features: [
        'Data classification policies',
        'Access control implementation',
        'Audit trail setup',
        'Compliance reporting',
        'Data lineage tracking'
      ],
      technologies: ['AWS Lake Formation', 'IAM', 'CloudTrail', 'Macie', 'Config'],
      deliverables: [
        'Governance policy documents',
        'Security implementation guide',
        'Compliance audit reports',
        'Training materials'
      ],
      timeline: '3-8 weeks',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/313b94a1-db39-412c-8edc-7efe54291dd6.png'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Assessment',
      description: 'Analyze current infrastructure, requirements, and business objectives to create a tailored solution.'
    },
    {
      step: '2', 
      title: 'Architecture Design',
      description: 'Design scalable AWS data architecture with best practices for security, performance, and cost optimization.'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Build and deploy the solution using infrastructure as code and automated testing frameworks.'
    },
    {
      step: '4',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance tuning, and optimization for production readiness.'
    },
    {
      step: '5',
      title: 'Deployment & Training',
      description: 'Go-live support, knowledge transfer, and team training for ongoing maintenance and operations.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AWS Data Engineering <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AWS data engineering solutions designed to transform your data infrastructure, 
              optimize performance, and enable data-driven decision making at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                {/* Service Image */}
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmMWY1ZjkiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNHB4Ij5TZXJ2aWNlIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-slate-600 flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & CTA */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    <div>
                      <span className="text-sm text-slate-500">Timeline: </span>
                      <span className="font-semibold text-slate-700">{service.timeline}</span>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Infrastructure?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss your specific requirements and create a custom AWS data engineering solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 px-8">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8">
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;