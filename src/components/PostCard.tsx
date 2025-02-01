// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

// interface ExpandMoreProps extends IconButtonProps {
//     expand: boolean;
// }

interface Post {
    userId: number;
    id: number;
    postTitle: string;
    postBody: string;
}


// const ExpandMore = styled((props: ExpandMoreProps) => {
//     const { ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme }) => ({
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
//     variants: [
//         {
//             props: ({ expand }) => !expand,
//             style: {
//                 transform: 'rotate(0deg)',
//             },
//         },
//         {
//             props: ({ expand }) => !!expand,
//             style: {
//                 transform: 'rotate(180deg)',
//             },
//         },
//     ],
// }));

export default function PostCard({ postTitle, postBody }: Post) {

    // console.log(data);
    return (
        <Card sx={{ Width: "90%", margin: "7px" }}>
            <CardHeader
                sx={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={postTitle}

                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://img.freepik.com/free-photo/delicious-lobster-gourmet-seafood_23-2151713033.jpg?t=st=1727613125~exp=1727616725~hmac=7f9e6159fd9fae6cea2344603ac5061ada903ca7f557545b555f32d24dc4d901&w=740"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2"
                    sx={{
                        textTransform: "capitalize"
                    }}>
                    {/* title */}
                    {postBody}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
