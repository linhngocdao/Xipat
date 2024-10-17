import { BlockStack, Button, Card, Grid, Page, Text } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  // Fake data for subscription
  const subscriptionData = [
    { day: "Day 1", subscriptions: 10 },
    { day: "Day 2", subscriptions: 45 },
    { day: "Day 3", subscriptions: 60 },
    { day: "Day 4", subscriptions: 50 },
    { day: "Day 5", subscriptions: 30 },
    { day: "Day 6", subscriptions: 15 },
    { day: "Day 7", subscriptions: 40 },
  ];

  // Fake data for revenue
  const revenueData = [
    { month: "Jan", revenue: 3000 },
    { month: "Feb", revenue: 3500 },
    { month: "Mar", revenue: 2800 },
    { month: "Apr", revenue: 3200 },
    { month: "May", revenue: 3800 },
    { month: "Jun", revenue: 3600 },
  ];

  return (
    <Page title="Dashboard">
      <div className="mb-2">
        <Button icon={CalendarIcon}>Last 7 days</Button>
      </div>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <Card>
            <BlockStack>
              <Text variant="headingMd" as="h2">
                Subscription
              </Text>
              <Text variant="headingLg" as="p">
                306
              </Text>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={subscriptionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="subscriptions"
                    stroke="#ff7979"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </BlockStack>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <Card>
            <BlockStack>
              <Text variant="headingMd" as="h2">
                Revenue
              </Text>
              <Text variant="headingLg" as="p">
                $3040
              </Text>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#ff7979" />
                </BarChart>
              </ResponsiveContainer>
            </BlockStack>
          </Card>
        </Grid.Cell>
      </Grid>
    </Page>
  );
};

export default Dashboard;
