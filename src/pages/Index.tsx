
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'brand' | 'influencer' | null>(null);

  const demoLogin = (type: 'brand' | 'influencer') => {
    if (type === 'brand') {
      navigate('/brand');
    } else {
      navigate('/influencer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-montserrat font-bold text-primary">TalentEzee Impact</h1>
            </div>
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
              Demo Platform
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6">
            Specialized Influencer
            <span className="text-primary block">Marketing Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-roboto">
            Connect brands with top-tier influencers through data-driven campaigns, 
            real-time analytics, and seamless collaboration tools.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Track campaign performance with live metrics and insights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Expert Matching</h3>
              <p className="text-gray-600">AI-powered influencer selection for your target audience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Seamless Payments</h3>
              <p className="text-gray-600">Integrated payment processing with transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Login Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
            Experience the Platform
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elevated hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-montserrat">Brand Dashboard</CardTitle>
                <CardDescription className="text-base">
                  Manage campaigns, track ROI, and collaborate with influencers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Demo Credentials</label>
                  <Input value="demo@brand.com" readOnly className="bg-gray-50" />
                  <Input value="••••••••" type="password" readOnly className="bg-gray-50" />
                </div>
                <Button 
                  onClick={() => demoLogin('brand')} 
                  className="w-full btn-primary group"
                >
                  Access Brand Dashboard
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-montserrat">Influencer Portal</CardTitle>
                <CardDescription className="text-base">
                  Browse opportunities, manage content, and track earnings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Demo Credentials</label>
                  <Input value="demo@influencer.com" readOnly className="bg-gray-50" />
                  <Input value="••••••••" type="password" readOnly className="bg-gray-50" />
                </div>
                <Button 
                  onClick={() => demoLogin('influencer')} 
                  className="w-full btn-ghost group border-2"
                >
                  Access Influencer Portal
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
            Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="metric-card">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Campaign Management</h3>
                <p className="text-gray-600 text-sm">Create, manage, and optimize influencer campaigns with advanced targeting</p>
              </CardContent>
            </Card>
            
            <Card className="metric-card">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-gray-600 text-sm">Monitor performance metrics, engagement rates, and ROI in real-time</p>
              </CardContent>
            </Card>
            
            <Card className="metric-card">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Payment Processing</h3>
                <p className="text-gray-600 text-sm">Secure, automated payments with transparent fee structure</p>
              </CardContent>
            </Card>
            
            <Card className="metric-card">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Content Collaboration</h3>
                <p className="text-gray-600 text-sm">Streamlined approval workflows and content management</p>
              </CardContent>
            </Card>
            
            <Card className="metric-card">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Audience Insights</h3>
                <p className="text-gray-600 text-sm">Deep dive into audience demographics and engagement patterns</p>
              </CardContent>
            </Card>
            
            <Card className="metric-card">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Performance Tracking</h3>
                <p className="text-gray-600 text-sm">Comprehensive reporting and performance optimization tools</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-montserrat font-bold">TalentEzee Impact</h3>
          </div>
          <p className="text-gray-400 mb-4">Professional influencer marketing platform</p>
          <Badge variant="secondary" className="bg-accent/20 text-accent">
            Demo Environment - Technical Assessment
          </Badge>
        </div>
      </footer>
    </div>
  );
};

export default Index;
