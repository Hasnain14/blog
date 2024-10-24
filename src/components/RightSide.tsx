import { Box, Typography } from "@mui/material"

const RightSide = () => {
    return (
        <Box
            flex={2}
            padding={2}
            sx={{
                display: { xs: "none", sm: "block" }
            }}>
            <Box position="fixed">
                <Typography variant="h6" fontWeight={700}>
                    Recent Blogs
                </Typography>
            </Box>
        </Box>
    )
}

export default RightSide