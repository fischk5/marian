---
sidebar_position: 4
id: 'release-notes'
---
# Product Updates  
  
  
## v0.4.2  
*Released January 20, 2024*  

**Major Changes**  
- User mentions across chat, posts, descriptions, and comments  
  
**Minor Changes**  
- Notifications expire instead of being deleted  
- Visual improvements to KPI page  

**Fixed Bugs**  
- Fix the jumpy nature of the sidebar when switching from private to network workspaces  
- Fixed issue where the "Set project alignment" dropdown visually disappeared behind the component titles  
- Fixed workspace member calculation error in the Workspaces menu  
- Fixed issue where deploying a workspace component from a network template created it in the origin workspace
  
## v0.4.1 

**Major Changes**  
- Initial rollout of workspace chat  
- Introduce project templates 
- Allow transforming a list into a board, and vice versa  
- Improved workspace management with pins
  
**Minor Changes**  
- Allow email notifications when someone assigns a task to you  
- Allow settings to auto-assign tasks a user creates to themself  
- Board templates now include all the tasks  
- Templates now support any attached resources or goals  
- Support moving tasks between lists and boards isntead of only between like workstreams  
- On hover of a profile picture, display information about the user  
- Support updating the due date from My Desk

**Fixed Bugs**  
- Orphan goals previously associated with deleted KPIs are now removed too  
- Remove errant KPI updates when loading the KPI  
- Workspaces without a banner image no longer jump as much
  
  
## v0.4.0

**Major Changes**  
- Soft launch of paid Tetheros: removing beta references  
- User settings allow an email to be sent to you when someone assigns you a task
  
**Minor Changes**  
- License management and literature improvements  
- Landing page graphic and layout improvements  
- Workspaces in the navigation dropdown are alphabetized  
- Posts now support hyperlinks  
- Resources page search bar is less strict  
- When creating a workspace in a network you can start with teams added

**Fixed Bugs**  
- Issue where clicking on a profile picture in the board filter navigated the user to the profile page instead of filtering  
- Issue where changing the selected task in the calendar view displayed the wrong due date
  
## v0.3.0  

**Major Changes**  
- MyDesk design now displays more focused, interactive information  
- Restored the Workspace dashboard  
- Workspace banners now appear above the feed
  
**Minor Changes**  
- Workspace feeds can now be filtered by user posts or updates  
- Updated landing page design  
- Added a calendar to the Network page  
- Calendar cells are bottomless now  
- Visual improvements to the project page  
- KPIs display their open goals

**Fixed Bugs**  
- Workspace sidebar no longer bugs out because of stickiness    
  
## v0.2.8  

**Major Changes**  
- Visual overhaul of posts and addition of reactions
- Major utility additions to the calendar view  
- Create resources directly from a task
  
**Minor Changes**  
- Tag page now features a calendar view  
- Performance enhancements for calendar  
- Updates now have a dedicated post on the feed  
- Removed the owner and Related Items widget from the KPI page
- Allow linking Resources to Tasks  

**Fixed Bugs**  
- Creating a new workstream failed when trying to align with an existing project  
- Adding a new task to a board placed the task in the second or third position instead of the first  
- Search bar of assignments didn't search by task name, only by description  
- When there are too many people in a team they are cut off in the modal   
  
## v0.2.7  
**Major Changes**  
- Completing a task triggers a celebration  
- Completely rebuilt List component experience  
- Introducing the Task Creation Megabar for Lists and Boards
  
**Minor Changes**  
- Boards have a new user interface  
- Lists have been redesigned to use a standard heading  
- Updated full screen task modal user interface  
- Removed card colors on boards and the full screen task modal  
- Added tooltips to board column headings and long component names

**Fixed Bugs**  
- The owner filter on boards and lists behaved backwards  
- Issue where the Lexical text editor stole focus from other inputs on the page  
  
## v0.2.6.1
**Major Changes**  
- None  
  
**Minor Changes**  
- Visual indicators now show if other users in your workspace have been active recently  
- Improvements to language on the landing page  
- Descriptions now support rich text  
- Profile page visual improvements  
- Sidebar expansion behavior keeps a local memory of what has been expanded

**Fixed Bugs**  
- Visual glitch where workspace dropdown appeared below the project expansion arrow 
  
## v0.2.6
**Major Changes**  
- Significant network membership management improvements  
- Custom network workspace roles  
  
**Minor Changes**  
- Invite multiple people to a network at once  
- Ability to invite someone to a specific network workspace without a team  
- Update sidebar navigation  
- Adding a workstream to a project no longer redirects you to the new workstream  
- Workstreams in a project are now alphabetized

**Fixed Bugs**  
- Fixed the wrong password behavior that stopped a toast from appearing  

## v0.2.5
**Major Changes**  
- Introducing Timeline: a visual aggregation of different workstreams  
- Cards on a board can be assigned a color  
- Removed projects and goals from the Network level
  
**Minor Changes**  
- Assignment table filters behave more intuitively  
- Task popup performance improvements  
- Network workspaces are now decorated with a verification badge  
- Board performance improvements  
  
**Fixed Bugs**  
- Creating a post in a workspace updates user activity  
- Fixed flickering when moving cards around on a board
  
## v0.2.4
**Major Changes**  
- Introducing Tags: add hashtags to descriptions to organize them together and view in one place  
- Boards now have a search and filter function  
- Significant visual improvements to the assignments tables
  
**Minor Changes**  
- Allow re-broadcasting a workspace's onboarding message  
- Added a copy button to resources to quickly copy the raw link
- New users receive an original handle in the format of {{first name}}{{last name}}, if available   
- Posts can be edited by the user posting them  
- Remove the weekly card view from My Desk for now  
- Allow creating a new workspace from the main workspaces page  
- Small visual improvements to About and Onboarding display

**Fixed Bugs**  
- Visual height issues with Calendars 
- Fix delete button that didn't work in the task popup modal  
- Visual bug with small screens that caused the sidebar to cover the main content
  
## v0.2.3
**Major Changes**  
- Directly link resources to projects  
- Workspace onboarding messages 
  
**Minor Changes**  
- Completed tasks are now documented on the right side of the Workspace Feed  
- Change component description text to black  
- Improved Resources page appearance
  
**Fixed Bugs**  
- Resolve lag and display issues that presented when switching between workspace components too quickly  

## v0.2.2
**Major Changes**  
- Introduction of Key Results while deprecating Goal workspace component  
- Reintroduce Project Goals to Project Page 
- Sidebar workspace dropdown navigation  
- Reactivated and improved user onboarding wizard  
  
**Minor Changes**  
- Update visual layout of the task page  
- Visual updates to home feed sidebar and workspace sidebar  
- Increase allowable profile picture file size to 2M (from 50kb)  
- Update visual appearance of Tasks indicator on Project pages  
- Add new visuals to home page using Undraw  
- New lists and board wizard prompts and allows only one parent project at creation  
- Remove support for Trello importing (temporary)  
- Remove auto assignment of new task to the user creating it
  
**Fixed Bugs**  
- Favicon wasn't loading  
- Lag and visual page quirks when quickly changing components in a workspace  
- Restore KPI updates that weren't loading  
- Login redirect wasn't working properly

## v0.2.1
**Major Changes**  
- Initiatives are now Projects  
- Significant UI change to Projects (previously called Initiatives)  
- Updated sidebar in workspace and home  
- Updated header menu
- Create lists and boards directly in project  
- Host the landing page in the main app  
- Added a lead generation form for those interested in the Pro plan
  
**Minor Changes**  
- Components have a breadcrumb showing where they fit in the workspace  
- Component descriptions are easier to edit  
- Lists can now be aligned with projects during the traditional creation form  
- Improved component loading during fast switching  
- Move `About` information to the sidebar of Lists, Goals, and Projects (previously called Initiatives)  
- Remove boards and lists from the assignment dashboard of Projects (previously called Initiatives) for a more actionable view
  
**Fixed Bugs**  
- Description text resizes based on scrollheight instead of line breaks  
- Fix component fetching overwriting display names being actively edited
- Fix routing problem when user session expires but localStorage indicates they are still authenticated
  
## v0.2.0
**Major Changes**  
- License-driven permissions  
- User-specific assignments in My Desk  
- `initiatives` show all related assignments based on due date  
- Manage all assignment due dates and owners from the Workspace dashboard  
- Log private workspace user activity
  
**Minor Changes**  
- Home feed only includes workspace posts  
- Component CRUD operations shown on right sidebar of workspace home feed  
- Unify the date modal styles across the application  
- Update `board` styles to match other components
  
**Fixed Bugs**  
- Where inviting a new user via email twice brought an empty user shell into the workspace  
- Where `board` behavior with high card movement lagged in updating  
- Where workspace settings did not properly load the name into the input


## v0.1.22  
**Major Changes**  
- Initiatives now have a calendar that shows all aligned objects with dates or completions  
- Invite users to a private workspaces via email
  
**Minor Changes**  
- Log network activity to measure active users on a license  
- Update the styling on the Goal form to match other areas of Tetheros  
- Add `KPI` and `Resource` to the catalog  
- Capture the completor of a workspace component as the assigned user, or the user that marked it complete (if unassigned)
  
**Fixed Bugs**  
Unfortunately, all existing bugs survived this release.  

## v0.1.21  
**Major Changes**  
- Significant improvement to KPI interactions  
- Allow users to reset their passwords while authenticated
  
**Minor Changes**  
- Show percentage complete of workspace components in the sidebar  
- Update sidebar links to guide users to feedback portal and documentation site  
- Allow initiatives to track raw work, like boards and lists  
- Allow users to delete posts made to the workspace feed  
- Capture additional metadata (`creator_id` and `completor_id`) to WorkspaceComponents for future analytics  
  
**Fixed Bugs**  
Unfortunately, all existing bugs survived this release.
## v0.1.20  
**Major Changes**  
- Add first version of `resources`: links to digital locations  
- Rebuild hyperlinking in posts, descriptions, and comments  
- Modify the assignment behavior tooling for a better, more modern, experience
  
**Minor Changes**  
- Remove workspace filter from My Desk  
- Show loading symbol for My Desk  
- Add a search feature for linking goals or subgoals  
  
**Fixed Bugs**  
- New users no longer errantly redirected to /welcome after new registration  
- Context shown in sidebar now refreshes more accurately when quickly changing focused component  
- Calendar "show more" modal no longer appears off screen
## v0.1.19  
**Major Changes**  
- Overhaul task, goal, and initiative pages with sidebar and more information at a glance  
- Increase private workspace user limit to 40  
- Improve User, Role, Team, and Workspace management for Networks  
- Massively improve the function and role of Initiatives in a workspace  
- Introduce Initiatives at the network level
  
**Minor Changes**  
- Fix Bug: descriptions of components overwrote with previous state on render  
- Fix bug: login redirection on incorrect password  
- Small improvements to the calendar appearance and function  
- New tasks appear at the top of columns and lists  
- Load comments faster 
- Load MyDesk faster 
- Show network workspaces in the sidebar  
- Visual improvements to cards on a board  
- Allow most titles to be updated inline instead of through a modal  
- Improved navigation among aligned components  
- Handle status change impacts on server side (state assignments for tasks on a board)  
- Improved network membership and security
  
## v0.1.18  
**Major Changes**  
- RBAC in Networks  
- My Desk calendar improvements: filter by workspace  
- Add new application users to a Convertkit tag when signing up  
- Limited opening of a token-based API for managing KPIs
  
**Minor Changes**  
- Routing accommodations for landing pages when unauthenticated  
- Allow new private workspace members to receive a role when being added  
- Improved board performance  
- Calendars now show components on date they were completed, regardless of whether or not they had a due date  
- Allow deleting of network teams

## v0.1.17  
**Major Changes**  
- Require users added to a private workspace to be assigned to a role
  
**Minor Changes**  
- Support routing for the landing page microservice  
- Fix visual bugs on the feedback form  
- Fix bug that prevented editing the task page description  
- Fix routing bug that impacted network membership and team updates
  
## v0.1.16  
**Major Changes**  
- Support importing Boards from Trello
- Introduce Memberships, which connect Users to Teams/Workspaces/Networks, and Teams to Workspaces  
- Introduce Roles, which tune the permissions one has in a specific context (private workspace, network, or network workspace) 
  
**Minor Changes**  
- Update user management menus  
- Permanently display sidebar  

## v0.1.15  
**Major Changes**  
- Formalize the onboarding process for new users and workspace setup  
  
**Minor Changes**  
- Add minor text formatting capabilities to posts  
- Load calendar data more effectively  
- Fix workspace memberships for creators and network admins
  
## v0.1.14  
**Major Changes**  
- Add a breakdown of work for each user in a workspace in the dashboard  
- Create templates from board components now  
- Ability to import private workspaces into a network if you are the admin
  
**Minor Changes**  
- Dynamically display workspace and network options depending on the user's role  
- Show a "Complete Now" button for active components close to completion  
- Update styles of tables around the workspaces to be more unified  
- Move cards to other boards
- Move tasks to other lists
  
## v0.1.13  
**Major Changes**  
- Introduction of Networks  
- Restriction of common license (free) to disallow creation of new private workspaces after a limit

## v0.1.12  
**Major Changes**  
- Overhaul the modal for task editing to be more comprehensive and useful  
- Updated the board appearance
  
**Minor Changes**  
- Add some responsive behavior to lists
- Create hyperlinks from text that looks link-y
- Match styles of the task page to match other updates around the app  
- Reduce lag on tooltips that appear in the sidebar
- Fix the "add marker" modal issue where add button looked unconvincing  
- Prevent users from registering with email addresses that aren't actually emails
- Add parent items to the context if the original item is an unbonded primitive  
- Update symbol and card styles for completed items

## v0.1.11  
**Major Changes**  
- Initialize the home feed algorithm  
- Create the Story attribute for efficient updates  
- Add Priority sidebar to Workspace and Home feeds
  
**Minor Changes**  
- Introduce limited ability for Posts and Descriptions to automatically turn URLs into hyperlinks  
- Improve performance of task rearranging on Lists  
- Fix Goal calculation problems and display   
  
## v0.1.10  
**Major Changes**  
- Significant adjustment to overall UI and themes  
- Overhauled My Desk to position for richer feature set.  Added Workspace-centric view of assignments
  
**Minor Changes**  
- Fixed a bug that prevented Goals from properly calculating progress if they had markers with no recorded progress  
- Improved API response on frontend to redirect for missing or unauthorized pages  
- Renamed Context Network to Alignment Tree  
- Slight improvements to board lag when quickly moving cards around  
  
## v0.1.9  
**Major Changes**  
- Added a new component: KPI  
    - Tracks a single metric
    - Usable in goal setting
- Updated the visual and functional appearance of goals  
- Created a notifications engine and added the following notify-able scenarios:  
    - Someone else assigns a component to the user  
    - Someone else changes the state of a component assigned to the user  
    - Someone else comments on a component owned by the user  
    - Someone adds the user to a worskpace
  
**Minor Changes**  
- Removed `priority` sorting from lists to simplify  
- Fixed card styles to provide better word wrap behavior  
- Fixed a bug where creating a goal without a due date resulted in a due date of 1969  
- Update visual styling on boards:  
    - Columns are scrollable to avoid leaving the top of the page  
    - Visual styles provide more contrast  
- Allow creation of a new List component directly from the Templates page  
- Minor updates to the Description field on a Task page for clarity and stylistic continuity

## v0.1.8  
**Major Changes**  
- Add support for profile pictures (500kb limit)  
- Add ability to create and manage List templates  
  
**Minor Changes**  
- A post is now created when a component is moved to complete  
- Fixed bug where progress wouldn't account for children that had a progress value of 0  
- Subtasks are now shown on the Edit modal for list tasks  
- Minor update to card styles on boards
  
## v0.1.7  
**Major Changes**  
- Build the context API to provide information about alignment to any component  
- Add ability to create Templates for lists.  Will be expanded to other components in future releases.  
  
**Minor Changes**  
- Fixed bug where duplicate columns created when a new Board is created  
- Updated appearance, controls, and location of the Edit Task modals  
- Fixed bug where completing a task from the Task page didn't update the Board state (if the task had a parent that was a Board)  
  
## v0.1.6  
**Major Changes**  
- Add **subtasks** to Task component
- Remove the edit modal in favor of inline editing  
    - Task page
    - Board view  
- Redesign of Task page
  
**Minor Changes**  
- Pull back information show on My Desk  
- Automatically redirect user to home if they remove themself from a workspace  
- Automatically delete workspaces that don't have any users in them  
- Moving a task to another list automatically updates both lists progress  
- Updated favicon and logo for Apple devices  

## v0.1.5  
**Major Changes**  
- Significant update to My Work for utility and visual appeal  
- Enable sidebar to collapse and expand  
  
**Minor Changes**  
- Small sidebar visual enhancements  
- Updated header with Logo  
- Temporary update to board color catalog  
- Removed the `Add to toolbar` interaction  
- Add small buffer to bottom of all pages to enable ease of access to on-screen elements while still showing the floating toolbar  
  
## v0.1.4  
**Major Changes**  
- Created the User Tray - a quick access, floating toolbar for navigation and notifications  
- Allow default colors for Card creation (Boards only)
  
**Minor Changes**  
-  Renamed catalog sections:  
    - Strategy -> Strategic Direction  
    - Planning -> Outcome Planning  
    - Work -> Work Tracking  
- Add logo to the header bar  
- Use logo for the favicon  
- Add a `last_logged_in` entry to the User Model  
- Restrict new alignments to items that have been completed in the last month or newer  
- Updated alignment menu to match styles of the Markers menus

## v0.1.3  
**Major Changes**  
- New work object: Boards, a 2D method of moving work from start to finish  
- Added a full workflow and visual helpers to move items from `Active` to `Completed` and appropriately deals with the component's `progress`  
  
**Minor Changes**  
- Shifted all components to use a new standard model attribute, `progress`  
- Small improvements to List drag and drop to reduce lag and flicker 
- Changed `My Work` to `My Desk` and modified some language  
- Added list of user Workspaces to `My Desk`    
  
## v0.1.2  
**Major Changes**  
- Visual redesign of the Task page  
- Update design of the My Work (User Assignments) panel with more context    
  
**Minor Changes**  
- Added a keyboard shortcut for Lists to open the detailed creation view  
- Enable ability to transfer list items to another list  
- Unassign users removed from a workspace from all components  
- Deleting a list also deletes all tasks in that list  
- Reconcile all existing component.status entries  
- Add a confirmation menu when a user wants to delete a workspace  
- Update list progress when a task is deleted  

## v0.1.1  
**Major Changes**  
- Added a *workspace dashboard* page to summarize state of workspace  
- Improve new workspace workflow to include a *Getting Started* checklist  
  
**Minor Changes**  
- Addressed manifest logos to use temporary Tetheros logo  
- Put profile pages (`/user`) behind authentication  
- Tooltip hover timing on sidebar items to help with experience  
- Setup `About` to redirect to `/welcome` page  
- Renamed `Team` to `Members` in a workspace  
- Redirect the user to the workspace they just created  
- Improved the display and workflow of Task editing:  
    - Users that start typing in the Quick add then click the plus button will carry their input over to the detailed Task creation modal  
    - Move the `Delete`, `Restore` and `Complete` buttons in the modal to the top right for clarity
- Flag components in an `archived` status with a pill to denote they are no longer active  
- Add a `date_completed` attribute and a `completed` attribute to workspace components for use in lifecycle analysis

## v0.1.0  
Initial significant release.  
  
Alpha.  
