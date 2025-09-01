'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CTO, DataTech Solutions',
      company: 'Fortune 500 Company',
      content: 'Our AWS data engineer delivered an exceptional data lake architecture that reduced our processing time by 70% and cut costs by 40%. The migration was seamless and the real-time analytics capabilities have transformed our decision-making process.',
      rating: 5,
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7608ccf6-98f2-4dc3-aba6-9316ab1ac464.png'
    },
    {
      name: 'Michael Chen',
      title: 'VP of Engineering',
      company: 'TechStart Inc.',
      content: 'The real-time streaming pipeline built for our IoT platform processes over 1M events per second with 99.9% uptime. The serverless architecture scales perfectly with our growing user base. Outstanding technical expertise and project management.',
      rating: 5,
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54306e92-fbcd-4a38-ab9d-ac40de3e00bf.png'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Head of Data Science',
      company: 'Analytics Pro',
      content: 'The ML pipeline automation we received has accelerated our model deployment cycle from weeks to hours. The SageMaker integration with our existing AWS infrastructure was flawless. Highly recommend for any data engineering needs.',
      rating: 5,
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd38d9d5-c442-423b-b6eb-95a6f6d8cb07.png'
    },
    {
      name: 'David Kim',
      title: 'Director of Operations',
      company: 'CloudFirst Corp',
      content: 'Our legacy data warehouse migration to Redshift was completed ahead of schedule and under budget. The new architecture handles 10x more data with faster query performance. Exceptional technical skills and clear communication throughout.',
      rating: 5,
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d84f89db-b542-4045-8216-2290b825ee81.png'
    },
    {
      name: 'Lisa Thompson',
      title: 'Chief Data Officer',
      company: 'Global Analytics',
      content: 'The data governance framework and automated ETL pipelines have standardized our data processes across 5 business units. Data quality has improved significantly and our analysts are now self-sufficient with QuickSight dashboards.',
      rating: 5,
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08ab4bc7-0299-4d39-88ed-34a6404b23fe.png'
    },
    {
      name: 'Robert Martinez',
      title: 'Senior Engineering Manager',
      company: 'ScaleUp Technologies',
      content: 'The event-driven architecture design using Kinesis and Lambda has enabled real-time personalization for our platform. Response times improved by 60% and we can now handle Black Friday traffic with ease. Excellent problem-solving skills.',
      rating: 5,
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/59bba2ab-3f75-4442-b430-f8a4ed028467.png'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-slate-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their data infrastructure 
            with our AWS data engineering expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-slate-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={`${testimonial.name} profile picture`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiNmMWY1ZjkiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjM1IiByPSIxNSIgZmlsbD0iIzk0YTNiOCIvPjxwYXRoIGQ9Ik0yMCA3NWMwLTIwIDEzLjQzLTI1IDMwLTI1czMwIDUgMzAgMjUiIGZpbGw9IiM5NGEzYjgiLz48L3N2Zz4=';
                      }}
                    />
                    <AvatarFallback className="bg-orange-100 text-orange-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.title}</div>
                    <div className="text-sm text-orange-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-slate-600">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;