'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AWSServicesGrid = () => {
  const services = [
    {
      category: 'Data Storage',
      services: [
        {
          name: 'Amazon S3',
          description: 'Scalable object storage for data lakes and backup',
          use_cases: ['Data Lakes', 'Backup', 'Static Websites'],
          color: 'bg-blue-500/10 border-blue-500/20',
          textColor: 'text-blue-400'
        },
        {
          name: 'Amazon RDS',
          description: 'Managed relational database service',
          use_cases: ['OLTP', 'Web Applications', 'ERP Systems'],
          color: 'bg-blue-500/10 border-blue-500/20',
          textColor: 'text-blue-400'
        },
        {
          name: 'Amazon Redshift',
          description: 'Fast, fully managed data warehouse',
          use_cases: ['Data Warehousing', 'Analytics', 'BI Reporting'],
          color: 'bg-blue-500/10 border-blue-500/20',
          textColor: 'text-blue-400'
        },
        {
          name: 'DynamoDB',
          description: 'Fast, flexible NoSQL database service',
          use_cases: ['Real-time Apps', 'Gaming', 'Mobile Backends'],
          color: 'bg-blue-500/10 border-blue-500/20',
          textColor: 'text-blue-400'
        }
      ]
    },
    {
      category: 'Data Processing',
      services: [
        {
          name: 'AWS Glue',
          description: 'Serverless data integration service',
          use_cases: ['ETL Pipelines', 'Data Cataloging', 'Schema Discovery'],
          color: 'bg-orange-500/10 border-orange-500/20',
          textColor: 'text-orange-400'
        },
        {
          name: 'Amazon EMR',
          description: 'Managed big data frameworks',
          use_cases: ['Apache Spark', 'Hadoop', 'Machine Learning'],
          color: 'bg-orange-500/10 border-orange-500/20',
          textColor: 'text-orange-400'
        },
        {
          name: 'AWS Lambda',
          description: 'Run code without managing servers',
          use_cases: ['Event Processing', 'Real-time', 'Microservices'],
          color: 'bg-orange-500/10 border-orange-500/20',
          textColor: 'text-orange-400'
        },
        {
          name: 'Amazon Kinesis',
          description: 'Real-time data streaming platform',
          use_cases: ['Streaming Analytics', 'Real-time Dashboards', 'Log Processing'],
          color: 'bg-orange-500/10 border-orange-500/20',
          textColor: 'text-orange-400'
        }
      ]
    },
    {
      category: 'Analytics & ML',
      services: [
        {
          name: 'Amazon Athena',
          description: 'Query data in S3 using standard SQL',
          use_cases: ['Ad-hoc Queries', 'Data Exploration', 'Log Analysis'],
          color: 'bg-purple-500/10 border-purple-500/20',
          textColor: 'text-purple-400'
        },
        {
          name: 'Amazon QuickSight',
          description: 'Fast, cloud-powered BI service',
          use_cases: ['Business Intelligence', 'Data Visualization', 'Dashboards'],
          color: 'bg-purple-500/10 border-purple-500/20',
          textColor: 'text-purple-400'
        },
        {
          name: 'Amazon SageMaker',
          description: 'Build, train, and deploy ML models',
          use_cases: ['Machine Learning', 'Model Training', 'AI/ML Pipelines'],
          color: 'bg-purple-500/10 border-purple-500/20',
          textColor: 'text-purple-400'
        },
        {
          name: 'Amazon OpenSearch',
          description: 'Search and analytics suite',
          use_cases: ['Search Applications', 'Log Analytics', 'Real-time Monitoring'],
          color: 'bg-purple-500/10 border-purple-500/20',
          textColor: 'text-purple-400'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">AWS Services Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive knowledge across the full spectrum of AWS data services, 
            from storage and processing to analytics and machine learning.
          </p>
        </div>

        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, serviceIndex) => (
                <Card 
                  key={serviceIndex} 
                  className={`${service.color} hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
                >
                  <CardHeader>
                    <CardTitle className={`${service.textColor} text-lg`}>
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-slate-700">Common Use Cases:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.use_cases.map((useCase, useCaseIndex) => (
                          <Badge 
                            key={useCaseIndex} 
                            variant="secondary" 
                            className="text-xs bg-slate-200 text-slate-700 hover:bg-slate-300"
                          >
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Architecture Patterns */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Proven Architecture Patterns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Data Lake Architecture</h4>
              <p className="text-slate-600 text-sm">
                Scalable data lakes using S3, Glue, and Athena for flexible analytics
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Real-time Streaming</h4>
              <p className="text-slate-600 text-sm">
                Event-driven architectures with Kinesis, Lambda, and DynamoDB
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">ML/AI Pipelines</h4>
              <p className="text-slate-600 text-sm">
                End-to-end ML workflows using SageMaker, Glue, and automated training
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AWSServicesGrid;