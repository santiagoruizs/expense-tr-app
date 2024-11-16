import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenu,
    SidebarMenuButton
  } from "@/components/ui/sidebar"
  import { Home, PiggyBank, HandCoins  } from "lucide-react"
  import { LogOutDialog } from "./LogOutDialog"
  import { Link } from "react-router-dom"

  const items = [
    {
      title: "Home",
      url: "/account",
      icon: Home,
    },
    {
      title: "Records",
      url: "/records",
      icon: HandCoins,
    },
    {
        title: "Savings",
        url: "/savings",
        icon: PiggyBank,
      }
    
  ]
  export function SideBar() {

    return (
        <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarHeader/>
            <SidebarContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <LogOutDialog />
            </SidebarMenu>       
        </SidebarFooter>
      </Sidebar>
    )
  }
  