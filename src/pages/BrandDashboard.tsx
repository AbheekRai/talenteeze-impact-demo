
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  ArrowUp, 
  ArrowDown,
  Plus,
  BarChart3,
  Calendar,
  Target
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const BrandDashboard = () => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState({
    totalReach: 2847500,
    engagement: 156800,
    roi: 340,
    activeCampaigns: 8,
    totalSpend: 45600,
    avgCtr: 3.4
  });

  const [chartData] = useState([
    { name: 'Jan', reach: 400000, engagement: 24000, spend: 5000 },
    { name: 'Feb', reach: 580000, engagement: 32000, spend: 7200 },
    { name: 'Mar', reach: 720000, engagement: 45000, spend: 8900 },
    { name: 'Apr', reach: 650000, engagement: 38000, spend: 7800 },
    { name: 'May', reach: 890000, engagement: 52000, spend: 12400 },
    { name: 'Jun', reach: 1200000, engagement: 74000, spend: 15600 }
  ]);

  const campaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      status: "active",
      influencers: 12,
      reach: 850000,
      engagement: 45600,
      budget: 15000,
      spent: 12400,
      roi: 285
    },
    {
      id: 2,
      name: "Brand Awareness Q2",
      status: "active",
      influencers: 8,
      reach: 620000,
      engagement: 32100,
      budget: 12000,
      spent: 8900,
      roi: 310
    },
    {
      id: 3,
      name: "Product Review Series",
      status: "completed",
      influencers: 6,
      reach: 435000,
      engagement: 28900,
      budget: 8000,
      spent: 8000,
      roi: 420
    }
  ];

  useEffect(() => {
    // Simulate real-time metric updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        totalReach: prev.totalReach + Math.floor(Math.random() * 1000),
        engagement: prev.engagement + Math.floor(Math.random() * 50)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-primary hover:bg-primary/10"
              >
                ← Back to Home
              </Button>
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-gray-900">Brand Dashboard</h1>
                <p className="text-gray-600">Welcome back, TechCorp Marketing Team</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button 
                onClick={() => navigate('/campaigns')} 
                className="btn-ghost"
              >
                Manage Campaigns
              </Button>
              <Button 
                onClick={() => navigate('/analytics')} 
                className="btn-primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="metric-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Reach</p>
                  <p className="text-3xl font-montserrat font-bold text-primary">
                    {(metrics.totalReach / 1000000).toFixed(1)}M
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500 font-medium">+12.3%</span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="metric-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Engagement</p>
                  <p className="text-3xl font-montserrat font-bold text-primary">
                    {(metrics.engagement / 1000).toFixed(0)}K
                  </p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500 font-medium">+8.7%</span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="metric-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">ROI</p>
                  <p className="text-3xl font-montserrat font-bold text-primary">
                    {metrics.roi}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500 font-medium">+15.2%</span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="metric-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                  <p className="text-3xl font-montserrat font-bold text-primary">
                    {metrics.activeCampaigns}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                <span className="text-sm text-red-500 font-medium">-2 campaigns</span>
                <span className="text-sm text-gray-500 ml-2">completed</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="campaigns" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Campaigns</span>
            </TabsTrigger>
            <TabsTrigger value="influencers" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Influencers</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="font-montserrat">Performance Trends</CardTitle>
                  <CardDescription>Monthly reach and engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="reach" 
                        stroke="#00897B" 
                        strokeWidth={3}
                        name="Reach"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="engagement" 
                        stroke="#CDDC39" 
                        strokeWidth={3}
                        name="Engagement"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="font-montserrat">Spend Analysis</CardTitle>
                  <CardDescription>Monthly advertising spend distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="spend" fill="#00897B" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-montserrat font-semibold">{campaign.name}</h3>
                        <Badge 
                          variant={campaign.status === 'active' ? 'default' : 'secondary'}
                          className={campaign.status === 'active' ? 'bg-primary' : ''}
                        >
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">ROI</p>
                        <p className="text-2xl font-montserrat font-bold text-green-600">
                          {campaign.roi}%
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Influencers</p>
                        <p className="text-lg font-semibold">{campaign.influencers}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Reach</p>
                        <p className="text-lg font-semibold">{(campaign.reach / 1000).toFixed(0)}K</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Engagement</p>
                        <p className="text-lg font-semibold">{(campaign.engagement / 1000).toFixed(1)}K</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Spent</p>
                        <p className="text-lg font-semibold">${campaign.spent.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Budget Progress</span>
                        <span>${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}</span>
                      </div>
                      <Progress 
                        value={(campaign.spent / campaign.budget) * 100} 
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="influencers">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-montserrat">Top Performing Influencers</CardTitle>
                <CardDescription>Your highest ROI collaborators this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "@lifestyle_sarah", followers: "145K", engagement: "4.2%", roi: 450 },
                    { name: "@tech_reviewer", followers: "89K", engagement: "3.8%", roi: 385 },
                    { name: "@fitness_journey", followers: "210K", engagement: "5.1%", roi: 520 }
                  ].map((influencer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{influencer.name}</p>
                          <p className="text-sm text-gray-600">{influencer.followers} followers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{influencer.roi}% ROI</p>
                        <p className="text-sm text-gray-600">{influencer.engagement} engagement</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BrandDashboard;
