import { AppBar, styled, Toolbar, Typography } from "@mui/material"
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import InputBase from '@mui/material/InputBase';
import { useGetAllPostQuery } from "../app/service/demmyData";
import { ChangeEvent, useState } from "react";
import { useDebounce } from "../hook";


interface PostData {
    id: number;
    title: string;
}

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    width: "100%"

});

const StyleSearchBar = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
    position: "relative"
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

    // const debounce = (fn: (e: ChangeEvent<HTMLInputElement>) => void, delay: number) => {
    //     let timeoutID: number;
    //     return (...args: [e: ChangeEvent<HTMLInputElement>]) => {
    //         const context = this;
    //         if (timeoutID) {
    //             clearTimeout(timeoutID);
    //             timeoutID = setTimeout(() => {
    //                 fn.apply(context, args);
    //             }, delay)
    //         }
    //     }
    // }

    // const handleChange = debounce(handleSearch, 300)

    return (
        <AppBar position="sticky">
            <Toolbar>
                <StyleToolbar>
                    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                        HASNAIN
                    </Typography>
                    <NoteAltIcon sx={{ display: { xs: "block", sm: "none" } }} />
                    <StyleSearchBar><InputBase onChange={handleSearch} placeholder="Search..." />

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

                    </StyleSearchBar>
                    <StyleProfile>search</StyleProfile>
                </StyleToolbar>
            </Toolbar>

        </AppBar>
    )
}

export default NavBar
