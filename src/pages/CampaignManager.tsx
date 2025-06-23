
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  Target, 
  Users, 
  DollarSign, 
  Calendar,
  Send,
  Settings,
  BarChart3
} from "lucide-react";

const CampaignManager = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([]);
  const [campaignData, setCampaignData] = useState({
    name: '',
    description: '',
    budget: '',
    startDate: '',
    endDate: '',
    platform: '',
    objective: ''
  });

  const influencers = [
    { id: '1', name: '@lifestyle_sarah', followers: '145K', engagement: '4.2%', rate: '$850' },
    { id: '2', name: '@tech_reviewer', followers: '89K', engagement: '3.8%', rate: '$650' },
    { id: '3', name: '@fitness_journey', followers: '210K', engagement: '5.1%', rate: '$1200' },
    { id: '4', name: '@food_explorer', followers: '67K', engagement: '4.8%', rate: '$480' },
    { id: '5', name: '@travel_tales', followers: '156K', engagement: '3.9%', rate: '$920' }
  ];

  const handleCreateCampaign = () => {
    if (!campaignData.name || !campaignData.budget || selectedInfluencers.length === 0) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields and select at least one influencer.",
        variant: "destructive"
      });
      return;
    }

    // Simulate campaign creation
    toast({
      title: "Campaign Created Successfully!",
      description: `${campaignData.name} has been created with ${selectedInfluencers.length} influencers.`,
    });

    // Simulate API call to create campaign
    setTimeout(() => {
      navigate('/brand');
    }, 2000);
  };

  const mockClickGeneration = async () => {
    // Simulate POST /api/mockClicks
    const response = await fetch('/api/mockClicks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        campaignId: 'demo-campaign-001',
        clicks: Math.floor(Math.random() * 1000) + 500,
        impressions: Math.floor(Math.random() * 10000) + 5000
      })
    });

    toast({
      title: "Mock Traffic Generated",
      description: "Simulated clicks and impressions have been added to the campaign.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/brand')}
                className="text-primary hover:bg-primary/10"
              >
                ← Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-gray-900">Campaign Manager</h1>
                <p className="text-gray-600">Create and manage your influencer campaigns</p>
              </div>
            </div>
            <Button 
              onClick={mockClickGeneration}
              className="btn-ghost"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Generate Mock Traffic
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create" className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create Campaign</span>
            </TabsTrigger>
            <TabsTrigger value="manage" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Manage Existing</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Campaign Details */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Campaign Details
                  </CardTitle>
                  <CardDescription>Set up your campaign parameters and objectives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Campaign Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Summer Collection Launch"
                      value={campaignData.name}
                      onChange={(e) => setCampaignData({...campaignData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your campaign goals and requirements..."
                      value={campaignData.description}
                      onChange={(e) => setCampaignData({...campaignData, description: e.target.value})}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget *</Label>
                      <Input
                        id="budget"
                        type="number"
                        placeholder="10000"
                        value={campaignData.budget}
                        onChange={(e) => setCampaignData({...campaignData, budget: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="platform">Platform</Label>
                      <Select value={campaignData.platform} onValueChange={(value) => setCampaignData({...campaignData, platform: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="youtube">YouTube</SelectItem>
                          <SelectItem value="tiktok">TikTok</SelectItem>
                          <SelectItem value="all">All Platforms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={campaignData.startDate}
                        onChange={(e) => setCampaignData({...campaignData, startDate: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={campaignData.endDate}
                        onChange={(e) => setCampaignData({...campaignData, endDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objective">Campaign Objective</Label>
                    <Select value={campaignData.objective} onValueChange={(value) => setCampaignData({...campaignData, objective: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select objective" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awareness">Brand Awareness</SelectItem>
                        <SelectItem value="engagement">Engagement</SelectItem>
                        <SelectItem value="conversions">Conversions</SelectItem>
                        <SelectItem value="reach">Reach</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Influencer Selection */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Select Influencers
                  </CardTitle>
                  <CardDescription>Choose influencers that match your campaign goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {influencers.map((influencer) => (
                      <div 
                        key={influencer.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedInfluencers.includes(influencer.id) 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => {
                          if (selectedInfluencers.includes(influencer.id)) {
                            setSelectedInfluencers(selectedInfluencers.filter(id => id !== influencer.id));
                          } else {
                            setSelectedInfluencers([...selectedInfluencers, influencer.id]);
                          }
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Users className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold">{influencer.name}</p>
                              <p className="text-sm text-gray-600">{influencer.followers} followers</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary">{influencer.rate}</p>
                            <p className="text-sm text-gray-600">{influencer.engagement} engagement</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedInfluencers.length > 0 && (
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2">Selected Influencers ({selectedInfluencers.length})</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedInfluencers.map((id) => {
                          const influencer = influencers.find(inf => inf.id === id);
                          return (
                            <Badge key={id} className="bg-primary">
                              {influencer?.name}
                            </Badge>
                          );
                        })}
                      </div>
                      <div className="mt-3 pt-3 border-t border-primary/20">
                        <p className="text-sm">
                          <strong>Estimated Cost:</strong> $
                          {selectedInfluencers.reduce((total, id) => {
                            const influencer = influencers.find(inf => inf.id === id);
                            return total + parseInt(influencer?.rate.replace('$', '') || '0');
                          }, 0).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => navigate('/brand')} 
                className="btn-ghost"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCreateCampaign}
                className="btn-primary"
                disabled={!campaignData.name || selectedInfluencers.length === 0}
              >
                <Send className="w-4 h-4 mr-2" />
                Create Campaign & Send Invites
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="manage">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-montserrat">Existing Campaigns</CardTitle>
                <CardDescription>Manage and monitor your active campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Summer Collection Launch", status: "active", influencers: 12, budget: 15000, spent: 12400 },
                    { name: "Brand Awareness Q2", status: "active", influencers: 8, budget: 12000, spent: 8900 },
                    { name: "Product Review Series", status: "completed", influencers: 6, budget: 8000, spent: 8000 }
                  ].map((campaign, index) => (
                    <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-montserrat font-semibold">{campaign.name}</h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                              {campaign.status}
                            </Badge>
                            <span className="text-sm text-gray-600">{campaign.influencers} influencers</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">spent / budget</p>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button size="sm" className="btn-primary">View Details</Button>
                        <Button size="sm" className="btn-ghost">Edit</Button>
                        {campaign.status === 'active' && (
                          <Button size="sm" variant="destructive">Pause</Button>
                        )}
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

export default CampaignManager;
