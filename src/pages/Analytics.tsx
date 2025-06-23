
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { ArrowLeft, TrendingUp, TrendingDown, Eye, MousePointer, ShoppingCart, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockApi } from "@/lib/api";
import { AnalyticsData } from "@/services/analyticsService";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  
  const { data: analyticsData, isLoading, isError } = useQuery({
    queryKey: ['analytics', timeRange],
    queryFn: () => mockApi.getAnalytics(timeRange)
  });

  const totalClicks = analyticsData?.reduce((sum: number, day: AnalyticsData) => sum + day.clicks, 0) || 0;
  const totalImpressions = analyticsData?.reduce((sum: number, day: AnalyticsData) => sum + day.impressions, 0) || 0;
  const totalConversions = analyticsData?.reduce((sum: number, day: AnalyticsData) => sum + day.conversions, 0) || 0;
  const totalSpend = analyticsData?.reduce((sum: number, day: AnalyticsData) => sum + day.spend, 0) || 0;

  const engagementData = [
    { name: 'Clicks', value: totalClicks },
    { name: 'Impressions', value: totalImpressions },
    { name: 'Conversions', value: totalConversions },
  ];

  const chartConfig = {
    clicks: { label: 'Clicks', color: '#6366f1', icon: MousePointer },
    impressions: { label: 'Impressions', color: '#3b82f6', icon: Eye },
    conversions: { label: 'Conversions', color: '#06b6d4', icon: ShoppingCart },
    spend: { label: 'Spend', color: '#84cc16', icon: DollarSign },
  };

  if (isLoading) {
    return <div>Loading analytics data...</div>;
  }

  if (isError) {
    return <div>Error loading analytics data.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <h1 className="text-lg font-semibold">Analytics Dashboard</h1>
          <Badge variant="secondary">Demo</Badge>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue={timeRange} className="mb-4">
          <TabsList>
            <TabsTrigger value="7d" onClick={() => setTimeRange('7d')}>7 Days</TabsTrigger>
            <TabsTrigger value="30d" onClick={() => setTimeRange('30d')}>30 Days</TabsTrigger>
            <TabsTrigger value="90d" onClick={() => setTimeRange('90d')}>90 Days</TabsTrigger>
          </TabsList>
          <TabsContent value="7d">
            <p className="text-sm text-muted-foreground">Analytics data for the last 7 days.</p>
          </TabsContent>
          <TabsContent value="30d">
            <p className="text-sm text-muted-foreground">Analytics data for the last 30 days.</p>
          </TabsContent>
          <TabsContent value="90d">
            <p className="text-sm text-muted-foreground">Analytics data for the last 90 days.</p>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white shadow rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
              <MousePointer className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalClicks.toLocaleString()}</div>
              <p className="text-sm text-gray-500">
                <TrendingUp className="inline-block w-4 h-4 mr-1 text-green-500 align-middle" />
                {((totalClicks / (analyticsData?.length || 1)) || 0).toFixed(2)} avg / day
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
              <Eye className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalImpressions.toLocaleString()}</div>
              <p className="text-sm text-gray-500">
                <TrendingUp className="inline-block w-4 h-4 mr-1 text-green-500 align-middle" />
                {((totalImpressions / (analyticsData?.length || 1)) || 0).toFixed(2)} avg / day
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
              <ShoppingCart className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalConversions.toLocaleString()}</div>
              <p className="text-sm text-gray-500">
                <TrendingUp className="inline-block w-4 h-4 mr-1 text-green-500 align-middle" />
                {((totalConversions / (analyticsData?.length || 1)) || 0).toFixed(2)} avg / day
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalSpend.toLocaleString()}</div>
              <p className="text-sm text-gray-500">
                <TrendingDown className="inline-block w-4 h-4 mr-1 text-red-500 align-middle" />
                ${((totalSpend / (analyticsData?.length || 1)) || 0).toFixed(2)} avg / day
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="bg-white shadow rounded-lg">
            <CardHeader>
              <CardTitle>Engagement Overview</CardTitle>
              <CardDescription>Clicks, Impressions, and Conversions</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={engagementData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {
                        engagementData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                      }
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-white shadow rounded-lg">
            <CardHeader>
              <CardTitle>Performance Over Time</CardTitle>
              <CardDescription>Clicks, Impressions, Conversions, and Spend</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData || []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="clicks" stroke="var(--color-clicks)" strokeWidth={2} />
                    <Line type="monotone" dataKey="impressions" stroke="var(--color-impressions)" strokeWidth={2} />
                    <Line type="monotone" dataKey="conversions" stroke="var(--color-conversions)" strokeWidth={2} />
                    <Line type="monotone" dataKey="spend" stroke="var(--color-spend)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
