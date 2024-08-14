import React from 'react';
import { Box, Typography, Card, CardContent, Grid, List, ListItem, ListItemText } from '@mui/material';
import Chart from 'react-apexcharts';
import { FitnessCenter, Fastfood, Assignment, People } from '@mui/icons-material';

const FitnessDashboard = () => {
    const chartOptions = {
        chart: {
            id: 'workouts-chart',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yaxis: {
            title: {
                text: 'Workouts',
            },
        },
        colors: ['rgb(255, 83, 83)'],
    };

    const chartSeries = [{
        name: 'Workouts',
        data: [30, 40, 35, 50, 49, 60, 70],
    }];

    const recentActivities = [
        { date: '2024-08-01', activity: 'John completed a 5km run' },
        { date: '2024-08-02', activity: 'Anna started a new diet plan' },
        { date: '2024-08-03', activity: 'Mark reached his weight goal' },
        { date: '2024-08-04', activity: 'Sophia logged her progress' },
    ];

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Fitness Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <FitnessCenter sx={{ fontSize: 40, color: 'rgb(255, 83, 83)', mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Active Workouts</Typography>
                                    <Typography variant="h4">1,234</Typography>
                                    <Typography color="textSecondary">Up from yesterday</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <Fastfood sx={{ fontSize: 40, color: 'rgb(255, 83, 83)', mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Active Diet Plans</Typography>
                                    <Typography variant="h4">876</Typography>
                                    <Typography color="textSecondary">Up from yesterday</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <Assignment sx={{ fontSize: 40, color: 'rgb(255, 83, 83)', mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Active Appointments</Typography>
                                    <Typography variant="h4">456</Typography>
                                    <Typography color="textSecondary">Up from yesterday</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <People sx={{ fontSize: 40, color: 'rgb(255, 83, 83)', mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">Total Active Users</Typography>
                                    <Typography variant="h4">1,200</Typography>
                                    <Typography color="textSecondary">Stable since last week</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Weekly Workouts</Typography>
                            <Chart options={chartOptions} series={chartSeries} type="line" height="300" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Recent Activities</Typography>
                            <List>
                                {recentActivities.map((activity, index) => (
                                    <ListItem key={index}>
                                        <ListItemText
                                            primary={activity.activity}
                                            secondary={activity.date}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FitnessDashboard;
