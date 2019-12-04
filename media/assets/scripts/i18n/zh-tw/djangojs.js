

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%curr% of %total%": "%curr% / %total%",
    "(If left blank, owner will be admin)": "(\u5982\u679c\u70ba\u7a7a\uff0c\u64c1\u6709\u8005\u5c07\u70ba\u7ba1\u7406\u54e1)",
    "(current notification)": "\uff08\u7576\u524d\u901a\u77e5\uff09",
    "(current version)": "(\u7576\u524d\u7248\u672c)",
    "1 Year": "1 \u5e74",
    "1 month ago": "1\u500b\u6708\u4e4b\u524d",
    "1 week ago": "1\u5468\u4e4b\u524d",
    "3 days ago": "3\u5929\u524d",
    "30 Days": "30 \u5929",
    "7 Days": "7 \u5929",
    "A file with the same name already exists in this folder.": "\u8a72\u8cc7\u6599\u593e\u4e0b\u6709\u540c\u540d\u6a94\u6848\u3002",
    "About": "\u95dc\u65bc",
    "About Us": "\u95dc\u65bc\u6211\u5011",
    "Accept": "\u63a5\u53d7",
    "Accepted": "\u5df2\u7d93\u63a5\u53d7",
    "Accepter": "\u63a5\u53d7\u8005",
    "Access Log": "\u700f\u89bd\u65e5\u8a8c",
    "Actions": "\u64cd\u4f5c",
    "Activated": "\u5df2\u958b\u901a",
    "Activated Users": "\u958b\u901a\u7528\u6236",
    "Active": "\u5553\u52d5",
    "Active Users": "\u6d3b\u8e8d\u7528\u6236\u6578",
    "Activities": "\u6a94\u6848\u6d3b\u52d5",
    "Add": "\u65b0\u589e",
    "Add Admins": "\u65b0\u589e\u7ba1\u7406\u54e1",
    "Add Library": "\u65b0\u589e\u8cc7\u6599\u5eab",
    "Add Member": "\u6dfb\u52a0\u6210\u54e1",
    "Add Terms and Conditions": "\u589e\u52a0\u8edf\u4ef6\u4f7f\u7528\u689d\u6b3e",
    "Add User": "\u65b0\u589e\u4f7f\u7528\u8005",
    "Add admin": "\u65b0\u589e\u7ba1\u7406\u54e1",
    "Add auto expiration": "\u589e\u52a0\u81ea\u52d5\u904e\u671f",
    "Add institution": "\u65b0\u589e\u6a5f\u69cb",
    "Add new notification": "\u65b0\u589e\u65b0\u901a\u77e5",
    "Add password protection": "\u589e\u52a0\u5bc6\u78bc\u4fdd\u8b77",
    "Add user": "\u65b0\u589e\u7528\u6236",
    "Added": "\u5df2\u65b0\u589e",
    "Added user {user}": "\u5df2\u65b0\u589e\u4f7f\u7528\u8005 {user}",
    "Admin": "\u7ba1\u7406",
    "Admin Logs": "\u7ba1\u7406\u54e1\u65e5\u8a8c",
    "Admins": "\u7ba1\u7406\u54e1",
    "All": "\u5168\u90e8",
    "All Groups": "\u6240\u6709\u7fa4\u7d44",
    "All Notifications": "\u6240\u6709\u901a\u77e5",
    "All Public Links": "\u5168\u90e8\u516c\u5171\u9023\u7d50",
    "All file types": "\u6240\u6709\u6a94\u6848\u985e\u578b",
    "Allow new user registrations. Uncheck this to prevent anyone from creating a new account.": "\u5141\u8a31\u7528\u6236\u8a3b\u518a\u3002\u5982\u679c\u95dc\u9589\u6b64\u529f\u80fd\uff0c\u5c07\u7981\u6b62\u4efb\u4f55\u4eba\u9032\u884c\u8a3b\u518a\u3002",
    "An integer that is greater than or equal to 0.": "\u5927\u65bc\u7b49\u65bc 0 \u7684\u6574\u6578\u3002",
    "Anonymous User": "\u533f\u540d\u7528\u6236",
    "Are you sure you want to clear trash?": "\u78ba\u5b9a\u8981\u6e05\u7a7a\u56de\u6536\u7ad9\u55ce\uff1f",
    "Are you sure you want to delete %s ?": "\u78ba\u5b9a\u8981\u522a\u9664 %s \u55ce\uff1f",
    "Are you sure you want to delete the selected user(s) ?": "\u78ba\u5b9a\u8981\u522a\u9664\u9078\u4e2d\u7684\u7528\u6236\u55ce\uff1f",
    "Are you sure you want to restore this library?": "\u78ba\u5b9a\u8981\u9084\u539f\u8a72\u8cc7\u6599\u5eab\uff1f",
    "Are you sure you want to unlink this device?": "\u78ba\u5b9a\u8981\u65b7\u958b\u6b64\u8a2d\u5099\u7684\u9023\u63a5\u55ce\uff1f",
    "Audio": "\u97f3\u983b",
    "Avatar": "\u982d\u50cf",
    "Avatar:": "\u982d\u50cf\uff1a",
    "Back": "\u8fd4\u56de",
    "Broken (please contact your administrator to fix this library)": "\u640d\u58de (\u8acb\u806f\u7e6b\u60a8\u7684\u7ba1\u7406\u54e1\u4f86\u4fee\u5fa9\u8a72\u8cc7\u6599\u5eab)",
    "Can not copy directory %(src)s to its subdirectory %(des)s": "\u4e0d\u80fd\u628a\u76ee\u9304 %(src)s \u8907\u88fd\u5230\u5b83\u7684\u5b50\u76ee\u9304 %(des)s \u4e2d",
    "Can not move directory %(src)s to its subdirectory %(des)s": "\u4e0d\u80fd\u628a\u76ee\u9304 %(src)s \u79fb\u52d5\u5230\u5b83\u7684\u5b50\u76ee\u9304 %(des)s \u4e2d",
    "Cancel": "\u53d6\u6d88",
    "Cancel All": "\u5168\u90e8\u53d6\u6d88",
    "Change": "\u4fee\u6539",
    "Change Password": "\u4fee\u6539\u5bc6\u78bc",
    "Change Password of Library {placeholder}": "\u66f4\u6539\u8cc7\u6599\u5eab {placeholder} \u5bc6\u78bc",
    "Clean": "\u6e05\u7a7a",
    "Clear": "\u6e05\u7a7a",
    "Clear Trash": "\u6e05\u7a7a\u56de\u6536\u7ad9",
    "Clear files in trash and history\uff1a": "\u6e05\u7a7a\u56de\u6536\u7ad9\u548c\u6b77\u53f2\u4fe1\u606f\u4e2d\u7684\u6a94\u6848",
    "Clients": "\u5ba2\u6237\u7aef",
    "Close": "\u95dc\u9589",
    "Close (Esc)": "\u95dc\u9589 (Esc)",
    "Comment": "\u8a55\u8ad6",
    "Comments": "\u8a55\u8ad6",
    "Community Edition": "\u793e\u5340\u7248",
    "Confirm Password": "\u78ba\u8a8d\u5bc6\u78bc",
    "Contact Email": "\u806f\u7e6b\u96fb\u90f5",
    "Contact Email:": "\u806f\u7d61\u96fb\u90f5:",
    "Copy": "\u8907\u88fd",
    "Copy selected item(s) to:": "\u5c07\u5df2\u9078\u689d\u76ee\u8907\u88fd\u5230\uff1a",
    "Count": "\u6578\u91cf",
    "Create At / Last Login": "\u5efa\u7acb\u65bc/\u6700\u5f8c\u767b\u5165",
    "Create Group": "\u5efa\u7acb\u7fa4\u7d44",
    "Create Library": "\u5275\u5efa\u8cc7\u6599\u5eab",
    "Created": "\u5efa\u7acb\u65bc",
    "Created At": "\u5efa\u7acb\u6642\u9593",
    "Created group {group_name}": "\u5efa\u7acb\u7fa4\u7d44 {group_name}",
    "Created library": "\u5efa\u7acb\u4e86\u8cc7\u6599\u5eab",
    "Created library {library_name} with {owner} as its owner": "\u5275\u5efa\u8cc7\u6599\u5eab {library_name} \u7531{owner}\u70ba\u64c1\u6709\u8005",
    "Creator": "\u5efa\u7acb\u8005",
    "Current Connected Devices": "\u7576\u524d\u9023\u63a5\u7684\u8a2d\u5099",
    "Current Library": "\u7576\u524d\u8cc7\u6599\u5eab",
    "Current Path: ": "\u7576\u524d\u8def\u5f91\uff1a",
    "Current Version": "\u7576\u524d\u7248\u672c",
    "Current path: ": "\u7576\u524d\u8def\u5f91\uff1a",
    "Custom file types": "\u81ea\u5b9a\u7fa9\u6a94\u6848\u985e\u578b",
    "Database": "\u8cc7\u6599\u5eab",
    "Date": "\u65e5\u671f",
    "Default": "\u9810\u8a2d",
    "Delete": "\u5220\u9664",
    "Delete Account": "\u522a\u9664\u5e33\u865f",
    "Delete Group": "\u5220\u9664\u7fa4\u7ec4",
    "Delete Institution": "\u522a\u9664\u6a5f\u69cb",
    "Delete Library": "\u522a\u9664\u8cc7\u6599\u5eab",
    "Delete Member": "\u5220\u9664\u6210\u54e1",
    "Delete Notification": "\u522a\u9664\u901a\u77e5",
    "Delete Organization": "\u522a\u9664\u5718\u9ad4",
    "Delete Time": "\u522a\u9664\u6642\u9593",
    "Delete User": "\u522a\u9664\u4f7f\u7528\u8005",
    "Delete files from this device the next time it comes online.": "\u5728\u6b64\u8a2d\u5099\u4e0b\u6b21\u4e0a\u7dda\u6642\u522a\u9664\u6b64\u8a2d\u5099\u4e0a\u7684\u6587\u4ef6\u3002",
    "Deleted": "\u5df2\u522a\u9664",
    "Deleted Libraries": "\u5df2\u522a\u9664\u7684\u8cc7\u6599\u5eab",
    "Deleted Time": "\u522a\u9664\u6642\u9593",
    "Deleted directories": "\u522a\u9664\u7684\u76ee\u9304",
    "Deleted files": "\u522a\u9664\u7684\u6587\u4ef6",
    "Deleted group {group_name}": "\u5df2\u522a\u9664\u7fa4\u7d44 {group_name}",
    "Deleted library": "\u5df2\u522a\u9664\u7684\u8cc7\u6599\u5eab",
    "Deleted library {library_name}": "\u522a\u9664\u8cc7\u6599\u5eab {library_name}",
    "Deleted user {user}": "\u522a\u9664\u4f7f\u7528\u8005 {user}",
    "Description": "\u63cf\u8ff0",
    "Desktop": "\u684c\u9762\u5ba2\u6236\u7aef",
    "Detail": "\u4fee\u6539\u5167\u5bb9",
    "Details": "\u8a73\u60c5",
    "Device": "\u8a2d\u5099",
    "Device Name": "\u8a2d\u5099\u540d\u7a31",
    "Devices": "\u8a2d\u5099",
    "Diff": "\u5dee\u7570",
    "Directory": "\u76ee\u9304",
    "Disable Two-Factor Authentication": "\u505c\u7528\u5169\u6b65\u9a57\u8b49",
    "Document convertion failed.": "\u6587\u6a94\u8f49\u63db\u5931\u6557\u3002",
    "Documents": "\u6587\u6a94",
    "Don't keep history": "\u4e0d\u4fdd\u7559\u6b77\u53f2",
    "Don't replace": "\u4e0d\u53d6\u4ee3",
    "Download": "\u4e0b\u8f09",
    "Edit": "\u7de8\u8f2f",
    "Edit failed.": "\u6b0a\u9650\u4fee\u6539\u5931\u6557",
    "Edit succeeded": "\u6b0a\u9650\u4fee\u6539\u6210\u529f",
    "Email": "\u96fb\u5b50\u90f5\u4ef6",
    "Enable Two-Factor Authentication": "\u555f\u7528\u5169\u6b65\u9a57\u8b49",
    "Enable two factor authentication": "\u958b\u555f\u5169\u6b65\u9a57\u8b49",
    "Encrypt": "\u52a0\u5bc6",
    "Encrypted library": "\u52a0\u5bc6\u8cc7\u6599\u5eab",
    "Error": "\u932f\u8aa4",
    "Errors": "\u932f\u8aa4",
    "Exit System Admin": "\u9000\u51fa\u7cfb\u7d71\u7ba1\u7406",
    "Expiration": "\u904e\u671f\u6642\u9593",
    "Expired": "\u5df2\u904e\u671f",
    "Expired at": "\u5230\u671f\u65e5",
    "Export Excel": "\u5c0e\u51fa\u5230 Excel",
    "Failed": "\u5931\u6557",
    "Failed to copy %(name)s": "\u8907\u88fd %(name)s \u5931\u6557",
    "Failed to move %(name)s": "\u79fb\u52d5 %(name)s \u5931\u6557",
    "Failed. Please check the network.": "\u64cd\u4f5c\u5931\u6557\u3002\u8acb\u6aa2\u67e5\u7db2\u7d61\u662f\u5426\u5df2\u9023\u63a5\u3002",
    "Favorites": "\u6536\u85cf\u593e",
    "File": "\u6a94\u6848",
    "File Upload": "\u4e0a\u50b3\u6a94\u6848",
    "File Uploading...": "\u6587\u4ef6\u4e0a\u50b3\u4e2d...",
    "File download is disabled: the share link traffic of owner is used up.": "\u6a94\u6848\u4e0b\u8f09\u5df2\u7981\u7528\uff1a\u5916\u93c8\u64c1\u6709\u8005\u7684\u6d41\u91cf\u5df2\u7528\u5b8c\u3002",
    "Files": "\u6a94\u6848",
    "Folder": "\u8cc7\u6599\u593e",
    "Folder Permission": "\u76ee\u9304\u6b0a\u9650",
    "Folders": "\u8cc7\u6599\u593e",
    "Force user to change password when account is newly added or reset by admin": "\u5f37\u5236\u65b0\u7528\u6236\u6216\u88ab\u7ba1\u7406\u54e1\u91cd\u7f6e\u4e86\u5bc6\u78bc\u7684\u7528\u6236\uff0c\u5728\u4e0b\u6b21\u767b\u5165\u6642\u4fee\u6539\u5bc6\u78bc",
    "Force user to use a strong password when sign up or change password.": "\u5f37\u5236\u5728\u65b0\u7528\u6236\u8a3b\u518a\u6642\u6216\u7528\u6236\u4fee\u6539\u5bc6\u78bc\u6642\u4f7f\u7528\u5f37\u529b\u5bc6\u78bc\u3002",
    "Freeze user account when failed login attempts exceed limit.": "\u7576\u7528\u6236\u767b\u5165\u5931\u6557\u8d85\u904e\u9650\u5236\u6642\uff0c\u51cd\u7d50\u7528\u6236\u5e33\u6236\u3002",
    "Generate": "\u751f\u6210\u9023\u7d50",
    "Grid": "\u683c\u9ede",
    "Group": "\u7fa4\u7d44",
    "Group Permission": "\u7fa4\u7d44\u6b0a\u9650",
    "Groups": "\u7fa4\u7d44",
    "Guest": "\u8a2a\u5ba2",
    "Handled": "\u5df2\u8655\u7406",
    "Help": "\u4f7f\u7528\u5e6b\u52a9",
    "History": "\u6b77\u53f2",
    "History Setting": "\u6b77\u53f2\u8a2d\u5b9a",
    "IP": "IP",
    "If turn on, the desktop clients will not be able to sync a folder outside the default Seafile folder.": "\u5982\u679c\u555f\u7528\u6b64\u529f\u80fd\uff0c\u684c\u9762\u5ba2\u6236\u7aef\u5c07\u4e0d\u80fd\u540c\u6b65Seafile\u76ee\u9304\u5916\u7684\u8cc7\u6599\u593e\u3002",
    "If you don't have any device with you, you can access your account using backup codes.": "\u5982\u679c\u4f60\u8eab\u908a\u6c92\u6709\u8a2d\u5099\uff0c\u53ef\u4ee5\u900f\u904e\u5099\u7528\u9a57\u8b49\u78bc\u4f86\u767b\u5165\u5e33\u6236\u3002",
    "Image": "\u5716\u7247",
    "Images": "\u5716\u7247",
    "In all libraries": "\u5728\u6240\u6709\u8cc7\u6599\u5eab",
    "Inactive": "\u4e0d\u5553\u52d5",
    "Info": "\u8cc7\u8a0a",
    "Input file extensions here, separate with ','": "\u8f38\u5165\u6a94\u6848\u526f\u6a94\u540d\uff0c\u4ee5','\u5206\u9694",
    "Institutions": "\u6a5f\u69cb",
    "Internal Server Error": "\u4f3a\u670d\u5668\u5167\u90e8\u932f\u8aa4",
    "Invalid destination path": "\u76ee\u6a19\u8def\u5f91\u7121\u6548",
    "Invitations": "\u9080\u8acb",
    "Invite People": "\u9080\u8acb",
    "Invite Time": "\u9080\u8acb\u6642\u9593",
    "Invited at": "\u9080\u8acb\u6642\u9593",
    "Inviter": "\u9080\u8acb\u4eba",
    "It is required.": "\u5fc5\u586b\u9805\u3002",
    "Keep full history": "\u4fdd\u7559\u6240\u6709\u6b77\u53f2",
    "LDAP": "LDAP",
    "LDAP(imported)": "LDAP (\u5df2\u5c0e\u5165)",
    "Language": "\u8a9e\u8a00",
    "Language Setting": "\u8a9e\u8a00\u8a2d\u5b9a",
    "Last Access": "\u6700\u5f8c\u700f\u89bd\u6642\u9593",
    "Last Login": "\u4e0a\u6b21\u767b\u5165",
    "Last Update": "\u66f4\u65b0\u6642\u9593",
    "Leave Share": "\u9000\u51fa\u5171\u4eab",
    "Libraries": "\u8cc7\u6599\u5eab",
    "Libraries shared as writable can be downloaded and synced by other group members. Read only libraries can only be downloaded, updates by others will not be uploaded.": "\u4ee5\u53ef\u8b80\u5beb\u65b9\u5f0f\u5171\u4eab\u7684\u8cc7\u6599\u5eab\u53ef\u4ee5\u88ab\u5176\u4ed6\u7fa4\u7d44\u6210\u54e1\u4e0b\u8f09\u548c\u540c\u6b65\uff0c\u800c\u4ee5\u552f\u8b80\u65b9\u5f0f\u5171\u4eab\u7684\u8cc7\u6599\u5eab\u53ea\u80fd\u88ab\u4e0b\u8f09\uff0c\u5176\u4ed6\u4eba\u7684\u4fee\u6539\u5c07\u4e0d\u6703\u88ab\u4e0a\u50b3\u3002",
    "Library": "\u8cc7\u6599\u5eab",
    "Library Type": "\u8cc7\u6599\u5eab\u985e\u578b",
    "Limits": "\u7528\u6236\u6578\u9650\u5236",
    "Link": "\u93c8\u7d50",
    "Linked Devices": "\u5df2\u9023\u63a5\u7684\u8a2d\u5099",
    "Links": "\u9023\u7d50",
    "List": "\u5217\u8868",
    "Location": "\u4f4d\u7f6e",
    "Lock": "\u9396\u5b9a",
    "Log out": "\u9000\u51fa",
    "Logs": "\u65e5\u8a8c",
    "Manage Members": "\u7ba1\u7406\u6210\u54e1",
    "Member": "\u6210\u54e1",
    "Members": "\u6210\u54e1",
    "Message (optional):": "\u9644\u52a0\u6d88\u606f(\u53ef\u9078)\uff1a",
    "Mobile": "\u79fb\u52d5\u5ba2\u6236\u7aef",
    "Modification Details": "\u4fee\u6539\u8a73\u60c5",
    "Modified": "\u4fee\u6539\u4e86",
    "Modified files": "\u5df2\u4fee\u6539\u6587\u4ef6",
    "Modifier": "\u4fee\u6539\u8005",
    "Month:": "\u6708\u4efd\uff1a",
    "More": "\u66f4\u591a",
    "More Operations": "\u66f4\u591a\u64cd\u4f5c",
    "Move": "\u79fb\u52d5",
    "Move selected item(s) to:": "\u5c07\u5df2\u9078\u689d\u76ee\u79fb\u52d5\u5230\uff1a",
    "My Groups": "\u6211\u7684\u7fa4\u7d44",
    "My Libraries": "\u6211\u7684\u8cc7\u6599\u5eab",
    "Name": "\u540d\u7a31",
    "Name is required": "\u540d\u7a31\u70ba\u5fc5\u586b\u9805",
    "Name is required.": "\u5fc5\u9808\u586b\u5beb\u540d\u5b57\u3002",
    "Name should not include '/'.": "\u540d\u5b57\u4e0d\u80fd\u5305\u542b \u2018/\u2019\u3002",
    "Name(optional)": "\u540d\u5b57(\u53ef\u9078)",
    "New": "\u65b0\u5efa",
    "New Excel File": "\u65b0\u5efaExcel\u6587\u4ef6",
    "New File": "\u65b0\u5efa\u6587\u4ef6",
    "New Folder": "\u65b0\u5efa\u8cc7\u6599\u593e",
    "New Group": "\u65b0\u5efa\u7fa4\u7d44",
    "New Library": "\u65b0\u5efa\u8cc7\u6599\u5eab",
    "New Markdown File": "\u65b0\u5efaMarkdown\u6587\u4ef6",
    "New Password": "\u65b0\u5bc6\u78bc",
    "New Password Again": "\u518d\u6b21\u8f38\u5165\u65b0\u5bc6\u78bc",
    "New PowerPoint File": "\u65b0\u5efaPowerPoint\u6587\u4ef6",
    "New Word File": "\u65b0\u5efaWord\u6587\u4ef6",
    "New directories": "\u65b0\u76ee\u9304",
    "New files": "\u65b0\u6587\u4ef6",
    "New password is too short": "\u65b0\u5bc6\u78bc\u592a\u77ed",
    "New passwords don't match": "\u5169\u6b21\u8f38\u5165\u7684\u65b0\u5bc6\u78bc\u4e0d\u4e00\u81f4",
    "Next": "\u4e0b\u4e00\u9801",
    "Next (Right arrow key)": "\u4e0b\u4e00\u5f35 (\u53f3\u65b9\u5411\u9375)",
    "No comment yet.": "\u9084\u6c92\u6709\u8a55\u8ad6",
    "No connected devices": "\u6c92\u6709\u9023\u4e0a\u7684\u5ba2\u6236\u7aef",
    "No deleted libraries.": "\u6c92\u6709\u5df2\u522a\u9664\u7684\u8cc7\u6599\u5eab",
    "No groups": "\u6c92\u6709\u7fa4\u7d44",
    "No libraries": "\u6c92\u6709\u8cc7\u6599\u5eab",
    "No library is shared to this group": "\u9084\u6c92\u6709\u8cc7\u6599\u5eab\u5171\u4eab\u5230\u7fa4\u7d44",
    "No members": "\u66ab\u7121\u6210\u54e1",
    "No result": "\u6c92\u6709\u7d50\u679c",
    "No sync errors": "\u6c92\u6709\u540c\u6b65\u932f\u8aa4",
    "None": "\u7121",
    "Note: Settings via web interface are saved in database table (seahub-db/constance_config). They have a higher priority over the settings in config files.": "\u6ce8\u610f\uff1a\u900f\u904eWeb\u754c\u9762\u8a2d\u5b9a\u7684\u9078\u9805\u6703\u5132\u5b58\u5728\u6578\u64da\u5eab(seahub-db / constance_config)\u4e2d\u3002\u4ed6\u5011\u6bd4\u914d\u7f6e\u6a94\u6848\u4e2d\u7684\u8a2d\u5b9a\u6709\u66f4\u9ad8\u7684\u512a\u5148\u7d1a\u3002",
    "Notification Detail": "\u901a\u77e5\u5167\u5bb9",
    "Notifications": "\u901a\u77e5",
    "Number of days that keep user sign in.": "\u4fdd\u6301\u767b\u5165\u7684\u65e5\u6578\u3002",
    "Number of groups": "\u7fa4\u7d44\u6578\u91cf",
    "Off": "\u95dc\u9589",
    "Old Password": "\u820a\u5bc6\u78bc",
    "On": "\u958b\u555f",
    "Only keep a period of history:": "\u50c5\u4fdd\u7559\u4e00\u6bb5\u6642\u9593\u7684\u6b77\u53f2:",
    "Open in New Tab": "\u5728\u65b0\u6a19\u7c64\u9801\u6253\u958b",
    "Open parent folder": "\u958b\u555f\u7236\u76ee\u9304",
    "Open via Client": "\u5ba2\u6236\u7aef\u6253\u958b",
    "Operation": "\u64cd\u4f5c",
    "Operation succeeded.": "\u64cd\u4f5c\u6210\u529f",
    "Operations": "\u64cd\u4f5c",
    "Organization": "\u5718\u9ad4",
    "Organization Admin": "\u7d44\u7e54\u7ba1\u7406",
    "Organizations": "\u7d44\u7e54",
    "Other Libraries": "\u5176\u4ed6\u8cc7\u6599\u5eab",
    "Owner": "\u64c1\u6709\u8005",
    "Owner can use admin panel in an organization, must be a new account.": "\u64c1\u6709\u8005\u80fd\u4f7f\u7528\u6a5f\u69cb\u7684\u7ba1\u7406\u54e1\u9762\u677f, \u5fc5\u9808\u662f\u4e00\u500b\u65b0\u7684\u5e33\u865f.",
    "Packaging...": "\u6b63\u5728\u5c01\u5305",
    "Password": "\u5bc6\u78bc",
    "Password again": "\u8acb\u518d\u6b21\u8f38\u5165\u5bc6\u78bc",
    "Password is too short": "\u5bc6\u78bc\u592a\u77ed",
    "Password:": "\u5bc6\u78bc\uff1a",
    "Passwords don't match": "\u5169\u6b21\u8f38\u5165\u7684\u5bc6\u78bc\u4e0d\u4e00\u81f4",
    "Permission": "\u8b80\u5beb\u6b0a\u9650",
    "Permission denied": "\u6c92\u6709\u6b0a\u9650",
    "Platform": "\u5e73\u53f0",
    "Please check the network.": "\u8acb\u6aa2\u67e5\u7db2\u7d61\u662f\u5426\u5df2\u9023\u63a5\u3002",
    "Please enter 1 or more character": "\u8acb\u8f38\u5165 1 \u500b\u6216\u66f4\u591a\u5b57\u7b26",
    "Please enter a new password": "\u8acb\u8f38\u5165\u65b0\u5bc6\u78bc\u3002",
    "Please enter days": "\u8acb\u8f38\u5165\u5929\u6578",
    "Please enter password": "\u8acb\u8f38\u5165\u5bc6\u78bc",
    "Please enter the new password again": "\u8acb\u518d\u6b21\u8f38\u5165\u65b0\u5bc6\u78bc",
    "Please enter the old password": "\u8acb\u8f38\u5165\u820a\u5bc6\u78bc\u3002",
    "Please enter the password again": "\u8acb\u518d\u6b21\u8f38\u5165\u5bc6\u78bc",
    "Please input at least an email.": "\u8acb\u8f38\u5165\u81f3\u5c11\u4e00\u500b\u90f5\u7bb1\u3002",
    "Previous": "\u524d\u4e00\u9801",
    "Previous (Left arrow key)": "\u4e0a\u4e00\u5f35 (\u5de6\u65b9\u5411\u9375)",
    "Professional Edition": "\u4f01\u696d\u7248",
    "Profile": "\u8a2d\u5b9a",
    "Profile Setting": "\u500b\u4eba\u8cc7\u8a0a\u8a2d\u5b9a",
    "Read-Only": "\u552f\u8b80",
    "Read-Only library": "\u552f\u8b80\u8cc7\u6599\u5eab",
    "Read-Write": "\u53ef\u8b80\u5beb",
    "Read-Write library": "\u53ef\u8b80\u5beb\u8cc7\u6599\u5eab",
    "Really want to delete your account?": "\u78ba\u5b9a\u8981\u522a\u9664\u8a72\u5e33\u865f\u55ce\uff1f",
    "Refresh": "\u91cd\u65b0\u6574\u7406",
    "Remove": "\u522a\u9664",
    "Removed all items from trash.": "\u6e05\u7a7a\u6240\u6709\u56de\u6536\u7ad9\u7684\u9805\u76ee",
    "Removed items older than {n} days from trash.": "\u6e05\u7a7a\u6240\u6709\u5927\u65bc {n} \u5929\u7684\u9805\u76ee",
    "Rename": "\u91cd\u547d\u540d",
    "Rename File": "\u91cd\u65b0\u547d\u540d\u6587\u4ef6",
    "Rename Folder": "\u91cd\u65b0\u547d\u540d\u76ee\u9304",
    "Renamed or Moved files": "\u91cd\u547d\u540d\u6216\u79fb\u52d5\u7684\u6587\u4ef6",
    "Replace": "\u53d6\u4ee3",
    "Replace file {filename}?": "\u8986\u84cb\u6587\u4ef6 {filename} \uff1f",
    "Replacing it will overwrite its content.": "\u66ff\u63db\u5b83\u6703\u8986\u84cb\u5df2\u6709\u5167\u5bb9\u3002",
    "Reset Password": "\u91cd\u7f6e\u5bc6\u78bc",
    "ResetPwd": "\u91cd\u7f6e\u5bc6\u78bc",
    "Restore": "\u9084\u539f",
    "Restore Library": "\u9084\u539f\u8cc7\u6599\u5eab",
    "Result": "\u641c\u5c0b\u7d50\u679c",
    "Revoke Admin": "\u53d6\u6d88\u7ba1\u7406\u54e1",
    "Role": "\u7528\u6236\u89d2\u8272",
    "Saving...": "\u4fdd\u5b58\u4e2d...",
    "Seafile": "\u6d77\u6587\u4e92\u77e5",
    "Search Files": "\u641c\u5c0b\u6a94\u6848",
    "Search files in this library": "\u5728\u7576\u524d\u8cc7\u6599\u5eab\u641c\u5c0b\u6a94\u6848",
    "See All Notifications": "\u67e5\u770b\u6240\u6709\u63d0\u9192\u3002",
    "Select a group": "\u9078\u64c7\u4e00\u500b\u7fa4\u7d44",
    "Select libraries to share": "\u9078\u64c7\u8981\u5171\u4eab\u7684\u8cc7\u6599\u5eab",
    "Send": "\u767c\u9001",
    "Send activation Email after user registration.": "\u7528\u6236\u8a3b\u518a\u5f8c\u767c\u9001\u958b\u901a\u90f5\u4ef6\u3002",
    "Send to:": "\u767c\u9001\u5230\uff1a",
    "Sending...": "\u767c\u9001\u4e2d...",
    "Server Version: ": "\u4f3a\u670d\u5668\u7248\u672c\uff1a",
    "Set Admin": "\u8a2d\u70ba\u7ba1\u7406\u54e1",
    "Set Quota": "\u8a2d\u5b9a\u5bb9\u91cf",
    "Set to current": "\u8a2d\u70ba\u7576\u524d\u901a\u77e5",
    "Set user name": "\u8a2d\u5b9a\u7528\u6236\u540d\u5b57",
    "Set {placeholder}'s permission": "\u8a2d\u7f6e {placeholder} \u6b0a\u9650",
    "Settings": "\u8a2d\u5b9a",
    "Share": "\u5171\u4eab",
    "Share Admin": "\u5171\u4eab\u7ba1\u7406",
    "Share From": "\u5171\u4eab\u4f86\u6e90",
    "Share Links": "\u5171\u4eab\u7db2\u5740",
    "Share To": "\u5171\u4eab\u7d66",
    "Share existing libraries": "\u5171\u4eab\u5df2\u6709\u8cc7\u6599\u5eab",
    "Share to group": "\u5171\u4eab\u5230\u7fa4\u7d44",
    "Share to user": "\u5171\u4eab\u5230\u7528\u6236",
    "Shared By": "\u5171\u4eab\u4f86\u6e90",
    "Shared Links": "\u5171\u4eab\u7db2\u5740",
    "Shared by: ": "\u5171\u4eab\u4f86\u6e90\uff1a",
    "Shared with all": "\u8207\u6240\u6709\u4eba\u5171\u4eab",
    "Shared with groups": "\u7fa4\u7d44\u5171\u4eab",
    "Shared with me": "\u8207\u6211\u5171\u4eab",
    "Show Codes": "\u986f\u793a\u9a57\u8b49\u78bc",
    "Side Nav Menu": "\u5074\u908a\u5c0e\u822a\u9078\u55ae",
    "Size": "\u5927\u5c0f",
    "Space Used": "\u5df2\u7528\u7a7a\u9593",
    "Space Used / Quota": "\u5df2\u7528\u7a7a\u9593/\u5bb9\u91cf",
    "Star": "\u65b0\u589e\u661f\u6a19",
    "Start date should be earlier than end date.": "\u958b\u59cb\u65e5\u671f\u5fc5\u9808\u6bd4\u7d50\u675f\u65e5\u671f\u65e9\u3002",
    "Status": "\u72c0\u614b",
    "Storage Used": "\u5df2\u7528\u7a7a\u95f4",
    "Submit": "\u63d0\u4ea4",
    "Success": "\u6210\u529f",
    "Successfully changed library password.": "\u8cc7\u6599\u5eab\u5bc6\u78bc\u91cd\u7f6e\u6210\u529f\u3002",
    "Successfully copied %(name)s and %(amount)s other items.": "\u6210\u529f\u8907\u88fd %(name)s \u548c\u5176\u4ed6 %(amount)s \u9805\u689d\u76ee\u3002",
    "Successfully copied %(name)s and 1 other item.": "\u6210\u529f\u8907\u88fd %(name)s \u548c\u53e61\u9805\u689d\u76ee\u3002",
    "Successfully copied %(name)s.": "\u6210\u529f\u8907\u88fd %(name)s\u3002",
    "Successfully deleted %s": "%s \u522a\u9664\u6210\u529f\u3002",
    "Successfully deleted 1 item.": "\u6210\u529f\u522a\u9664 1 \u500b\u9805\u76ee\u3002",
    "Successfully invited %(email).": "\u6210\u529f\u9080\u8acb %(email)",
    "Successfully moved %(name)s and %(amount)s other items.": "\u6210\u529f\u79fb\u52d5 %(name)s \u548c\u5176\u4ed6 %(amount)s \u9805\u689d\u76ee\u3002",
    "Successfully moved %(name)s and 1 other item.": "\u6210\u529f\u79fb\u52d5 %(name)s \u548c\u53e61\u9805\u689d\u76ee\u3002",
    "Successfully moved %(name)s.": "\u6210\u529f\u79fb\u52d5 %(name)s\u3002",
    "Successfully reset password to %(passwd)s for user %(user)s.": "\u6210\u529f\u5c07\u7528\u6236 %(user)s \u7684\u5bc6\u78bc\u91cd\u7f6e\u70ba %(passwd)s\u3002",
    "Successfully restored 1 item.": "\u6210\u529f\u9084\u539f\u4e00\u9805\u3002",
    "Successfully revoke the admin permission of %s": "\u6210\u529f\u53d6\u6d88 %s \u7684\u7ba1\u7406\u6b0a\u9650",
    "Successfully sent to {placeholder}": "\u6210\u529f\u767c\u9001\u7d66 {placeholder}",
    "Successfully set %s as admin.": "\u6210\u529f\u8a2d\u5b9a %s \u70ba\u7ba1\u7406\u54e1\u3002",
    "Successfully set library history.": "\u6210\u529f\u8a2d\u7f6e\u8cc7\u6599\u5eab\u6b77\u53f2\u3002",
    "Successfully transferred the group.": "\u7fa4\u7d44\u8f49\u8b93\u6210\u529f\u3002",
    "Successfully transferred the library.": "\u8cc7\u6599\u5eab\u8f49\u8b93\u6210\u529f\u3002",
    "Successfully unshared library {placeholder}": "\u6210\u529f\u53d6\u6d88\u5171\u4eab\u8cc7\u6599\u5eab {placeholder}",
    "Sync": "\u540c\u6b65",
    "System": "\u7cfb\u7d71\u8cc7\u6599\u5eab",
    "System Admin": "\u7cfb\u7d71\u7ba1\u7406",
    "System Info": "\u7cfb\u7d71\u4fe1\u606f",
    "Tags": "\u6a19\u7c64",
    "Terms and Conditions": "\u8edf\u4ef6\u4f7f\u7528\u689d\u6b3e",
    "Text": "\u6587\u5b57",
    "Text files": "\u6587\u5b57\u6a94\u6848",
    "The URL of the server, like https://seafile.example.com or http://192.168.1.2:8000": "\u4f3a\u670d\u5668URL\uff0c\u6bd4\u5982 https://seafile.example.com \u6216\u8005http://192.168.1.2:8000",
    "The internal URL for downloading/uploading files. Users will not be able to download/upload files if this is not set correctly. If you config Seafile behind Nginx/Apache, it should be SERVICE_URL/seafhttp, like https://seafile.example.com/seafhttp .": "\u4e0b\u8f09/\u4e0a\u50b3\u6a94\u6848\u7684\u5167\u90e8URL\u3002\u5982\u679c\u9019\u500bURL\u932f\u8aa4\uff0c\u7528\u6236\u5c07\u4e0d\u80fd\u4e0b\u8f09/\u4e0a\u50b3\u6a94\u6848\u3002\u5982\u679c\u4f60\u914d\u7f6e\u4e86Nginx / Apache\uff0c\u9019\u500bURL\u7684\u503c\u662f\u201cSERVICE_URL / seafhttp\u201d\uff0c\u6bd4\u5982:https://seafile.example.com/seafhttp \u3002",
    "The least number of characters a download/upload link password should include.": "\u52a0\u5bc6\u4e0a\u50b3/\u4e0b\u8f09\u5916\u93c8\u7684\u6700\u5c0f\u5bc6\u78bc\u9577\u5ea6\u3002",
    "The least number of characters an account password should include.": "\u7528\u6236\u5e33\u6236\u7684\u6700\u5c0f\u5bc6\u78bc\u9577\u5ea6\u3002",
    "The least number of characters an encrypted library password should include.": "\u52a0\u5bc6\u8cc7\u6599\u5eab\u7684\u6700\u5c0f\u5bc6\u78bc\u9577\u5ea6\u3002",
    "The level(1-4) of an account password's strength. For example, '3' means password must have at least 3 of the following: num, upper letter, lower letter and other symbols": "\u7528\u6236\u5e33\u6236\u7684\u5bc6\u78bc\u5f37\u5ea6\u7b49\u7d1a(1-4)\u3002\u6bd4\u5982\uff0c\u5982\u679c\u8a2d\u70ba\u201c3\u201d\uff0c\u5247\u5bc6\u78bc\u5fc5\u9808\u5305\u542b\u6578\u5b57\uff0c\u5927\u5beb\u5b57\u6bcd\u5c0f\u5beb\u5b57\u6bcd\u548c\u5176\u4ed6\u7b26\u865f\u90194\u7a2e\u5b57\u7b26\u4e2d\u76843\u7a2e",
    "The maximum number of failed login attempts before showing CAPTCHA.": "\u7528\u6236\u767b\u5165\u5931\u6557\u5e7e\u6b21\u5f8c\u986f\u793a\u9a57\u8b49\u78bc\u3002",
    "The password will be kept in the server for only 1 hour.": "\u5bc6\u78bc\u5c07\u5728\u4f3a\u670d\u5668\u4e0a\u5132\u5b58\u4e00\u5c0f\u6642\u3002",
    "This library is password protected": "\u8a72\u8cc7\u6599\u5eab\u5df2\u52a0\u5bc6",
    "This operation will not be reverted. Please think twice!": "\u8a72\u64cd\u4f5c\u5c07\u4e0d\u53ef\u5fa9\u539f\u3002\u8acb\u4e09\u601d\uff01",
    "Time": "\u6642\u9593",
    "Tip: 0 means default limit": "\u63d0\u793a: \u8a2d\u5b9a\u70ba0\u8868\u793a\u91cd\u7f6e\u70ba\u9810\u8a2d\u4e0a\u9650",
    "Tip: a snapshot will be generated after modification, which records the library state after the modification.": "\u63d0\u793a\uff1a\u5728\u6bcf\u6b21\u4fee\u6539\u5f8c\u6703\u751f\u6210\u4e00\u500b\u93e1\u50cf\uff0c\u8a18\u9304\u4fee\u6539\u4e4b\u524d\u7684\u76ee\u9304\u72c0\u614b\u3002",
    "Tip: libraries deleted 30 days ago will be cleaned automatically.": "\u63d0\u793a\uff1a30\u5929\u524d\u522a\u9664\u7684\u8cc7\u6599\u5eab\u6703\u88ab\u81ea\u52d5\u6e05\u7a7a\u3002",
    "Tip: you can search by keyword in name.": "\u63d0\u793a\uff1a\u53ef\u4ee5\u7528\u540d\u7a31\u95dc\u9375\u8a5e\u4f86\u641c\u5c0b\u3002",
    "Tools": "\u5de5\u5177",
    "Total Devices": "\u6240\u6709\u7684\u8a2d\u5099",
    "Total Users": "\u7e3d\u7528\u6236",
    "Traffic": "\u6d41\u91cf",
    "Transfer": "\u8f49\u8b93",
    "Transfer Group": "\u8f49\u8b93\u7fa4\u7d44",
    "Transfer Library": "\u8f49\u8b93\u8cc7\u6599\u5eab",
    "Transferred group {group_name} from {user_from} to {user_to}": "\u8f49\u8b93\u7fa4\u7d44 {group_name} \u7531 {user_from} \u5230 {user_to}",
    "Transferred library {library_name} from {user_from} to {user_to}": "\u8f49\u8b93\u8cc7\u6599\u5eab {library_name} \u7531 {user_from} \u5230 {user_to}",
    "Trash": "\u8cc7\u6e90\u56de\u6536\u7b52",
    "Two-Factor Authentication": "\u5169\u6b65\u9a57\u8b49",
    "Two-factor authentication is not enabled for your account. Enable two-factor authentication for enhanced account security.": "\u4f60\u7684\u5e33\u6236\u4e26\u672a\u958b\u59cb\u5169\u6b65\u9a57\u8b49\uff0c\u8acb\u958b\u555f\u5169\u6b65\u9a57\u8b49\u589e\u52a0\u5e33\u6236\u5b89\u5168\u6027\u3002",
    "Type": "\u985e\u578b",
    "Unknown": "\u672a\u77e5",
    "Unlink": "\u65b7\u958b\u9023\u63a5",
    "Unlink device": "\u65b7\u958b\u9023\u63a5\u8a2d\u5099",
    "Unlock": "\u89e3\u9396",
    "Unshare": "\u53d6\u6d88\u5171\u4eab",
    "Unshare Library": "\u53d6\u6d88\u5171\u4eab\u8cc7\u6599\u5eab",
    "Unstar": "\u53d6\u6d88\u661f\u6a19",
    "Update": "\u66f4\u65b0",
    "Update Terms and Conditions": "\u66f4\u65b0\u8edf\u4ef6\u4f7f\u7528\u689d\u6b3e",
    "Upgrade to Pro Edition": "\u5347\u7d1a\u5230\u5c08\u696d\u7248",
    "Upload": "\u4e0a\u50b3",
    "Upload Files": "\u4e0a\u50b3\u6a94\u6848",
    "Upload Folder": "\u4e0a\u50b3\u76ee\u9304",
    "Upload Link": "\u4e0a\u50b3\u9023\u7d50",
    "Upload Links": "\u4e0a\u50b3\u9023\u7d50",
    "Upload file": "\u4e0a\u50b3\u6587\u4ef6",
    "Used:": "\u5df2\u7528\u7a7a\u9593\uff1a",
    "User": "\u7528\u6236",
    "User Permission": "\u7528\u6236\u6b0a\u9650",
    "Username:": "\u7528\u6236\u540d\u7a31:",
    "Users": "\u7528\u6236",
    "Version": "\u7248\u672c",
    "Version Number": "\u7248\u672c\u865f",
    "Video": "\u8996\u983b",
    "View": "\u67e5\u770b",
    "View Snapshot": "\u67e5\u770b\u93e1\u50cf",
    "Virus File": "\u75c5\u6bd2\u6a94\u6848",
    "Virus Scan": "\u6383\u63cf\u75c5\u6bd2",
    "Virus Scan Records": "\u75c5\u6bd2\u6383\u63cf\u8a18\u9304",
    "Visits": "\u700f\u89bd\u6b21\u6578",
    "Wrong password": "\u5bc6\u78bc\u932f\u8aa4",
    "You are not in any groups": "\u4f60\u9084\u6c92\u6709\u5275\u5efa\u6216\u53c3\u52a0\u7fa4\u7d44",
    "You can also add a user as a guest, who will not be allowed to create libraries and groups.": "\u53ef\u4ee5\u65b0\u589e\u4e00\u500b\u201c\u8a2a\u5ba2\u201d\u7528\u6236\uff0c\u201c\u8a2a\u5ba2\u201d\u7528\u6236\u7121\u6cd5\u5efa\u7acb\u8cc7\u6599\u5eab\u548c\u7fa4\u7d44\u3002",
    "You can create a library to organize your files. For example, you can create one for each of your projects. Each library can be synchronized and shared separately.": "\u4f60\u53ef\u4ee5\u65b0\u5efa\u4e00\u500b\u8cc7\u6599\u5eab\u4f86\u7d44\u7e54\u4f60\u7684\u6a94\u6848\u8cc7\u6599\uff0c\u6bd4\u5982\u70ba\u6bcf\u500b\u9805\u76ee\u5efa\u7acb\u4e00\u500b\u8cc7\u6599\u5eab\uff0c\u6bcf\u500b\u8cc7\u6599\u5eab\u53ef\u4ee5\u55ae\u7368\u5730\u540c\u6b65\u548c\u5171\u4eab\u3002",
    "You can share a single folder with a registered user if you don't want to share a whole library.": "\u5982\u679c\u4f60\u4e0d\u60f3\u5171\u4eab\u6574\u500b\u8cc7\u6599\u5eab\uff0c\u4f60\u53ef\u4ee5\u5171\u4eab\u55ae\u500b\u8cc7\u6599\u593e\u7d66\u5df2\u8a3b\u518a\u7684\u7528\u6236\u3002",
    "You can share libraries by clicking the \"New Library\" button above or the \"Share\" icon on your libraries list.": "\u4f60\u53ef\u4ee5\u900f\u904e\u6309\u4e0a\u65b9\u7684\u201c\u65b0\u5efa\u8cc7\u6599\u5eab\u201d\u6309\u9215\u6216\u8cc7\u6599\u5eab\u5217\u8868\u88e1\u7684\u201c\u5171\u4eab\u201d\u5716\u793a\u4f86\u5171\u4eab\u8cc7\u6599\u5eab\u3002",
    "You can use this field at login.": "\u60a8\u53ef\u4ee5\u7528\u8a72\u5b57\u6bb5\u767b\u5165\u3002",
    "You do not have connected devices": "\u4f60\u9084\u6c92\u6709\u9023\u63a5\u7684\u8a2d\u5099",
    "You have not created any libraries": "\u4f60\u9084\u672a\u5efa\u7acb\u8cc7\u6599\u5eab",
    "You have not invited any people.": "\u4f60\u9084\u6c92\u6709\u9080\u8acb\u4efb\u4f55\u4eba\u3002",
    "Your clients (Desktop/Android/iOS) will be listed here.": "\u4f60\u7684\u5ba2\u6236\u7aef (Desktop/Android/iOS) \u5c07\u5728\u9019\u5152\u5217\u51fa\u3002",
    "Your notifications will be sent to this email.": "\u60a8\u7684\u901a\u77e5\u5c07\u767c\u9001\u5230\u8a72\u90f5\u7bb1\u3002",
    "activate after registration": "\u8a3b\u518a\u5f8c\u958b\u901a",
    "all": "\u5168\u90e8",
    "all members": "\u6240\u6709\u6210\u54e1",
    "allow new registrations": "\u5141\u8a31\u7528\u6236\u8a3b\u518a",
    "days": "\u5929",
    "download/upload link password minimum length": "\u4e0a\u50b3/\u4e0b\u8f09\u5916\u93c8\u7684\u6700\u5c0f\u5bc6\u78bc\u9577\u5ea6",
    "file": "\u6a94\u6848",
    "icon": "\u5716\u793a",
    "keep sign in": "\u4fdd\u6301\u767b\u5165",
    "library password minimum length": "\u8cc7\u6599\u5eab\u6700\u5c0f\u5bc6\u78bc\u9577\u5ea6",
    "locked": "\u5df2\u9396\u5b9a",
    "name": "\u540d\u7a31",
    "password minimum length": "\u5bc6\u78bc\u6700\u5c0f\u9577\u5ea6",
    "password strength level": "\u5bc6\u78bc\u5f37\u5ea6\u7b49\u7d1a",
    "send activation email": "\u767c\u9001\u958b\u901a\u90f5\u4ef6",
    "starred": "\u5df2\u52a0\u661f\u6a19",
    "to": "\u5230",
    "unstarred": "\u672a\u52a0\u661f\u6a19",
    "you can also press \u2190 ": "\u53ef\u7528\u65b9\u5411\u9375 \u2190 ",
    "{placeholder} Folder Permission": "{placeholder} \u76ee\u9304\u6b0a\u9650"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "N j, Y, P",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%Y",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%m/%d/%y"
    ],
    "DATE_FORMAT": "N j, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": "0",
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": "0",
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "m/d/Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "P",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));
