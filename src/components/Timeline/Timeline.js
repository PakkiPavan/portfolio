import React from 'react';
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { useTheme } from '@emotion/react';
import { workExperience } from '../../data/workExperience';


const Experience = () => {
    const [showKnowMoreDialog, setShowKnowMoreDialog] = React.useState(false);
    const [knowMoreDialogTitle, setKnowMoreDialogTitle] = React.useState("");
    const [currentCompanyName, setCurrentCompanyName] = React.useState();
    const theme = useTheme();
    // console.log(theme);


    const renderKnowMoreDialog = () => {
        // console.log("currentCompanyName", currentCompanyName);
        // console.log(workExperience[currentCompanyName]);
        let companyClients=workExperience[currentCompanyName];
        for(let clientName in companyClients){
            console.log(clientName);
            console.log(companyClients[clientName]);
        }
        return (
            <Dialog
                open={showKnowMoreDialog}
                onClose={() => setShowKnowMoreDialog(false)}
            >
                <DialogTitle>
                    {knowMoreDialogTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => setShowKnowMoreDialog(false)}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        )
    };

    const handleKnowMoreBtnClick = (dialogTitle) => {
        console.log(workExperience);
        setCurrentCompanyName(dialogTitle);
        setKnowMoreDialogTitle(`${dialogTitle} Work Experience`);
        setShowKnowMoreDialog(true);
    };

    return (
        <>
            {showKnowMoreDialog && renderKnowMoreDialog()}
            <Card variant="outlined">
                <CardContent>
                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent color="text.secondary">
                                2021-Present
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent
                                // className="timelineCard"
                                sx={{
                                    position: 'relative',
                                    '&:before': {
                                        content: '" "',
                                        height: '0',
                                        position: 'absolute',
                                        top: '8px',
                                        width: '0',
                                        zIndex: '1',
                                        left: '5px',
                                        border: `medium solid ${theme.palette.background.paper}`,
                                        borderWidth: '10px 10px 10px 0',
                                        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
                                    }
                                }}
                            >
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            Accenture
                                        </Typography>
                                        <div>Frontend developer</div>
                                        <Button
                                            onClick={() => handleKnowMoreBtnClick('Accenture')}
                                            sx={{
                                                border: 'none !important',
                                                outline: 'none !important',
                                                color: 'cornflowerblue',
                                                background: 'none',
                                                padding: '0',
                                                textTransform: 'inherit'
                                            }}
                                        >
                                            Know More
                                        </Button>
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
                                        <Typography variant="h6" component="div">
                                            Tata Consultancy Services(TCS)
                                        </Typography>
                                        <div>Frontend developer</div>
                                        <Button
                                            onClick={() => handleKnowMoreBtnClick('Tata Consultancy Services(TCS)')}
                                            sx={{
                                                border: 'none !important',
                                                outline: 'none !important',
                                                color: 'cornflowerblue',
                                                background: 'none',
                                                padding: '0',
                                                textTransform: 'inherit'
                                            }}
                                        >
                                            Know More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </CardContent>
            </Card>
        </>
    )
}

export default Experience
