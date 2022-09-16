---
id: All
sidebar_position: 4
---

# Older

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