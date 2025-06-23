
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Users, 
  ArrowUp,
  Star,
  Camera,
  MessageSquare,
  Heart
} from "lucide-react";

const InfluencerDashboard = () => {
  const navigate = useNavigate();
  
  const [metrics] = useState({
    totalEarnings: 15750,
    monthlyEarnings: 3240,
    activeCampaigns: 5,
    completedCampaigns: 23,
    avgEngagement: 4.7,
    followers: 127500
  });

  const opportunities = [
    {
      id: 1,
      brand: "TechCorp",
      campaign: "Summer Collection Launch",
      payment: 850,
      deadline: "2024-01-15",
      status: "pending",
      requirements: "2 Instagram posts + 3 stories"
    },
    {
      id: 2,
      brand: "FitnessFirst",
      campaign: "New Year Motivation",
      payment: 1200,
      deadline: "2024-01-20",
      status: "active",
      requirements: "1 YouTube video + 5 posts"
    },
    {
      id: 3,
      brand: "StyleHub",
      campaign: "Fashion Forward",
      payment: 650,
      deadline: "2024-01-25",
      status: "pending",
      requirements: "3 Instagram posts"
    }
  ];

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
                <h1 className="text-2xl font-montserrat font-bold text-gray-900">Influencer Dashboard</h1>
                <p className="text-gray-600">Welcome back, @lifestyle_sarah</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-accent text-accent-foreground">
                <Star className="w-3 h-3 mr-1" />
                4.9 Rating
              </Badge>
              <Button className="btn-primary">
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
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
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-3xl font-montserrat font-bold text-primary">
                    ${metrics.totalEarnings.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500 font-medium">+23.1%</span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="metric-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-3xl font-montserrat font-bold text-primary">
                    ${metrics.monthlyEarnings.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500 font-medium">+18.5%</span>
                <span className="text-sm text-gray-500 ml-2">on track</span>
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
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <Calendar className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500">3 due this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="metric-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Engagement</p>
                  <p className="text-3xl font-montserrat font-bold text-primary">
                    {metrics.avgEngagement}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <Users className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500">{(metrics.followers / 1000).toFixed(0)}K followers</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="opportunities" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="active">Active Campaigns</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="opportunities" className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-montserrat">New Opportunities</CardTitle>
                <CardDescription>Brand collaboration requests waiting for your response</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {opportunities.filter(opp => opp.status === 'pending').map((opportunity) => (
                    <div key={opportunity.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-montserrat font-semibold">{opportunity.campaign}</h3>
                          <p className="text-gray-600">by {opportunity.brand}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-montserrat font-bold text-green-600">
                            ${opportunity.payment}
                          </p>
                          <p className="text-sm text-gray-500">payment</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-sm"><strong>Requirements:</strong> {opportunity.requirements}</p>
                        <p className="text-sm"><strong>Deadline:</strong> {opportunity.deadline}</p>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button className="btn-primary flex-1">Accept</Button>
                        <Button className="btn-ghost flex-1">Negotiate</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-montserrat">Active Campaigns</CardTitle>
                <CardDescription>Your current brand collaborations and their progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {opportunities.filter(opp => opp.status === 'active').map((campaign) => (
                    <div key={campaign.id} className="p-6 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-montserrat font-semibold">{campaign.campaign}</h3>
                          <p className="text-gray-600">by {campaign.brand}</p>
                        </div>
                        <Badge className="bg-primary">Active</Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-600">Payment</p>
                            <p className="text-xl font-semibold text-green-600">${campaign.payment}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">Deadline</p>
                            <p className="text-xl font-semibold">{campaign.deadline}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-2">Requirements</p>
                          <p className="text-sm">{campaign.requirements}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>60% complete</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button className="btn-primary">Upload Content</Button>
                          <Button className="btn-ghost">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="font-montserrat">Earnings Summary</CardTitle>
                  <CardDescription>Your financial performance overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600">This Month</p>
                      <p className="text-2xl font-montserrat font-bold text-green-600">
                        ${metrics.monthlyEarnings.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">Total Earned</p>
                      <p className="text-2xl font-montserrat font-bold text-blue-600">
                        ${metrics.totalEarnings.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Pending Payments</span>
                      <span className="font-semibold text-orange-600">$2,450</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Available Balance</span>
                      <span className="font-semibold text-green-600">$1,890</span>
                    </div>
                  </div>
                  
                  <Button className="w-full btn-primary">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Request Payout
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="font-montserrat">Performance Stats</CardTitle>
                  <CardDescription>Your influence metrics and growth</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Engagement Rate</span>
                      <span className="font-semibold">{metrics.avgEngagement}%</span>
                    </div>
                    <Progress value={metrics.avgEngagement * 20} className="h-2" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Content Quality Score</span>
                      <span className="font-semibold">9.2/10</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Brand Satisfaction</span>
                      <span className="font-semibold">4.9/5.0</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <p className="text-lg font-montserrat font-bold">{metrics.completedCampaigns}</p>
                      <p className="text-sm text-gray-600">Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-montserrat font-bold">{metrics.activeCampaigns}</p>
                      <p className="text-sm text-gray-600">Active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
