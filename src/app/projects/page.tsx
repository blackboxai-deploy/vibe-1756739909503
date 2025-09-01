'use client';

import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-commerce Data Lake Migration',
      description: 'Migrated a Fortune 500 retailer from on-premises data warehouse to AWS data lake architecture, handling 50TB+ of customer and transaction data.',
      challenge: 'Legacy Oracle data warehouse couldn\'t scale with growing data volumes and required expensive hardware upgrades. Query performance degraded significantly during peak shopping seasons.',
      solution: 'Designed and implemented a serverless data lake using S3, Glue, and Athena. Created automated ETL pipelines with incremental processing and implemented Redshift for high-performance analytics.',
      technologies: ['Amazon S3', 'AWS Glue', 'Amazon Redshift', 'Amazon Athena', 'AWS DMS', 'Lambda', 'CloudFormation'],
      results: [
        '70% reduction in query response time',
        '40% cost savings on infrastructure',
        '10x improvement in data processing scalability',
        'Zero-downtime migration with 99.9% data integrity'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4b140b11-9342-48f7-8b5e-dbfb62d0bda7.png',
      category: 'data-lake' as const
    },
    {
      title: 'Real-time IoT Analytics Platform',
      description: 'Built a real-time streaming analytics platform for IoT sensor data processing, handling 1M+ events per second with sub-second latency.',
      challenge: 'Manufacturing client needed real-time monitoring of 10,000+ IoT sensors across multiple facilities. Existing batch processing caused delays in detecting equipment failures.',
      solution: 'Implemented event-driven architecture using Kinesis Data Streams, Lambda functions for real-time processing, and DynamoDB for fast data storage. Built custom dashboards with QuickSight.',
      technologies: ['Amazon Kinesis', 'AWS Lambda', 'DynamoDB', 'Amazon QuickSight', 'API Gateway', 'CloudWatch'],
      results: [
        '99.9% system uptime achieved',
        '60% reduction in equipment downtime',
        'Sub-second alerting for critical events',
        '50% improvement in operational efficiency'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2dff5f26-5917-4872-8ddf-05cf3ec674c2.png',
      category: 'real-time' as const
    },
    {
      title: 'ML-Powered Customer Segmentation',
      description: 'Developed end-to-end ML pipeline for automated customer segmentation and personalization using SageMaker and advanced analytics.',
      challenge: 'Marketing team manually segmented customers quarterly, missing real-time opportunities. Limited data science resources and lack of automated ML workflows.',
      solution: 'Built automated ML pipeline using SageMaker for model training, Lambda for inference, and Step Functions for orchestration. Implemented feature engineering with Glue and real-time scoring.',
      technologies: ['Amazon SageMaker', 'AWS Step Functions', 'AWS Glue', 'Lambda', 'S3', 'CloudWatch'],
      results: [
        '25% increase in marketing campaign effectiveness',
        '80% reduction in manual segmentation time',
        'Real-time customer scoring capability',
        'Automated model retraining and deployment'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66b0dcb9-8f52-47b5-a86c-1bb1653cb0b1.png',
      category: 'ml-pipeline' as const
    },
    {
      title: 'Multi-Cloud Data Integration',
      description: 'Integrated data from multiple cloud providers and on-premises systems into unified AWS analytics platform for global financial services firm.',
      challenge: 'Client had data scattered across AWS, Azure, Google Cloud, and on-premises systems. Inconsistent data formats and complex compliance requirements.',
      solution: 'Created hybrid data integration solution using AWS DataSync, DMS, and custom connectors. Implemented data governance with Lake Formation and automated compliance reporting.',
      technologies: ['AWS DataSync', 'AWS DMS', 'Lake Formation', 'Glue DataBrew', 'Macie', 'Config'],
      results: [
        'Unified view of data across 5 different sources',
        '90% reduction in data preparation time',
        'Automated compliance reporting for 3 regulations',
        '100% data lineage tracking implemented'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd80864b-1566-483f-8821-2cd56d5a2e3e.png',
      category: 'migration' as const
    },
    {
      title: 'Financial Risk Analytics Platform',
      description: 'Built high-performance risk analytics platform processing millions of transactions daily with complex regulatory reporting requirements.',
      challenge: 'Investment bank needed faster risk calculations for trading decisions. Legacy system took hours for risk reports, causing missed opportunities and compliance issues.',
      solution: 'Implemented parallel processing architecture using EMR clusters, automated report generation with Glue, and created interactive dashboards with QuickSight for real-time risk monitoring.',
      technologies: ['Amazon EMR', 'Apache Spark', 'AWS Glue', 'Amazon QuickSight', 'Lambda', 'RDS'],
      results: [
        '95% faster risk calculation processing',
        'Real-time regulatory reporting capability',
        '$2M+ annual savings from improved trading decisions',
        'Zero compliance violations since implementation'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/189078ce-1c11-45ee-ad74-238b6f55652f.png',
      category: 'data-lake' as const
    },
    {
      title: 'Healthcare Data Streaming Pipeline',
      description: 'Developed HIPAA-compliant real-time patient monitoring system processing vital signs and alerts from 50+ hospitals.',
      challenge: 'Healthcare network needed real-time patient monitoring across multiple facilities. Strict HIPAA compliance requirements and life-critical alert systems.',
      solution: 'Built secure streaming pipeline with Kinesis, implemented encryption at rest and in transit, created automated alerting system with SNS, and ensured full audit compliance.',
      technologies: ['Amazon Kinesis', 'AWS Lambda', 'Amazon SNS', 'KMS', 'CloudTrail', 'API Gateway'],
      results: [
        '24/7 real-time patient monitoring',
        'HIPAA compliance certification achieved',
        '40% faster emergency response times',
        '99.99% system reliability for critical alerts'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6402c6e9-2057-4b84-9b21-1f2300fed211.png',
      category: 'real-time' as const
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'data-lake', label: 'Data Lake', count: projects.filter(p => p.category === 'data-lake').length },
    { id: 'real-time', label: 'Real-time Processing', count: projects.filter(p => p.category === 'real-time').length },
    { id: 'ml-pipeline', label: 'ML Pipeline', count: projects.filter(p => p.category === 'ml-pipeline').length },
    { id: 'migration', label: 'Cloud Migration', count: projects.filter(p => p.category === 'migration').length }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Project <span className="text-orange-400">Portfolio</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore real-world AWS data engineering projects that have transformed businesses 
              across industries. Each case study demonstrates proven results and innovative solutions.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{projects.length}+</div>
                <div className="text-slate-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100TB+</div>
                <div className="text-slate-300 text-sm">Data Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">99.9%</div>
                <div className="text-slate-300 text-sm">Average Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">50%</div>
                <div className="text-slate-300 text-sm">Average Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge 
                key={category.id} 
                variant="outline"
                className="cursor-pointer hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600 px-4 py-2 text-sm"
              >
                {category.label} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how we can help you achieve similar results with your data infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;