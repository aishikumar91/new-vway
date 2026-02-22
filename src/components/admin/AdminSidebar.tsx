import { FileText, Image, Calendar, BookOpen, Settings, LayoutDashboard, LogOut, DollarSign, Mail, MessageSquare, Activity, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const contentItems = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Pages", url: "/admin/pages", icon: FileText },
  { title: "Blog Posts", url: "/admin/blog", icon: BookOpen },
  { title: "Events", url: "/admin/events", icon: Calendar },
  { title: "Gallery", url: "/admin/gallery", icon: Image },
  { title: "Donations", url: "/admin/donations", icon: DollarSign },
  { title: "Newsletter", url: "/admin/newsletter", icon: Mail },
  { title: "Contact", url: "/admin/contact-submissions", icon: MessageSquare },
];

const systemItems = [
  { title: "Visitor Activity", url: "/admin/activity", icon: Activity },
  { title: "Audit & Security", url: "/admin/audit", icon: Shield },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { signOut, user } = useAuth();

  return (
    <Sidebar className="border-r border-border">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-sm">V</span>
          </div>
          <div>
            <p className="font-display font-bold text-sm text-foreground">VHAY Admin</p>
            <p className="text-xs text-muted-foreground truncate max-w-[140px]">{user?.email}</p>
          </div>
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Content Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className="hover:bg-muted/50" activeClassName="bg-muted text-primary font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System & Security</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className="hover:bg-muted/50" activeClassName="bg-muted text-primary font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto p-4 border-t border-border">
        <button
          onClick={signOut}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors w-full"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
        <a href="/" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mt-2">
          &larr; Back to website
        </a>
      </div>
    </Sidebar>
  );
}
