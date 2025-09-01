'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 hover:bg-orange-500/20">
                AWS Certified Data Engineer
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transform Your Data into 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Insights</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Expert AWS data engineering solutions that scale. Build robust data pipelines, 
                optimize performance, and unlock the power of your data with cutting-edge AWS technologies.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-slate-400 text-sm">Data Pipelines</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">99.9%</div>
                <div className="text-slate-400 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">50TB+</div>
                <div className="text-slate-400 text-sm">Data Processed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                View My Projects
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Download Resume
              </Button>
            </div>

            {/* AWS Services */}
            <div className="pt-8">
              <p className="text-slate-400 text-sm mb-4">Expertise in AWS Services:</p>
              <div className="flex flex-wrap gap-3">
                {['S3', 'Glue', 'Redshift', 'EMR', 'Kinesis', 'Lambda', 'Athena', 'QuickSight'].map((service) => (
                  <Badge key={service} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Data Pipeline Visualization */}
          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-white text-xl font-semibold mb-6">Modern Data Architecture</h3>
              
              {/* Pipeline Flow */}
              <div className="space-y-4">
                {/* Data Sources */}
                <div className="flex items-center justify-between">
                  <div className="text-slate-300 text-sm">Data Sources</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Processing Layer */}
                <div className="flex items-center justify-center">
                  <div className="text-orange-500">→</div>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                  <div className="text-orange-400 text-sm font-medium">AWS Glue + EMR</div>
                  <div className="text-slate-400 text-xs">ETL Processing</div>
                </div>
                
                {/* Storage */}
                <div className="flex items-center justify-center">
                  <div className="text-orange-500">→</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="text-slate-300 text-sm font-medium">S3 Data Lake</div>
                  <div className="text-slate-400 text-xs">Scalable Storage</div>
                </div>
                
                {/* Analytics */}
                <div className="flex items-center justify-center">
                  <div className="text-orange-500">→</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3">
                  <div className="text-blue-400 text-sm font-medium">Redshift + QuickSight</div>
                  <div className="text-slate-400 text-xs">Analytics & BI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;