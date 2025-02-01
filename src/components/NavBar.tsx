import { AppBar, Toolbar, Typography } from "@mui/material"
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import InputBase from '@mui/material/InputBase';
import { useGetAllPostQuery } from "../app/service/demmyData";
import { ChangeEvent, useState } from "react";
import { useDebounce } from "../hook";
import { styled, Theme } from '@mui/material/styles';


interface PostData {
    id: number;
    title: string;
}

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    width: "100%"

});


const StyleSearchBar = styled('div')(({ theme }: { theme: Theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    width: '100%', // Default width

    [theme.breakpoints.up('xs')]: {
        width: '80%', // Extra small screens
    },
    [theme.breakpoints.up('sm')]: {
        width: '50%', // Small screens
    },

}));


const SearchShow = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    // width: '100%',
    position: "absolute",
    left: 0,
    right: 0,
    top: '40px',
    height: 'auto',
    maxHeight: '250px',
    overflow: 'auto',
    color: 'blue'
}));

const StyleProfile = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    color: "blue",
    textTransform: "uppercase",

}));

const ListShow = styled('li')(({ theme }) => ({
    padding: '5px 0px',
    textTransform: 'capitalize',
    borderRadius: theme.shape.borderRadius,

}));

const NavBar = () => {
    const { data, isLoading } = useGetAllPostQuery();
    const [searchData, setSearchData] = useState<PostData[]>([]);
    const debouncedSearchTerm = useDebounce(searchData, 500);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const searchKey = e.target.value;
        if (searchKey !== "") {
            const filter_data = data?.filter((postData: { title: string; }) =>
                postData.title.toLowerCase().includes(searchKey.toLowerCase()));
            setSearchData(filter_data || []);
        } else {
            setSearchData([]);
        }

    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <StyleToolbar>
                    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                        HASNAIN
                    </Typography>
                    <NoteAltIcon sx={{ display: { xs: "block", sm: "none" } }} />
                    <StyleSearchBar sx={{ display: { width: { xs: "100%", sm: "60%" } } }}><InputBase onChange={handleSearch} placeholder="Search..." />

                        {isLoading && <SearchShow>Loading.....</SearchShow>}
                        {
                            debouncedSearchTerm.length > 0 && (
                                <SearchShow>
                                    <ul >
                                        {
                                            debouncedSearchTerm.map((search) => (
                                                <ListShow key={search.id} >
                                                    {search.title}
                                                </ListShow>
                                            ))
                                        }
                                    </ul>
                                </SearchShow>
                            )
                        }

                    </StyleSearchBar >
                    <StyleProfile sx={{ display: { xs: "none", sm: "block" } }}>Profile</StyleProfile>
                </StyleToolbar>
            </Toolbar>

        </AppBar>
    )
}

export default NavBar
