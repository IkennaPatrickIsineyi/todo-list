import IconButton from "@/components/atoms/Buttons/IconButton";
import FlexGrow from "@/components/atoms/FlexGrow";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";
import CreateTodoForm from "./CreateTodoForm";

export default function Heading() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleOpenCreateForm = () => {
    setShowCreateForm(true);
  };

  const handleCloseForm = () => {
    setShowCreateForm(false);
  };

  return (
    <Box display="flex" alignItems={"center"} maxWidth="100%" flex={1}>
      Your schedule for today
      <FlexGrow />
      <IconButton
        handleClick={handleOpenCreateForm}
        laptopPadding={1}
        icon={<Add sx={{ fontSize: 16 }} />}
        bgcolor="primary.main"
        color="white"
      />
      {showCreateForm && <CreateTodoForm handleClose={handleCloseForm} />}
    </Box>
  );
}
