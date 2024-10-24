import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
  return (
    <Card className="flex-1">
         <CardHeader>
   <div className="flex items-center justify-center">
        <CardTitle className="text-lg sm:text-xl text-gray-800">
                Ultimos clientes
        </CardTitle>
        <CircleDollarSign className="ml-auto w-4 h-4"/>
    </div>
        <CardDescription>
            Novos cleines nas ultimas 24 horas
        </CardDescription>
        </CardHeader>

        <CardContent>

            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                <AvatarImage src="https://i.pinimg.com/enabled_lo/474x/22/99/19/229919d2b283d7a8689dabfb9e1fd0c3.jpg" />
                <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Billie Elish</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">Billieelish@gmail.com</span>
                </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                <AvatarImage src="https://avatars.githubusercontent.com/u/149891676?v=4" />
                <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Bianca Bones</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">Biasstore@gmail.me</span>
                </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                <AvatarImage src="https://i.pinimg.com/enabled_lo/236x/56/46/02/5646027951b9d3f6543b2f0d6de080cb.jpg" />
                <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Liseth Selene</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">Lisethselene@gmail.com</span>
                </div>
            </article>

        </CardContent>
    </Card>
  )
}