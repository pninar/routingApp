# v1
1. each module has its own sidebar component
2. sidebar component of the module has the sideBarLinks property - does not include the module path in the url of the link.

# v1.1
1. since the modules main component all had pretty much the same html, the html of each module was moved to app.component.html, leaving just a <router-outlet></router-outlet> in its 
main component's html file
2. AppComponent has a sideBarLinks property and subscribes to changes of the sidebarlinks 
3. app.component.html contains a <shared-side-menu> tag, setting its sideBarLinks property to its sideBarLinks property
4. each module has a sideBarLinks property and calls this.utilityService.changeSideBarLinks(this.sideBarLinks); to change the sidebar links
5. each module, when defining the urls of the  links in the sideBarLinks property, must define the full module path (modulePath/componentPath)
