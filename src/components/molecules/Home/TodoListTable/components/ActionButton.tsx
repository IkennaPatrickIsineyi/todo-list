import IconButton from "@/components/atoms/Buttons/IconButton";
import { TodoTableActionType } from "@/types/home/index.type";
import { Delete, Edit } from "@mui/icons-material";

type Props = {
  type: TodoTableActionType;
  action: (id: string) => void;
  id: string;
};

export default function ActionButton({ type, action, id }: Props) {
  return (
    <IconButton
      handleClick={() => {
        action(id);
      }}
      icon={
        type === "edit" ? (
          <Edit sx={{ fontSize: 14 }} />
        ) : (
          <Delete sx={{ fontSize: 14 }} />
        )
      }
      laptopPadding={1}
    />
  );
}
