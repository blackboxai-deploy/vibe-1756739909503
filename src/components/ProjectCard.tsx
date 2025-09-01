'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  image: string;
  category: 'data-lake' | 'real-time' | 'ml-pipeline' | 'migration';
}

const ProjectCard = ({ 
  title, 
  description, 
  challenge, 
  solution, 
  technologies, 
  results, 
  image,
  category 
}: ProjectCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'data-lake':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'real-time':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'ml-pipeline':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'migration':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'data-lake':
        return 'Data Lake';
      case 'real-time':
        return 'Real-time Processing';
      case 'ml-pipeline':
        return 'ML Pipeline';
      case 'migration':
        return 'Cloud Migration';
      default:
        return 'Project';
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMWY1ZjkiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNnB4Ij5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
        <div className="absolute top-4 left-4">
          <Badge className={getCategoryColor(category)}>
            {getCategoryLabel(category)}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-slate-800 group-hover:text-orange-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Challenge */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">Challenge</h4>
          <p className="text-sm text-slate-600">{challenge}</p>
        </div>

        {/* Solution */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">Solution</h4>
          <p className="text-sm text-slate-600">{solution}</p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-3">Key Results</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="text-sm text-slate-600 flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-slate-200">
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all"
          >
            View Case Study
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;