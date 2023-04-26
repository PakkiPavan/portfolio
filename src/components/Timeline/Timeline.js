import React from 'react';
import './Timeline.css';
import { Card, CardContent } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';


const Experience = () => {

    return (
        <Card variant="outlined">
            <CardContent>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2021-Present
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card sx={{
                                // position: "relative",
                                // marginLeft: "20px",
                                // padding: "20px",
                            }}
                                className="myCard"
                            >
                                <CardContent>
                                    {/* <div className="arrow" /> */}
                                    Accenture
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            2018-2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <CardContent>
                                    Tata Consultancy Services
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </CardContent>
        </Card>
    )
}

export default Experience
