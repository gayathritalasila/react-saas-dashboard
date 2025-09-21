import * as React from "react";
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Checkbox,
    Avatar,
    Chip,
    TableContainer,
    Paper,
    Pagination,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const orders = [
    {
        id: "#CM9801",
        user: { name: "Natali Craig", avatar: "/avatars/1.png" },
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: { label: "In Progress", color: "info" },
    },
    {
        id: "#CM9802",
        user: { name: "Kate Morrison", avatar: "/avatars/2.png" },
        project: "CRM Admin pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: { label: "Complete", color: "success" },
    },
    {
        id: "#CM9803",
        user: { name: "Drew Cano", avatar: "/avatars/3.png" },
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: { label: "Pending", color: "primary" },
    },
    {
        id: "#CM9804",
        user: { name: "Orlando Diggs", avatar: "/avatars/4.png" },
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: { label: "Approved", color: "warning" },
    },
    {
        id: "#CM9805",
        user: { name: "Andi Lane", avatar: "/avatars/5.png" },
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: { label: "Rejected", color: "default" },
    },
    {
        id: "#CM9806",
        user: { name: "John Lane", avatar: "/avatars/5.png" },
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 6, 2023",
        status: { label: "Approved", color: "warning" },
    },
];

export default function OrderList() {
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5;

    const handleSelect = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const paginatedOrders = orders.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );


    return (
        <Box sx={{ p: 3 }}>
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    gap: 1,
                }}
            >
                <IconButton size="small" sx={{ bgcolor: "#F3F4F6" }}>
                    <AddIcon />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: "#F3F4F6" }}>
                    <FilterListIcon />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: "#F3F4F6" }}>
                    <SortIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <TextField
                    size="small"
                    placeholder="Search"
                    variant="outlined"
                    sx={{
                        maxWidth: 200,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            fontSize: "0.875rem",
                        },
                    }}
                />
            </Box>

            {/* Table */}
            <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox"></TableCell>
                            {["Order ID", "User", "Project", "Address", "Date", "Status"].map((header) => (
                                <TableCell key={header}>
                                    <Typography
                                        sx={{
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "13px",
                                            lineHeight: "18px",
                                            letterSpacing: 0,
                                            color: "text.secondary",
                                        }}
                                    >
                                        {header}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedOrders.map((order) => (
                            <TableRow
                                key={order.id}
                                hover
                                selected={selected.includes(order.id)}
                                sx={{ "&:hover": { bgcolor: "#F9FAFB" } }}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selected.includes(order.id)}
                                        onChange={() => handleSelect(order.id)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 400,
                                        ontSize: "14px",
                                        fontColor: "rgba(28,28,28,1)",
                                        lineHeight: "18px",
                                        letterSpacing: 0,
                                        color: "text.primary",
                                    }}>{order.id}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Avatar src={order.user.avatar} alt={order.user.name} sx={{ width: 28, height: 28 }} />
                                        <Typography sx={{
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 400,
                                            ontSize: "14px",
                                            fontColor: "rgba(28,28,28,1)",
                                            lineHeight: "18px",
                                            letterSpacing: 0,
                                            color: "text.primary",
                                        }}>{order.user.name}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 400,
                                        ontSize: "14px",
                                        fontColor: "rgba(28,28,28,1)",
                                        lineHeight: "18px",
                                        letterSpacing: 0,
                                        color: "text.primary",
                                    }}>{order.project}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 400,
                                        ontSize: "14px",
                                        fontColor: "rgba(28,28,28,1)",
                                        lineHeight: "18px",
                                        letterSpacing: 0,
                                        color: "text.primary",
                                    }}>{order.address}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                        <CalendarMonthIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                                        <Typography sx={{
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            fontColor: "rgba(28,28,28,1)",
                                            lineHeight: "18px",
                                            letterSpacing: 0,
                                            color: "text.primary",
                                        }}>{order.date}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={order.status.label}
                                        color={order.status.color}
                                        size="small"
                                        variant={order.status.color === "default" ? "outlined" : "filled"}
                                        sx={{
                                            fontSize: "0.85rem",
                                            textTransform: "none",
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Pagination
                    count={Math.ceil(orders.length / rowsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    shape="rounded"
                    siblingCount={1}
                    boundaryCount={1}
                    color="primary"
                    sx={{
                        "& .MuiPaginationItem-root": {
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "18px",
                            color: "rgba(28,28,28,1)",
                            borderRadius: "8px",
                        },
                        "& .Mui-selected": {
                            backgroundColor: "rgba(0, 123, 255, 0.1)",
                            color: "rgba(0, 123, 255, 1)",
                            fontWeight: 500,
                        },
                    }}
                />
            </Box>

        </Box>
    );
}
