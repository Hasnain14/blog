import { Box } from "@mui/material";
import { useGetAllPostQuery } from "../app/service/demmyData";
import PostCard from "./PostCard";


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const AllPost = () => {
    const { data, isLoading } = useGetAllPostQuery();

    // console.log(data)

    if (isLoading) {
        <h1>loading...</h1>
    }

    return (
        <Box flex={4} padding={2}>
            {/* <PostCard data={data[1].title} /> */}

            {data?.map((bPost: Post) => (
                // <h1 key={bPost.id}>{bPost.title}</h1>
                <PostCard key={bPost.id} postTitle={bPost.title} postBody={bPost.body} userId={0} id={0} />
            ))}
        </Box>
    );
}

export default AllPost;