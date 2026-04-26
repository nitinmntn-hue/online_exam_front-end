"use client";
import { CollectionsBookmark } from '@mui/icons-material';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function Examination() {
    const exams = [
        { examid: 1, examName: "Dummy1", examdate: '12-05-2026', examTime: '12:24 PM', examStatus: 'active', publiceBy: "Info@exam.com" },
        { examid: 2, examName: "Dummy2", examdate: '12-04-2026', examTime: '12:24 PM', examStatus: 'active', publiceBy: "Info@exam.com" },
        { examid: 3, examName: "Dummy3", examdate: '12-08-2026', examTime: '12:24 PM', examStatus: 'active', publiceBy: "Info@exam.com" },
        { examid: 4, examName: "Dummy4", examdate: '12-04-2026', examTime: '12:24 PM', examStatus: 'active', publiceBy: "Info@exam.com" },
        { examid: 5, examName: "Dummy5", examdate: '12-12-2026', examTime: '12:24 PM', examStatus: 'active', publiceBy: "Info@exam.com" },
    ]
    return (
        <>
            <Box sx={{
                maxWidth: 1200, minHeight: "100vh", display: "flex", flexDirection: 'column', alignItems: "center",
                pt: 12, pb: 8, position: "relative",
            }}>
                <Box>
                    <Typography >
                        Get all Exam
                    </Typography>
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S.no</TableCell>
                            <TableCell>Exam Name</TableCell>
                            <TableCell>Exam Date & Time</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {exams.map((exam) =>
                        (
                            <TableRow key={exam.examid}>
                                <TableCell>
                                    {exam.examid}
                                </TableCell><TableCell>
                                    {exam.examName}
                                </TableCell><TableCell sx={{display:'flex', flexDirection:'column'}}>
                                    <Typography>
                                        {exam.examdate}
                                    </Typography>
                                    <Typography>
                                        {exam.examTime}
                                    </Typography>
                                </TableCell><TableCell>
                                    {exam.examStatus}
                                </TableCell>
                            </TableRow>
                        )
                        )}

                    </TableBody>
                </Table>
            </Box>
        </>
    );
}