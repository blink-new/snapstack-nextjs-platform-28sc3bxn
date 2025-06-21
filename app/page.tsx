'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { 
  ArrowRight, 
  Zap, 
  CreditCard, 
  Code2, 
  Brain,
  Play,
  MousePointer2,
  Shield,
  Database,
  Sparkles,
  Github,
  Twitter
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icons.logo className="h-8 w-8 text-white" />
              <span className="text-xl font-semibold">SnapStack</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Link href="/auth/signin">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-white text-black hover:bg-gray-100">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered Backend Builder
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              The fastest way to wire{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                auth, payments,
              </span>
              {' '}and backend logic — no code required.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Built for non-devs. Powerful enough for pros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-base px-8 py-6 group">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 group">
                <Play className="mr-2 h-4 w-4" />
                See it in action
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Feature Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl"></div>
            <div className="relative bg-gray-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Drag-and-drop interface mockup */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    Drag-and-Drop Builder
                  </h3>
                  <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm text-gray-400">Backend Builder</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                        <Shield className="h-5 w-5 text-blue-400" />
                        <span className="text-sm">Sign In with Google</span>
                        <MousePointer2 className="h-4 w-4 text-gray-400 ml-auto" />
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <CreditCard className="h-5 w-5 text-green-400" />
                        <span className="text-sm">Stripe Setup</span>
                        <MousePointer2 className="h-4 w-4 text-gray-400 ml-auto" />
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                        <Database className="h-5 w-5 text-purple-400" />
                        <span className="text-sm">User Database</span>
                        <MousePointer2 className="h-4 w-4 text-gray-400 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live preview mockup */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    Live Preview
                  </h3>
                  <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm text-gray-400">Preview Window</span>
                    </div>
                    <div className="bg-gray-900 border border-white/10 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                          <span className="text-xs text-gray-300">API Endpoint</span>
                          <span className="text-xs text-green-400">✓ Ready</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                          <span className="text-xs text-gray-300">Auth Flow</span>
                          <span className="text-xs text-green-400">✓ Active</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                          <span className="text-xs text-gray-300">Payment Gateway</span>
                          <span className="text-xs text-green-400">✓ Connected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logic flow editor mockup */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
                  Logic Flow Editor
                </h3>
                <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded flex items-center justify-center">
                        <span className="text-xs text-blue-400">START</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <div className="w-12 h-8 bg-purple-500/20 border border-purple-500/30 rounded flex items-center justify-center">
                        <span className="text-xs text-purple-400">AUTH</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <div className="w-12 h-8 bg-green-500/20 border border-green-500/30 rounded flex items-center justify-center">
                        <span className="text-xs text-green-400">API</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                      <Brain className="h-3 w-3 mr-1" />
                      AI Assist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to ship faster
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Focus on building your product while we handle the complex backend infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <MousePointer2 className="h-6 w-6" />,
              title: "No Code Required",
              description: "Simple drag-and-drop flows that anyone can master in minutes, no programming experience needed."
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Instant Auth & Payments",
              description: "Wire Stripe, Clerk, Supabase in seconds with pre-built integrations and smart defaults."
            },
            {
              icon: <Code2 className="h-6 w-6" />,
              title: "Deploy Anywhere",
              description: "Export to Next.js, Vite, or serverless functions. Own your code, deploy where you want."
            },
            {
              icon: <Brain className="h-6 w-6" />,
              title: "AI Logic Assist",
              description: "Auto-generate backend functions using AI. Describe what you need and watch it build itself."
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-900/50 border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-gray-900/80">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From idea to production in minutes
          </h2>
          <p className="text-xl text-gray-400">
            Our streamlined workflow gets you from concept to deployed application faster than ever.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Configure",
                description: "Set up authentication providers, payment systems, and API endpoints through our visual interface."
              },
              {
                step: "02", 
                title: "Generate",
                description: "Let our AI generate production-ready code with TypeScript, validation, and best practices baked in."
              },
              {
                step: "03",
                title: "Deploy",
                description: "Export your complete project or deploy directly to Vercel, Netlify, or your preferred platform."
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-16 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 blur-3xl"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of developers who are already building faster with SnapStack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-base px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6">
                View Pricing
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Icons.logo className="h-6 w-6 text-white" />
                <span className="text-lg font-semibold text-white">SnapStack</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Build production-ready applications with AI-powered backend tools.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Templates</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Connect</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-400">
            © 2024 SnapStack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}