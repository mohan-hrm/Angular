import { Input, Directive } from '@angular/core';
import { SidebarSection } from '../../shared/config/sidebar-menus';

@Directive()
export abstract class BaseSidebar {
  @Input() collapsed = false;
  menu: SidebarSection[] = [];

  toggleItem(item: any) {
    item.expanded = !item.expanded;
  }
}
