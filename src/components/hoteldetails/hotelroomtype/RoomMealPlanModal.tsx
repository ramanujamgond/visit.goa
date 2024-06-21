import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface RoomMealPlanModalProps {
  isOpen: boolean;
  toggleDialog: (value: boolean) => void;
}
const RoomMealPlanModal: React.FC<RoomMealPlanModalProps> = ({
  isOpen,
  toggleDialog,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={toggleDialog}>
      <div className="relative w-full h-64 rounded-xl cursor-pointer">
        <DialogTrigger asChild></DialogTrigger>
      </div>
      <DialogContent className="w-full max-w-[980px] z-[2000]">
        <h1>Hello</h1>
      </DialogContent>
    </Dialog>
  );
};
export default RoomMealPlanModal;
