import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";
import { Badge } from "lucide-react";

interface BookingItemProps {
  serviceName: string;
  barbershopName: string;
  barbershoImageUrl: string;
  date: Date;
}

const BookingItem = ({
  serviceName,
  barbershopName,
  barbershopImageUrl,
  date,
}) => {
  return (
    <Card className="flex w-full min-w-full flex-row items-center justify-between p-0">
      {/* ESQUERDA */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Badge>Confirmado</Badge>

        <div className="flex flex-col gap-2">
          <p className="font-bold">{serviceName}</p>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={barbershopImageUrl} />
            </Avatar>
            <p className="text-muted-foregroud text-sm">{barbershopName}</p>
          </div>
        </div>
      </div>

      {/* ESQUERDA */}
      <div className="flex h-full flex-col items-center justify-center border-l p-4 py-3">
        <p className="text-xs capitalize">
          {date.toLocaleDateString("pt-BR", { month: "long" })}
        </p>
        <p>{date.toLocaleDateString("pt-BR", { day: "2-digit" })}</p>
        <p className="text-xs capitalize">
          {date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </Card>
  );
};

export default BookingItem;
