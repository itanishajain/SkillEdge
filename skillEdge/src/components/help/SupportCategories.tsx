import { supportCategories } from '@/data/help-data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import * as Icons from 'lucide-react';

export function SupportCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {supportCategories.map((category, index) => {
        const Icon = Icons[category.icon as keyof typeof Icons];
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                {Icon && <Icon className="h-6 w-6 text-primary" />}
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}