'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea }n from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CreateProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const templates = [
  {
    id: 'blank',
    name: 'Blank Project',
    description: 'Start from scratch with a clean slate',
    category: 'Basic',
    features: ['Authentication Setup', 'Basic Structure'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    description: 'Complete online store with Stripe integration',
    category: 'Popular',
    features: ['Stripe Payments', 'Product Management', 'User Auth', 'Admin Dashboard'],
  },
  {
    id: 'saas',
    name: 'SaaS Platform',
    description: 'Multi-tenant SaaS application template',
    category: 'Popular',
    features: ['Multi-tenancy', 'Billing', 'User Management', 'Analytics'],
  },
  {
    id: 'blog',
    name: 'Blog Platform',
    description: 'Content management system for blogging',
    category: 'Content',
    features: ['CMS', 'SEO Optimization', 'Comments', 'Admin Panel'],
  },
];

export function CreateProjectDialog({ open, onOpenChange }: CreateProjectDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedTemplate, setSelectedTemplate] = useState('blank');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    template: 'blank',
  });

  const handleCreateProject = async () => {
    setIsLoading(true);
    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Creating project:', formData);
      onOpenChange(false);
      setFormData({ name: '', description: '', template: 'blank' });
      setActiveTab('details');
    } catch (error) {
      console.error('Failed to create project:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedTemplateData = templates.find(t => t.id === selectedTemplate);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Set up a new SnapStack project with your preferred configuration.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Project Details</TabsTrigger>
            <TabsTrigger value="template">Choose Template</TabsTrigger>
          </TabsList>

          <div className="mt-6 overflow-y-auto max-h-[400px]">
            <TabsContent value="details" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                  id="project-name"
                  placeholder="My Awesome Project"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-description">Description</Label>
                <Textarea
                  id="project-description"
                  placeholder="Describe what your project does..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type</Label>
                <Select 
                  value={formData.template} 
                  onValueChange={(value) => {
                    setFormData(prev => ({ ...prev, template: value }));
                    setSelectedTemplate(value);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedTemplateData && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-muted rounded-lg"
                >
                  <h4 className="font-medium mb-2">{selectedTemplateData.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {selectedTemplateData.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {selectedTemplateData.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </TabsContent>

            <TabsContent value="template" className="space-y-4">
              <div className="grid gap-4">
                {templates.map((template) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-colors ${
                        selectedTemplate === template.id 
                          ? 'ring-2 ring-primary bg-primary/5' 
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => {
                        setSelectedTemplate(template.id);
                        setFormData(prev => ({ ...prev, template: template.id }));
                      }}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{template.name}</CardTitle>
                            <CardDescription className="mt-1">
                              {template.description}
                            </CardDescription>
                          </div>
                          <Badge variant="outline">{template.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1">
                          {template.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <DialogFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {activeTab === 'template' && (
              <Button
                variant="outline"
                onClick={() => setActiveTab('details')}
                disabled={isLoading}
              >
                Back
              </Button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            {activeTab === 'details' ? (
              <Button
                onClick={() => setActiveTab('template')}
                disabled={!formData.name.trim() || isLoading}
              >
                Continue
              </Button>
            ) : (
              <Button
                onClick={handleCreateProject}
                disabled={!formData.name.trim() || isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Project'}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}