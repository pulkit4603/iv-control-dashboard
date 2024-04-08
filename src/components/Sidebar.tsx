'use client';


import UserItem from "./UserItem";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
import { Hospital, Bed, CalendarCheck, UserPlus, CalendarPlus, Radio } from "lucide-react";

export default function Sidebar() {
    const menuItemsList = [
        {
            group: "IV Control",
            items: [
                {
                    name: "All Beds",
                    icon: <Bed />,
                    path: "/ivs"
                },
                {
                    name: "Connect New",
                    icon: <Radio />,
                    path: "/ivs/add"
                }
            ]
        },
        {
            group: "Patients",
            items: [
                {
                    name: "All Patients",
                    icon: <Hospital />,
                    path: "/patients"
                },
                {
                    name: "Add New",
                    icon: <UserPlus />,
                    path: "/patients/add"
                }
            ]
        },
        {
            group: "Appointments",
            items: [
                {
                    name: "All Appointments",
                    icon: <CalendarCheck />,
                    path: "/appointments"
                },
                {
                    name: "Create New",
                    icon: <CalendarPlus />,
                    path: "/appointments/add"
                }
            ]
        }
    ]

    return <div className="flex flex-col gap-4 w-[300px] min-w-[300px]: border-r min-h-screen p-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
        <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>
                {menuItemsList.map((menu: any, key: number) => (
                    <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) =>
                            <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                {option.icon}
                                {option.name}
                            </CommandItem>)}
                    </CommandGroup>
                ))}
            </CommandList>
        </Command>

        </div>
        <div>Notifications</div>
        <div>Settings</div>
        <div>Logout</div>
    </div>

}